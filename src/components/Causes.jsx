import { useEffect, useState } from 'react';
import { Button, Progress, Skeleton, Col, Row, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import SbIcon from './Social Bonds/SbIcon';

const Causes = () => {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const refreshInterval = 10000; // Intervalle de rafraîchissement en millisecondes (10 secondes)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/projects/validated`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la requête:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour sélectionner 3 projets aléatoires
  const getRandomProjects = () => {
    if (projects.length <= 4) return projects;
    const shuffled = projects.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  useEffect(() => {
    // Mettre à jour les projets affichés au chargement initial
    setDisplayedProjects(getRandomProjects());

    // Mettre à jour les projets affichés à intervalles réguliers
    const interval = setInterval(() => {
      setDisplayedProjects(getRandomProjects());
    }, refreshInterval);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [projects]); // Utiliser `projects` comme dépendance pour mettre à jour les projets affichés

  return (
    <div className="causes-area bg-gray py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h5 className="text-lg text-gray-600 font-semibold mb-2">Nos Initiatives Sociales</h5>
            <h2 className="text-3xl font-bold mb-4">
              Soutenez des projets caritatifs à travers le monde.
            </h2>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <p className="text-gray-700 mb-4">
              Ensemble, nous créons un impact positif en soutenant des causes humanitaires essentielles.
            </p>
            <NavLink to="/allprojets">
              <Button type="primary" className=" py-3 px-6 text-base animate__animated animate__fadeInUp">
                Découvrir plus <i className="fas fa-angle-right ml-2"></i>
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <Row gutter={[16, 16]}>
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Col key={index} lg={8} md={12} sm={24}>
                <Card>
                  <Skeleton loading={true} active />
                </Card>
              </Col>
            ))
          ) : (
            displayedProjects.map((project, index) => {
              const percent = project.socialBonds
                ? ((project.socialBondsCollect / project.socialBonds) * 100).toFixed(2)
                : 0;
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
                                <span 
                                className="absolute bg-[#3bcf93] text-white py-1 px-3 rounded-full bottom-0 left-0 m-4 text-xs">
                                {project.projectCategory}
                              </span>
                              </div>
                            }
                            className="overflow-hidden rounded-lg shadow-md"
                          >
                            <Card.Meta
                              title={
                                <a
                                  href="#"
                                  className="text-lg font-semibold text-gray-900 hover:text-primary"
                                >
                                  {project.projectTitle}
                                </a>
                              }
                              description={
                                <p className="text-sm text-gray-700">
                                  {project.projectDescription}
                                </p>
                              }
                            />
                            <div className="mt-auto pt-4 text-gray-500">
                              <Progress
                                percent={percent}
                                status="active"
                                strokeColor="#3bcf93"
                              />
                              <div className="mt-2 flex justify-between">
                              <span >
                                Collecté : {project.socialBondsCollect}<SbIcon color="#ff9800" />
                              </span>
                                <span>
                                   Objectif : {project.socialBonds}<SbIcon  color="#52c41a" />
                                </span>
                                </div>
                            </div>
                          </Card>
                        </NavLink>
                      </Col>
              );
            })
          )}
        </Row>
      </div>
    </div>
  );
};

export default Causes;
