import { useState, useEffect } from "react"
import { Progress, Button } from "antd"
import "animate.css"
import { NavLink } from "react-router-dom"
import axios from "axios"
import SbIcon from "../Social Bonds/SbIcon"

export default function AboutArea() {
  const [topProjects, setTopProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/projects/validated`)
        const sortedProjects = response.data
          .sort((a, b) => b.socialBondsCollect - a.socialBondsCollect)
          .slice(0, 3)
        setTopProjects(sortedProjects)
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="about-area bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Section des causes populaires */}
          <div className="popular-causes">
            <h4 className="text-2xl font-bold mb-6">
              <i className="fas fa-bolt mr-2"></i> Causes populaires
            </h4>
            <div className="flex flex-col space-y-8">
              {topProjects.map((project, index) => (
                <CauseItem
                  key={index}
                  project={project}
                  image={project.projectImage}
                  category={project.projectCategory}
                  title={project.projectTitle}
                  raised={project.socialBondsCollect}
                  goal={project.socialBonds}
                  percent={(
                    (project.socialBondsCollect / project.socialBonds) *
                    100
                  ).toFixed(2)}
                />
              ))}
            </div>
          </div>

          {/* Contenu de la section d'informations */}
          <div className="info lg:pl-8">
            <h5 className="text-lg font-bold mb-4">Qui sommes-nous</h5>
            <h2 className="text-4xl font-bold text-blur mb-4">À propos</h2>
            <h2 className="text-4xl font-bold area-title mb-8">
              La RSE Market Place by Gouvernix
            </h2>
            <p className="mb-4 leading-relaxed">
              Notre plateforme est conçue comme un marché innovant où les
              grandes entreprises peuvent investir dans des projets socialement
              viables, favorisant le développement durable et la transformation
              sociale.
            </p>
            <p className="mb-8 leading-relaxed">
              Nous visons à combler le manque de financements pour des projets
              sociaux en République Démocratique du Congo en facilitant les
              collaborations entre les sponsors et les prestataires sociaux via
              notre plateforme dédiée.
            </p>
            <ul className="flex space-x-8 mb-8">
              <InfoItem
                count="16K"
                label="Plantes protégées"
              />
              <InfoItem
                count="2M Ton"
                label="Eau économisés"
              />
              <InfoItem
                count="7K Sqmi."
                label="Ocean Protégé"
              />
            </ul>
            <NavLink to="/about">
              <Button
                type="primary"
                size="large"
                className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
              >
                En savoir plus
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

// Composant pour les items de cause
function CauseItem({ project, image, category, title, raised, goal, percent }) {
  return (
    <NavLink to={`/oneprojet/${project._id}`}>
      <div className="flex space-x-6 animate__animated animate__fadeIn">
        <div className="w-1/3">
          <img
            src={image}
            alt="Thumb"
            className="rounded-lg object-cover h-full"
          />
        </div>
        <div className="w-2/3">
          <span className="block text-sm text-gray-500">{category}</span>
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <div className="progress-box">
            <p>
              Collecté : {raised}
              <SbIcon color="#ff9800" />{" "}
              <span className="float-right">
                Objectif : {goal}
                <SbIcon color="#52c41a" />
              </span>
            </p>
            <Progress
              percent={percent}
              showInfo={false}
              strokeColor="#3bcf93"
            />
            <span className="block text-sm mt-2">
              Collecte de fonds : {percent}%
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

// Composant pour les items d'informations
function InfoItem({ count, label }) {
  return (
    <li className="text-center animate__animated animate__fadeInUp">
      <h5 className="text-2xl font-bold">{count}</h5>
      <span>{label}</span>
    </li>
  )
}
