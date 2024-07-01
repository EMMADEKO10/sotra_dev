import { useState } from "react"
import InfoPrestataire from "../prestataire/InfoPrestataire" // Importez votre composant InfoPrestataire
import SponsorRegistration from "../Sponsors/SponsorRegistration" // Importez votre composant SponsorRegistration
import "animate.css/animate.min.css"
import { Button, Row, Col, Typography } from "antd"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import "tailwindcss/tailwind.css"

const { Title } = Typography

const FormManager = () => {
  const [activeForm, setActiveForm] = useState("prestataire") // State pour basculer entre les formulaires

  // Gestion des clics pour afficher les formulaires appropriés
  const showPrestataireForm = () => setActiveForm("prestataire")
  const showSponsorForm = () => setActiveForm("sponsor")

  return (
    <div>
      {/* <Navbar /> */}

      {/* Section Breadcrumb pour le contexte et l’orientation de l'utilisateur */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/9.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px", // Taille minimale pour assurer la visibilité du texte
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items flex justify-center items-center h-full">
            <Row
              justify="center"
              align="middle"
            >
              <Col span={24}>
                <Title
                  level={2}
                  className="text-3xl md:text-4xl font-bold text-white text-center"
                >
                  {activeForm === "prestataire"
                    ? "Inscription des Prestataires"
                    : "Enregistrement des Sponsors"}
                </Title>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Navigation pour basculer entre les formulaires */}
      <div className="form-navigation py-8">
        <div className="container mx-auto text-center">
          <Button
            type={activeForm === "prestataire" ? "primary" : "default"}
            onClick={showPrestataireForm}
          >
            Inscription Prestataire
          </Button>
          <Button
            type={activeForm === "sponsor" ? "primary" : "default"}
            onClick={showSponsorForm}
            className="ml-4"
          >
            Enregistrement Sponsor
          </Button>
        </div>
      </div>

      {/* Affichage conditionnel du formulaire en fonction de l'état */}
      <div className="form-content py-12">
        <div className="container mx-auto">
          {activeForm === "prestataire" ? (
            <InfoPrestataire />
          ) : (
            <SponsorRegistration />
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FormManager
