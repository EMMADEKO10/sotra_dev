import { Row, Col, Input, Button } from 'antd';
import 'animate.css';
import { NavLink } from 'react-router-dom';

export default function Volonteer() {
  return (
    <div className="volunteer-area text-center bg-gray-100 py-16 relative overflow-hidden">
      {/* Fond animé */}
      <div className="shape-bottom absolute inset-0 z-10 overflow-hidden">
        <img
          src="/shape/7.png"
          alt="Shape"
          className="object-cover w-full h-full animate__animated animate__fadeIn"
        />
      </div>

      <div className="container mx-auto relative z-20">
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={22} sm={20} md={18} lg={14} xl={12} className="text-center">
            <h5 className="text-3xl text-gray-700">Devenir sponsors</h5>
            <h2 className="text-2xl font-semibold area-title animate__animated animate__fadeInUp">
              Soutenez des projets d'impact social avec la RSE Market Place
            </h2>
            <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
              Bienvenue chez RSE Market Place, où chaque sponsor fait une différence significative. Avec notre
              plateforme, nous avons facilité le financement de plus de 120 000 projets caritatifs, touchant plus de
              2 millions de personnes à travers la republique.
            </p>
            <form action="#" className="mt-8 animate__animated animate__fadeIn">
              <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={18} md={16} lg={14} xl={12}>
                  <NavLink to="/sponsorregistration">
                    <Button type="primary" size="large" block className="text-[#3bcf94]">
                      Rejoignez-nous maintenant
                    </Button>
                  </NavLink>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
