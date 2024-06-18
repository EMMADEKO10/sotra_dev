import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../components/Navbars/NavBar"
import Footer from "../../../components/Footer"
import { Skeleton, Avatar, Card, Typography, Button, Progress, Tooltip } from "antd";
import { EditOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const PrestataireDashboard = () => {
  const [profileData] = useState({
    organizationName: "Organisation XYZ",
    projectsSubmitted: 12,
  });

  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/validProjectPrestataire/${id}`);
        if (response.status === 200) {
          setProjects(response.data.projects);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Skeleton active />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <section className="container mx-auto my-8 bg-white shadow-md rounded-md p-6">
          <div className="flex flex-col md:flex-row items-center mb-6 p-4 bg-gray-50 shadow-sm rounded-md">
            <Avatar size={80} icon={<UserOutlined />} className="mr-4 mb-4 md:mb-0" />
            <div className="flex-1 text-center md:text-left">
              <Title level={2} className="text-2xl text-blue-600 m-0">{profileData.organizationName}</Title>
              <Paragraph className="text-lg text-gray-500">Bienvenue sur votre tableau de bord</Paragraph>
            </div>
            <Button type="primary" icon={<EditOutlined />} className="bg-blue-500 border-none hover:bg-blue-600 focus:bg-blue-700">
              Modifier le profil
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="flex items-center justify-between p-4 bg-blue-50 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center">
                <ProjectOutlined className="text-3xl text-blue-600" />
                <div className="ml-4">
                  <Title level={4} className="m-0 text-blue-700">Projets soumis</Title>
                  <Paragraph className="text-lg text-blue-800">{profileData.projectsSubmitted}</Paragraph>
                </div>
              </div>
            </Card>
          </div>

          <Card title="Vos Projets" className="p-4 bg-white shadow-sm rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const projectProgress = (project.socialBondsCollect / project.socialBonds) * 100;
                return (
                  <NavLink to={`/oneprojet/${project._id}`} key={index} className="no-underline">
                    <div className="bg-white rounded-lg shadow-md p-6 relative transition transform hover:scale-105">
                      <Tooltip title={project.projectValidated ? "Validé" : "Non Validé"} placement="topRight">
                        <div className={`absolute top-2 right-2 h-4 w-4 rounded-full ${project.projectValidated ? "bg-green-500" : "bg-red-500"}`} />
                      </Tooltip>
                      <img src={`${import.meta.env.VITE_URL_IMAGE}${project.projectImage}`} alt={project.projectName} className="w-full h-48 object-cover mb-4 rounded-lg" />
                      <h2 className="text-xl font-semibold mb-2">{project.projectName}</h2>
                      <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Évolution du projet</p>
                          <Progress percent={projectProgress.toFixed(2)} status={project.projectValidated ? "success" : "active"} />
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Montant collecté</p>
                          <p className="text-lg font-bold">{project.socialBondsCollect} sur {project.socialBonds}</p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrestataireDashboard;
