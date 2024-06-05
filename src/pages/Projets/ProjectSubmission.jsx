import { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, Typography, DatePicker, Upload, message } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';

const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

const ProjectSubmission = () => {
  const [imageList, setImageList] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [amount, setAmount] = useState('');
  const [socialBonds, setSocialBonds] = useState(0);

  const handleImageChange = ({ fileList }) => setImageList(fileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = (values) => {
    setSubmitting(true);
    console.log('Form values: ', values);

    // Simulate a server request
    setTimeout(() => {
      message.success('Projet soumis avec succès!');
      setSubmitting(false);
    }, 2000);
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
    const convertedValue = value * 1.2; // Exemple de conversion : 1 dollar = 1.2 social bonds
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
                Soumettez votre projet pour contribuer au développement durable, à l'éducation, à la santé, et à d'autres causes sociales. 
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
                    name="projectImage" 
                    label="Téléchargez une image"
                    rules={[{ required: true, message: 'Veuillez télécharger une image du projet' }]}>
                    <Upload
                      action="/upload.do"
                      listType="picture-card"
                      fileList={imageList}
                      onChange={handleImageChange}
                      beforeUpload={() => false}
                      maxCount={1}
                      accept=".jpg,.jpeg,.png"
                    >
                      {imageList.length >= 1 ? null : uploadButton}
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
                    getValueFromEvent={(e) => e && e.fileList}>
                    <Upload 
                      name="proposal" 
                      action="/upload.do" 
                      listType="pdf" 
                      maxCount={1} 
                      accept=".pdf">
                      <Button icon={<UploadOutlined />}>Télécharger la proposition de projet</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item 
                    name="projectBudgetDetails" 
                    label="Budget détaillé" 
                    valuePropName="fileList" 
                    getValueFromEvent={(e) => e && e.fileList}>
                    <Upload 
                      name="budget" 
                      action="/upload.do" 
                      listType="pdf" 
                      maxCount={1} 
                      accept=".pdf">
                      <Button icon={<UploadOutlined />}>Télécharger le budget détaillé</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item 
                    name="supportingDocuments" 
                    label="Documents justificatifs" 
                    valuePropName="fileList" 
                    getValueFromEvent={(e) => e && e.fileList}>
                    <Upload 
                      name="documents" 
                      action="/upload.do" 
                      listType="pdf" 
                      multiple 
                      accept=".pdf">
                      <Button icon={<UploadOutlined />}>Télécharger les documents justificatifs</Button>
                    </Upload>
                  </Form.Item>

                  <Button 
                    type="primary" 
                    shape="round" 
                    className="bg-[#3bcf93] border-none mt-4" 
                    htmlType="submit" 
                    disabled={submitting}>
                    {submitting ? 'Soumission en cours...' : 'Soumettre le projet'}
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
