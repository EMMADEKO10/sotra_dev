import { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Typography, DatePicker, Upload, message, notification } from 'antd';
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

const token = localStorage.getItem('token'); // Supposez que vous stockez le token sous le nom 'authToken'

  // Notification de succès
  const openNotificationWithIcon = (type, messageText, description) => {
    notification[type]({
      message: messageText,
      description: description,
      duration: 5,
    });
  };

  // Gestion des changements dans les fichiers d'image
  const handleImageChange = ({ fileList }) => setImageFile(fileList);

  // Gestion des changements dans les fichiers de proposition
  const handleFileChange = (setFileFunc) => ({ fileList }) => {
    setFileFunc(fileList);
  };

  // Validation des fichiers
  const beforeUploadFileValidation = (file, acceptedTypes, maxSizeMB) => {
    const isValidType = acceptedTypes.includes(file.type);
    if (!isValidType) {
      message.error(`Vous ne pouvez télécharger que des fichiers de type ${acceptedTypes.join(", ")} !`);
      return false;
    }
    const isValidSize = file.size / 1024 / 1024 < maxSizeMB;
    if (!isValidSize) {
      message.error(`Le fichier doit être inférieur à ${maxSizeMB} Mo !`);
      return false;
    }
    return isValidType && isValidSize;
  };

  // Calcul des Social Bonds en fonction du montant
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const convertedValue = value * 0.001;
    setSocialBonds(convertedValue.toFixed(2));
  };

  const onFinish = async (values) => {
    setSubmitting(true);

    // Préparer les données du formulaire pour l'envoi
    const projectImage = imageFile[0]?.originFileObj;

    const apiUrl = import.meta.env.VITE_API_URL;
    const {
      projectTitle,
      projectDescription,
      projectGoals,
      projectTimeline,
      projectAmount,
      projectPartners,
      projectIndicators
    } = values;

    const formData = new FormData();
    formData.append('projectTitle', projectTitle);
    formData.append('projectDescription', projectDescription);
    formData.append('projectImage', projectImage); // Ce code assume que projectImage est un objet fichier
    formData.append('projectGoals', projectGoals);
    formData.append('projectTimeline', JSON.stringify(projectTimeline));
    formData.append('projectAmount', projectAmount);
    formData.append('socialBonds', socialBonds);
    formData.append('projectPartners', projectPartners);
    formData.append('projectIndicators', projectIndicators);

    if (fileList.length > 0) {
      formData.append('supportingDocument', fileList[0].originFileObj);
    }
    if (proposalFile && proposalFile.length > 0) {
      formData.append('projectProposal', proposalFile[0].originFileObj);
    }
    if (budgetFile && budgetFile.length > 0) {
      formData.append('projectBudgetDetails', budgetFile[0].originFileObj);
    }

    try {
      // Envoyer les données à l'API
      const response = await axios.post(`${apiUrl}/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
        },
      });

      // Afficher une notification de succès
      openNotificationWithIcon('success', 'Soumission réussie', 'Votre projet a été soumis avec succès.');
      console.log("Response: ", response.data);
    } catch (error) {
      console.error('Error submitting the form', error);

      // Afficher une notification d'erreur
      openNotificationWithIcon('error', 'Erreur de soumission', 'Une erreur est survenue lors de la soumission de votre projet. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  const validateMessages = {
    required: '${label} est obligatoire',
    types: {
      email: '${label} n\'est pas un email valide',
      number: '${label} n\'est pas un nombre valide',
    },
    number: {
      range: '${label} doit être entre ${min} et ${max}',
    },
  };

  // Définition du uploadButton
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Télécharger</div>
    </div>
  );

  return (
    <div>
      <Navbar />

      {/* Section Breadcrumb */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/sotradonsImage/formulair.jpg')",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Soumission de Projet
                </h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col
              lg={16}
              className="text-center space-y-4"
            >
              <Title
                level={3}
                className="text-3xl font-bold"
              >
                Soumettez Votre Projet
              </Title>
              <Paragraph>
                Soumettez votre projet pour contribuer au développement durable,
                à l'éducation, à la santé, et à d'autres causes sociales. Les
                projets soumis doivent répondre aux critères suivants :
                pertinence, impact social et environnemental, faisabilité, et
                durabilité.
              </Paragraph>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="submission-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Informations sur le projet
                  </Title>
                  <Form.Item
                    name="projectTitle"
                    label="Titre du projet"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le titre du projet",
                      },
                    ]}
                  >
                    <Input placeholder="Titre du projet" />
                  </Form.Item>
                  <Form.Item
                    name="projectDescription"
                    label="Description du projet"
                    rules={[
                      { required: true, message: "Veuillez décrire le projet" },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Description du projet"
                    />
                  </Form.Item>

                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Image du projet
                  </Title>
                  <Form.Item
                    name="imageFile"
                    label="Téléchargez une image"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez télécharger une image du projet",
                      },
                    ]}
                  >
                    <Upload
                      listType="picture-card"
                      fileList={imageFile}
                      onChange={handleImageChange}
                      beforeUpload={(file) =>
                        beforeUploadFileValidation(
                          file,
                          ["image/jpeg", "image/png"],
                          2
                        )
                      }
                      maxCount={1}
                      accept=".jpg,.jpeg,.png"
                    >
                      {imageFile.length >= 1 ? null : uploadButton}
                    </Upload>
                  </Form.Item>

                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Détails du projet
                  </Title>
                  <Form.Item
                    name="projectGoals"
                    label="Objectifs et résultats attendus"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez décrire les objectifs du projet",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Objectifs et résultats attendus"
                    />
                  </Form.Item>
                  <Form.Item
                    name="projectTimeline"
                    label="Calendrier"
                    rules={[
                      { required: true, message: "Veuillez indiquer la date" },
                    ]}
                  >
                    <DatePicker.RangePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item
                    name="projectAmount"
                    label="Montant en dollars"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le montant en dollars",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Montant en dollars"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </Form.Item>
                  <Form.Item label="Social Bonds">
                    <Input
                      placeholder="Social Bonds"
                      value={socialBonds}
                      readOnly
                    />
                  </Form.Item>
                  <Form.Item
                    name="projectPartners"
                    label="Partenaires"
                    rules={[
                      {
                        required: false,
                        message:
                          "Veuillez indiquer les partenaires potentiels ou existants",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Noms et rôles des partenaires"
                    />
                  </Form.Item>
                  <Form.Item
                    name="projectIndicators"
                    label="Indicateurs de performance"
                    rules={[
                      {
                        required: true,
                        message:
                          "Veuillez indiquer comment le succès du projet sera mesuré",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Indicateurs de performance"
                    />
                  </Form.Item>

                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Documents à télécharger
                  </Title>
                  <Form.Item
                    name="projectProposal"
                    label="Proposition de projet complète"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e && e.fileList}
                  >
                    <Upload
                      name="proposal"
                      accept=".pdf"
                      onChange={handleFileChange(setProposalFile)}
                      maxCount={1}
                      beforeUpload={(file) =>
                        beforeUploadFileValidation(file, ["application/pdf"], 5)
                      }
                    >
                      <Button icon={<UploadOutlined />}>
                        Télécharger la Proposition
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    name="projectBudgetDetails"
                    label="Budget détaillé"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e && e.fileList}
                  >
                    <Upload
                      name="budget"
                      accept=".pdf"
                      onChange={handleFileChange(setBudgetFile)}
                      maxCount={1}
                      beforeUpload={(file) =>
                        beforeUploadFileValidation(file, ["application/pdf"], 5)
                      }
                    >
                      <Button icon={<UploadOutlined />}>
                        Télécharger le Budget
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    name="supportingDocument"
                    label="Document justificatif"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e && e.fileList}
                  >
                    <Upload
                      name="document"
                      accept=".pdf"
                      onChange={handleFileChange(setFileList)}
                      maxCount={1}
                      beforeUpload={(file) =>
                        beforeUploadFileValidation(file, ["application/pdf"], 5)
                      }
                    >
                      <Button icon={<UploadOutlined />}>
                        Télécharger le Document
                      </Button>
                    </Upload>
                  </Form.Item>

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
                    disabled={submitting}
                  >
                    {submitting
                      ? "Soumission en cours..."
                      : "Soumettre le projet"}
                  </Button>
                </Form>

                <div className="mt-8">
                  <Text>
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a
                      href="#"
                      className="text-[#3bcf93]"
                    >
                      politique de confidentialité
                    </a>{" "}
                    et nos{" "}
                    <a
                      href="#"
                      className="text-[#3bcf93]"
                    >
                      conditions générales
                    </a>
                    .
                  </Text>
                  <Text>
                    Pour plus d'informations sur les critères de sélection et le
                    processus d'évaluation des projets, cliquez{" "}
                    <a
                      href="#"
                      className="text-[#3bcf93]"
                    >
                      ici
                    </a>
                    .
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="support-area py-12">
        <div className="container mx-auto text-center">
          <Title
            level={3}
            className="text-2xl font-bold"
          >
            Besoin d'aide ?
          </Title>
          <Paragraph>
            Pour toute assistance avec la soumission, veuillez nous contacter à{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#3bcf93]"
            >
              support@example.com
            </a>{" "}
            ou appeler le{" "}
            <a
              href="tel:+1234567890"
              className="text-[#3bcf93]"
            >
              +1 234 567 890
            </a>
            .
          </Paragraph>
        </div>
      </div>

      <Footer />
    </div>
  )
};

export default ProjectSubmission;
