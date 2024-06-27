import { Row, Col, Typography, Card, Avatar } from 'antd';
import 'animate.css';

const { Title, Paragraph } = Typography;

export default function Activity() {
  return (
    <div className="we-do-area bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h5 className="text-green-500 font-semibold">Nos domaines d'intervention</h5>
          <h2 className="text-3xl font-bold mt-2">
            Faciliter l'engagement des grandes entreprises dans des projets socialement innovants <br /> pour un impact positif
          </h2>
          <div className="bg-green-500 h-1 w-16 mx-auto my-4"></div>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {/* Distribution d'eau */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card hoverable className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-water-bottle text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Distribution d'eau</h4>
              <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                Nous facilitons l'accès à l'eau potable et la gestion durable des ressources hydriques.
              </Paragraph>
            </Card>
          </Col>

          {/* Aide médicale */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card hoverable className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-pharmacy text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Aide médicale</h4>
              <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                Nous soutenons les initiatives médicales pour améliorer la santé communautaire.
              </Paragraph>
            </Card>
          </Col>

          {/* Sauver les plantes */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card hoverable className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-planet-earth text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Sauver les plantes</h4>
              <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                Nous promouvons la conservation de l'environnement et la protection de la biodiversité.
              </Paragraph>
            </Card>
          </Col>

          {/* Construction et création */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <Card hoverable className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-home text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Construction et création</h4>
              <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                Nous construisons des infrastructures durables et favorisons le développement communautaire.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
