import { useState, useEffect } from "react"
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  Progress,
  Avatar,
  List,
  Modal,
  message,
} from "antd"
import {
  HomeOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons"
import "tailwindcss/tailwind.css"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import axios from "axios"
import { useParams } from "react-router-dom"
import AddCommentaire from "../Projets/addCommentaireOnProject"
import CommentairesProjet from "../Projets/getCommentaire"
import { motion, AnimatePresence } from "framer-motion"
// import { Modal } from 'antd';

const DonationPage = () => {
  const [project, setProjects] = useState([])
  const { id } = useParams()
  const [customAmount, setCustomAmount] = useState("")
  const [reload, setReload] = useState(false)
  const [reloadComment, setReloadComment] = useState(false)
  const apiUrl = import.meta.env.VITE_API_URL
  const token = localStorage.getItem("token") // Supposez que vous stockez le token sous le nom 'authToken'
  const [modalVisible, setModalVisible] = useState(false)
  const [unauthorizedModalVisible, setUnauthorizedModalVisible] =
    useState(false)
  const [totalCommentaires, setTotalCommentaires] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const ApiUrlImage = import.meta.env.VITE_URL_IMAGE
        console.log("Voci l'api des images : ", ApiUrlImage)
        console.log("Voci l'api des EndPoints : ", apiUrl)

        const response = await axios.get(`${apiUrl}/projects/${id}`)
        console.log("voici la reponse", response.data)
        setProjects(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201 || response.status === 200) {
          // Check for successful registration response
          console.log("Connexion réussie ! :")
          // ---------------------------------------------------------------------------------------

          // ----------------------------------------------------------------------------------
        } else {
          // Handle unsuccessful registration (e.g., display error message)
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error("Erreur de réponse du serveur:", error.response)
        } else {
          // Erreur de configuration ou autre
          console.error("Erreur lors de la requête:", error.message)
        }
      }
    }
    fetchData() // Call the function to fetch data
  }, [id, reload]) // Empty dependency array ensures the effect runs only once

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) { // Vérifie si l'entrée est un nombre valide avec ou sans décimale
      setCustomAmount(value);
    }
  }

  const percent = project.socialBonds
    ? ((project.socialBondsCollect / project.socialBonds) * 100).toFixed(2)
    : 0
  let role = localStorage.getItem("role")

  const handleDonation = async () => {
    console.log("Montant personnalisé: ", customAmount)
    // Ajoutez ici votre logique pour traiter le don avec le montant personnalisé
    if (role !== "sponsor") {
      setUnauthorizedModalVisible(true)
      return
    }
    const formData = new FormData()
    formData.append("Sponsor", "6661ec3d6149744df1e68f30")
    formData.append("projet", id)
    formData.append("montant_reduit", customAmount)

    console.log(" Sponsor ", formData.get("Sponsor"))
    console.log(" projet ", formData.get("projet"))
    console.log(" montant_reduit ", formData.get("montant_reduit"))

    try {
      //Envoyer les données à l'API
      const response = await axios.post(`${apiUrl}/bon`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "X-CSRF-Token": "your-csrf-token", // Ajouter un token CSRF pour la sécurité si nécessaire
        },
      })

      // Simulons une attente de réponse réussie pendant 3 secondes
      // setTimeout(() => {
      setModalVisible(true)
      // },);
      setCustomAmount(''); // Reset the input field
      console.log(response.data)
      // Afficher une notification de succès
      setReload(!reload)
    } catch (error) {
      console.error("Error submitting the form", error)
    }
  }

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      {/* Début Cause Unique */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Contenu Principal */}
            <div className="w-full lg:w-2/3 px-4 mb-10 lg:mb-0">
              <div className="bg-white shadow-lg rounded-lg p-8 items-center ">
                <img
                  src={`${import.meta.env.VITE_URL_IMAGE}${
                    project.projectImage
                  }`}
                  alt="Vignette"
                  className="mb-6 rounded-lg"
                />
                <div className="flex justify-between mb-4 text-gray-600">
                  <div>
                    <ClockCircleOutlined /> <strong>Créé le :</strong> 15 Juil,
                    2020
                  </div>
                  <div>
                    <EnvironmentOutlined /> <strong>Lieu :</strong> Mombasa,
                    Afrique
                  </div>
                </div>
                <h4 className="text-2xl font-semibold mb-4">
                  {project.projectTitle}
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.projectDescription}
                </p>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="mt-4"
                  style={{ backgroundColor: "#3bcf93", borderColor: "#3bcf93" }}
                >
                  Faire un don maintenant
                </Button>
              </div>

              {/* Section des Commentaires */}
              <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
                <h4 className="text-xl font-semibold mb-6">
                  {totalCommentaires} commentaires
                </h4>

                <CommentairesProjet
                  reloadComment={reloadComment}
                  setTotalCommentaires={setTotalCommentaires}
                />
              </div>
              <AddCommentaire
                setReloadComment={setReloadComment}
                reloadComment={reloadComment}
              />
            </div>

            {/* Barre Latérale */}
            <div className="w-full lg:w-1/3 px-4">
              <aside>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <Progress
                    percent={percent}
                    strokeColor="#3bcf93"
                  />
                  <p className="mt-4">
                    {`Collecté : ${project.socialBondsCollect}`}{" "}
                    <span className="float-right">{`Objectif : ${project.socialBonds}`}</span>
                  </p>
                  <span className="text-gray-600">{`Fonds collectés à : ${percent} %`}</span>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <h4 className="text-lg font-semibold mb-4">
                    Sélectionner le montant
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="default"
                      className="form-btn active"
                    >
                      $10
                    </Button>
                    <Button
                      type="default"
                      className="form-btn"
                    >
                      $25
                    </Button>
                    <Button
                      type="default"
                      className="form-btn"
                    >
                      $50
                    </Button>
                    <Button
                      type="default"
                      className="form-btn"
                    >
                      $100
                    </Button>
                  </div>
                  <Input
                    onChange={handleCustomAmountChange}
                    value={customAmount}
                    placeholder="Montant personnalisé"
                    className="mt-4"
                    type="text"
                  />
                  <Button
                    onClick={handleDonation}
                    type="primary"
                    className="mt-4 w-full"
                    style={{
                      backgroundColor: "#3bcf93",
                      borderColor: "#3bcf93",
                    }}
                  >
                    Faire un don maintenant
                  </Button>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
                  <h4 className="text-lg font-semibold mb-4">Dons récents</h4>

                  <DonRecent />
                  <a
                    href="#"
                    className="text-primary hover:underline"
                  >
                    Voir tout <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <p>Donation successful!</p>
      </Modal> */}
      <Modal
        visible={unauthorizedModalVisible}
        onCancel={() => setUnauthorizedModalVisible(false)}
        footer={null}
      >
        <p>
          Vous n'êtes pas autorisé. Vous devez être sponsor pour sponsoriser le
          projet.
        </p>
      </Modal>

      <Modals
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      {/* Fin Cause Unique */}
      <Footer />
    </div>
  )
}
export default DonationPage

