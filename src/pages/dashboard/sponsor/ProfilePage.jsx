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
  Button,
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

const columns = [
  {
    title: "Projet",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <a href={record.link} className="text-[#4caf50] hover:underline">
        {text}
      </a>
    ),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text) => <Tooltip title={text}>{text}</Tooltip>,
  },
  {
    title: "Montant",
    dataIndex: "amount",
    key: "amount",
    align: "right",
  },
  {
    title: "Statut",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = status === "En cours" ? "#2196f3" : "#4caf50";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
];

const ProfilePageSponsort = () => {
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
                  src="https://avatars.githubusercontent.com/u/101941972?v=4"
                />
                <Title level={2} className="text-gray-800">
                  Criho James
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
                  Notre mission est de soutenir des projets qui favorisent le
                  développement durable et le bien-être social. Nous investissons
                  dans des initiatives qui apportent des solutions tangibles aux
                  problèmes environnementaux et sociaux.
                </Paragraph>
                <Divider />
                <Title level={3} className="text-gray-800">
                  Exemples d'Impact
                </Title>
                <Paragraph className="text-gray-600">
                  <ul className="list-disc list-inside">
                    <li>3000 arbres plantés dans les zones rurales</li>
                    <li>2000 enfants bénéficiant de meilleures infrastructures éducatives</li>
                    <li>Amélioration des conditions de vie pour 500 familles</li>
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
                        value={500}
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
                        value={200}
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
                        value={10}
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
              {mockProjects.map((project) => (
                <Col span={24} md={12} lg={8} key={project.id}>
                  <Card
                    title={project.name}
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
                    <p>{project.description}</p>
                    <p>
                      <strong>Montant :</strong> {project.amount}
                    </p>
                    <p>
                      <strong>Statut :</strong>{" "}
                      <Tag
                        color={
                          project.status === "En cours" ? "#2196f3" : "#4caf50"
                        }
                      >
                        {project.status}
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

            {/* Tableau de projets */}
            <Divider orientation="left">
              <Title level={3} className="text-primary">
                Détails des Projets
              </Title>
            </Divider>
            <Table
              columns={columns}
              dataSource={mockProjects}
              rowKey="id"
              className="bg-white shadow-md rounded-lg"
            />
          </div>
        </div>
      </Content>
      <Footer/>
      </div>
  );
};

export default ProfilePageSponsort;
