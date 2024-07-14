import { Button, Row, Col, Card } from "antd"
import {
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  ProjectOutlined,
  TeamOutlined,
  BarChartOutlined,
  TrophyOutlined,
} from "@ant-design/icons"
import "tailwindcss/tailwind.css"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import { NavLink } from "react-router-dom"
import Volunteer from "../../components/home/Volunteer"
import RetourEnHaut from "../../components/bouton/RetourEnHaut"
import FAQ from "../../components/home/FAQ"

const About = () => {
  // Définitions des images des partenaires
  const partners = [
    { name: "Fondation SARA", img: "/sara logo.jpg" },
    { name: "Fondation Entreprendre", img: "/sotradonsImage/7.jpg" },
  ]

  const services = [
    {
      title: "Financement des projets",
      description:
        "Nous aidons à mobiliser les ressources nécessaires pour financer des initiatives sociales et environnementales.",
      icon: <ProjectOutlined />,
    },
    {
      title: "Partenariats stratégiques",
      description:
        "Nous établissons des collaborations entre les entreprises et les prestataires sociaux pour maximiser l'impact des projets.",
      icon: <TeamOutlined />,
    },
    {
      title: "Évaluation de l'impact",
      description:
        "Nous évaluons et suivons l'impact des projets financés pour garantir leur efficacité et leur durabilité.",
      icon: <BarChartOutlined />,
    },
    {
      title: "RSE Awards",
      description:
        "Nous organisons des événements et récompensons les initiatives exemplaires en matière de responsabilité sociale des entreprises.",
      icon: <TrophyOutlined />,
    },
  ]

  return (
    <>
      <Navbar />
      {/* Section Breadcrumb avec effet parallaxe */}
      <div
        className="breadcrumb-area relative text-center shadow-lg p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url(/sotradonsImage/35.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              À propos de nous
            </h2>
            <nav className="text-white">
              <a
                href="/"
                className="hover:underline"
              >
                Accueil
              </a>{" "}
              &gt; <span>À propos de nous</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-16">
        {/* Section À propos */}
        <div className="about-area ">
          <div className="container mx-auto">
            <Row
              align="middle"
              gutter={[32, 32]}
            >
              <Col
                lg={12}
                xs={24}
              >
                <div className="relative">
                  <img
                    src="/Sotradons A.svg"
                    alt="À propos de nous"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-lg">
                    Plus de 365 000+ personnes ont été aidées
                  </div>
                </div>
              </Col>
              <Col
                lg={12}
                xs={24}
              >
                <div className="space-y-6">
                  <h5 className="text-lg font-medium">À propos de nous</h5>
                  <h2 className="text-blur text-3xl font-bold">
                    Notre Mission
                  </h2>
                  <h2 className="area-title text-4xl font-extrabold leading-tight">
                    Connecter les entreprises et les initiatives sociales pour
                    un impact positif.
                  </h2>
                  <p>
                    La RSE Market Place by Gouvernix facilite la connexion entre
                    les grandes entreprises et les initiatives sociales
                    innovantes, créant un environnement propice au développement
                    durable et à la transformation sociale. Nous mettons en
                    relation les entreprises avec des prestataires sociaux pour
                    des collaborations mutuellement bénéfiques.
                  </p>
                  <ul className="flex space-x-8">
                    <li className="text-center">
                      <h5 className="text-2xl font-bold">168K</h5>
                      <span>Projets soutenus</span>
                    </li>
                    <li className="text-center">
                      <h5 className="text-2xl font-bold">5M USD</h5>
                      <span>Financements alloués</span>
                    </li>
                    <li className="text-center">
                      <h5 className="text-2xl font-bold">120+ Partenaires</h5>
                      <span>Entreprises partenaires</span>
                    </li>
                  </ul>
                  <NavLink to="/contact">
                    <Button
                      type="primary"
                      shape="round"
                      className="bg-[#3bcf93] border-none mt-4"
                    >
                      Contactez-nous
                    </Button>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Section Ce que nous faisons */}
        <div className="we-do-area py-16 bg-gray-100">
          <div className="container mx-auto">
            <Row justify="center">
              <Col
                lg={16}
                className="text-center space-y-4"
              >
                <h5 className="text-lg font-medium">Ce que nous faisons</h5>
                <h2 className="text-3xl font-bold">
                  Faciliter les dons pour des causes sociales
                  <br />à travers la République.
                </h2>
                <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
              </Col>
            </Row>
            <Row
              gutter={[24, 24]}
              className="mt-8"
            >
              {services.map((service, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={12}
                  lg={6}
                >
                  <Card
                    hoverable
                    className="text-center h-full transition-all duration-300 hover:shadow-lg"
                    cover={
                      <div className="text-5xl text-[#3bcf93] pt-6">
                        {service.icon}
                      </div>
                    }
                  >
                    <Card.Meta
                      title={
                        <h4 className="text-xl font-bold">{service.title}</h4>
                      }
                      description={
                        <p className="mt-2">{service.description}</p>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Section Notre mission */}
        <div className="mission-area py-16 bg-white">
          <div className="container mx-auto">
            <Row
              align="middle"
              gutter={[32, 32]}
            >
              <Col
                lg={12}
                xs={24}
              >
                <div className="relative">
                  <img
                    src="/sotradonsImage/6.jpg"
                    alt="Notre mission"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <a
                    href="#"
                    className="video-play-button absolute inset-0 flex items-center justify-center text-6xl text-[#3bcf93]"
                  >
                    <YoutubeOutlined className="video-play-button absolute inset-0 flex items-center justify-center text-6xl border-[#3bcf93]" />
                  </a>
                </div>
              </Col>
              <Col
                lg={12}
                xs={24}
              >
                <div className="space-y-6">
                  <h5 className="text-lg font-medium">Notre mission</h5>
                  <h2 className="text-blur text-3xl font-bold">Mission</h2>
                  <h2 className="area-title text-4xl font-extrabold leading-tight">
                    Faciliter l'investissement dans des initiatives sociales
                    innovantes.
                  </h2>
                  <p>
                    Notre mission est de connecter les grandes entreprises avec
                    des prestataires sociaux pour promouvoir des pratiques
                    responsables et des investissements dans des projets à
                    impact positif.
                  </p>
                  <h4 className="text-xl font-semibold">
                    Nos priorités stratégiques :
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Faciliter la connexion entre entreprises et prestataires
                      sociaux.
                    </li>
                    <li>
                      Garantir la transparence et l'intégrité dans la gestion
                      des projets.
                    </li>
                    <li>
                      Encourager des pratiques durables et éthiques au sein des
                      entreprises.
                    </li>
                  </ul>
                  <NavLink to="/contact">
                    <Button
                      type="primary"
                      shape="round"
                      className="bg-[#3bcf93] border-none mt-4"
                    >
                      Rejoignez-nous
                    </Button>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <FAQ/>

        {/* Section Partenaires */}
<div className="volunteer-area bg-gray-100 py-16">
  <div className="container mx-auto">
    <Row justify="center">
      <Col lg={16} className="text-center space-y-4">
        <h5 className="text-lg font-medium">Nos Fondateurs</h5>
        <h2 className="text-3xl font-bold">
          Honneur à nos
          <br />
          visionnaires
        </h2>
        <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
      </Col>
    </Row>
    <Row justify="center" className="mt-8" gutter={[32, 32]}>
      {partners.map((founder, index) => (
        <Col key={index} lg={8} md={12} xs={24} className="text-center space-y-4">
          <div className="relative">
            <img
              src={founder.img}
              alt={founder.name}
              className="mx-auto rounded-full w-48 h-48 object-cover shadow-lg"
            />
            <div className="social mt-4 space-x-4">
              <FacebookOutlined className="text-xl" />
              <TwitterOutlined className="text-xl" />
              <InstagramOutlined className="text-xl" />
            </div>
          </div>
          <div className="info mt-4">
            <h4 className="text-xl font-bold">{founder.name}</h4>
            <span className="text-gray-500">Co-fondateur</span>
          </div>
        </Col>
      ))}
    </Row>
  </div>
</div>


        <Volunteer />
      </div>
      <RetourEnHaut />
      <Footer />
    </>
  )
}

export default About