// --------------------------------------------------------------------------------------------------------------

const DonRecent = () => {
  const { id } = useParams()
  const [dons, setDons] = useState([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        // const ApiUrlImage = import.meta.env.VITE_URL_IMAGE;
        const response = await axios.get(`${apiUrl}/bon/${id}`)
        console.log("voici la reponse", response.data)
        setDons(response.data)
        // Ajoutez ici la logique pour gérer la réponse de votre backend
        if (response.status === 201 || response.status === 200) {
          // Check for successful registration response
          console.log("Connexion réussie ! :")
          // ---------------------------------------------------------------------------------------
          // -----------------------------------------------------------------------------------
        } else {
          // Handle unsuccessful registration (e.g., display error message)
        }
      } catch (error) {
        if (error.response) {
          // Erreur avec réponse du serveur
          console.error("Erreur de réponse du serveur:", error.response)
        } else {
          // Erreur de configuration ou autre
          console.error("Erreur lors de la requête:", error.message)
        }
      }
    }
    fetchData() // Call the function to fetch data
  }, [id, reload]) // Empty dependency array ensures the effect runs only once
  return (
    <div>
      {dons.map((don) => (
        <div
          key={don._id}
          className="flex items-center mb-6"
        >
          <Avatar
            src="assets/img/100x100.png"
            alt={don.Sponsor.companyName}
          />
          <div className="ml-4">
            <h5 className="text-lg font-semibold">${don.montant_reduit}</h5>
            <ul className="text-gray-600">
              <li>
                <strong>{don.Sponsor.companyName}</strong>
              </li>
              <li>{don.createdAtFormatted}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------------------------------------------

const Modals = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white rounded-lg shadow-lg p-6 z-10"
          >
            <h2 className="text-2xl font-bold mb-4">Félicitations !</h2>
            <p className="text-lg mb-6">Vous avez fait un don avec succès.</p>
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Fermer
            </button>
          </motion.div>

          {/* Boules qui tombent */}
          <motion.div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-yellow-500 rounded-full"
                initial={{ y: -50, x: Math.random() * 100 + "%" }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-red-500 rounded-full"
                initial={{ y: -50, x: Math.random() * 100 + "%" }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-blue-500 rounded-full"
                initial={{ y: -50, x: Math.random() * 100 + "%" }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
