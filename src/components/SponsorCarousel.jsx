import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { Spin, Typography, Button } from "antd"
import { motion } from "framer-motion"

const { Title, Paragraph } = Typography

const CarouselRow = ({ sponsors, direction }) => {
  const rowRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let animationId
    const animate = () => {
      if (rowRef.current && !isPaused) {
        if (direction === "left") {
          rowRef.current.scrollLeft += 1
          if (rowRef.current.scrollLeft >= rowRef.current.scrollWidth / 2) {
            rowRef.current.scrollLeft = 0
          }
        } else {
          rowRef.current.scrollLeft -= 1
          if (rowRef.current.scrollLeft <= 0) {
            rowRef.current.scrollLeft = rowRef.current.scrollWidth / 2
          }
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [direction, isPaused])

  return (
    <div
      className="carousel-row overflow-hidden"
      ref={rowRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-content flex">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <motion.div
            key={`${sponsor._id}-${index}`}
            className="sponsor-item flex-shrink-0 mx-4"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <NavLink to={`/profilepagesponsort/${sponsor._id}`}>
              <div className="bg-white rounded-xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:shadow-2xl">
                <div
                  className="relative mb-2 overflow-hidden rounded-lg"
                  style={{ paddingBottom: "100%" }}
                >
                  <img
                    src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`}
                    alt={sponsor.companyName}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-800 truncate">
                  {sponsor.companyName}
                </h3>
                <p className="text-xs text-center text-gray-600 mt-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {sponsor.industry}
                </p>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SponsorCarousel = () => {
  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSponsors = async () => {
      setLoading(true)
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/sponsors`)
        setSponsors(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des sponsors:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSponsors()
  }, [])

  const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <div className="sponsor-carousel  bg-gradient-to-b from-gray-50 to-white overflow">
    
    <div className="container mx-auto">
    <div className="text-center mb-12">
        <h4 className="text-xl text-gray-600 font-semibold mb-2">
          Nos Partenaires d'Impact
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Découvrez les principaux contributeurs de nos projets
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Grâce à la générosité de nos sponsors, nous créons des impacts positifs à travers des initiatives sociales innovantes.
        </p>
        <NavLink to="/nossponsorts">
          <Button type="primary" className="py-3 px-6 text-base animate__animated animate__fadeInUp bg-[#3bcf94] hover:bg-[#2eaf7a] border-none">
            Découvrez en plus <i className="fas fa-angle-right ml-2"></i>
          </Button>
        </NavLink>
      </div>

        <CarouselRow
          sponsors={shuffleArray(sponsors)}
          direction="left"
        />
        <CarouselRow
          sponsors={shuffleArray(sponsors)}
          direction="right"
        />
        <CarouselRow
          sponsors={shuffleArray(sponsors)}
          direction="left"
        />
      </div>
    </div>
  )
}

export default SponsorCarousel
