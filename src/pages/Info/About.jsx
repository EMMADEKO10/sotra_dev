import { Button, Row, Col } from 'antd';
import { YoutubeOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

const About = () => {
  // Définitions des images des partenaires
  const partners = [
    { name: "Fondation SARA", img: "public/sara logo.jpg" },
    { name: "Fondation Entreprendre", img: "public/sotradonsImage/7.jpg" },
  ];

  return (
    <div>
      <Navbar />

      {/* Section Breadcrumb */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(/sotradonsImage/35.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  À propos de nous
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row align="middle" gutter={[32, 32]}>
            <Col lg={12} xs={24}>
              <div className="relative">
                <img
                  src="public/Sotradons A.svg"
                  alt="À propos de nous"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-lg">
                  Plus de 365 000+ personnes ont été aidées
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="space-y-6">
                <h5 className="text-lg font-medium">À propos de nous</h5>
                <h2 className="text-blur text-3xl font-bold">Notre Mission</h2>
                <h2 className="area-title text-4xl font-extrabold leading-tight">
                  Connecter les entreprises et les initiatives sociales pour un impact positif.
                </h2>
                <p>
                  La RSE Market Place by Gouvernix facilite la connexion entre les grandes entreprises et les initiatives sociales innovantes, créant un environnement propice au développement durable et à la transformation sociale. Nous mettons en relation les entreprises avec des prestataires sociaux pour des collaborations mutuellement bénéfiques.
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
                <NavLink to="/infoprestataire">
                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                  >
                    Devenir partenaire
                  </Button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section Ce que nous faisons */}
      <div className="we-do-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <h5 className="text-lg font-medium">Ce que nous faisons</h5>
              <h2 className="text-3xl font-bold">
                Faciliter les dons pour des causes sociales
                <br />à travers la République.
              </h2>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
          <Row justify="center" className="mt-8" gutter={[32, 32]}>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <h4 className="text-xl font-bold">Financement des projets</h4>
                <p>
                  Nous aidons à mobiliser les ressources nécessaires pour financer des initiatives sociales et environnementales.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <h4 className="text-xl font-bold">Partenariats stratégiques</h4>
                <p>
                  Nous établissons des collaborations entre les entreprises et les prestataires sociaux pour maximiser l'impact des projets.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <h4 className="text-xl font-bold">Évaluation de l'impact</h4>
                <p>
                  Nous évaluons et suivons l'impact des projets financés pour garantir leur efficacité et leur durabilité.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <h4 className="text-xl font-bold">RSE Awards</h4>
                <p>
                  Nous organisons des événements et récompensons les initiatives exemplaires en matière de responsabilité sociale des entreprises.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section Notre mission */}
      <div className="mission-area py-12 bg-white">
        <div className="container mx-auto">
          <Row align="middle" gutter={[32, 32]}>
            <Col lg={12} xs={24}>
              <div className="relative">
                <img
                  src="public/sotradonsImage/6.jpg"
                  alt="Notre mission"
                  className="w-full rounded-lg shadow-lg"
                />
                <a
                  href="#"
                  className="video-play-button absolute inset-0 flex items-center justify-center text-6xl text-[#3bcf93]"
                >
                  <YoutubeOutlined className="video-play-button absolute inset-0 flex items-center justify-center text-6xl border-[#3bcf93]"/>
                </a>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="space-y-6">
                <h5 className="text-lg font-medium">Notre mission</h5>
                <h2 className="text-blur text-3xl font-bold">Mission</h2>
                <h2 className="area-title text-4xl font-extrabold leading-tight">
                  Faciliter l'investissement dans des initiatives sociales innovantes.
                </h2>
                <p>
                  Notre mission est de connecter les grandes entreprises avec des prestataires sociaux pour promouvoir des pratiques responsables et des investissements dans des projets à impact positif.
                </p>
                <h4 className="text-xl font-semibold">
                  Nos priorités stratégiques :
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Faciliter la connexion entre entreprises et prestataires sociaux.
                  </li>
                  <li>
                    Garantir la transparence et l'intégrité dans la gestion des projets.
                  </li>
                  <li>
                    Encourager des pratiques durables et éthiques au sein des entreprises.
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

      {/* Section Partenaires */}
      <div className="volunteer-area bg-gray-100 py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <h5 className="text-lg font-medium">Partenaires</h5>
              <h2 className="text-3xl font-bold">
                Merci à nos
                <br />
                précieux partenaires
              </h2>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
          <Row justify="center" className="mt-8" gutter={[32, 32]}>
            {partners.map((partner, index) => (
              <Col key={index} lg={8} md={12} xs={24} className="text-center space-y-4">
                <div className="relative">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="mx-auto rounded-full w-48 h-48 object-cover shadow-lg"
                  />
                  <div className="social mt-4 space-x-4">
                    <FacebookOutlined className="text-xl" />
                    <TwitterOutlined className="text-xl" />
                    <InstagramOutlined className="text-xl" />
                  </div>
                </div>
                <div className="info mt-4">
                  <h4 className="text-xl font-bold">{partner.name}</h4>
                  <span className="text-gray-500">Partenaire clé</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
