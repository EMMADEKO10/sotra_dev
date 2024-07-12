import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { ExperimentOutlined, MedicineBoxOutlined, EnvironmentOutlined, BuildOutlined } from '@ant-design/icons';
import 'animate.css';

const { Title, Paragraph } = Typography;

const activities = [
  {
    icon: <ExperimentOutlined />,
    title: "Distribution d'eau",
    description: "Nous facilitons l'accès à l'eau potable et la gestion durable des ressources hydriques."
  },
  {
    icon: <MedicineBoxOutlined />,
    title: "Aide médicale",
    description: "Nous soutenons les initiatives médicales pour améliorer la santé communautaire."
  },
  {
    icon: <EnvironmentOutlined />,
    title: "Sauver les plantes",
    description: "Nous promouvons la conservation de l'environnement et la protection de la biodiversité."
  },
  {
    icon: <BuildOutlined />,
    title: "Construction et création",
    description: "Nous construisons des infrastructures durables et favorisons le développement communautaire."
  }
];

export default function Activity() {
  return (
    <div className="we-do-area bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h5 className="text-[#3bcf93] font-semibold mb-2">Nos domaines d'intervention</h5>
          <Title level={2} className="mb-4">
            Faciliter l'engagement des grandes entreprises<br />
            dans des projets socialement innovants pour un impact positif
          </Title>
          <div className="text-[#3bcf93] h-1 w-24 mx-auto my-4 rounded-full"></div>
        </div>
        
        <Row gutter={[32, 32]} justify="center">
          {activities.map((activity, index) => (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <Card
                hoverable
                className="text-center p-6 rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate__animated animate__fadeIn"
                bodyStyle={{ padding: 0 }}
              >
                <div className="text-5xl text-[#3bcf93] mb-4">
                  {activity.icon}
                </div>
                <Title level={4} className="mb-3">{activity.title}</Title>
                <Paragraph className="text-gray-600" ellipsis={{ rows: 3 }}>
                  {activity.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}