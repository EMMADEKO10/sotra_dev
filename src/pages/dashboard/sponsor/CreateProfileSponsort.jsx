import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Typography, message, Upload } from 'antd';
import axios from "axios";
import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  UserOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../../../components/Navbars/NavBar';
import Footer from '../../../components/Footer';

const { Title, Paragraph } = Typography;

const CreateProfileSponsor = () => {
  const [form] = Form.useForm();
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    const fetchSponsorData = async () => {
      if (id) {
        try {
          const apiUrl = import.meta.env.VITE_API_URL;
          const response = await axios.get(`${apiUrl}/getSponsorDetails/${id}`);
          const sponsorData = response.data.Sponsor;
          setInitialValues(sponsorData);
          form.setFieldsValue(sponsorData);
          setShowSocialLinks(!!sponsorData.socialMedia);
        } catch (error) {
          console.error('Error fetching sponsor data:', error);
          message.error('Erreur lors du chargement des données du sponsor');
        }
      }
    };
    fetchSponsorData();
  }, [id]);

  const onFinish = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      if (values[key] !== undefined && values[key] !== null) {
        if (key === 'logo' && values[key].file) {
          formData.append('logo', values[key].file.originFileObj);
        } else {
          formData.append(key, values[key]);
        }
      }
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.put(`${apiUrl}/sponsorsOrUpdate/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      message.success('Profil mis à jour avec succès');
      console.log('Updated Sponsor:', response.data);
    } catch (error) {
      console.error('Error updating sponsor:', error);
      message.error('Erreur lors de la mise à jour du profil');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
        <section className="container mx-auto p-8 bg-white shadow-lg rounded-lg w-full max-w-2xl">
          <Title level={2} className="text-center text-2xl text-blue-600 mb-6">
            {id ? "Modifier votre Profil" : "Créer votre Profil"}
          </Title>
          <Paragraph className="text-lg text-center mb-6">
            <UserOutlined className="mr-2" />
            Renseignez vos informations pour personnaliser votre profil
          </Paragraph>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            className="space-y-4"
          >
            <Form.Item
              label="Nom de l'entreprise"
              name="companyName"
              rules={[{ required: true, message: 'Veuillez entrer le nom de lentreprise' }]}
            >
              <Input placeholder="Nom de l'entreprise" />
            </Form.Item>
            <Form.Item
              label="Titre"
              name="title"
              rules={[{ required: true, message: 'Veuillez entrer le titre' }]}
            >
              <Input placeholder="Titre" />
            </Form.Item>
            <Form.Item label="Localisation" name="location">
              <Input placeholder="Localisation" />
            </Form.Item>
            <Form.Item
              label="Mission et Impact Social"
              name="mission"
              rules={[{ required: true, message: 'Veuillez décrire la mission et limpact social' }]}
            >
              <Input.TextArea rows={4} placeholder="Décrivez la mission et l'impact social" />
            </Form.Item>
            <Form.Item label="Exemples d'Impact" name="impactExamples">
              <Input.TextArea rows={4} placeholder="Fournissez des exemples d'impact" />
            </Form.Item>
            <Form.Item label="Logo" name="logo">
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>Télécharger le logo</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Budget" name="budget">
              <Input type="number" placeholder="Budget" />
            </Form.Item>
            <div className="my-4">
              <Button
                type="dashed"
                onClick={() => setShowSocialLinks(!showSocialLinks)}
                className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-300"
              >
                {showSocialLinks ? "Masquer" : "Afficher"} les liens vers les réseaux sociaux
              </Button>
            </div>
            {showSocialLinks && (
              <>
                <Form.Item label="Twitter" name={["socialMedia", "twitter"]}>
                  <Input prefix={<TwitterOutlined />} placeholder="URL Twitter" />
                </Form.Item>
                <Form.Item label="Facebook" name={["socialMedia", "facebook"]}>
                  <Input prefix={<FacebookOutlined />} placeholder="URL Facebook" />
                </Form.Item>
                <Form.Item label="YouTube" name={["socialMedia", "youtube"]}>
                  <Input prefix={<YoutubeOutlined />} placeholder="URL YouTube" />
                </Form.Item>
                <Form.Item label="LinkedIn" name={["socialMedia", "linkedin"]}>
                  <Input prefix={<LinkedinOutlined />} placeholder="URL LinkedIn" />
                </Form.Item>
                <Form.Item label="Instagram" name={["socialMedia", "instagram"]}>
                  <Input prefix={<InstagramOutlined />} placeholder="URL Instagram" />
                </Form.Item>
              </>
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {id ? "Mettre à jour" : "Créer le profil"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="default" href="/dashboardpagesponsor" className="w-full">
                Retour
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProfileSponsor;