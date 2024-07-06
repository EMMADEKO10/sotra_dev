import {
  Form,
  Input,
  Button,
  Typography,
  Switch,
  Spin,
  Progress,
  Layout,
  Divider,
  Tooltip,
  Checkbox,
} from "antd"
import { Link } from "react-router-dom"
import {
  UserOutlined,
  LockOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons"

const { Title } = Typography

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

const LoginForm = ({
  onFinish,
  loading,
  progress,
  errorMessage,
  isRegistrationSuccessful,
  handleInputChange,
  defaultChecked = false,
}) => {
  const validateMessages = {
    required: "${label} est requis!",
    types: {
      email: "${label} n'est pas un email valide!",
    },
    string: {
      range: "${label} doit avoir entre ${min} et ${max} caractères",
    },
    pattern: {
      mismatch: "${label} n'est pas valide",
    },
  }

  const rememberMeContent = (
    <div>
      <p>En activant cette option, vous resterez connecté sur cet appareil.</p>
      <p>N'utilisez pas cette option sur un appareil public.</p>
    </div>
  )

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-auto transition-all duration-300 ease-in-out hover:shadow-xl relative">
      {loading && (
        <Progress
          type="circle"
          percent={progress}
          status="active"
          showInfo={false}
          className="absolute top-4 right-4"
          strokeWidth={4}
          width={40}
          strokeColor="#3bcf93"
        />
      )}
      <div className="space-y-6">
        <Title
          level={2}
          className="text-center font-bold text-[#3bcf93]"
        >
          Bienvenue
        </Title>
        <Title
          level={5}
          className="text-center text-gray-600 font-normal"
        >
          Connectez-vous à votre compte
        </Title>
        <Divider />
        <Form
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre email!",
              },
              {
                type: "email",
                message: "Veuillez entrer un email valide!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="rounded-lg border-gray-300 focus:border-[#3bcf93] focus:ring focus:ring-[#3bcf93] focus:ring-opacity-50"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Veuillez entrer votre mot de passe!",
              },
              {
                min: 6,
                message: "Le mot de passe doit contenir au moins 6 caractères",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mot de passe"
              className="rounded-lg border-gray-300 focus:border-[#3bcf93] focus:ring focus:ring-[#3bcf93] focus:ring-opacity-50"
              onChange={handleInputChange}
            />
          </Form.Item>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <Tooltip title={defaultChecked ? "Désactiver" : "Activer"}>
                <Checkbox
                  defaultChecked={defaultChecked}
                  onChange={onChange}
                  className="transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md"
                >
                  Se souvenir de moi
                </Checkbox>
              </Tooltip>
            </div>

            <Link
              to="#"
              className="text-[#3bcf93] hover:text-[#34b684] text-sm"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="rounded-lg bg-[#3bcf93] hover:bg-[#34b684] text-white font-semibold py-3 px-4 transition duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? <Spin /> : "Connexion"}
            </Button>
          </Form.Item>
        </Form>
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded animate-pulse">
            <p className="font-bold">Erreur</p>
            <p>{errorMessage}</p>
          </div>
        )}
        {isRegistrationSuccessful && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded animate-pulse">
            <p className="font-bold">Succès</p>
            <p>Vous êtes connecté avec succès.</p>
          </div>
        )}
        <Divider />
        <div className="text-center">
          <span className="text-gray-500">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/register"
              className="text-[#3bcf93] hover:text-[#34b684] font-medium"
            >
              S'inscrire
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
