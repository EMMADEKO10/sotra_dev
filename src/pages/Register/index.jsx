import { useState } from "react";
import InfoPrestataire from "../prestataire/InfoPrestataire"; // Importez votre composant InfoPrestataire
import SponsorRegistration from "../Sponsors/SponsorRegistration"; // Importez votre composant SponsorRegistration
import { Button, Row, Col, Typography } from "antd";
import Navbar from "../../components/Navbars/NavBar";
import Footer from "../../components/Footer";
import "tailwindcss/tailwind.css";

const { Title } = Typography;

const FormManager = () => {
  const [activeForm, setActiveForm] = useState("prestataire"); // State pour basculer entre les formulaires

  const showPrestataireForm = () => setActiveForm("prestataire");
  const showSponsorForm = () => setActiveForm("sponsor");

  return (
    <div>
      <Navbar />
      
      {/* Section Breadcrumb */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/10.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {activeForm === "prestataire" ? "Inscription Prestataire" : "Enregistrement Sponsor"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons de navigation entre les formulaires */}
      <div className="form-navigation py-8">
        <div className="container mx-auto text-center">
          <Button type={activeForm === "prestataire" ? "primary" : "default"} onClick={showPrestataireForm}>
            Inscription Prestataire
          </Button>
          <Button type={activeForm === "sponsor" ? "primary" : "default"} onClick={showSponsorForm} className="ml-4">
            Enregistrement Sponsor
          </Button>
        </div>
      </div>

      {/* Affichage du formulaire conditionnel */}
      <div className="form-content py-12">
        <div className="container mx-auto">
          {activeForm === "prestataire" ? <InfoPrestataire /> : <SponsorRegistration />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FormManager;
