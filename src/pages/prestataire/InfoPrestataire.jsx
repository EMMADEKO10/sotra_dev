import { useState } from 'react';
import { Button, Form, Input, Select, Row, Col, Card, Typography, Checkbox, message } from 'antd';
import Navbar from '../../components/Navbars/NavBar';
import Footer from '../../components/Footer';
import 'tailwindcss/tailwind.css';
import axios from "axios"

const { TextArea } = Input;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const provincesRDC = [
  'Bas-Uele', 'Équateur', 'Haut-Katanga', 'Haut-Lomami', 'Haut-Uele', 'Ituri', 'Kasaï', 'Kasaï-Central', 'Kasaï-Oriental',
  'Kinshasa', 'Kongo-Central', 'Kwango', 'Kwilu', 'Lomami', 'Lualaba', 'Mai-Ndombe', 'Maniema', 'Mongala', 'Nord-Kivu',
  'Nord-Ubangi', 'Sankuru', 'Sud-Kivu', 'Sud-Ubangi', 'Tanganyika', 'Tshopo', 'Tshuapa'
].sort();

const InfoPrestataire = () => {
  const [form] = Form.useForm();
  const token = localStorage.getItem('token'); // Supposez que vous stockez le token sous le nom 'token'
  const user = localStorage.getItem("user")
  const [submitting, setSubmitting] = useState(false);
  const [otherOrganizationType, setOtherOrganizationType] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleStartProjectClick = () => {
    if (!token) {
      setIsModalVisible(true);
    } else {
      // Logique pour démarrer un projet
    }
  };
// ------------------------------------------------------------
  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (values.agree) {
        setIsModalVisible(false);
        history.push('/devenir-prestataire');
      }
    }).catch(info => {
      console.log('Validation Failed:', info);
    });
  };
  // ---------------------------------------------------------------
  const handleSubmit = async (values) => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const sanitizedValues = {
      ...values,
      organizationName: values.organizationName.trim(),
      address: values.address.trim(),
      website: values.website?.trim(),
      representativeName: values.representativeName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      services: values.services.trim(),
      geographicAreas: values.geographicAreas,
      projects: values.projects.trim(),
      specificOrganizationType: values.specificOrganizationType?.trim(),
    };

    try {
      const formData = new FormData();

      for (const key in sanitizedValues) {
        if (Array.isArray(sanitizedValues[key])) {
          sanitizedValues[key].forEach((value, index) => {
            formData.append(`${key}[${index}]`, value);
          });
        } else {
          formData.append(key, sanitizedValues[key]);
        }
      }

      formData.append('iduser', user)

      console.log("sanitizedValues : ", sanitizedValues);

      const response = await axios.post(`${apiUrl}/prestataire`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Erreur de soumission : Veuillez réessayer plus tard.');
    } finally {
      setSubmitting(false);
    }

    // ------------------------------------------------------------------------------------------------

  };


  return (
    <div>
      <Navbar />

      {/* Début de la section d'en-tête */}
      <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/sotradonsImage/5.jpg')" }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Enregistrement pour Prestataires Sociaux
                </h2>
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
            <Col
              lg={16}
              className="text-center space-y-4"
            >
              <Title
                level={3}
                className="text-3xl font-bold"
              >
                Devenez un Prestataire Social
              </Title>
              <Paragraph>
                Rejoignez notre réseau de prestataires sociaux et bénéficiez de
                Visibilité, Crédibilité et Financement. Contribuez aux
                initiatives de RSE et faites une différence significative dans
                la communauté.
              </Paragraph>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Fin de l'introduction */}

      {/* Début du formulaire d'enregistrement */}
      <div className="registration-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                >
                  {/* Informations de l'organisation */}
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Informations de l'organisation
                  </Title>
                  <Form.Item
                    name="organizationName"
                    label="Nom de l'organisation"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le nom de l'organisation",
                      },
                    ]}
                  >
                    <Input placeholder="Nom de l'organisation" />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    label="Adresse"
                    rules={[
                      { required: true, message: "Veuillez entrer l'adresse" },
                    ]}
                  >
                    <Input placeholder="Adresse" />
                  </Form.Item>
                  <Form.Item
                    name="website"
                    label="Site web"
                    rules={[
                      {
                        type: "url",
                        message: "Veuillez entrer une URL valide",
                      },
                    ]}
                  >
                    <Input placeholder="https://example.com" />
                  </Form.Item>
                  {/* ------------------------------------------------------------------ */}
                  <Form.Item
                    name="email"
                    label="Adresse e-mail"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer l'adresse e-mail",
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="email@example.com" />
                  </Form.Item>
                  {/* ------------------------------------------------------------------------------------------ */}
                  <Form.Item
                    name="organizationType"
                    label="Type d'organisation"
                    rules={[
                      {
                        required: !otherOrganizationType,
                        message: "Veuillez sélectionner le type d'organisation",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Sélectionnez le type d'organisation"
                      disabled={otherOrganizationType}
                    >
                      <Option value="association">Association</Option>
                      <Option value="ngo">ONG</Option>
                      <Option value="socialEnterprise">
                        Entreprise sociale
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Checkbox
                      checked={otherOrganizationType}
                      onChange={(e) =>
                        setOtherOrganizationType(e.target.checked)
                      }
                    >
                      Autre type d'organisation
                    </Checkbox>
                  </Form.Item>
                  {otherOrganizationType && (
                    <Form.Item
                      name="specificOrganizationType"
                      label="Type d'organisation spécifique"
                      rules={[
                        {
                          required: true,
                          message:
                            "Veuillez indiquer le type d'organisation spécifique",
                        },
                      ]}
                    >
                      <Input placeholder="Type d'organisation spécifique" />
                    </Form.Item>
                  )}

                  {/* Informations de contact */}
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Informations de contact
                  </Title>
                  <Form.Item
                    name="representativeName"
                    label="Nom du représentant"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le nom du représentant",
                      },
                    ]}
                  >
                    <Input placeholder="Nom du représentant" />
                  </Form.Item>
                  <Form.Item
                    name="emailRepresant"
                    label="Adresse e-mail"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer l'adresse e-mail",
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="email@example.com" />
                  </Form.Item>

                  <Form.Item

                    name="phone"
                    label="Numéro de téléphone"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le numéro de téléphone",
                      },
                    ]}
                  >
                    <Input placeholder="Numéro de téléphone" />
                  </Form.Item>

                  <Form.Item

                    name="phone2"
                    label="Deuxième Numéro de téléphone"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le deuxième numéro de téléphone",
                      },
                    ]}
                  >
                    <Input placeholder="Numéro de téléphone" />
                  </Form.Item>

                  <Form.Item
                    label="Mot de passe"
                    name="password"
                    rules={[
                      { required: true, message: 'Veuillez entrer votre mot de passe!' },
                      { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }
                    ]}
                  >
                    <Input type='password' placeholder="Mot de passe" className="rounded-md" />
                  </Form.Item>


                  <Form.Item
                    label="Confirmer le mot de passe"
                    name="password2"
                    rules={[
                      { required: true, message: 'Veuillez confirmer votre mot de passe!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Les mots de passe ne correspondent pas!'));
                        },
                      }),
                    ]}
                  >
                    <Input placeholder="Mot de passe" />
                  </Form.Item>




                  {/* Champs spécifiques */}
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Détails spécifiques
                  </Title>
                  <Form.Item
                    name="services"
                    label="Description des services offerts"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez décrire les services offerts",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Description des services offerts"
                    />
                  </Form.Item>
                  <Form.Item
                    name="geographicAreas"
                    label="Zones géographiques d'intervention"
                    rules={[
                      {
                        required: true,
                        message:
                          "Veuillez indiquer les zones géographiques d'intervention",
                      },
                    ]}
                  >
                    <Select
                      mode="multiple"
                      placeholder="Sélectionnez les zones géographiques d'intervention"
                    >
                      {provincesRDC.map((province) => (
                        <Option
                          key={province}
                          value={province}
                        >
                          {province}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="projects"
                    label="Projets en cours ou précédents"
                    rules={[
                      {
                        required: true,
                        message:
                          "Veuillez décrire les projets en cours ou précédents",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Projets en cours ou précédents"
                    />
                  </Form.Item>

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
                    loading={submitting}
                  >
                    Soumettre
                  </Button>
                </Form>

                {/* Informations complémentaires */}
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
                    processus d'évaluation des prestataires, cliquez{" "}
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
      {/* Fin du formulaire d'enregistrement */}

      {/* Début de la section Assistance et Support */}
      <div className="support-area py-12">
        <div className="container mx-auto text-center">
          <Title
            level={3}
            className="text-2xl font-bold"
          >
            Besoin d'aide ?
          </Title>
          <Paragraph>
            Pour toute assistance avec l'inscription, veuillez nous contacter à{" "}
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
      {/* Fin de la section Assistance et Support */}

      <Footer />
    </div>
  )
};

export default InfoPrestataire;
