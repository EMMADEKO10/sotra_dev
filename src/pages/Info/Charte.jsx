import { Row, Col, Card, Button } from 'antd';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const Charte = () => {
  return (
    <div>
      <Navbar />

      {/* Début du Breadcrumb */}
      <div className="breadcrumb-area text-center shadow-lg bg-fixed p-12 text-white" style={{ backgroundImage: "url('src/assets/sotradonsImage/12.jpg')" }}>
        <div className="container mx-auto">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-4xl font-bold">Charte d'Intégrité et de Performance</h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* Fin du Breadcrumb */}

      {/* Début de la section Charte */}
      <div className="charter-area py-12 bg-white">
        <div className="container mx-auto">
          <Row gutter={[32, 32]}>
            {[
              { title: 'ENGAGEMENT ENVERS LA MISSION', content: 'Les membres de SOTRADONS s\'engagent à soutenir la mission de l\'organisation, qui vise à promouvoir la solidarité, la transparence et les dons pour des causes humanitaires.' },
              { title: 'PERFORMANCE AU TRAVAIL', content: 'Les membres doivent faire preuve de dévouement, de professionnalisme et de compétence dans l\'exécution de leurs responsabilités, contribuant ainsi à la réussite des initiatives de SOTRADONS.' },
              { title: 'INTÉGRITÉ PERSONNELLE', content: 'L\'intégrité personnelle est cruciale. Les membres doivent agir de manière honnête, éthique et respectueuse dans toutes leurs interactions au sein de l\'organisation et avec les parties prenantes externes.' },
              { title: 'FINANCIÈRE TRANSPARENCE', content: 'Les membres doivent garantir une transparence totale dans la gestion des fonds et des ressources, en fournissant des rapports financiers clairs et réguliers conformes aux normes éthiques et légales.' },
              { title: 'RESPECT DE LA DIVERSITÉ', content: 'SOTRADONS valorise la diversité. Les membres doivent respecter et promouvoir l\'inclusion, en reconnaissant et en appréciant les différences culturelles, sociales et individuelles.' },
              { title: 'RESPONSABILITÉ ENVIRONNEMENTALE', content: 'Les membres s\'engagent à minimiser leur impact environnemental et à adopter des pratiques responsables, contribuant ainsi à la durabilité des initiatives de SOTRADONS.' },
              { title: 'COLLABORATION ET ESPRIT D\'ÉQUIPE', content: 'La collaboration est essentielle. Les membres doivent travailler de manière coopérative avec leurs collègues, partenaires et bénévoles pour maximiser l\'impact positif des actions de SOTRADONS.' },
              { title: 'COMMUNICATION TRANSPARENTE', content: 'La communication ouverte et transparente est encouragée. Les membres doivent partager des informations de manière régulière et honnête avec l\'équipe, les partenaires et les donateurs.' },
              { title: 'APPRENTISSAGE CONTINU', content: 'Les membres doivent chercher à améliorer constamment leurs compétences et connaissances, restant informés sur les meilleures pratiques dans le domaine de la solidarité et des actions humanitaires.' },
              { title: 'ÉVALUATION ET ADAPTATION', content: 'Les membres doivent participer activement aux processus d\'évaluation et d\'amélioration continue, contribuant ainsi à l\'efficacité globale de SOTRADONS.' }
            ].map((point, index) => (
              <Col lg={12} md={24} key={index}>
                <Card className="shadow-lg">
                  <h2 className="text-2xl font-bold text-[#3bcf93]">{point.title}</h2>
                  <p>{point.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-8">
            <Button type="primary" shape="round" className="bg-[#3bcf93] border-none">
              Adhérez à la charte
            </Button>
          </div>
        </div>
      </div>
      {/* Fin de la section Charte */}

      <Footer />
    </div>
  );
};

export default Charte;
