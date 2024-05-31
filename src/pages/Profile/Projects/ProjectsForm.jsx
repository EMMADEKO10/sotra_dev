import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Tabs, Form, Input, Row, Col, Select, DatePicker, Upload, Button, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import PropTypes from 'prop-types';

const { Option } = Select;
const { Text } = Typography;


function ProjectsForm({ showProjectForm, setShowProjectForm }) {
  
  const [endDate, setEndDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isProjetCreateSuccessful, setIsProjetCreateSuccessful] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [images, setImageFiles] = useState([]);
  const [imageBackGround, setImageBackGround] = useState(null)

  const onFinish = async (value) => {

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const { nom, description, type_projet, montant } = value;
      const Prestataire = "6648db74ec2dfe9ed651d1fa";
      const duration = "20-2023"
         
      console.log('Received values of form: ', nom, description, type_projet, montant, duration );

      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('Prestataire', Prestataire);
      formData.append('description', description);
      formData.append('type_projet', type_projet);
      formData.append('montant', montant);
      formData.append('duree', duration);
      formData.append('background', imageBackGround);
  
      images.forEach((file,) => {
        formData.append('images', file);
        console.log('Received values of form: ', nom, description, type_projet, montant, duration,file);
        console.log("images : ", file, successMessage, isProjetCreateSuccessful)
        });
      

      if (pdfFile) {
        formData.append('detail_projet', pdfFile);
      }
      console.log('Received values of form: ', nom, description, type_projet, montant, duration, );

      const response = await axios.post(`${apiUrl}/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("voici la reponse", response.data);

      if (response.status === 201) {
        setIsProjetCreateSuccessful(true);
        setSuccessMessage('Connexion réussie !');
      } else {
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      if (error.response) {
        console.error('Erreur de réponse du serveur:', error.response);
      } else {
        console.error('Erreur lors de la requête:', error.message);
      }
    }
  };


  const handleBackImageUpload = ({ fileList }) => {
    setImageBackGround(fileList[0].originFileObj); // On suppose qu'un seul fichier de fond est téléchargé
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

  const handlePdfUpload = (fileList) => {
    if (fileList.length > 0 && fileList[0].status === 'done') {
      const uploadedFile = fileList[0].originFileObj;
      setPdfFile(uploadedFile);
    }
  };


  const handleImageUpload = ({ fileList }) => {
    setImageFiles(fileList.map(file => file.originFileObj));
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
            <Form.Item label="Nom du Projet" name="nom" rules={[{ required: true, message: 'Veuillez entrer le nom du projet' }]}>
              <Input type="text" />
            </Form.Item>

            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Veuillez entrer la description du projet' }]}>
              <Input.TextArea />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Montant Recherché" name="montant" rules={[{ required: true, message: 'Veuillez entrer le montant recherché' }]}>
                  <Input type="number" prefix="$" suffix="USD" />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Type de Projet" name="type_projet" rules={[{ required: true, message: 'Veuillez sélectionner le type de projet' }]}>
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
                <Form.Item label="Durée" name="duration" rules={[{ required: true, message: 'Veuillez sélectionner la durée du projet' }]}>
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
              <Upload accept=".pdf" maxCount={1} onChange={handlePdfUpload}>
                <Button icon={<UploadOutlined />}>Télécharger le fichier PDF</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Images" key="2">
          <h1>Images</h1>
          <Upload accept=".jpg,.jpeg,.png" multiple onChange={handleImageUpload}>
            <Button icon={<UploadOutlined />}>Télécharger les images</Button>
          </Upload>
          <h1>BackGround image</h1>
          <Upload accept=".jpg,.jpeg,.png" multiple onChange={handleBackImageUpload}>
            <Button icon={<UploadOutlined />}>Télécharger le background</Button>
          </Upload>
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
























// import React, { useState, useEffect } from 'react';
// import { Modal, Tabs, Form, Input, DatePicker, Row, Col, Select, Upload, Button, Typography } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
// import moment from 'moment';
// import axios from 'axios';


// const { Option } = Select;
// const { Text } = Typography;

// const DATA_URL = "http://localhost:3700/api"


// const rules = [
//   {
//     required: true,
//     message: 'Required',
//   }
// ];

// function ProjectsForm({ showProjectForm, setShowProjectForm }) {
//   const [endDate, setEndDate] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(null);
//   const [isProjetCreateSuccessful, setIsProjetCreateSuccessful] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const onFinish = async (value) => {

//     console.log(value);

//     try {
//       const { nom, description, type_projet, montant  } = value
//       const Prestataire = "6648db74ec2dfe9ed651d1fa"
//       const duree = "6 mois"
//       const images = ["data:image/jpeg;base64,...", "data:image/jpeg;base64,..."]
//       const detail_projet = "data:application/pdf;base64,..."

//       console.log('Received values of form: ', nom, description, type_projet, montant, duree, images );

//       const response = await axios.post(`${DATA_URL}/projects`, { nom, Prestataire, description, type_projet, montant, duree, images, detail_projet });
//       console.log("voici la reponse", response.data)

      
//       // Ajoutez ici la logique pour gérer la réponse de votre backend
//       if (response.status === 201) { // Check for successful registration response
//         setIsProjetCreateSuccessful(true);
//         setSuccessMessage('Connexion réussie ! :', isProjetCreateSuccessful, successMessage); // Set success message
//         // Optionally, perform other actions like clearing the form

//       } else {
//         // Handle unsuccessful registration (e.g., display error message)
//       }
//     } catch (error) {
//       if (error.response) {
//         // Erreur avec réponse du serveur
//         console.error('Erreur de réponse du serveur:', error.response);

//       } else {
//         // Erreur de configuration ou autre
//         console.error('Erreur lors de la requête:', error.message);
//       }
//     }

//     // -------------------------------------------------------------------------------------------------

//   };

//   const handleDateChange = (date) => {
//     setEndDate(date);
//     calculateTimeLeft(date);
//   };

//   const calculateTimeLeft = (endDate) => {
//     const now = moment();
//     const duration = moment.duration(endDate.diff(now));
//     const timeLeft = {
//       months: duration.months(),
//       days: duration.days(),
//       hours: duration.hours(),
//       minutes: duration.minutes(),
//       seconds: duration.seconds(),
//     };
//     setTimeLeft(timeLeft);
//   };

//   useEffect(() => {
//     if (endDate) {
//       const timer = setInterval(() => calculateTimeLeft(endDate), 1000);
//       return () => clearInterval(timer);
//     }
//   }, [endDate]);

//   const formRef = React.useRef(null);
//   return (
//     <Modal
//       title=""
//       open={showProjectForm}
//       onCancel={() => setShowProjectForm(false)}
//       centered
//       width={1000}
//       okText="Save"
//       onOk={() => {
//         formRef.current.submit();
//       }}
//     >
//       <Tabs defaultActiveKey='1'>
//         <Tabs.TabPane tab="Général" key="1">
//           <Form layout='vertical' ref={formRef} onFinish={onFinish}>
//             <Form.Item label="Nom du Projet" name="nom" rules={rules}>
//               <Input type="text" />
//             </Form.Item>

//             <Form.Item label="Description" name="description" rules={rules}>
//               <Input.TextArea />
//             </Form.Item>

//             <Row gutter={16}>
//               <Col span={8}>
//                 <Form.Item label="Montant Recherché" name="montant" rules={rules}>
//                   <Input type="number" prefix="$" suffix="USD" />
//                 </Form.Item>
//               </Col>

//               <Col span={8}>
//                 <Form.Item label="Type de Projet" name="type_projet" rules={rules}>
//                   <Select>
//                     <Option value="education_formation">Éducation et formation</Option>
//                     <Option value="sante_bien_etre">Santé et bien-être</Option>
//                     <Option value="logement_infrastructures">Logement et infrastructures</Option>
//                     <Option value="emploi_developpement_economique">Emploi et développement économique</Option>
//                     <Option value="protection_enfance_personnes_vulnerables">Protection de l enfance et des personnes vulnérables</Option>
//                     <Option value="environnement_developpement_durable">Environnement et développement durable</Option>
//                     <Option value="culture_loisirs">Culture et loisirs</Option>
//                     <Option value="justice_sociale_droits_homme">Justice sociale et droits de l homme</Option>
//                     <Option value="securite_alimentaire">Sécurité alimentaire</Option>
//                     <Option value="integration_cohesion_sociale">Intégration et cohésion sociale</Option>
//                     <Option value="prevention_violence_securite_communautaire">Prévention de la violence et sécurité communautaire</Option>
//                     <Option value="autonomisation_femmes">Autonomisation des femmes</Option>
//                     <Option value="aide_refugies_migrants">Aide aux réfugiés et aux migrants</Option>
//                     <Option value="soutien_personnes_handicapees">Soutien aux personnes handicapées</Option>
//                     <Option value="promotion_paix_reconciliation">Promotion de la paix et de la réconciliation</Option>
//                     <Option value="acces_eau_potable_assainissement">Accès à l eau potable et assainissement</Option>
//                     <Option value="preservation_patrimoine_culturel">Préservation du patrimoine culturel</Option>
//                     <Option value="lutte_toxicomanie">Lutte contre la toxicomanie</Option>
//                     <Option value="formation_competences_numeriques">Formation en compétences numériques</Option>
//                     <Option value="sensibilisation_education_environnementale">Sensibilisation et éducation environnementale</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col span={8}>
//                 <Form.Item label="Durée" name="duration" rules={rules}>
//                   <DatePicker picker="month" onChange={handleDateChange} />
//                 </Form.Item>
//               </Col>
//             </Row>

//             {timeLeft && (
//               <div style={{ marginTop: 16 }}>
//                 <Text strong>Temps restant: </Text>
//                 <Text>{`${timeLeft.months} mois, ${timeLeft.days} jours, ${timeLeft.hours} heures, ${timeLeft.minutes} minutes, ${timeLeft.seconds} secondes`}</Text>
//               </div>
//             )}

//             <Form.Item label="Détail du Projet (PDF)" name="projectDetails">
//               <Upload accept=".pdf" maxCount={1}>
//                 <Button icon={<UploadOutlined />}>Télécharger le fichier PDF</Button>
//               </Upload>
//             </Form.Item>
//           </Form>
//         </Tabs.TabPane>

//         <Tabs.TabPane tab="Images" key="2">
//           <h1>Images</h1>
//           <div>
//             <input type="file" name="" id="" />
//           </div>
//         </Tabs.TabPane>
//       </Tabs>
//     </Modal>
//   );
// }

// ProjectsForm.propTypes = {
//   showProjectForm: PropTypes.bool.isRequired,
//   setShowProjectForm: PropTypes.func.isRequired,
// };

// export default ProjectsForm;
