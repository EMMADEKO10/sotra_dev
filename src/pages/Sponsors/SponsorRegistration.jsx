import React from "react"
import { Button, Form, Input, Select, Row, Col, Card, Typography } from "antd"
import Navbar from "../../components/Navbars/NavBar"
import Footer from "../../components/Footer"
import "tailwindcss/tailwind.css"

const { TextArea } = Input
const { Option } = Select
const { Title, Paragraph, Text } = Typography

const SponsorRegistration = () => {
  return (
    <div>
      <Navbar />

      {/* Début de la section d'en-tête */}
      <div
        className="breadcrumb-area text-center shadow-lg bg-fixed p-12 text-white"
        style={{ backgroundImage: "url('/assets/img/2440x1578.png')" }}
      >
        <div className="container mx-auto">
          <div className="breadcrumb-items">
            <Row>
              <Col span={24}>
                <h2 className="text-4xl font-bold">
                  Enregistrement pour Sponsors
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
      {/* Fin de l'introduction */}

      {/* Début du formulaire d'enregistrement */}
      <div className="registration-form-area py-12 bg-gray-100">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16}>
              <Card className="shadow-lg rounded-lg p-8">
                <Form layout="vertical">
                  {/* Informations de l'entreprise */}
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
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le site web",
                      },
                    ]}
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
                    <Select placeholder="Sélectionnez le secteur d'activité">
                      <Option value="technology">Technologie</Option>
                      <Option value="finance">Finance</Option>
                      <Option value="healthcare">Santé</Option>
                      <Option value="education">Éducation</Option>
                    </Select>
                  </Form.Item>

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

                  {/* Champs spécifiques */}
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
                  <Form.Item
                    name="budget"
                    label="Budget annuel prévu pour le sponsoring"
                    rules={[
                      {
                        required: true,
                        message: "Veuillez entrer le budget annuel prévu",
                      },
                    ]}
                  >
                    <Input placeholder="Budget annuel prévu" />
                  </Form.Item>

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
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
                    Voir les projets
                  </Button>
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
}

export default SponsorRegistration
