import { useState } from "react";
import InfoPrestataire from "./InfoPrestataire";
import SponsorRegistration from "./SponsorRegistration";
import "animate.css/animate.min.css";
import { Button, Row, Col, Typography, Layout, Card } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";
import HeaderComponent from "../Login/HeaderComponent";
import FooterComponent from "../Login/FooterComponent";

const { Title } = Typography;
const { Content } = Layout;

const FormManager = () => {
  const [activeForm, setActiveForm] = useState("prestataire");

  const showPrestataireForm = () => setActiveForm("prestataire");
  const showSponsorForm = () => setActiveForm("sponsor");

  return (
    <Layout className="layout-default min-h-screen">
      <HeaderComponent />
      <Content>
        <div
          className="hero-section relative text-center shadow-lg bg-fixed p-16 bg-cover bg-center"
          style={{
            backgroundImage: "url(/sotradonsImage/9.jpg)",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto z-10">
            <Title level={1} className="text-4xl md:text-5xl font-bold text-white mb-8 animate__animated animate__fadeInDown">
              Rejoignez la communauté Sotradons
            </Title>
            <p className="text-xl text-white mb-8 animate__animated animate__fadeInUp">
              Choisissez votre rôle et commencez votre voyage avec nous
            </p>
          </div>
        </div>

        <div className="form-navigation py-12 bg-gray-100">
          <div className="container mx-auto">
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={10} lg={8}>
                <Card
                  hoverable
                  className={`text-center h-full transition-all duration-300 ${
                    activeForm === "prestataire" ? "border-blue-500 shadow-lg" : ""
                  }`}
                  onClick={showPrestataireForm}
                >
                  <UserOutlined className="text-4xl text-blue-500 mb-4" />
                  <Title level={3}>Prestataire</Title>
                  <p>Inscrivez-vous en tant que prestataire de services</p>
                  <Button type="primary" className="mt-4" size="large">
                    Sélectionner
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={10} lg={8}>
                <Card
                  hoverable
                  className={`text-center h-full transition-all duration-300 ${
                    activeForm === "sponsor" ? "border-green-500 shadow-lg" : ""
                  }`}
                  onClick={showSponsorForm}
                >
                  <TeamOutlined className="text-4xl text-green-500 mb-4" />
                  <Title level={3}>Sponsor</Title>
                  <p>Enregistrez-vous en tant que sponsor de projets</p>
                  <Button type="primary" className="mt-4" size="large">
                    Sélectionner
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div className="form-content py-16">
          <div className="container mx-auto">
            <Card className="shadow-lg animate__animated animate__fadeIn">
              <Title level={2} className="text-center mb-8">
                {activeForm === "prestataire" ? "Inscription Prestataire" : "Enregistrement Sponsor"}
              </Title>
              {activeForm === "prestataire" ? <InfoPrestataire /> : <SponsorRegistration />}
            </Card>
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default FormManager;