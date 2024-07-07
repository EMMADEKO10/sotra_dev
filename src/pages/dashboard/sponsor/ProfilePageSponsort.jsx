import { Layout, Avatar, Typography, Divider, Tag, Row, Col, Card, Statistic, Tooltip, Button, message, Carousel } from "antd";
import { DollarCircleOutlined, ProjectOutlined, GlobalOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined, InstagramOutlined, EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import { Pie, Line } from "@ant-design/charts";
import "tailwindcss/tailwind.css";


import Navbar from "../../../components/Navbars/NavBar";
import Footer from "../../../components/Footer";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RetourEnHaut from "../../../components/bouton/RetourEnHaut";
import SbIcon from "../../../components/Social Bonds/SbIcon";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;


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

  const iconSize = 24

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
    <div className="min-h-screen flex flex-col bg-gray-100">
    <Navbar />
    <Content className="flex-grow py-12 px-2 sm:px-6 lg:px-8 bg-gray">
      <div className="max-w-7xl mx-auto ">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Profile */}
            <div className="bg-gradient-to-br from-blue-500 to-[#3bcf93] p-8 rounded-2xl text-center text-white">
              <Avatar
                size={180}
                src={`${import.meta.env.VITE_URL_IMAGE}${sponsor.logo}`}
                className="mb-6 border-4 border-white shadow-lg"
              />
              <Title level={2} className="text-white mb-2 font-bold">
                {sponsor.companyName}
              </Title>
              <Paragraph className="text-blue-100 text-lg mb-1">
              {sponsor.title}
              </Paragraph>
              <Paragraph className="text-blue-100 text-lg mb-6">{sponsor.location}</Paragraph>
              <div className="flex justify-center space-x-4">
                {[GlobalOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined, YoutubeOutlined, InstagramOutlined].map((Icon, index) => (
                  <a key={index} href="#" className="text-white hover:text-blue-200 transition-colors">
                    <Icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
              <Title level={3} className="text-gray-800 mb-4 font-bold">
                Mission et Impact Social
              </Title>
              <Paragraph className="text-gray-600 text-lg mb-6 leading-relaxed">
                {sponsor.mission}
              </Paragraph>
              <Divider className="my-6" />
              <Title level={3} className="text-gray-800 mb-4 font-bold">
                Exemples d'Impact
              </Title>
              <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
                <li>{sponsor.impactExamples}</li>
              </ul>
            </div>

            {/* Sponsoring */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
              <Title level={3} className="text-gray-800 mb-6 font-bold">
                Sponsoring
              </Title>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Capital Social", value: sponsor.budget, color: "#52c41a", icon: SbIcon },
                  { title: "Fonds Distribués", value: totalSocialBondsInvested, color: "#ff9800", icon: SbIcon },
                  { title: "Projets Sponsorisés", value: projects.length, color: "#3b83cf", icon: ProjectOutlined },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-all transform hover:scale-105 bg-white"
                    bordered={false}
                  >
                    <Tooltip title={`Total ${item.title}`}>
                      <Statistic
                        title={<span className="text-gray-600 font-semibold text-lg">{item.title}</span>}
                        value={item.value}
                        prefix={<item.icon style={{ color: item.color, fontSize: "28px" }} />} 
                        valueStyle={{
                          color: item.color,
                          fontSize: "28px",
                          fontWeight: "bold",
                        }}
                      />
                    </Tooltip>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* <SbIcon color="#ff9800" /> */}

          {/* Section des graphiques */}
          <div className="p-8">
            {/* <Title level={2} className="text-gray-800 mb-8 font-bold text-center">
              Visualisation des Données
            </Title> */}
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card
                  title={<Text strong className="text-lg">Répartition des Projets</Text>}
                  bordered={false}
                  className="h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card
                  title={<Text strong className="text-lg">Évolution des Fonds Distribués</Text>}
                  bordered={false}
                  className="h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Line {...lineConfig} />
                </Card>
              </Col>
            </Row>
          </div>

          {/* Section de projets */}
          <div className="p-8 bg-gray-50">
            <Title level={2} className="text-gray-800 mb-8 font-bold text-center">
              Projets Récents
            </Title>
            <Row gutter={[24, 24]}>
              {projects.map((project) => (
                <Col xs={24} sm={12} lg={8} key={project.id}>
                  <Card
                    hoverable
                    className="h-full overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105"
                    cover={
                      <div className="h-48 bg-gradient-to-r from-gray-500 to-orange-300 flex items-center justify-center text-center p">
                        <Text className="text-2xl font-bold text-white ">{project.project.projectTitle}</Text>
                      </div>
                    }
                  >
                    <Paragraph ellipsis={{ rows: 3 }} className="mb-4 text-gray-600">
                      {project.project.projectDescription}
                    </Paragraph>
                    <Paragraph className="mb-2">
                      <span strong>Montant :</span> <span className="text-blue-600">{project.investedAmount}<SbIcon color="#ff9800" /></span>
                    </Paragraph>
                    <Paragraph>
                      <Text strong>Statut :</Text>{" "}
                      <Tag
                        color={project.project.projectFinished ? "#52c41a" : "#ff9800"}
                        className="text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {project.project.projectFinished ? "Terminé" : "En cours"}
                      </Tag>
                    </Paragraph>
                    <button type="primary" href={project.link} className="mt-4 w-full bg-orange-300 hover:bg-orange-300">
                      Voir plus
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Content>

    <RetourEnHaut/>
    <Footer />
  </div>
);
};

export default ProfilePageSponsort;