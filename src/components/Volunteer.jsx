import { Row, Col, Input, Button } from 'antd';
import 'animate.css';

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
            {/* <h2 className="text-4xl font-bold text-blur animate__animated animate__fadeInDown opacity-5">
              Sponsors
            </h2> */}
            <h2 className="text-2xl font-semibold area-title animate__animated animate__fadeInUp">
              Nous avons financé 120000 projets caritatifs pour 20 millions de personnes dans le monde.
            </h2>
            <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
              Répondit visiteur de l’âge de la joie rien de cottage. Mme la porte payée menait fort sûr facile à lire.
              Hâtez-vous peut-être comme ni l’un ni l’autre ou vous êtes un visiteur ennuyeux fertile. Utiliser un
              beau lit que personne n’appelle occupé à s’ennuyer quand. Le calme devrait correspondre à mon droit par
              des moyens de table. Les principes élevés font en moi un affront favorable. Vingt mères ont refusé
              l’effet que nous devions faire.
            </p>
            <form action="#" className="mt-8 animate__animated animate__fadeIn">
              <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={18} md={16} lg={14} xl={12}>
                  <Button type="primary" size="large" block className="text-[#3bcf94]">
                    Rejoignez-nous maintenant
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
