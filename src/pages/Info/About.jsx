import { Button, Carousel, Row, Col } from 'antd';
import { YoutubeOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Début du Breadcrumb */}
      <div className="breadcrumb-area text-center shadow-lg bg-fixed p-12 text-white" style={{ backgroundImage: "url('src/assets/sotradonsImage/35.jpg')" }}>
        <div className="container mx-auto">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-4xl font-bold">À propos de nous</h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* Fin du Breadcrumb */}

      {/* Début de la section À propos */}
      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row align="middle" gutter={[32, 32]}>
            <Col lg={12} xs={24}>
              <div className="relative">
                <img src="/assets/img/800x800.png" alt="Thumb" className="w-full rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-lg">
                  Plus de 365 000+ personnes ont été aidées
                </div>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="space-y-6">
                <h5 className="text-lg font-medium">À propos de nous</h5>
                <h2 className="text-blur text-3xl font-bold">À propos</h2>
                <h2 className="area-title text-4xl font-extrabold leading-tight">Nous sommes une organisation caritative mondiale à but non lucratif.</h2>
                <p>
                  Les principes voyagent fréquemment loin, c'est particulièrement agréable d'être accepté. Le bonheur est nécessaire.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nesciunt ad suscipit iusto dolorum quae recusandae quo illum libero excepturi, provident facere. Delectus possimus cupiditate voluptatum.
                </p>
                <ul className="flex space-x-8">
                  <li className="text-center">
                    <h5 className="text-2xl font-bold">168K</h5>
                    <span>Plantes protégées</span>
                  </li>
                  <li className="text-center">
                    <h5 className="text-2xl font-bold">5M Tonnes</h5>
                    <span>Eau conservée</span>
                  </li>
                  <li className="text-center">
                    <h5 className="text-2xl font-bold">37K Sqmi.</h5>
                    <span>Océan protégé</span>
                  </li>
                </ul>
                <Button type="primary" shape="round" className="bg-[#3bcf93] border-none mt-4">
                  Devenir bénévole
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin de la section À propos */}

      {/* Début de la section Ce que nous faisons */}
      <div className="we-do-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <h5 className="text-lg font-medium">Ce que nous faisons</h5>
              <h2 className="text-3xl font-bold">
                Nous faisons des dons pour des causes caritatives
                <br />
                à travers le monde.
              </h2>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
          <Row justify="center" className="mt-8" gutter={[32, 32]}>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <i className="flaticon-water-bottle text-4xl text-[#3bcf93]"></i>
                <h4 className="text-xl font-bold">Livraison d'eau</h4>
                <p>Toujours des adieux de longueur, ajoutez le nombre de moments qu'elle. Promesse de peu de boussole.</p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <i className="flaticon-pharmacy text-4xl text-[#3bcf93]"></i>
                <h4 className="text-xl font-bold">Aide médicale</h4>
                <p>Toujours des adieux de longueur, ajoutez le nombre de moments qu'elle. Promesse de peu de boussole.</p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <i className="flaticon-planet-earth text-4xl text-[#3bcf93]"></i>
                <h4 className="text-xl font-bold">Sauver les plantes</h4>
                <p>Toujours des adieux de longueur, ajoutez le nombre de moments qu'elle. Promesse de peu de boussole.</p>
              </div>
            </Col>
            <Col lg={6} md={12} xs={24} className="text-center space-y-4">
              <div className="item">
                <i className="flaticon-home text-4xl text-[#3bcf93]"></i>
                <h4 className="text-xl font-bold">Nous construisons et créons</h4>
                <p>Toujours des adieux de longueur, ajoutez le nombre de moments qu'elle. Promesse de peu de boussole.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin de la section Ce que nous faisons */}

      {/* Début de la section Notre mission */}
      <div className="mission-area py-12 bg-white">
        <div className="container mx-auto">
          <Row align="middle" gutter={[32, 32]}>
            <Col lg={12} xs={24}>
              <div className="relative">
                <img src="/assets/img/800x800.png" alt="Thumb" className="w-full rounded-lg shadow-lg" />
                <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" className="video-play-button absolute inset-0 flex items-center justify-center text-6xl text-[#3bcf93]">
                  <YoutubeOutlined />
                </a>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="space-y-6">
                <h5 className="text-lg font-medium">Notre mission</h5>
                <h2 className="text-blur text-3xl font-bold">Mission</h2>
                <h2 className="area-title text-4xl font-extrabold leading-tight">Nous croyons que nous pouvons sauver plus de vies avec vous.</h2>
                <p>
                  Leur fin tout entier pourrait commencer par elle. Comportement le confort une autre quinzaine de manger. La partialité avait demandé à ses propres pianoforte en augmentant découvert. Alors monsieur retard à depuis endroit entier au-dessus des miles.
                </p>
                <h4 className="text-xl font-semibold">Nos priorités stratégiques jusqu'en 2020 sont :</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Protéger les associations caritatives contre les abus ou la mauvaise gestion</li>
                  <li>Permettre aux administrateurs de gérer leurs associations efficacement</li>
                  <li>Encourager une plus grande transparence et responsabilité</li>
                </ul>
                <Button type="primary" shape="round" className="bg-[#3bcf93] border-none mt-4">
                  Rejoignez-nous
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin de la section Notre mission */}

      {/* Début de la section Bénévoles */}
      <div className="volunteer-area bg-gray-100 py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <h5 className="text-lg font-medium">Bénévole</h5>
              <h2 className="text-3xl font-bold">
                Merci à nos
                <br />
                merveilleux bénévoles
              </h2>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
          <Carousel autoplay className="mt-8">
            {['Jones Park', 'Monal Spoa', 'Shyra Poulsen', 'Mack Joe'].map((volunteer, index) => (
              <div key={index} className="item text-center space-y-4">
                <div className="relative">
                  <img src="/assets/img/800x800.png" alt="Thumb" className="mx-auto rounded-full w-48 h-48 object-cover shadow-lg" />
                  <div className="social mt-4 space-x-4">
                    <FacebookOutlined className="text-xl" />
                    <TwitterOutlined className="text-xl" />
                    <InstagramOutlined className="text-xl" />
                  </div>
                </div>
                <div className="info mt-4">
                  <h4 className="text-xl font-bold">{volunteer}</h4>
                  <span className="text-gray-500">Bénévole</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Fin de la section Bénévoles */}

      <Footer />
    </div>
  );
};

export default About;
