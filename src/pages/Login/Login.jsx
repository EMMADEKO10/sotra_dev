import { Layout, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import LoginForm from "./LoginForm";
import FooterComponent from "./FooterComponent";
import signinbg from "/Sotradons A.svg";

const { Content } = Layout;

function Login() {
  const navigate = useNavigate();
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = async (value) => {
    console.log("Received values of form: ", value)
    try {
      setLoading(true)
      setProgress(30)

      const { email, password } = value
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await axios.post(`${apiUrl}/login`, { password, email })

      setProgress(70)

      console.log("voici la reponse", response.data.token)
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", response.data.user._id)
      localStorage.setItem("role", response.data.user.role)
      console.log("voici la reponse", response.data.user._id)

      if (response.status === 200 || response.status === 201) {
        setIsRegistrationSuccessful(true)
        setProgress(100)
        setTimeout(() => {
          navigate("/")
        }, 3000)
      } else {
        setLoading(false)
        setProgress(0)
      }
    } catch (error) {
      setLoading(false)
      setProgress(0)

      if (error.response) {
        console.error("Erreur de réponse du serveur:", error.response)
        setErrorMessage("Mot de passe incorrect ou utilisateur non trouvé.")
      } else {
        console.error("Erreur lors de la requête:", error.message)
        setErrorMessage("Une erreur est survenue lors de la connexion.")
      }
    }
  }

  const handleInputChange = () => {
    setErrorMessage("")
  }


  return (
    <Layout className="min-h-screen bg-gray-100">
      <HeaderComponent />
      <Content className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Row 
            gutter={[32, 32]} 
            justify="center" 
            align="middle" 
            className="min-h-[calc(100vh-200px)]"
          >
            <Col xs={24} sm={24} md={12} lg={10} xl={8}>
              <div className="bg-gray-100 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
                <LoginForm
                  onFinish={onFinish}
                  loading={loading}
                  progress={progress}
                  errorMessage={errorMessage}
                  isRegistrationSuccessful={isRegistrationSuccessful}
                  handleInputChange={handleInputChange}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={14} xl={16} className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <img
                  src={signinbg}
                  alt="Background"
                  className="relative rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-3xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default Login;