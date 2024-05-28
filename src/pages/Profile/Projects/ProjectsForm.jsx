import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Form, Input, DatePicker, Row, Col, Select, Upload, Button, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';


const { Option } = Select;
const { Text } = Typography;

const DATA_URL = "http://localhost:3700/api"


const rules = [
  {
    required: true,
    message: 'Required',
  }
];

function ProjectsForm({ showProjectForm, setShowProjectForm }) {
  const [endDate, setEndDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isProjetCreateSuccessful, setIsProjetCreateSuccessful] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onFinish = async (value) => {

    console.log(value);

    try {
      const { nom, description, type_projet, montant  } = value
      const Prestataire = "6648db74ec2dfe9ed651d1fa"
      const duree = "6 mois"
      const images = ["data:image/jpeg;base64,...", "data:image/jpeg;base64,..."]
      const detail_projet = "data:application/pdf;base64,..."

      console.log('Received values of form: ', nom, description, type_projet, montant, duree, images );

      const response = await axios.post(`${DATA_URL}/projects`, { nom, Prestataire, description, type_projet, montant, duree, images, detail_projet });
      console.log("voici la reponse", response.data)

     
      // window.location.href = "/";


      // Ajoutez ici la logique pour gérer la réponse de votre backend
      if (response.status === 201) { // Check for successful registration response
        setIsProjetCreateSuccessful(true);
        setSuccessMessage('Connexion réussie ! :', isProjetCreateSuccessful, successMessage); // Set success message
        // Optionally, perform other actions like clearing the form

      } else {
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      if (error.response) {
        // Erreur avec réponse du serveur
        console.error('Erreur de réponse du serveur:', error.response);

      } else {
        // Erreur de configuration ou autre
        console.error('Erreur lors de la requête:', error.message);
      }
    }

    // -------------------------------------------------------------------------------------------------

  };

  const handleDateChange = (date) => {
    setEndDate(date);
    calculateTimeLeft(date);
  };

  const calculateTimeLeft = (endDate) => {
    const now = moment();
    const duration = moment.duration(endDate.diff(now));
    const timeLeft = {
      months: duration.months(),
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
    setTimeLeft(timeLeft);
  };

  useEffect(() => {
    if (endDate) {
      const timer = setInterval(() => calculateTimeLeft(endDate), 1000);
      return () => clearInterval(timer);
    }
  }, [endDate]);

  const formRef = React.useRef(null);
  return (
    <Modal
      title=""
      open={showProjectForm}
      onCancel={() => setShowProjectForm(false)}
      centered
      width={1000}
      okText="Save"
      onOk={() => {
        formRef.current.submit();
      }}
    >
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab="Général" key="1">
          <Form layout='vertical' ref={formRef} onFinish={onFinish}>
            <Form.Item label="Nom du Projet" name="nom" rules={rules}>
              <Input type="text" />
            </Form.Item>

            <Form.Item label="Description" name="description" rules={rules}>
              <Input.TextArea />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Montant Recherché" name="montant" rules={rules}>
                  <Input type="number" prefix="$" suffix="USD" />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Type de Projet" name="type_projet" rules={rules}>
                  <Select>
                    <Option value="education_formation">Éducation et formation</Option>
                    <Option value="sante_bien_etre">Santé et bien-être</Option>
                    <Option value="logement_infrastructures">Logement et infrastructures</Option>
                    <Option value="emploi_developpement_economique">Emploi et développement économique</Option>
                    <Option value="protection_enfance_personnes_vulnerables">Protection de l enfance et des personnes vulnérables</Option>
                    <Option value="environnement_developpement_durable">Environnement et développement durable</Option>
                    <Option value="culture_loisirs">Culture et loisirs</Option>
                    <Option value="justice_sociale_droits_homme">Justice sociale et droits de l homme</Option>
                    <Option value="securite_alimentaire">Sécurité alimentaire</Option>
                    <Option value="integration_cohesion_sociale">Intégration et cohésion sociale</Option>
                    <Option value="prevention_violence_securite_communautaire">Prévention de la violence et sécurité communautaire</Option>
                    <Option value="autonomisation_femmes">Autonomisation des femmes</Option>
                    <Option value="aide_refugies_migrants">Aide aux réfugiés et aux migrants</Option>
                    <Option value="soutien_personnes_handicapees">Soutien aux personnes handicapées</Option>
                    <Option value="promotion_paix_reconciliation">Promotion de la paix et de la réconciliation</Option>
                    <Option value="acces_eau_potable_assainissement">Accès à l eau potable et assainissement</Option>
                    <Option value="preservation_patrimoine_culturel">Préservation du patrimoine culturel</Option>
                    <Option value="lutte_toxicomanie">Lutte contre la toxicomanie</Option>
                    <Option value="formation_competences_numeriques">Formation en compétences numériques</Option>
                    <Option value="sensibilisation_education_environnementale">Sensibilisation et éducation environnementale</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Durée" name="duration" rules={rules}>
                  <DatePicker picker="month" onChange={handleDateChange} />
                </Form.Item>
              </Col>
            </Row>

            {timeLeft && (
              <div style={{ marginTop: 16 }}>
                <Text strong>Temps restant: </Text>
                <Text>{`${timeLeft.months} mois, ${timeLeft.days} jours, ${timeLeft.hours} heures, ${timeLeft.minutes} minutes, ${timeLeft.seconds} secondes`}</Text>
              </div>
            )}

            <Form.Item label="Détail du Projet (PDF)" name="projectDetails">
              <Upload accept=".pdf" maxCount={1}>
                <Button icon={<UploadOutlined />}>Télécharger le fichier PDF</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Images" key="2">
          <h1>Images</h1>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

ProjectsForm.propTypes = {
  showProjectForm: PropTypes.bool.isRequired,
  setShowProjectForm: PropTypes.func.isRequired,
};

export default ProjectsForm;
