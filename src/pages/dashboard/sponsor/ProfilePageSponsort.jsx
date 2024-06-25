
import {
  Layout,
  Menu,
  Breadcrumb,
  Avatar,
  Typography,
  Divider,
  Tag,
  Row,
  Col,
  Card,
  Statistic,
  Space,
  Table,
  Tooltip,
  Button,message
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DollarCircleOutlined,
  ProjectOutlined,
  PieChartOutlined,
  LineChartOutlined,
  GlobalOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Pie, Line } from "@ant-design/charts";
import "tailwindcss/tailwind.css";
import Navbar from "../../../components/Navbars/NavBar";
import Footer2 from "../../../components/Footer"
import Footer from "../../../components/Footer";

import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const { Title, Paragraph } = Typography;
const {Content } = Layout;

const mockProjects = [
  {
    id: 1,
    name: "Projet Alpha",
    description: "Soutien à la communauté locale pour le développement durable.",
    amount: "$1000",
    status: "En cours",
    link: "#",
  },
  {
    id: 2,
    name: "Projet Beta",
    description: "Amélioration des infrastructures éducatives.",
    amount: "$2000",
    status: "Terminé",
    link: "#",
  },
];

const pieConfig = {
  appendPadding: 10,
  data: [
    { type: "Projets Terminés", value: 30 },
    { type: "Projets En Cours", value: 70 },
  ],
  angleField: "value",
  colorField: "type",
  radius: 1,
  label: {
    type: "outer",
    content: "{name} {percentage}",
  },
  interactions: [{ type: "element-active" }],
  color: ["#4caf50", "#2196f3"],
};

const lineConfig = {
  data: [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1500 },
    { date: "Mar", value: 1700 },
    { date: "Apr", value: 2100 },
    { date: "May", value: 2300 },
    { date: "Jun", value: 2500 },
  ],
  xField: "date",
  yField: "value",
  point: {
    size: 5,
    shape: "diamond",
  },
  color: "#4caf50",
};



