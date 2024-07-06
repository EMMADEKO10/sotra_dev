import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import { NavLink } from "react-router-dom"
import { Table, Typography, Divider, Space, Button, Badge } from "antd"
import ClassementSponsort from "../dashboard/sponsor/ClassementSponsort"
import SponsorMonthlyContributions from "../../pages/dashboard/sponsor/graphiques"
import { Input, Spin } from "antd"
import { SearchOutlined, FileSearchOutlined } from "@ant-design/icons"
import "animate.css"
import { motion, useInView } from "framer-motion"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"
// import SponsorRankingPage from "../dashboard/sponsor/graphiques"

const { Title, Text } = Typography

const { Search } = Input

const NosSponsorts = () => {
  const [sponsors, setSponsors] = useState([])
  const [filteredSponsors, setFilteredSponsors] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/sponsors`)
        setSponsors(response.data)
        setFilteredSponsors(response.data)
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    filterSponsors(value)
  }

  const filterSponsors = (value) => {
    const filtered = sponsors.filter((sponsor) =>
      sponsor.companyName.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredSponsors(filtered)
  }

  return (
    <>
      <Navbar />

      {/* Section Breadcrumb avec effet parallaxe */}
      <div
        className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/10.jpg)",
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
              Nos sponsors
            </h2>
            <nav className="text-white">
              <a
                href="/"
                className="hover:underline"
              >
                Accueil
              </a>{" "}
              &gt; <span>Nos sponsors</span>
            </nav>
          </div>
        </div>
      </div>


      {/* Sponsor Section */}
       
      <div className="volunteer-area bg-gray-100 py-16">
        <div className="container mx-auto">

       

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title
                level={4}
                className="text-lg text-gray-600 font-semibold mb-2"
              >
                Nos Partenaires d'Impact
              </Title>
              <Title
                level={2}
                className="font-bold mb-4 text-4xl"
              >
                Découvrez les principaux contributeurs de nos projets.
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Grâce à la générosité de nos sponsors, nous créons des impacts
                positifs à travers des initiatives sociales innovantes. Leur
                soutien est essentiel pour réaliser notre mission et faire une
                différence dans la vie des gens.
              </p>
            </motion.div>
          </div>
          {/* Champ de recherche */}
          <div className="container mx-auto mt-8 mb-6">
            <div className="max-w-md mx-auto">
              <Search
                placeholder="Rechercher un sponsor"
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onChange={handleSearchChange}
                value={searchTerm}
                className="shadow-lg"
              />
            </div>
          </div>

          {/* Grid des sponsors */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 py-12">
              {filteredSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <NavLink
                    to={`/profilepagesponsort/${sponsor._id}`}
                    className="block h-full"
                  >
                    <div className="relative group">
                      <img
                        src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`}
                        alt="Sponsor Logo"
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-semibold">
                          Voir le profil
                        </span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-bold truncate">
                        {sponsor.companyName}
                      </h4>
                      <span className="text-gray-500 text-sm">
                        {sponsor.industry}
                      </span>
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          )}
          {filteredSponsors.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 bg-gray-100 shadow-md rounded-lg max-w-lg mx-auto animate__animated animate__fadeIn">
              <FileSearchOutlined className="text-primary-500 text-7xl mb-4" />
              <Title
                level={4}
                className="text-gray-700 text-center"
              >
                Aucun résultat trouvé
              </Title>
              <Text className="text-gray-500 text-center px-4">
                Il semble que nous n'ayons pas trouvé de résultats correspondant
                à votre recherche. Essayez de modifier vos critères de
                recherche.
              </Text>
              <Button
                type="primary"
                className="mt-6"
                onClick={() => window.location.reload()} // Exemple d'action, peut être adapté
              >
                Réessayer
              </Button>
            </div>
          )}
          <SponsorMonthlyContributions />
          <ClassementSponsort />
        </div>
      </div>
      <RetourEnHaut />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default NosSponsorts
