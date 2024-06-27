import { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Typography, DatePicker, Upload, message, notification, Select, Steps } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const ProjectSubmission = () => {
  const [imageFile, setImageFile] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [amount, setAmount] = useState('');
  const [socialBonds, setSocialBonds] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [proposalFile, setProposalFile] = useState(null);
  const [budgetFile, setBudgetFile] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  const steps = [
    {
      title: 'Informations de base',
      content: 'Titre, description et catégorie du projet',
    },
    {
      title: 'Image du projet',
      content: 'Téléchargement de l'image du projet',
    },
    {
      title: 'Détails du projet',
      content: 'Objectifs, calendrier, budget et partenaires',
    },
    {
      title: 'Documents',
      content: 'Téléchargement des documents justificatifs',
    },
  ];

  // ... (Gardez toutes les autres fonctions telles quelles)

  const onFinish = async (values) => {
    setSubmitting(true);

    // ... (Gardez le reste de la fonction onFinish telle quelle)
  };

  return (
    <div>
      <Navbar />

      {/* Section Breadcrumb */}
      {/* ... (Gardez cette partie inchangée) */}

      <div className="about-area py-12">
        {/* ... (Gardez cette partie inchangée) */}
      </div>

      <div className="submission-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                <Steps current={currentStep}>
                  {steps.map(item => (
                    <Steps.Step key={item.title} title={item.title} />
                  ))}
                </Steps>
                <div className="steps-content mt-8">
                  <Form
                    layout="vertical"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                  >
                    {currentStep === 0 && (
                      <>
                        <Title level={4} className="text-xl font-bold mb-4">
                          Informations sur le projet
                        </Title>
                        <Form.Item
                          name="projectTitle"
                          label="Titre du projet"
                          rules={[{ required: true, message: "Veuillez entrer le titre du projet" }]}
                        >
                          <Input placeholder="Titre du projet" />
                        </Form.Item>
                        <Form.Item
                          name="projectDescription"
                          label="Description du projet"
                          rules={[{ required: true, message: "Veuillez décrire le projet" }]}
                        >
                          <TextArea rows={4} placeholder="Description du projet" />
                        </Form.Item>
                        <Form.Item
                          name="projectCategory"
                          label="Catégorie du projet"
                          rules={[{ required: true, message: "Veuillez sélectionner une catégorie pour le projet" }]}
                        >
                          <Select placeholder="Sélectionnez une catégorie">
                            {/* ... (Gardez les options de catégorie inchangées) */}
                          </Select>
                        </Form.Item>
                      </>
                    )}

                    {currentStep === 1 && (
                      <>
                        <Title level={4} className="text-xl font-bold mb-4">
                          Image du projet
                        </Title>
                        <Form.Item
                          name="imageFile"
                          label="Téléchargez une image"
                          rules={[{ required: true, message: "Veuillez télécharger une image du projet" }]}
                        >
                          <Upload
                            listType="picture-card"
                            fileList={imageFile}
                            onChange={handleImageChange}
                            beforeUpload={(file) => beforeUploadFileValidation(file, ["image/jpeg", "image/png"], 2)}
                            maxCount={1}
                            accept=".jpg,.jpeg,.png"
                          >
                            {imageFile.length >= 1 ? null : uploadButton}
                          </Upload>
                        </Form.Item>
                      </>
                    )}

                    {currentStep === 2 && (
                      <>
                        <Title level={4} className="text-xl font-bold mb-4">
                          Détails du projet
                        </Title>
                        {/* ... (Ajoutez ici tous les champs pour les détails du projet) */}
                      </>
                    )}

                    {currentStep === 3 && (
                      <>
                        <Title level={4} className="text-xl font-bold mb-4">
                          Documents à télécharger
                        </Title>
                        {/* ... (Ajoutez ici tous les champs pour le téléchargement des documents) */}
                      </>
                    )}
                  </Form>
                </div>
                <div className="steps-action mt-8">
                  {currentStep > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => setCurrentStep(currentStep - 1)}>
                      Précédent
                    </Button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={() => setCurrentStep(currentStep + 1)}>
                      Suivant
                    </Button>
                  )}
                  {currentStep === steps.length - 1 && (
                    <Button type="primary" onClick={onFinish} disabled={submitting}>
                      {submitting ? "Soumission en cours..." : "Soumettre le projet"}
                    </Button>
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="support-area py-12">
        {/* ... (Gardez cette partie inchangée) */}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectSubmission;