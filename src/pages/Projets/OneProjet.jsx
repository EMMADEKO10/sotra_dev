import React, { useState, useEffect, useCallback } from "react"
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  Progress,
  Avatar,
  List,
  Modal,
  InputNumber,
  message,
} from "antd"
import {
  HomeOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { useParams } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import "tailwindcss/tailwind.css"

import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import AddCommentaire from "../Projets/addCommentaireOnProject"
import CommentairesProjet from "../Projets/getCommentaire"
import SbIcon from "../../components/Social Bonds/SbIcon"

const DonationPage = () => {
  const [project, setProject] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [reload, setReload] = useState(false)
  const [reloadComment, setReloadComment] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [unauthorizedModalVisible, setUnauthorizedModalVisible] =
    useState(false)
  const [totalCommentaires, setTotalCommentaires] = useState(0)
  const { id } = useParams()
  const apiUrl = import.meta.env.VITE_API_URL
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  const fetchProject = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/projects/${id}`)
      setProject(response.data)
      console.log(response)
    } catch (error) {
      console.error("Erreur lors de la récupération du projet:", error)
      message.error("Impossible de charger les détails du projet")
    }
  }, [apiUrl, id])

  useEffect(() => {
    fetchProject()
  }, [fetchProject, reload])

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value)
    }
  }

  const handleDonation = async () => {
    if (role !== "sponsor") {
      setUnauthorizedModalVisible(true)
      return
    }

    try {
      const formData = new FormData()
      formData.append("Sponsor", "6661ec3d6149744df1e68f30")
      formData.append("projet", id)
      formData.append("montant_reduit", customAmount)

      await axios.post(`${apiUrl}/bon`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })

      setModalVisible(true)
      setCustomAmount("")
      setReload((prev) => !prev)
      message.success("Don effectué avec succès !")
    } catch (error) {
      console.error("Erreur lors de la soumission du don", error)
      message.error("Échec du don. Veuillez réessayer.")
    }
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        Chargement...
      </div>
    )
  }

  const percent = project.socialBonds
    ? ((project.socialBondsCollect / project.socialBonds) * 100).toFixed(2)
    : 0

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container ">
        <Breadcrumb className="mb-8">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Projets</Breadcrumb.Item>
          <Breadcrumb.Item>{project.projectTitle}</Breadcrumb.Item>
        </Breadcrumb>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-10 lg:mb-0">
            <ProjectDetails project={project} />

            <CommentSection
              totalCommentaires={totalCommentaires}
              setTotalCommentaires={setTotalCommentaires}
              reloadComment={reloadComment}
              setReloadComment={setReloadComment}
            />
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <DonationSidebar
              project={project}
              customAmount={customAmount}
              handleCustomAmountChange={handleCustomAmountChange}
              handleDonation={handleDonation}
              percent={percent}
            />
          </div>
        </div>
      </main>
      <Footer />
      <DonationModal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <UnauthorizedModal
        isOpen={unauthorizedModalVisible}
        onClose={() => setUnauthorizedModalVisible(false)}
      />
    </div>
  )
}


const ProjectDetails = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative h-64 sm:h-80 md:h-96">
      <img
        src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
        alt={project.projectTitle}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <h1 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white break-words">
        {project.projectTitle}
      </h1>
    </div>

    <div className="p-6">
      <div className="flex flex-wrap justify-between mb-6 text-sm sm:text-base text-gray-600">
        <div className="flex items-center mb-2 sm:mb-0">
          <ClockCircleOutlined className="mr-2 text-blue-500" />
          <span>
            <strong>Créé le :</strong>{" "}
            {new Date(project.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center">
          <UserOutlined className="mr-2 text-green-500" />
          <span>
            <strong>Organisation :</strong>{" "}
            {project.prestataire.organizationName}
          </span>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-8 break-words">
        {project.projectDescription}
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Documents du projet
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.supportingDocuments && (
            <DocumentCard
              title="Détails sur le projet"
              icon="📄"
              color="gray" // Changer en gris
              href={`${import.meta.env.VITE_URL_IMAGE}${
                project.supportingDocuments
              }`}
            />
          )}
          {project.projectBudgetDetails && (
            <DocumentCard
              title="Budget du projet"
              icon="📄"
              color="gray" // Changer en gris
              href={`${import.meta.env.VITE_URL_IMAGE}${
                project.projectBudgetDetails
              }`}
            />
          )}
          {project.projectProposal && (
            <DocumentCard
              title="Proposition du projet"
              icon="📄"
              color="gray" // Changer en gris
              href={`${import.meta.env.VITE_URL_IMAGE}${
                project.projectProposal
              }`}
            />
          )}
        </div>
      </div>
    </div>
  </div>
)

const DocumentCard = ({ title, icon, color, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-3 bg-white border border-${color}-200  rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md`}
  >
    <span className="text-2xl mr-3">{icon}</span>
    <div>
      <span className={`text-${color}-500 font-semibold text-sm sm:text-base `}>
        {title}
      </span>
      {/* <p className={`text-${color}-600 text-xs sm:text-sm`}>Cliquez pour télécharger</p> */}
    </div>
  </a>
)

