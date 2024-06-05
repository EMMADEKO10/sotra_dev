import { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Typography, DatePicker, Upload, } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios'
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const ProjectSubmission = () => {
  const [imageFile, setProjectFile] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [amount, setAmount] = useState('');
  const [socialBonds, setSocialBonds] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [proposalFile, setProposalFile] = useState(null);
  const [budgetFile, setBudgetFile] = useState(null);



  const handleDocumentChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleImageChange = ({ fileList }) => setProjectFile(fileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleFileChange = (setFileFunc) => ({ fileList }) => {
    setFileFunc(fileList);
  };

  const onFinish = async (values) => {

    setSubmitting(true);

    const projectImage = imageFile[0]?.originFileObj;

    const apiUrl = import.meta.env.VITE_API_URL;
    const { projectTitle, projectDescription, projectGoals, projectTimeline,
      projectAmount, projectPartners, projectIndicators } = values;


    const formData = new FormData();
    formData.append('projectTitle', projectTitle);
    formData.append('projectDescription', projectDescription);
    formData.append('projectImage', projectImage); // This assumes projectImage is a file object
    formData.append('projectGoals', projectGoals);
    formData.append('projectTimeline', JSON.stringify(projectTimeline)); // Convert array to JSON string
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

      console.log('Received values of formData : ', formData);

      const response = await axios.post(`${apiUrl}/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Response: ", response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
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

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const convertedValue = value * 0.001; // Exemple de conversion : 1 dollar = 1.2 social bonds
    setSocialBonds(convertedValue.toFixed(2));
  };

  return (
    <div>
      <Navbar />

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

      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <Title level={3} className="text-3xl font-bold">Soumettez Votre Projet</Title>
              <Paragraph>
                Soumettez votre projet pour contribuer au développement durable, à l `&apos;` éducation, à la santé, et à d `&apos;` autres causes sociales.
                Les projets soumis doivent répondre aux critères suivants : pertinence, impact social et environnemental, faisabilité, et durabilité.
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
                <Form layout="vertical" onFinish={onFinish} validateMessages={validateMessages}>
                  <Title level={4} className="text-xl font-bold mb-4">Informations sur le projet</Title>
                  <Form.Item
                    name="projectTitle"
                    label="Titre du projet"
                    rules={[{ required: true, message: 'Veuillez entrer le titre du projet' }]}>
                    <Input placeholder="Titre du projet" />
                  </Form.Item>
                  <Form.Item
                    name="projectDescription"
                    label="Description du projet"
                    rules={[{ required: true, message: 'Veuillez décrire le projet' }]}>
                    <TextArea rows={4} placeholder="Description du projet" />
                  </Form.Item>

                  <Title level={4} className="text-xl font-bold mb-4">Image du projet</Title>
                  <Form.Item
                    name="imageFile"
                    label="Téléchargez une image"
                    rules={[{ required: true, message: 'Veuillez télécharger une image du projet' }]}>
                    <Upload
                      action="/upload.do"
                      listType="picture-card"
                      fileList={imageFile}
                      onChange={handleImageChange}
                      beforeUpload={() => false}
                      maxCount={1}
                      accept=".jpg,.jpeg,.png"
                    >
                      {imageFile.length >= 1 ? null : uploadButton}
                    </Upload>
                  </Form.Item>

                  <Title level={4} className="text-xl font-bold mb-4">Détails du projet</Title>
                  <Form.Item
                    name="projectGoals"
                    label="Objectifs et résultats attendus"
                    rules={[{ required: true, message: 'Veuillez décrire les objectifs du projet' }]}>
                    <TextArea rows={4} placeholder="Objectifs et résultats attendus" />
                  </Form.Item>
                  <Form.Item
                    name="projectTimeline"
                    label="Calendrier"
                    rules={[{ required: true, message: 'Veuillez indiquer la date' }]}>
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="projectAmount"
                    label="Montant en dollars"
                    rules={[{ required: true, message: 'Veuillez entrer le montant en dollars' }]}>
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
                    rules={[{ required: false, message: 'Veuillez indiquer les partenaires potentiels ou existants' }]}>
                    <TextArea rows={4} placeholder="Noms et rôles des partenaires" />
                  </Form.Item>
                  <Form.Item
                    name="projectIndicators"
                    label="Indicateurs de performance"
                    rules={[{ required: true, message: 'Veuillez indiquer comment le succès du projet sera mesuré' }]}>
                    <TextArea rows={4} placeholder="Indicateurs de performance" />
                  </Form.Item>

                  <Title level={4} className="text-xl font-bold mb-4">Documents à télécharger</Title>
                  <Form.Item
                    name="projectProposal"
                    label="Proposition de projet complète"
                    valuePropName="fileList"
                    getValueFromEvent={e => e && e.fileList}
                  >
                    <Upload
                      name="proposal"
                      accept=".pdf"
                      onChange={handleFileChange(setProposalFile)}
                      maxCount={1}
                      beforeUpload={() => false}
                    >
                      <Button icon={<UploadOutlined />}>Upload Proposal</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    name="projectBudgetDetails"
                    label="Budget détaillé"
                    valuePropName="fileList"
                    getValueFromEvent={e => e && e.fileList}
                  >
                    <Upload
                      name="budget"
                      accept=".pdf"
                      onChange={handleFileChange(setBudgetFile)}
                      maxCount={1}
                      beforeUpload={() => false}
                    >
                      <Button icon={<UploadOutlined />}>Upload Budget</Button>
                    </Upload>
                  </Form.Item>
          
                  <Form.Item
                    name="supportingDocument"
                    label="Document justificatif"
                    valuePropName="fileList"
                    getValueFromEvent={e => e && e.fileList}
                  >
                    <Upload
                      name="document"
                      accept=".pdf"
                      onChange={handleDocumentChange}
                      maxCount={1}
                      beforeUpload={() => false} // Prevent auto upload
                    >
                      <Button icon={<UploadOutlined />}>Upload Document</Button>
                    </Upload>
                  </Form.Item>

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
                    disabled={submitting}>
                    {/* {submitting ? 'Soumission en cours...' : 'Soumettre le projet'} */}
                    Soumettre le projet
                  </Button>
                </Form>

                <div className="mt-8">
                  <Text>En soumettant ce formulaire, vous acceptez notre <a href="#" className="text-[#3bcf93]">politique de confidentialité</a> et nos <a href="#" className="text-[#3bcf93]">conditions générales</a>.</Text>
                  <Text>Pour plus d'informations sur les critères de sélection et le processus d'évaluation des projets, cliquez <a href="#" className="text-[#3bcf93]">ici</a>.</Text>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="support-area py-12">
        <div className="container mx-auto text-center">
          <Title level={3} className="text-2xl font-bold">Besoin d'aide ?</Title>
          <Paragraph>Pour toute assistance avec la soumission, veuillez nous contacter à <a href="mailto:support@example.com" className="text-[#3bcf93]">support@example.com</a> ou appeler le <a href="tel:+1234567890" className="text-[#3bcf93]">+1 234 567 890</a>.</Paragraph>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectSubmission;
