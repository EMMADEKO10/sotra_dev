import React, { useState } from "react";
import { Button, Form, Input, Select, Row, Col, Card, Typography, message } from "antd";
import Navbar from "../../components/Navbars/NavBar";
import Footer from "../../components/Footer";
import "tailwindcss/tailwind.css";
import { NavLink } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

const SponsorRegistration = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherSector, setShowOtherSector] = useState(false);
  const [amount, setAmount] = useState('');
  const [socialBonds, setSocialBonds] = useState(0);

  const handleSectorChange = (value) => {
    setShowOtherSector(value === "other");
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
      setSocialBonds((value * 0.001).toFixed(2));
    } else {
      setAmount('');
      setSocialBonds(0);
    }
  };

  const onFinish = async (values) => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        // Ajoutez votre logique de soumission ici
        // Par exemple, envoyer les données à une API
        console.log("Form data: ", values);

        // Simuler une soumission asynchrone
        await new Promise((resolve) => setTimeout(resolve, 2000));

        message.success("Formulaire soumis avec succès !");
        form.resetFields();
      } catch (error) {
        console.error("Erreur lors de la soumission :", error);
        message.error("Erreur lors de la soumission du formulaire.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Navbar />

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

      <div className="about-area py-12">
        <div className="container mx-auto">
          <Row justify="center">
            <Col lg={16} className="text-center space-y-4">
              <Title level={3} className="text-3xl font-bold">
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
                <Form layout="vertical" form={form} onFinish={onFinish}>
                  <Title level={4} className="text-xl font-bold mb-4">
                    Informations de l'entreprise
                  </Title>
                  <Form.Item
                    name="companyName"
                    label="Nom de l'entreprise"
                    rules={[{ required: true, message: "Veuillez entrer le nom de l'entreprise" }]}
                  >
                    <Input placeholder="Nom de l'entreprise" />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    label="Adresse"
                    rules={[{ required: true, message: "Veuillez entrer l'adresse" }]}
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
                    rules={[{ required: true, message: "Veuillez sélectionner le secteur d'activité" }]}
                  >
                    <Select placeholder="Sélectionnez le secteur d'activité" onChange={handleSectorChange}>
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
                      rules={[{ required: true, message: "Veuillez entrer le secteur d'activité spécifique" }]}
                    >
                      <Input placeholder="Secteur d'activité spécifique" />
                    </Form.Item>
                  )}

                  <Title level={4} className="text-xl font-bold mb-4">
                    Informations de contact
                  </Title>
                  <Form.Item
                    name="representativeName"
                    label="Nom du représentant"
                    rules={[{ required: true, message: "Veuillez entrer le nom du représentant" }]}
                  >
                    <Input placeholder="Nom du représentant" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Adresse e-mail"
                    rules={[{ required: true, message: "Veuillez entrer l'adresse e-mail", type: "email" }]}
                  >
                    <Input placeholder="email@example.com" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Numéro de téléphone"
                    rules={[{ required: true, message: "Veuillez entrer le numéro de téléphone" }]}
                  >
                    <Input placeholder="Numéro de téléphone" />
                  </Form.Item>

                  <Title level={4} className="text-xl font-bold mb-4">
                    Détails spécifiques
                  </Title>
                  <Form.Item
                    name="sponsorshipGoals"
                    label="Objectifs de sponsoring"
                    rules={[{ required: true, message: "Veuillez décrire vos objectifs de sponsoring" }]}
                  >
                    <TextArea rows={4} placeholder="Type de projets à soutenir" />
                  </Form.Item>
                  <Form.Item
                    name="budget"
                    label="Montant en dollars"
                    rules={[{ required: true, message: "Veuillez entrer le montant en dollars" }]}
                  >
                    <Input
                      type="number"
                      placeholder="Montant en dollars"
                      value={amount}
                      onChange={handleAmountChange}
                    />
                  </Form.Item>
                  <Form.Item label="Social Bonds">
                    <Input placeholder="Social Bonds" value={socialBonds} readOnly />
                  </Form.Item>

                  <Button
                    type="primary"
                    shape="round"
                    className="bg-[#3bcf93] border-none mt-4"
                    htmlType="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Soumission...' : 'Soumettre'}
                  </Button>
                </Form>

                <div className="mt-8">
                  <Text>
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="#" className="text-[#3bcf93]">politique de confidentialité</a>{" "}
                    et nos{" "}
                    <a href="#" className="text-[#3bcf93]">conditions générales</a>.
                  </Text>
                  <Text>
                    Pour plus d'informations sur les avantages spécifiques des sponsors, cliquez{" "}
                    <a href="#" className="text-[#3bcf93]">ici</a>.
                  </Text>
                </div>
                <div className="mt-4">
                  <Button
                    type="default"
                    shape="round"
                    className="border-[#3bcf93] text-[#3bcf93]"
                  >
                    <NavLink to="/projet">Voir les projets</NavLink>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="support-area py-12">
        <div className="container mx-auto text-center">
          <Title level={3} className="text-2xl font-bold">
            Besoin d'aide ?
          </Title>
          <Paragraph>
            Pour toute assistance avec l'inscription, veuillez nous contacter à{" "}
            <a href="mailto:support@example.com" className="text-[#3bcf93]">support@example.com</a>{" "}
            ou appeler le{" "}
            <a href="tel:+1234567890" className="text-[#3bcf93]">+1 234 567 890</a>.
          </Paragraph>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SponsorRegistration;
