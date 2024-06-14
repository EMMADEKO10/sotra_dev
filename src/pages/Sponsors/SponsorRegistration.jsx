import { useState } from "react";
import { Button, Form, Input, Select, Row, Col, Card, Typography, Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import Navbar from "../../components/Navbars/NavBar";
import Footer from "../../components/Footer";
import "tailwindcss/tailwind.css";
import { NavLink } from "react-router-dom";
import axios from "axios"

const { TextArea } = Input;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const SponsorRegistration = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherSector, setShowOtherSector] = useState(false)
  const [amount, setAmount] = useState("")
  const [socialBonds, setSocialBonds] = useState(0)
  const [logoFile, setLogoFile] = useState(null)
  const [notification, setNotification] = useState(null)

  const token = localStorage.getItem('token'); // Supposez que vous stockez le token sous le nom 'token'
  const user = localStorage.getItem("user")
  
  const handleSectorChange = (value) => {
    setShowOtherSector(value === "other")
  }

  // ----------------------------------------------------------------------
  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value)) {
      setAmount(value)
      setSocialBonds((value * 0.001).toFixed(2))
    } else {
      setAmount("")
      setSocialBonds(0)
    }
  }

  // -----------------------------------------------------------------

  // ----------------------------------------------------------------------handleLogoUpload

  const handleLogoUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isJpgOrPng) {
      setNotification({
        type: "error",
        message: "Vous ne pouvez télécharger que des fichiers JPG/PNG!",
      })
      return Upload.LIST_IGNORE
    }

    if (!isLt2M) {
      setNotification({
        type: "error",
        message: "L'image doit être inférieure à 2 Mo!",
      })
      return Upload.LIST_IGNORE
    }

    setLogoFile(file)
    return false // Empêche l'upload automatique
  }
  // --------------------------------------------------------------------------------------------LOGO
  // ---------------------------------------------------------------------------ONFINISH
  const onFinish = async (values) => {


    const apiUrl = import.meta.env.VITE_API_URL;

    console.log("values: ", values);

    const {
      sponsorshipGoals,
      address,
      phone,
      budget,
      industry,
      email,
      website,
      password,
      companyName,
      representativeName,
      otherSector,
      AutherPhone,
    } = values;

    const formData = new FormData();
    formData.append('sponsorshipGoals', sponsorshipGoals);
    formData.append('address', address);
    formData.append('budget', budget); // Ce code assume que projectImage est un objet fichier
    formData.append('phone', phone);
    formData.append('AutherPhone', AutherPhone);
    formData.append('industry', industry);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('logo', logoFile);
    formData.append('website', website);
    formData.append('companyName', companyName);
    formData.append('representativeName', representativeName);
    formData.append('otherSector', otherSector); 



    try {
      
      console.log("formData.get :", formData.get("iduser"))
      console.log(" user._id :", user)

      //Envoyer les données à l'API
      const response = await axios.post(`${apiUrl}/sponsors`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': 'your-csrf-token', // Ajouter un token CSRF pour la sécurité si nécessaire
        },
      });

      console.log(response.data)

      // Afficher une notification de succès
      
    } catch (error) {
      console.error('Error submitting the form', error);

      // Afficher une notification d'erreur
      // openNotificationWithIcon('error', 'Erreur de soumission', 'Une erreur est survenue lors de la soumission de votre projet. Veuillez réessayer.');
    } 

    if (!isSubmitting) {
      setIsSubmitting(true)
      try {
        // Ajouter votre logique de soumission ici
        // Par exemple, envoyer les données à une API
        console.log("Form data: ", values)

        if (logoFile) {
          // Logique de téléchargement du logo
          const formData = new FormData()
          formData.append("logo", logoFile)
          // Envoyer formData à votre API ou service de stockage
        }

        // Simuler une soumission asynchrone
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setNotification({
          type: "success",
          message: "Formulaire soumis avec succès !",
        })
        form.resetFields()
        setLogoFile(null) // Réinitialiser le logoFile après la soumission
      } catch (error) {
        console.error("Erreur lors de la soumission :", error)
        setNotification({
          type: "error",
          message: "Erreur lors de la soumission du formulaire.",
        })
      } finally {
         setIsSubmitting(false)
      }
    }
    // ----------------------------------------------------------------ONFINISH
  }
  // -----------------------------------------------------------REGISTRATION
  return (
    <div>
      <Navbar />

      {/* Section Breadcrumb */}
     <div
        className="breadcrumb-area relative text-center shadow-lg bg-fixed p-12 bg-cover bg-center"
        style={{ backgroundImage: "url(src/assets/sotradonsImage/10.jpg)" }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto z-10">
          <div className="breadcrumb-items">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                Enregistrement pour Sponsors
                </h2>
              </div>
            </div>
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
                Devenez un Sponsor
              </Title>
              <Paragraph>
                Rejoignez notre réseau de sponsors et bénéficiez de nombreux
                avantages tels que la visibilité accrue, un risque faible grâce
                à des projets bien identifiés et des prestataires accrédités.
                Votre soutien contribue directement aux projets de
                responsabilité sociétale.
              </Paragraph>
              <div className="heading-divider mx-auto w-20 h-1 bg-[#3bcf93]"></div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="registration-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                {notification && (
                  <div className={`mb-4 alert alert-${notification.type}`}>
                    {notification.message}
                  </div>
                )}
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={onFinish}
                >
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Informations de l'entreprise
                  </Title>
                  <Form.Item
                    name="companyName"
                    label="Nom de l'entreprise"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le nom de l'entreprise",
                      },
                    ]}
                  >
                    <Input placeholder="Nom de l'entreprise" />
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
                  >
                    <Input placeholder="https://example.com" />
                  </Form.Item>
                  <Form.Item
                    name="industry"
                    label="Secteur d'activité"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez sélectionner le secteur d'activité",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Sélectionnez le secteur d'activité"
                      onChange={handleSectorChange}
                    >
                      <Option value="technology">Technologie</Option>
                      <Option value="finance">Finance</Option>
                      <Option value="healthcare">Santé</Option>
                      <Option value="education">Éducation</Option>
                      <Option value="other">Autre</Option>
                    </Select>
                  </Form.Item>
                  {showOtherSector && (
                    <Form.Item
                      name="otherSector"
                      label="Secteur d'activité spécifique"
                      rules={[
                        {
                          required: true,
                          message:
                            "Veuillez entrer le secteur d'activité spécifique",
                        },
                      ]}
                    >
                      <Input placeholder="Secteur d'activité spécifique" />
                    </Form.Item>
                    
                  )}

                  <Form.Item
                    name="logo"
                    label="Logo de l'entreprise"
                    valuePropName="fileList"
                    getValueFromEvent={(e) =>
                      Array.isArray(e) ? e : e && e.fileList
                    }
                    rules={[
                      {
                        required: true,
                        message: "Veuillez télécharger le logo de l'entreprise",
                      },
                    ]}
                  >
                    <Upload
                      beforeUpload={handleLogoUpload}
                      maxCount={1}
                      listType="picture"
                      accept="image/jpeg,image/png"
                    >
                      <Button icon={<UploadOutlined />}>
                        Cliquez pour télécharger le logo
                      </Button>
                    </Upload>
                  </Form.Item>
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

                    name="AutherPhone"
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
                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Détails spécifiques
                  </Title>
                  <Form.Item
                    name="sponsorshipGoals"
                    label="Objectifs de sponsoring"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez décrire vos objectifs de sponsoring",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Type de projets à soutenir"
                    />
                  </Form.Item>

                  <Title
                    level={4}
                    className="text-xl font-bold mb-4"
                  >
                    Budget annuel prévu pour le sponsoring
                  </Title>
                  <Form.Item
                    name="budget"
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
                

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
                    disabled={isSubmitting}
                  >
                    {/* {isSubmitting ? "Soumission..." : "Soumettre"} */}
                    Soumettre
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
                    Pour plus d'informations sur les avantages spécifiques des
                    sponsors, cliquez{" "}
                    <a
                      href="#"
                      className="text-[#3bcf93]"
                    >
                      ici
                    </a>
                    .
                  </Text>
                </div>
                <div className="mt-4">
                  <Button
                    type="default"
                    shape="round"
                    className="border-[#3bcf93] text-[#3bcf93]"
                  >
                    <NavLink to="/AllProjets">Voir les projets</NavLink>
                  </Button>
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

      <Footer />
    </div>
  )
}

export default SponsorRegistration
