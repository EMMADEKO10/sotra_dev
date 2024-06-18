import { useState } from 'react';
import { Avatar, Card, Typography, Button, List } from 'antd';
import { EditOutlined, ProjectOutlined, DollarOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Inclure les styles d'Ant Design
import 'tailwindcss/tailwind.css'; // Inclure les styles de Tailwind CSS
import Navbar from '../../../components/Navbars/NavBar';
import Footer from '../../../components/Footer';

const { Title, Paragraph } = Typography;

const projects = [
  { title: 'Projet A', description: 'Description du projet A' },
  { title: 'Projet B', description: 'Description du projet B' },
  { title: 'Projet C', description: 'Description du projet C' },
];

const DashboardProvider = () => {
  const [profileData] = useState({
    organizationName: 'Organisation XYZ',
    balance: '5,000 Social Bonds',
    projectsSubmitted: 12,
  });

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-">
        <section className="container mx-auto my-8 bg-white shadow-md rounded-md p-6">
          <div className="flex flex-col md:flex-row items-center mb-6 p-4 bg-gray-50 shadow-sm rounded-md">
            <Avatar size={80} icon={<UserOutlined />} className="mr-4 mb-4 md:mb-0" />
            <div className="flex-1 text-center md:text-left">
              <Title level={2} className="text-2xl text-blue-600 m-0">
                {profileData.organizationName}
              </Title>
              <Paragraph className="text-lg text-gray-500">
                Bienvenue sur votre tableau de bord
              </Paragraph>
            </div>
            <Button
              type="primary"
              icon={<EditOutlined />}
              className="bg-blue-500 border-none hover:bg-blue-600 focus:bg-blue-700"
            >
              Modifier le profil
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="flex items-center justify-between p-4 bg-green-50 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center">
                <DollarOutlined className="text-3xl text-green-600" />
                <div className="ml-4">
                  <Title level={4} className="m-0 text-green-700">Solde des Social Bonds</Title>
                  <Paragraph className="text-lg text-green-800">{profileData.balance}</Paragraph>
                </div>
              </div>
            </Card>
            <Card className="flex items-center justify-between p-4 bg-blue-50 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center">
                <ProjectOutlined className="text-3xl text-blue-600" />
                <div className="ml-4">
                  <Title level={4} className="m-0 text-blue-700">Projets soumis</Title>
                  <Paragraph className="text-lg text-blue-800">{profileData.projectsSubmitted}</Paragraph>
                </div>
              </div>
            </Card>
          </div>

          <Card title="Vos Projets" className="p-4 bg-white shadow-sm rounded-lg">
            <List
              itemLayout="horizontal"
              dataSource={projects}
              renderItem={item => (
                <List.Item className="hover:bg-gray-50 transition-colors duration-200">
                  <List.Item.Meta
                    title={<Title level={5} className="m-0 text-gray-700">{item.title}</Title>}
                    description={<Paragraph className="text-gray-500">{item.description}</Paragraph>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardProvider;