const ProfilePageSponsort = () => {

  const [projects, setProjects] = useState([])
  const [sponsorStat, setSponsorStat] = useState([])
  const { id } = useParams()
  const [sponsor, setSponsor] = useState([])
  // const [sponsorImage, setSponsorImage] = useState("")
  // const [sponsorSocialBond, setSponsorSocialBond] = useState(0)
   const [totalSocialBondsInvested, setTotalSocialBondsInvested] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const apiUrl = import.meta.env.VITE_API_URL
        const response = await axios.get(`${apiUrl}/getSponsorDetails/${id}`)
        const responseStat =  await axios.get(`${apiUrl}/sponsor-contributions`)
        setSponsorStat(responseStat)
        setSponsor(response.data.Sponsor)
        setProjects(response.data.projects)
        setTotalSocialBondsInvested(response.data.totalInvested)

        // const fetchedProjects = response.data.map((project) => ({
        //   ...project,
        //   status: project.status || "N/A", // Ensure status is defined
        // }))
        // setProjects(fetchedProjects)
        if (response.status === 200 || response.status === 201) {
          // setSponsorName(response.data[0]?.sponsorName || "")
          // setSponsorImage(response.data[0]?.sponsorImage || "")
          // setSponsorSocialBond(response.data[0]?.sponsorSocialBond || 0)
          // setTotalSocialBondsInvested(response.data[0]?.totalSocialBondsInvested || 0)
          
          // console.log("Voici tous pour spons : ",response.data)
        } else {
          message.error(`Erreur lors de la requête: ${response.status}`)
        }
      } catch (error) {
        message.error(`Erreur lors de la requête: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])
  return (
    <div>
      <Navbar/>
      <Content style={{ padding: "0 50px", margin: "16px 0" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="site-layout-content m">
          <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Profile Top */}
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Avatar
                  size={150}
                  src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`}
                />
                <Title level={2} className="text-gray-800">
                  {sponsor.companyName}
                </Title>
                <Paragraph className="text-gray-600">
                  Developer web at Kadea
                </Paragraph>
                <Paragraph className="text-gray-600">Seattle, WA</Paragraph>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#">
                    <GlobalOutlined className="text-gray-600 text-2xl" />
                  </a>
                  <a href="#">
                    <TwitterOutlined className="text-gray-600 text-2xl" />
                  </a>
                  <a href="#">
                    <FacebookOutlined className="text-gray-600 text-2xl" />
                  </a>
                  <a href="#">
                    <LinkedinOutlined className="text-gray-600 text-2xl" />
                  </a>
                  <a href="#">
                    <YoutubeOutlined className="text-gray-600 text-2xl" />
                  </a>
                  <a href="#">
                    <InstagramOutlined className="text-gray-600 text-2xl" />
                  </a>
                </div>
              </div>

              {/* About */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <Title level={3} className="text-gray-800">
                  Mission et Impact Social
                </Title>
                <Paragraph className="text-gray-600">
                 {sponsor.mission}
                </Paragraph>
                <Divider />
                <Title level={3} className="text-gray-800">
                  Exemples d'Impact
                </Title>
                <Paragraph className="text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>{sponsor.impactExamples}</li>
                    {/* <li>2000 enfants bénéficiant de meilleures infrastructures éducatives</li> */}
                    {/* <li>Amélioration des conditions de vie pour 500 familles</li> */}
                  </ul>
                </Paragraph>
              </div>

              {/* Sponsoring */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Title level={3} className="text-gray-800 mb-4">
                  Sponsoring
                </Title>
                <div className="flex flex-wrap justify-center gap-4">
                  {/* Cards d'aperçu */}
                  <Card
                    className="w-full md:w-1/3 text-center hover:shadow-lg transition-all transform hover:scale-105"
                    bordered={false}
                    style={{ backgroundColor: "#f9fafb" }}
                  >
                    <Tooltip title="Capital Social disponible">
                      <Statistic
                        title={
                          <span className="text-gray-600 font-semibold">
                            Capital Social
                          </span>
                        }
                        value={sponsor.budget}
                        prefix={
                          <DollarCircleOutlined
                            style={{ color: "#3bcf93", fontSize: "24px" }}
                          />
                        }
                        valueStyle={{
                          color: "#3bcf93",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      />
                    </Tooltip>
                  </Card>

                  <Card
                    className="w-full md:w-1/3 text-center hover:shadow-lg transition-all transform hover:scale-105"
                    bordered={false}
                    style={{ backgroundColor: "#f9fafb" }}
                  >
                    <Tooltip title="Total des fonds distribués">
                      <Statistic
                        title={
                          <span className="text-gray-600 font-semibold">
                            Fonds Distribués
                          </span>
                        }
                        value={totalSocialBondsInvested}
                        prefix={
                          <DollarCircleOutlined
                            style={{ color: "#3b83cf", fontSize: "24px" }}
                          />
                        }
                        valueStyle={{
                          color: "#3b83cf",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      />
                    </Tooltip>
                  </Card>

                  <Card
                    className="w-full md:w-1/3 text-center hover:shadow-lg transition-all transform hover:scale-105"
                    bordered={false}
                    style={{ backgroundColor: "#f9fafb" }}
                  >
                    <Tooltip title="Nombre de projets sponsorisés">
                      <Statistic
                        title={
                          <span className="text-gray-600 font-semibold">
                            Projets Sponsorisés
                          </span>
                        }
                        value={projects.length}
                        prefix={
                          <ProjectOutlined
                            style={{ color: "#3b83cf", fontSize: "24px" }}
                          />
                        }
                        valueStyle={{
                          color: "#3b83cf",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      />
                    </Tooltip>
                  </Card>
                </div>

              </div>
            </div>

            {/* Section de projets */}
            <Divider orientation="left">
              <Title level={3} className="text-primary">
                Projets Récents
              </Title>
            </Divider>
            <Row gutter={16}>
              {projects.map((project) => (
                <Col span={24} md={12} lg={8} key={project.id}>
                  <Card
                    title={project.project.projectTitle}
                    bordered={false}
                    className="mb-4 hover:shadow-lg transition-shadow duration-300"
                    actions={[
                      <Button
                        // type="primary"
                        key="link"
                        href={project.link}
                        // className="bg-[#4caf50] border-none hover:bg-[#388e3c]"
                      >
                        Voir plus
                      </Button>,
                    ]}
                  >
                    <p>{project.project.projectTitle}</p>
                    <p>{project.project.projectDescription}</p>
                    <p>
                      <strong>Montant :</strong> {project.investedAmount}
                    </p>
                    <p>
                      <strong>Statut :</strong>{" "}
                      <Tag
                        color={project.project.projectFinished ? "#4caf50" : "#2196f3"}
                      >
                         {project.project.projectFinished ? "Déjà fini" : "En cours"}
                      </Tag>
                    </p>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Section des graphiques */}
            <Divider orientation="left">
              <Title level={3} className="text-primary">
                Visualisation des Données
              </Title>
            </Divider>
            <Row gutter={16}>
              <Col span={24} lg={12}>
                <Card
                  title="Répartition des Projets"
                  bordered={false}
                  className="mb-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col span={24} lg={12}>
                <Card
                  title="Évolution des Fonds Distribués"
                  bordered={false}
                  className="mb-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <Line {...lineConfig} />
                </Card>
              </Col>
            </Row>
            
          </div>
        </div>
      </Content>
      <Footer/>
      </div>
  );
};

export default ProfilePageSponsort;
