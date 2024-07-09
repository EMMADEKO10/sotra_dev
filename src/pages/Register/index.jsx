import { useState } from "react";
import InfoPrestataire from "./InfoPrestataire";
import SponsorRegistration from "./SponsorRegistration";
import { Button, Row, Col, Typography, Layout, Card } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import HeaderComponent from "../Login/HeaderComponent";
import FooterComponent from "../Login/FooterComponent";
import "animate.css/animate.min.css";
import "tailwindcss/tailwind.css";

const { Title } = Typography;
const { Content } = Layout;

const FormManager = () => {
  const [activeForm, setActiveForm] = useState(null);

  const showForm = (formType) => setActiveForm(formType);

  return (
    <Layout className="min-h-screen bg-gray-100">
      <HeaderComponent />
      <Content>
        <div
          className="hero-section relative text-center p-16 bg-cover bg-center"
          style={{
            backgroundImage: "url(/sotradonsImage/9.jpg)",
            minHeight: "500px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto z-10">
            <Title level={1} className="text-5xl font-bold text-white mb-8 animate__animated animate__fadeInDown">
              Rejoignez la communauté Sotradons
            </Title>
            <p className="text-xl text-white mb-12 animate__animated animate__fadeInUp">
              Choisissez votre rôle et commencez votre voyage avec nous
            </p>
          </div>
        </div>

        <div className="form-navigation py-16 container mx-auto">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card
                hoverable
                className={`text-center h-full transition-all duration-300 transform hover:scale-105 ${
                  activeForm === "prestataire" ? "border-4 border-blue-500 shadow-xl" : "border border-gray-200"
                }`}
                onClick={() => showForm("prestataire")}
              >
                <UserOutlined className="text-6xl text-blue-500 mb-6" />
                <Title level={2} className="text-blue-700">Prestataire</Title>
                <p className="text-lg mb-6">Inscrivez-vous en tant que prestataire de services</p>
                <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600 border-none px-8">
                  Sélectionner
                </Button>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card
                hoverable
                className={`text-center h-full transition-all duration-300 transform hover:scale-105 ${
                  activeForm === "sponsor" ? "border-4 border-green-500 shadow-xl" : "border border-gray-200"
                }`}
                onClick={() => showForm("sponsor")}
              >
                <TeamOutlined className="text-6xl text-green-500 mb-6" />
                <Title level={2} className="text-green-700">Sponsor</Title>
                <p className="text-lg mb-6">Enregistrez-vous en tant que sponsor de projets</p>
                <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none px-8">
                  Sélectionner
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        {activeForm && (
          <div className="form-content py-16 bg-white">
            <div className="container mx-auto">
              <Card className="shadow-2xl animate__animated animate__fadeIn">
                <Title level={2} className="text-center mb-8 text-3xl">
                  {activeForm === "prestataire" ? "Inscription Prestataire" : "Enregistrement Sponsor"}
                </Title>
                {activeForm === "prestataire" ? <InfoPrestataire /> : <SponsorRegistration />}
              </Card>
            </div>
          </div>
        )}
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default FormManager;