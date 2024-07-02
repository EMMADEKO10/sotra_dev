import { useState, useEffect } from "react"
import {
  Breadcrumb,
  Card,
  Col,
  Progress,
  Row,
  Pagination,
  Select,
  Input,
  Checkbox,
  Skeleton,
  Typography,
  Space,
} from "antd"
import {
  HomeOutlined,
  ThunderboltOutlined,
  FileSearchOutlined,
} from "@ant-design/icons"
import "tailwindcss/tailwind.css"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import axios from "axios"
import { NavLink } from "react-router-dom"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"

const { Option } = Select
const { Search } = Input
const { Title, Text } = Typography

const AllProjets = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [onlyTrending, setOnlyTrending] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const pageSize = 20

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (value) => {
    setSelectedCategory(value)
    setCurrentPage(1)
  }

  const handleTrendingChange = (e) => {
    setOnlyTrending(e.target.checked)
    setCurrentPage(1)
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.projectTitle &&
      project.projectTitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? project.projectCategory === selectedCategory
      : true
    const matchesTrending = onlyTrending ? project.trend : true
    return matchesSearch && matchesCategory && matchesTrending
  })

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/projects/validated`)
        setProjects(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      {/* Section Breadcrumb avec effet parallaxe */}
      <div
        className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/31.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projets
            </h2>
            <nav className="text-white">
              <a
                href="/"
                className="hover:underline"
              >
                Accueil
              </a>{" "}
              &gt; <span>Projets</span>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="flex items-center w-full">
            <Search
              placeholder="Rechercher par titre de projet"
              onChange={handleSearch} // Changed to onChange
              className="w-full"
              value={searchTerm} // Keep the input controlled
              enterButton
            />
          </div>
          <div className="flex items-center w-full">
            <Select
              placeholder="Sélectionnez une catégorie"
              onChange={handleCategoryChange}
              className="w-full"
              style={{ borderRadius: "4px" }}
            >
              <Option value="">Toutes les catégories</Option>
              <Option value="Éducation">Éducation et formation</Option>
              <Option value="Santé">Santé et bien-être</Option>
              <Option value="Logement">Logement et infrastructures</Option>
              <Option value="Emploi">Emploi et développement économique</Option>
              <Option value="Protection de l'enfance">
                Protection de l'enfance et des personnes vulnérables
              </Option>
              <Option value="Environnement">
                Environnement et développement durable
              </Option>
              <Option value="Culture">Culture et loisirs</Option>
              <Option value="Justice sociale">
                Justice sociale et droits de l'homme
              </Option>
              <Option value="Sécurité alimentaire">Sécurité alimentaire</Option>
              <Option value="Cohésion sociale">
                Intégration et cohésion sociale
              </Option>
              <Option value="Sécurité communautaire">
                Prévention de la violence et sécurité communautaire
              </Option>
              <Option value="Autonomisation des femmes">
                Autonomisation des femmes
              </Option>
              <Option value="Immigration">
                Aide aux réfugiés et aux migrants
              </Option>
              <Option value="Soutien aux personnes handicapées">
                Soutien aux personnes handicapées
              </Option>
              <Option value="Paix et réconciliation">
                Promotion de la paix et de la réconciliation
              </Option>
              <Option value="Assainissement">
                Accès à l'eau potable et assainissement
              </Option>
              <Option value="Patrimoine culturel">
                Préservation du patrimoine culturel
              </Option>
              <Option value="Toxicomanie">Lutte contre la toxicomanie</Option>
              <Option value="Numériques">
                Formation en compétences numériques
              </Option>
              <Option value="Sensibilisation">
                Sensibilisation et éducation environnementale
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <div className=" bg-fixed bg-gray-100 py-5">
        <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
  <Row gutter={[16, 16]}>
    {loading
      ? Array.from({ length: pageSize }).map((_, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card className="h-full">
              <Skeleton.Image className="w-full h-48" active />
              <Skeleton active paragraph={{ rows: 3 }} />
            </Card>
          </Col>
        ))
      : paginatedProjects.map((project, index) => {
          const percent = project.socialBonds
            ? ((project.socialBondsCollect / project.socialBonds) * 100).toFixed(2)
            : 0;
          return (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <NavLink to={`/oneprojet/${project._id}`}>
                <Card
                  hoverable
                  cover={
                    <div className="relative pt-[56.25%] bg-gray-200 overflow-hidden">
                      <img
                        alt="Thumb"
                        src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <span className="absolute bg-[#3bcf93] text-white py-1 px-3 rounded-full bottom-2 right-2 text-xs">
                        Créé : {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                      <span className="absolute bg-[#3bcf93] text-white py-1 px-3 rounded-full bottom-2 left-2 text-xs">
                        {project.projectCategory}
                      </span>
                    </div>
                  }
                  className="h-full flex flex-col shadow-md rounded-lg overflow-hidden"
                >
                  <Card.Meta
                    title={
                      <p className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                        {project.projectTitle}
                      </p>
                    }
                    description={
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                        {project.projectDescription}
                      </p>
                    }
                  />
                  <div className="mt-auto pt-4">
                    <Progress percent={percent} status="active" />
                    <div className="mt-2 flex justify-between text-xs sm:text-sm">
                      <span>Collecté : {project.socialBondsCollect}Sb</span>
                      <span>Objectif : {project.socialBonds}Sb</span>
                    </div>
                  </div>
                </Card>
              </NavLink>
            </Col>
          );
        })}
  </Row>
  {!loading && filteredProjects.length === 0 && (
    <div className="flex flex-col items-center justify-center py-12 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-8 animate__animated animate__fadeIn">
      <FileSearchOutlined className="text-primary-500 text-5xl sm:text-7xl mb-4" />
      <Title level={4} className="text-gray-700 text-center">
        Aucun résultat trouvé
      </Title>
      <Text className="text-gray-500 text-center px-4">
        Il semble que nous n'ayons pas trouvé de résultats correspondant à votre recherche. Essayez de modifier vos critères de recherche.
      </Text>
    </div>
  )}
</div>
            <div className="text-center mt-8">
              <Pagination
                current={currentPage}
                total={filteredProjects.length}
                pageSize={pageSize}
                onChange={handleChangePage}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      <RetourEnHaut />
      <Footer />
    </>
  )
}

export default AllProjets
