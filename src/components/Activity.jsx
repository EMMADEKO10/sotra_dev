import { Row, Col } from 'antd';
import 'animate.css';

export default function Activity() {
  return (
    <div className="we-do-area bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h5 className="text-green-500 font-semibold">Ce que l'on fait</h5>
          <h2 className="text-3xl font-bold mt-2">
            Faciliter la connexion entre les grandes entreprises et les initiatives sociales innovantes <br /> pour un changement positif
          </h2>
          <div className="bg-green-500 h-1 w-16 mx-auto my-4"></div>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {/* Distribution d'eau */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-water-bottle text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Distribution d'eau</h4>
              <p className="text-gray-600">
                Toujours longueur lettre adieus ajouter le nombre moment elle. Promettez peu de boussole.
              </p>
            </div>
          </Col>

          {/* Aide médicale */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-pharmacy text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Aide médicale</h4>
              <p className="text-gray-600">
                Toujours longueur lettre adieus ajouter le nombre moment elle. Promettez peu de boussole.
              </p>
            </div>
          </Col>

          {/* Save Plants */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-planet-earth text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Save Plants</h4>
              <p className="text-gray-600">
                Toujours longueur lettre adieus ajouter le nombre moment elle. Promettez peu de boussole.
              </p>
            </div>
          </Col>

          {/* Nous construisons et créons */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <div className="text-center p-4 rounded-lg shadow-md bg-white animate__animated animate__fadeIn">
              <i className="flaticon-home text-4xl text-green-500"></i>
              <h4 className="text-lg font-semibold mt-4">Nous construisons et créons</h4>
              <p className="text-gray-600">
                Toujours longueur lettre adieus ajouter le nombre moment elle. Promettez peu de boussole.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
