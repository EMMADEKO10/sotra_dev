import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';
import axios from "axios";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css'; // Include Ant Design styles
import 'tailwindcss/tailwind.css'; // Include Tailwind CSS styles
import Navbar from '../../../components/Navbars/NavBar';
import Footer from '../../../components/Footer';

const { Title, Paragraph } = Typography;

const CreateProfileSponsor = () => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const { id } = useParams()

  const onFinish = async (values) => {
    console.log('Success:', values);
 // Créer un objet FormData
 const formData = new FormData();

 // Ajouter les valeurs à formData
 for (const key in values) {
   formData.append(key, values[key]);
 }
     // Ajouter le code pour envoyer les données au backend
     try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await axios.put(`${apiUrl}/sponsorsOrUpdate/${id}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const result = response.data;
      console.log('Updated Sponsor:', result);
    } catch (error) {
      console.error('Error updating sponsor:', error);
    }
  };

  return (
    <div>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section className="container mx-auto p-6 my-8 bg-white shadow-md rounded-md w-full max-w-lg">
        <Title level={2} className="text-center text-2xl text-red-600 mb-4">Créer votre Profil</Title>
        <Paragraph className="text-lg text-center mb-4">
          <UserOutlined className="mr-2" />
          Renseignons vos informations pour personnaliser votre profil
        </Paragraph>
        <small className="block mb-6 text-center text-gray-600">* = champ obligatoire</small>
        <Form layout="vertical" onFinish={onFinish} className="space-y-4">
          <Form.Item
            label="* Nom"
            name="companyName"
            rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
          >
            <Input placeholder="Nom" />
          </Form.Item>
          <Form.Item
            label="* Titre Professionnel"
            name="title"
            rules={[{ required: true, message: 'Veuillez entrer votre titre professionnel' }]}
          >
            <Input placeholder="Titre Professionnel" />
          </Form.Item>
          <Form.Item label="Localisation" name="location">
            <Input placeholder="Localisation" />
          </Form.Item>
          <Form.Item
            label="* Mission et Impact Social"
            name="mission"
            rules={[{ required: true, message: 'Veuillez entrer votre mission et impact social' }]}
          >
            <Input.TextArea rows={4} placeholder="Décrivez la mission de votre organisation et son impact social" />
          </Form.Item>
          <Form.Item
            label="Exemples d'Impact"
            name="impactExamples"
          >
            <Input.TextArea rows={4} placeholder="Fournissez des exemples concrets de l'impact de votre organisation" />
          </Form.Item>
          <div className="my-2 flex items-center">
            <Button
              type="dashed"
              onClick={() => setShowSocialLinks(!showSocialLinks)}
              style={{
                borderColor: '#3bcf93',
                color: '#3bcf93',
                fontWeight: 'bold',
                borderRadius: '5px',
                transition: 'all 0.3s ease',
              }}
              className="hover:bg-[#3bcf93] hover:text-white"
            >
              Ajouter des liens vers les réseaux sociaux
            </Button>
            <span className="ml-4 text-gray-600">Optionnel</span>
          </div>
          {showSocialLinks && (
            <>
              <Form.Item label="Twitter URL" name="twitter">
                <Input prefix={<TwitterOutlined />} placeholder="Twitter URL" />
              </Form.Item>
              <Form.Item label="Facebook URL" name="facebook">
                <Input prefix={<FacebookOutlined />} placeholder="Facebook URL" />
              </Form.Item>
              <Form.Item label="YouTube URL" name="youtube">
                <Input prefix={<YoutubeOutlined />} placeholder="YouTube URL" />
              </Form.Item>
              <Form.Item label="LinkedIn URL" name="linkedin">
                <Input prefix={<LinkedinOutlined />} placeholder="LinkedIn URL" />
              </Form.Item>
              <Form.Item label="Instagram URL" name="instagram">
                <Input prefix={<InstagramOutlined />} placeholder="Instagram URL" />
              </Form.Item>
            </>
          )}
          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" className="w-full">
              Soumettre
            </Button>
          </Form.Item>
          <Form.Item className="text-center">
            <Button type="default" href="/dashboardpagesponsor">
              Retour
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default CreateProfileSponsor;
