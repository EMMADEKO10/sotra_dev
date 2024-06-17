import React from "react";
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
  LikeOutlined,
  MessageOutlined,
  DollarCircleOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Pie, Line } from "@ant-design/charts";
import "tailwindcss/tailwind.css";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const mockProjects = [
  {
    id: 1,
    name: "Projet Alpha",
    description:
      "Soutien à la communauté locale pour le développement durable.",
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
  radius: 0.8,
  label: {
    type: "outer",
    content: "{name} {percentage}",
  },
  interactions: [{ type: "element-active" }],
  color: ["#3bcf93", "#3b83cf"],
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
  color: "#3bcf93",
};

const SponsorDashboard = () => {
  const columns = [
    {
      title: "Projet",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <a href={record.link} className="text-[#3bcf93] hover:underline">
          {text}
        </a>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
        let color = status === "En cours" ? "#3b83cf" : "#3bcf93";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">Developers</Menu.Item>
          <Menu.Item key="2">Register</Menu.Item>
          <Menu.Item key="3">Login</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Profiles</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-3 gap-4">
              {/* Profile Top */}
              <div className="bg-primary p-4 rounded-lg text-center">
                <Avatar
                  size={150}
                  src="https://avatars.githubusercontent.com/u/101941972?v=4"
                />
                <Title level={2} className="text-white">
                  Criho James
                </Title>
                <Paragraph className="text-white">
                  Developer web at Kadea
                </Paragraph>
                <Paragraph className="text-white">Seattle, WA</Paragraph>
                <div className="flex justify-center mt-4">
                  <a href="#">
                    <i className="fab fa-globe fa-2x text-white mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter fa-2x text-white mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook fa-2x text-white mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin fa-2x text-white mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube fa-2x text-white mx-2"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram fa-2x text-white mx-2"></i>
                  </a>
                </div>
              </div>

              {/* About */}
              <div className="bg-light p-4 rounded-lg">
                <Title level={3} className="text-primary">
                  Mission et Impact Social
                </Title>
                <Paragraph>
                  Notre mission est de soutenir des projets qui favorisent le
                  développement durable et le bien-être social. Nous investissons
                  dans des initiatives qui apportent des solutions tangibles aux
                  problèmes environnementaux et sociaux.
                </Paragraph>
                <Divider />
                <Title level={3} className="text-primary">
                  Exemples d'Impact
                </Title>
                <Paragraph>
                  <ul>
                    <li>3000 arbres plantés dans les zones rurales</li>
                    <li>2000 enfants bénéficiant de meilleures infrastructures éducatives</li>
                    <li>Amélioration des conditions de vie pour 500 familles</li>
                  </ul>
                </Paragraph>
              </div>

              {/* Sponsoring */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Title level={3} className="text-primary mb-4">
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
                        value={5000}
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
                        value={20000}
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
                <Col span={8} key={project.id}>
                  <Card
                    title={project.name}
                    bordered={false}
                    style={{ marginBottom: "16px" }}
                    actions={[
                      <a
                        key="link"
                        href={project.link}
                        className="text-[#3bcf93] hover:underline"
                      >
                        Voir plus
                      </a>,
                    ]}
                  >
                    <p>{project.description}</p>
                    <p>
                      <strong>Montant :</strong> {project.amount}
                    </p>
                    <p>
                      <strong>Statut :</strong>{" "}
                      <Tag color={project.status === "En cours" ? "#3b83cf" : "#3bcf93"}>
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
              <Col span={12}>
                <Card
                  title="Répartition des Projets"
                  bordered={false}
                  style={{ marginBottom: "16px" }}
                >
                  <Pie {...pieConfig} />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Évolution des Fonds Distribués"
                  bordered={false}
                  style={{ marginBottom: "16px" }}
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
            <Table columns={columns} dataSource={mockProjects} rowKey="id" />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2024 Distribution de Social Bonds - Construit avec ❤️
      </Footer>
    </Layout>
  );
};

export default SponsorDashboard;