const CommentSection = ({
  totalCommentaires,
  setTotalCommentaires,
  reloadComment,
  setReloadComment,
}) => (
  <div className="bg-white shadow-lg rounded-lg p-8 overflow-hidden">
    <h2 className="text-2xl font-semibold mb-6">
      {totalCommentaires} commentaires
    </h2>
    <div className="max-h-96 overflow-y-auto mb-6">
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
)

const DonationSidebar = ({
  project,
  customAmount,
  handleCustomAmountChange,
  handleDonation,
  percent,
}) => (
  <aside>
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <Progress
        percent={percent}
        strokeColor="#3bcf93"
        className="mb-4"
      />
      <p className="text-lg font-semibold mb-2 flex justify-between">
        <span className="truncate">
          Collecté : {project.socialBondsCollect}
          <SbIcon color="#ff9800"/>
        </span>
        <span className="truncate">
          Objectif : {project.socialBonds}
          <SbIcon color="#52c41a" />
        </span>
      </p>
      <p className="text-gray-600">Fonds collectés à : {percent}%</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <h3 className="text-xl font-semibold mb-4">Faire un don</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[0.5, 1, 5, 10].map((amount) => (
          <button
            key={amount}
            onClick={() =>
              handleCustomAmountChange({ target: { value: amount.toString() } })
            }
            className={`w-full ${
              customAmount === amount.toString()
                ? "bg-[#ff9800] text-white"
                : "bg-gray-200"
            } hover:bg-primary`}
          >
            {amount}
            {/* <SbIcon color="#374151" /> */}
          </button>
        ))}
      </div>
      <Input
        min={0}
        step={0.001} // Définissez le pas pour permettre les décimales jusqu'à trois chiffres
        formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={(value) => value.replace(/Sb\s?|(,*)/g, "")}
        precision={3} // Définissez la précision à 3 décimales
                    style={{ width: "100%" }}
                    prefix={
                    <SbIcon size={32} color="#52c41a" />}
        value={customAmount}
        onChange={handleCustomAmountChange}
        placeholder="Montant personnalisé"
        className="mb-4 text-600"
      />
      <Button
        onClick={handleDonation}
        type="primary"
        className="w-full h-12 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        style={{
          backgroundColor: "#3bcf93",
          borderColor: "#3bcf93",
        }}
      >
        Faire un don maintenant
      </Button>
    </div>
    <RecentDonations projectId={project._id} />
  </aside>
)

const RecentDonations = ({ projectId }) => {
  const [dons, setDons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5 // Number of items per page

  useEffect(() => {
    const fetchDons = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/bon/${projectId}`)
        console.log(response.data)
        setDons(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des dons récents:", error)
      }
    }
    fetchDons()
  }, [projectId])

  const totalPages = Math.ceil(dons.length / itemsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const selectedDons = dons.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
      <h3 className="text-xl font-semibold mb-4">Dons récents</h3>
      <List
        dataSource={selectedDons}
        renderItem={(don) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            key={don._id}
            className="flex items-center mb-4 p-4 border rounded-md shadow-sm"
          >
            <Avatar
              src={`${import.meta.env.VITE_URL_IMAGE}${don.Sponsor.logo}`}
              className="mr-4"
              size="large"
              alt={`${import.meta.env.VITE_URL_IMAGE}${don.Sponsor.logo}`}
            />
            <div className="flex-grow min-w-0">
              <p className="font-semibold truncate text-lg flex items-center">
                <span className="mr-2 text-green-500"></span>
                {don.montant_reduit}<SbIcon color="#ff9800" />
              </p>
              <p className="text-sm text-gray-600 truncate">
                {don.Sponsor.companyName}
              </p>
              <p className="text-xs text-gray-500">
                {/* {new Date(don.createdAt).toLocaleDateString()} */}
                {don.createdAtFormatted}
              </p>
            </div>
          </motion.div>
        )}
      />
      <div className="flex justify-between mt-4">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Précédent
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Suivant
        </Button>
      </div>
    </div>
  )
}

const DonationModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg p-8 max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-4">Merci pour votre don !</h2>
          <p className="mb-6">Votre générosité fait une réelle différence.</p>
          <Button
            onClick={onClose}
            type="primary"
            className="w-full"
          >
            Fermer
          </Button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const UnauthorizedModal = ({ isOpen, onClose }) => (
  <Modal
    visible={isOpen}
    onCancel={onClose}
    footer={null}
    className="rounded-lg overflow-hidden"
    bodyStyle={{ maxHeight: "80vh", overflowY: "auto" }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Action non autorisée</h3>
      <p className="mb-6">
        Vous devez être sponsor pour faire un don à ce projet.
      </p>
      <Button
        onClick={onClose}
        type="primary"
        className="w-full"
      >
        Compris
      </Button>
    </div>
  </Modal>
)

export default DonationPage
