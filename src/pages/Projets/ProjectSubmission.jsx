import  { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Typography, DatePicker, Upload } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const ProjectSubmission = () => {
  const [imageList, setImageList] = useState([]);

  const handleImageChange = ({ fileList }) => setImageList(fileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <Navbar />

      {/* Début de la section d'en-tête */}
      <div className="breadcrumb-area text-center shadow-lg bg-fixed p-12 text-white" style={{ backgroundImage: "url('/assets/img/2440x1578.png')" }}>
        <div className="container mx-auto">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-4xl font-bold">Soumission de Projet</h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* Fin de la section d'en-tête */}

      {/* Début de l'introduction */}
      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <Title level={3} className="text-3xl font-bold">Soumettez Votre Projet</Title>
              <Paragraph>
                Soumettez votre projet pour contribuer au développement durable, à l'éducation, à la santé, et à d'autres causes sociales. 
                Les projets soumis doivent répondre aux critères suivants : pertinence, impact social et environnemental, faisabilité, et durabilité.
              </Paragraph>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin de l'introduction */}

      {/* Début du formulaire de soumission de projet */}
      <div className="submission-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                <Form layout="vertical">
                  {/* Informations sur le projet */}
                  <Title level={4} className="text-xl font-bold mb-4">Informations sur le projet</Title>
                  <Form.Item name="projectTitle" label="Titre du projet" rules={[{ required: true, message: 'Veuillez entrer le titre du projet' }]}>
                    <Input placeholder="Titre du projet" />
                  </Form.Item>
                  <Form.Item name="projectDescription" label="Description du projet" rules={[{ required: true, message: 'Veuillez décrire le projet' }]}>
                    <TextArea rows={4} placeholder="Description du projet" />
                  </Form.Item>

                  {/* Upload des images */}
                  <Title level={4} className="text-xl font-bold mb-4">Images du projet</Title>
                  <Form.Item label="Téléchargez jusqu'à 3 images">
                    <Upload
                      action="/upload.do"
                      listType="picture-card"
                      fileList={imageList}
                      onChange={handleImageChange}
                      beforeUpload={() => false} // Prevent auto upload
                      multiple
                    >
                      {imageList.length >= 3 ? null : uploadButton}
                    </Upload>
                  </Form.Item>

                  {/* Informations sur l'organisation */}
                  <Title level={4} className="text-xl font-bold mb-4">Informations sur l'organisation</Title>
                  <Form.Item name="organizationName" label="Nom de l'organisation" rules={[{ required: true, message: 'Veuillez entrer le nom de l\'organisation' }]}>
                    <Input placeholder="Nom de l'organisation" />
                  </Form.Item>
                  <Form.Item name="organizationType" label="Type d'organisation" rules={[{ required: true, message: 'Veuillez sélectionner le type d\'organisation' }]}>
                    <Input placeholder="Type d'organisation (association, ONG, entreprise sociale, etc.)" />
                  </Form.Item>
                  <Form.Item name="organizationAddress" label="Adresse" rules={[{ required: true, message: 'Veuillez entrer l\'adresse' }]}>
                    <Input placeholder="Adresse" />
                  </Form.Item>
                  <Form.Item name="organizationWebsite" label="Site web" rules={[{ required: true, message: 'Veuillez entrer le site web' }]}>
                    <Input placeholder="https://example.com" />
                  </Form.Item>

                  {/* Informations de contact */}
                  <Title level={4} className="text-xl font-bold mb-4">Informations de contact</Title>
                  <Form.Item name="contactName" label="Nom du représentant" rules={[{ required: true, message: 'Veuillez entrer le nom du représentant' }]}>
                    <Input placeholder="Nom du représentant" />
                  </Form.Item>
                  <Form.Item name="contactEmail" label="Adresse e-mail" rules={[{ required: true, message: 'Veuillez entrer l\'adresse e-mail', type: 'email' }]}>
                    <Input placeholder="email@example.com" />
                  </Form.Item>
                  <Form.Item name="contactPhone" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer le numéro de téléphone' }]}>
                    <Input placeholder="Numéro de téléphone" />
                  </Form.Item>

                  {/* Détails du projet */}
                  <Title level={4} className="text-xl font-bold mb-4">Détails du projet</Title>
                  <Form.Item name="projectGoals" label="Objectifs et résultats attendus" rules={[{ required: true, message: 'Veuillez décrire les objectifs du projet' }]}>
                    <TextArea rows={4} placeholder="Objectifs et résultats attendus" />
                  </Form.Item>
                  <Form.Item name="projectTimeline" label="Calendrier">
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item name="projectBudget" label="Budget" rules={[{ required: true, message: 'Veuillez détailler le budget du projet' }]}>
                    <TextArea rows={4} placeholder="Détail du budget nécessaire pour la réalisation du projet" />
                  </Form.Item>
                  <Form.Item name="projectPartners" label="Partenaires" rules={[{ required: true, message: 'Veuillez indiquer les partenaires potentiels ou existants' }]}>
                    <TextArea rows={4} placeholder="Noms et rôles des partenaires" />
                  </Form.Item>
                  <Form.Item name="projectIndicators" label="Indicateurs de performance" rules={[{ required: true, message: 'Veuillez indiquer comment le succès du projet sera mesuré' }]}>
                    <TextArea rows={4} placeholder="Indicateurs de performance" />
                  </Form.Item>

                  {/* Documents à télécharger */}
                  <Title level={4} className="text-xl font-bold mb-4">Documents à télécharger</Title>
                  <Form.Item name="projectProposal" label="Proposition de projet complète" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                    <Upload name="proposal" action="/upload.do" listType="pdf" maxCount={1}>
                      <Button icon={<UploadOutlined />}>Télécharger la proposition de projet</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item name="projectBudgetDetails" label="Budget détaillé" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                    <Upload name="budget" action="/upload.do" listType="pdf" maxCount={1}>
                      <Button icon={<UploadOutlined />}>Télécharger le budget détaillé</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item name="supportingDocuments" label="Documents justificatifs" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                    <Upload name="documents" action="/upload.do" listType="pdf" multiple>
                      <Button icon={<UploadOutlined />}>Télécharger les documents justificatifs</Button>
                    </Upload>
                  </Form.Item>

                  <Button type="primary" shape="round" className="bg-[#3bcf93] border-none mt-4" htmlType="submit">
                    Soumettre le projet
                  </Button>
                </Form>

                {/* Informations complémentaires */}
                <div className="mt-8">
                  <Text>En soumettant ce formulaire, vous acceptez notre <a href="#" className="text-[#3bcf93]">politique de confidentialité</a> et nos <a href="#" className="text-[#3bcf93]">conditions générales</a>.</Text>
                  <Text>Pour plus d'informations sur les critères de sélection et le processus d'évaluation des projets, cliquez <a href="#" className="text-[#3bcf93]">ici</a>.</Text>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin du formulaire de soumission de projet */}

      {/* Début de la section Assistance et Support */}
      <div className="support-area py-12">
        <div className="container mx-auto text-center">
          <Title level={3} className="text-2xl font-bold">Besoin d'aide ?</Title>
          <Paragraph>Pour toute assistance avec la soumission, veuillez nous contacter à <a href="mailto:support@example.com" className="text-[#3bcf93]">support@example.com</a> ou appeler le <a href="tel:+1234567890" className="text-[#3bcf93]">+1 234 567 890</a>.</Paragraph>
        </div>
      </div>
      {/* Fin de la section Assistance et Support */}

      <Footer />
    </div>
  );
};

export default ProjectSubmission;
