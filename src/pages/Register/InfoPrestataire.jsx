import { useState } from "react"
import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  Card,
  Typography,
  Checkbox,
  message,
  Progress,
} from "antd"
import {
  EnvironmentOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  LockOutlined,
  GlobalOutlined,
} from "@ant-design/icons"
import axios from "axios"

import "tailwindcss/tailwind.css"

const { TextArea } = Input
const { Option } = Select
const { Title, Paragraph, Text } = Typography

const provincesRDC = [
  "Bas-Uele",
  "Équateur",
  "Haut-Katanga",
  "Haut-Lomami",
  "Haut-Uele",
  "Ituri",
  "Kasaï",
  "Kasaï-Central",
  "Kasaï-Oriental",
  "Kinshasa",
  "Kongo-Central",
  "Kwango",
  "Kwilu",
  "Lomami",
  "Lualaba",
  "Mai-Ndombe",
  "Maniema",
  "Mongala",
  "Nord-Kivu",
  "Nord-Ubangi",
  "Sankuru",
  "Sud-Kivu",
  "Sud-Ubangi",
  "Tanganyika",
  "Tshopo",
  "Tshuapa",
].sort()

const InfoPrestataire = () => {
  const [form] = Form.useForm()
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  const [submitting, setSubmitting] = useState(false)
  const [otherOrganizationType, setOtherOrganizationType] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleStartProjectClick = () => {
    if (!token) {
      setIsModalVisible(true)
    } else {
      // Logique pour démarrer un projet
    }
  }

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (values.agree) {
          setIsModalVisible(false)
          history.push("/devenir-prestataire")
        }
      })
      .catch((info) => {
        console.log("Validation Failed:", info)
      })
  }

  const handleSubmit = async (values) => {
    const apiUrl = import.meta.env.VITE_API_URL

    const sanitizedValues = {
      ...values,
      organizationName: values.organizationName.trim(),
      address: values.address.trim(),
      website: values.website?.trim(),
      representativeName: values.representativeName.trim(),
      phone: values.phone.trim(),
      phone2: values.phone2.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      services: values.services.trim(),
      geographicAreas: values.geographicAreas,
      projects: values.projects.trim(),
      specificOrganizationType: values.specificOrganizationType?.trim(),
    }

    try {
      const formData = new FormData()

      for (const key in sanitizedValues) {
        if (Array.isArray(sanitizedValues[key])) {
          sanitizedValues[key].forEach((value, index) => {
            formData.append(`${key}[${index}]`, value)
          })
        } else {
          formData.append(key, sanitizedValues[key])
        }
      }

      formData.append("iduser", user)

      const response = await axios.post(`${apiUrl}/prestataire`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          "X-CSRF-Token": "your-csrf-token",
        },
      })
      console.log(response.data)
      message.success("Formulaire soumis avec succès!")
    } catch (error) {
      console.error("Error submitting form:", error)
      message.error("Erreur de soumission : Veuillez réessayer plus tard.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className=" py-8">
      <Progress
        className="mb-6"
        percent={form.isFieldsTouched([
          "organizationName",
          "address",
          "representativeName",
          "phone",
          "email",
          "password",
        ])
          ? 50
          : 0}
        showInfo={true}
      />

      <div className="mb-8">
        <Title level={3} className="mb-2">
          Devenez un Prestataire Social avec SOTRADONS
        </Title>
        <Paragraph className="mb-4">
          En tant que prestataire social chez SOTRADONS, vous intégrez un réseau
          dynamique dédié à la promotion de la Responsabilité Sociétale des
          Entreprises (RSE). Nous offrons aux prestataires sociaux la possibilité
          de contribuer activement à des projets impactants tout en bénéficiant
          de visibilité, de crédibilité et de financement.
        </Paragraph>
      </div>

      <Card>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Title level={4} className="text-xl font-bold mb-4">
            Informations de l'organisation
          </Title>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="organizationName"
                label="Nom de l'organisation"
                rules={[{ required: true, message: "Veuillez entrer le nom de l'organisation" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nom de l'organisation" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="address"
                label="Adresse"
                rules={[{ required: true, message: "Veuillez entrer l'adresse" }]}
              >
                <Input prefix={<EnvironmentOutlined />} placeholder="Adresse" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="website"
                label="Site web"
                rules={[{ type: "url", message: "Veuillez entrer une URL valide" }]}
              >
                <Input prefix={<GlobalOutlined />} placeholder="https://example.com" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="organizationType"
                label="Type d'organisation"
                rules={[{ required: !otherOrganizationType, message: "Veuillez sélectionner le type d'organisation" }]}
              >
                <Select
                  placeholder="Sélectionnez le type d'organisation"
                  disabled={otherOrganizationType}
                >
                  <Option value="association">Association</Option>
                  <Option value="ngo">ONG</Option>
                  <Option value="socialEnterprise">Entreprise sociale</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Checkbox
              checked={otherOrganizationType}
              onChange={(e) => setOtherOrganizationType(e.target.checked)}
            >
              Autre type d'organisation
            </Checkbox>
          </Form.Item>
          {otherOrganizationType && (
            <Form.Item
              name="specificOrganizationType"
              label="Type d'organisation spécifique"
              rules={[{ required: true, message: "Veuillez indiquer le type d'organisation spécifique" }]}
            >
              <Input placeholder="Type d'organisation spécifique" />
            </Form.Item>
          )}

          <Title level={4} className="text-xl font-bold mb-4">
            Informations de contact
          </Title>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="representativeName"
                label="Nom du représentant"
                rules={[{ required: true, message: "Veuillez entrer le nom du représentant" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Nom du représentant" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phone"
                label="Numéro de téléphone"
                rules={[{ required: true, message: "Veuillez entrer le numéro de téléphone" }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="phone2"
                label="Deuxième Numéro de téléphone"
                rules={[{ required: true, message: "Veuillez entrer le deuxième numéro de téléphone" }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Numéro de téléphone" />
              </Form.Item>
            </Col>
          </Row>

          <Title level={4} className="text-xl font-bold mb-4">
            Informations d'authentification
          </Title>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                label="Adresse e-mail"
                rules={[
                  { required: true, message: "Veuillez entrer l'adresse e-mail" },
                  { type: "email", message: "Veuillez entrer une adresse e-mail valide" }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="email@example.com" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="password"
                label="Mot de passe"
                rules={[
                  { required: true, message: "Veuillez entrer votre mot de passe!" },
                  { min: 6, message: "Le mot de passe doit contenir au moins 6 caractères" }
                ]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Mot de passe" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="password2"
                label="Confirmer le mot de passe"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Veuillez confirmer votre mot de passe!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error("Les mots de passe ne correspondent pas!"))
                    },
                  }),
                ]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Confirmer le mot de passe" />
              </Form.Item>
            </Col>
          </Row>

          <Title level={4} className="text-xl font-bold mb-4">
            Détails spécifiques
          </Title>
          <Form.Item
            name="services"
            label="Description des services offerts"
            rules={[{ required: true, message: "Veuillez décrire les services offerts" }]}
          >
            <TextArea rows={4} placeholder="Description des services offerts" />
          </Form.Item>
          <Form.Item
            name="geographicAreas"
            label="Zones géographiques d'intervention"
            rules={[{ required: true, message: "Veuillez indiquer les zones géographiques d'intervention" }]}
          >
            <Select mode="multiple" placeholder="Sélectionnez les zones géographiques d'intervention">
              {provincesRDC.map((province) => (
                <Option key={province} value={province}>{province}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="projects"
            label="Projets en cours ou précédents"
            rules={[{ required: true, message: "Veuillez décrire les projets en cours ou précédents" }]}
          >
            <TextArea rows={4} placeholder="Projets en cours ou précédents" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              className="bg-[#3bcf93] border-none"
            >
              Soumettre
            </Button>
            <Text className="ml-4">
              En soumettant ce formulaire, vous acceptez notre{" "}
              <a href="#" className="text-[#3bcf93]">politique de confidentialité</a>{" "}
              et nos <a href="#" className="text-[#3bcf93]">conditions générales</a>.
            </Text>
          </Form.Item>
        </Form>
      </Card>

      <div className="mt-8">
        <Title level={3} className="text-2xl font-bold">
          Besoin d'aide ?
        </Title>
        <Paragraph>
          Pour toute assistance avec l'inscription, veuillez nous contacter à{" "}
          <a href="mailto:support@example.com" className="text-[#3bcf93]">support@example.com</a>{" "}
          ou appeler le <a href="tel:+1234567890" className="text-[#3bcf93]">+1 234 567 890</a>.
        </Paragraph>
      </div>
    </div>
  )
}

export default InfoPrestataire
