import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Volonteer() {
  const navigate = useNavigate();

  const logout = () => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("user") &&
      localStorage.getItem("role")
    ) {
      if (window.confirm("Attention : cette action nécessitera votre déconnexion. Voulez-vous vraiment continuer ?")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        navigate("/register"); // Redirige après la déconnexion
      }
    } else {
      navigate("/register"); // Redirige après la déconnexion
    }
  };

  return (
    <div className="volunteer-area text-center bg-gradient-to-b relative overflow-hidden">
      {/* Fond animé */}
      

      <div className="container mx-auto relative z-20">
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={22} sm={20} md={18} lg={14} xl={12} className="text-center">
            <h5 className="text-3xl text-gray-700">Devenir sponsors</h5>
            <h2 className="text-2xl font-semibold area-title animate__animated animate__fadeInUp">
              Soutenez des projets d'impact social avec la RSE Market Place
            </h2>
            <p className="text-lg text-gray-800 animate__animated animate__fadeIn">
              Bienvenue chez RSE Market Place, où chaque sponsor fait une
              différence significative. Avec notre plateforme, nous avons
              facilité le financement de plus de 120 000 projets caritatifs,
              touchant plus de 2 millions de personnes à travers la république.
            </p>
            <Button
              onClick={logout}
              type="primary"
              size="large"
              className="btn-theme inline-block animate__animated animate__fadeInUp animate__delay-1s"
            >
              Rejoignez-nous maintenant
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
