{/* Section Breadcrumb avec effet parallaxe */}
<div
className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
style={{
  backgroundImage: "url(/sotradonsImage/35.jpg)",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}}
>
<div className="absolute inset-0 bg-black opacity-40"></div>
<div className="relative container mx-auto z-10">
  <div className="breadcrumb-items">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Contactez-nous
    </h2>
    <nav className="text-white">
      <a href="/" className="hover:underline">Accueil</a> &gt; <span>Contactez-nous</span>
    </nav>
  </div>
</div>
</div>

bg-gray-100 py-12
bg-gray-100 py-16

import { BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

// Dans le rendu, juste avant le Footer
<BackTop>
        <div className="flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 active:bg-primary-700 transition-all duration-300 ease-in-out animate-bounce">
          <ArrowUpOutlined className="text-xl" />
        </div>
      </BackTop>

{/* <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                type="primary"
                shape="round"
                size="large"
                className="bg-[#3bcf93] border-none hover:bg-[#2eaf7a] transition-colors duration-300"
              >
                Adhérez à la charte
              </Button>
            </motion.div>
          </div> */}



          const chartePoints = [
            {
              title: "ENGAGEMENT ENVERS LA MISSION",
              content: "Les membres de SOTRADONS s'engagent à soutenir la mission de l'organisation, qui vise à promouvoir la solidarité, la transparence et les dons pour des causes humanitaires.",
              icon: "🎯"
            },
            {
              title: "PERFORMANCE AU TRAVAIL",
              content: "Les membres doivent faire preuve de dévouement, de professionnalisme et de compétence dans l'exécution de leurs responsabilités, contribuant ainsi à la réussite des initiatives de SOTRADONS.",
              icon: "💼"
            },
            {
              title: "INTÉGRITÉ PERSONNELLE",
              content: "L'intégrité personnelle est cruciale. Les membres doivent agir de manière honnête, éthique et respectueuse dans toutes leurs interactions au sein de l'organisation et avec les parties prenantes externes.",
              icon: "🤝"
            },
            {
              title: "FINANCIÈRE TRANSPARENCE",
              content: "Les membres doivent garantir une transparence totale dans la gestion des fonds et des ressources, en fournissant des rapports financiers clairs et réguliers conformes aux normes éthiques et légales.",
              icon: "💰"
            },
            {
              title: "RESPECT DE LA DIVERSITÉ",
              content: "SOTRADONS valorise la diversité. Les membres doivent respecter et promouvoir l'inclusion, en reconnaissant et en appréciant les différences culturelles, sociales et individuelles.",
              icon: "🌈"
            },
            {
              title: "RESPONSABILITÉ ENVIRONNEMENTALE",
              content: "Les membres s'engagent à minimiser leur impact environnemental et à adopter des pratiques responsables, contribuant ainsi à la durabilité des initiatives de SOTRADONS.",
              icon: "🌿"
            },
            {
              title: "COLLABORATION ET ESPRIT D'ÉQUIPE",
              content: "La collaboration est essentielle. Les membres doivent travailler de manière coopérative avec leurs collègues, partenaires et bénévoles pour maximiser l'impact positif des actions de SOTRADONS.",
              icon: "🤗"
            },
            {
              title: "COMMUNICATION TRANSPARENTE",
              content: "La communication ouverte et transparente est encouragée. Les membres doivent partager des informations de manière régulière et honnête avec l'équipe, les partenaires et les donateurs.",
              icon: "📢"
            },
            {
              title: "APPRENTISSAGE CONTINU",
              content: "Les membres doivent chercher à améliorer constamment leurs compétences et connaissances, restant informés sur les meilleures pratiques dans le domaine de la solidarité et des actions humanitaires.",
              icon: "📚"
            },
            {
              title: "ÉVALUATION ET ADAPTATION",
              content: "Les membres doivent participer activement aux processus d'évaluation et d'amélioration continue, contribuant ainsi à l'efficacité globale de SOTRADONS.",
              icon: "📊"
            },
          ];


          <div className="min-h-screen bg-slate-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md relative">




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
  Space
} from "antd"
import { HomeOutlined, ThunderboltOutlined, FileSearchOutlined } from "@ant-design/icons"
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
                      {filteredProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 bg-gray-100 shadow-md rounded-lg max-w-lg mx-auto animate__animated animate__fadeIn">
                  <FileSearchOutlined className="text-primary-500 text-7xl mb-4" />
                  <Title
                    level={4}
                    className="text-gray-700 text-center"
                  >
                    Aucun résultat trouvé
                  </Title>
                  <Text className="text-gray-500 text-center px-4">
                    Il semble que nous n'ayons pas trouvé de résultats
                    correspondant à votre recherche. Essayez de modifier vos
                    critères de recherche.
                  </Text>
                </div>
              )}
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
      <RetourEnHaut/>
      <Footer />
    </>
  )
}

export default AllProjets
