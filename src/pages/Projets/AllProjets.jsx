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
} from "antd"
import { HomeOutlined, ThunderboltOutlined } from "@ant-design/icons"
import "tailwindcss/tailwind.css"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import axios from "axios"
import { NavLink } from "react-router-dom"

const { Option } = Select
const { Search } = Input

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
          {/* <div className="flex items-center w-full">
              <Checkbox
                onChange={handleTrendingChange}
                checked={onlyTrending}
              >
                <span className="text-gray-700">
                  Afficher seulement les tendances
                </span>
              </Checkbox>
            </div> */}
        </div>
      </div>
      <div className=" bg-fixed bg-gray-100 py-5">
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <Row gutter={[16, 16]}>
              {loading
                ? Array.from({ length: pageSize }).map((_, index) => (
                    <Col
                      key={index}
                      lg={6}
                      md={12}
                    >
                      <Card>
                        <Skeleton
                          loading={true}
                          active
                        />
                      </Card>
                    </Col>
                  ))
                : paginatedProjects.map((project, index) => {
                    const percent = project.socialBonds
                      ? (
                          (project.socialBondsCollect / project.socialBonds) *
                          100
                        ).toFixed(2)
                      : 0
                    return (
                      <Col
                        key={index}
                        lg={6}
                        md={12}
                        className=" w-full transform hover:scale-105 transition-transform duration-300 my-3"
                      >
                        <NavLink to={`/oneprojet/${project._id}`}>
                          <Card
                            hoverable
                            cover={
                              <div className="w-full h-64 overflow-hidden relative bg-gray-200">
                                <img
                                  alt="Thumb"
                                  src={`${import.meta.env.VITE_URL_IMAGE}${
                                    project.projectImage
                                  }`}
                                  className="absolute top-0 left-0 w-full h-full object-cover"
                                  onError={(e) =>
                                    (e.target.style.display = "none")
                                  } // Hide image if it fails to load
                                />
                                <span className="absolute bg-[#3bcf93] text-white py-1 px-3 rounded-full bottom-0 right-0 m-4 text-xs">
                                  Créé :{" "}
                                  {new Date(
                                    project.createdAt
                                  ).toLocaleDateString()}
                                </span>
                                <span className="absolute bg-[#3bcf93] text-white py-1 px-3 rounded-full bottom-0 left-0 m-4 text-xs">
                                  {project.projectCategory}
                                </span>
                              </div>
                            }
                            className="overflow-hidden rounded-lg shadow-md"
                          >
                            <Card.Meta
                              title={
                                <p
                                  className="text-lg font-semibold text-gray-900 leading-relaxed break-words line-clamp-2 text-justify" // Limite à environ 5 lignes avec TailwindCSS
                                  // style={{ maxHeight: "10rem" }} // Limite à environ 5 lignes
                                >
                                  {project.projectTitle}
                                </p>
                              }
                              description={
                                <p
                                  className="text-sm text-gray-500 leading-relaxed break-words line-clamp-5 text-justify" // Limite à environ 5 lignes avec TailwindCSS
                                  // style={{ maxHeight: "10rem" }} // Limite à environ 5 lignes
                                >
                                  {project.projectDescription}
                                </p>
                              }
                            />

                            <div className="mt-2">
                              <Progress
                                percent={percent}
                                status="active"
                              />
                              <div className="mt-2 flex justify-between">
                                <span className="text-sm ">
                                  Collecté : {project.socialBondsCollect}Sb
                                </span>

                                <span className="text-sm">
                                  Objectif : {project.socialBonds}Sb
                                </span>
                              </div>
                            </div>
                          </Card>
                        </NavLink>
                      </Col>
                    )
                  })}
            </Row>

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
      </div>
      <Footer />
    </>
  )
}

export default AllProjets
