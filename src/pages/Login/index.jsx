import { Form, Input, Button, Layout, Menu, Row, Col, Typography, Switch, Spin, Progress } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import axios from 'axios';
import { useState } from 'react';
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import signinbg from "/Sotradons.png";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function Login() {
  const navigate = useNavigate();
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = async (value) => {
    console.log('Received values of form: ', value);
    try {
      setLoading(true);
      setProgress(30);

      const { email, password } = value;
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/login`, { password, email });

      setProgress(70);

      console.log("voici la reponse", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user._id);
      localStorage.setItem("role", response.data.user.role);
      console.log("voici la reponse", response.data.user._id);

      if (response.status === 200 || response.status === 201) {
        setIsRegistrationSuccessful(true);
        setProgress(100);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setLoading(false);
        setProgress(0);
      }
    } catch (error) {
      setLoading(false);
      setProgress(0);

      if (error.response) {
        console.error('Erreur de réponse du serveur:', error.response);
        setErrorMessage('Mot de passe incorrect ou utilisateur non trouvé.');
      } else {
        console.error('Erreur lors de la requête:', error.message);
        setErrorMessage('Une erreur est survenue lors de la connexion.');
      }
    }
  };

  const validateMessages = {
    required: '${label} est requis!',
    types: {
      email: '${label} n\'est pas un email valide!',
    },
    string: {
      range: '${label} doit avoir entre ${min} et ${max} caractères',
    },
    pattern: {
      mismatch: '${label} n\'est pas valide',
    },
  };

  const handleInputChange = () => {
    setErrorMessage('');
  };

  const template = [
    <svg
      data-v-4ebdc598=""
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-v-4ebdc598=""
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill="#111827"
        className="fill-muted"
      ></path>
      <path
        data-v-4ebdc598=""
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill="#111827"
        className="fill-muted"
      ></path>
      <path
        data-v-4ebdc598=""
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill="#111827"
        className="fill-muted"
      ></path>
    </svg>,
  ];
  const profile = [
    <svg
      data-v-4ebdc598=""
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-v-4ebdc598=""
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
        fill="#111827"
        className="fill-muted"
      ></path>
    </svg>,
  ];
  const signup = [
    <svg
      data-v-4ebdc598=""
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-v-4ebdc598=""
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
        fill="#111827"
        className="fill-muted"
      ></path>
    </svg>,
  ];
  const signin = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        className="fill-muted"
        d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
      />
    </svg>,
  ];
  

  return (
    <Layout className="layout-default layout-signin min-h-screen">
      <Header className="bg-white shadow-md">
        <div className="container mx-auto">
          <div className="header-col header-nav">
            <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/" className="flex items-center">
                  {template}
                  <span className="ml-2 font-semibold">Sotradons</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/register" className="flex items-center">
                  {signin}
                  <span className="ml-2">S'inscrire</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </Header>

      <Content className="signin py-12">
        <Row gutter={[24, 0]} justify="center" align="middle" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-md w-full mx-auto transition-all duration-300 ease-in-out hover:shadow-xl">
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
                <Title level={2} className="text-center font-bold">Se connecter</Title>
                <Title level={5} className="text-center text-gray-600 font-normal">
                  Entrez votre email et mot de passe pour vous connecter
                </Title>
                <Divider />
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Veuillez entrer votre email!' },
                      { type: 'email', message: 'Veuillez entrer un email valide!' }
                    ]}
                  >
                    <Input 
                      placeholder="Email" 
                      className="rounded-lg border-gray-300 focus:border-[#3bcf93] focus:ring focus:ring-[#3bcf93] focus:ring-opacity-50"
                      onChange={handleInputChange} 
                    />
                  </Form.Item>

                  <Form.Item
                    label="Mot de passe"
                    name="password"
                    rules={[
                      { required: true, message: 'Veuillez entrer votre mot de passe!' },
                      { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }
                    ]}
                  >
                    <Input.Password 
                      placeholder="Mot de passe" 
                      className="rounded-lg border-gray-300 focus:border-[#3bcf93] focus:ring focus:ring-[#3bcf93] focus:ring-opacity-50"
                      onChange={handleInputChange} 
                    />
                  </Form.Item>
                  <div className="flex justify-between items-center mb-4">
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      noStyle
                    >
                      <Switch defaultChecked onChange={onChange} /> <span className="ml-2">Se souvenir de moi</span>
                    </Form.Item>
                    <Link to="/forgot-password" className="text-[#3bcf93] hover:text-[#34b684] text-sm">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      className="rounded-lg bg-[#3bcf93] hover:bg-[#34b684] text-white font-semibold py-2 px-4 transition duration-300 ease-in-out"
                      disabled={loading}
                    >
                      {loading ? <Spin /> : 'Connexion'}
                    </Button>
                  </Form.Item>
                </Form>
                {errorMessage && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
                    <p className="font-bold">Erreur</p>
                    <p>{errorMessage}</p>
                  </div>
                )}
                {isRegistrationSuccessful && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
                    <p className="font-bold">Succès</p>
                    <p>Vous êtes connecté avec succès.</p>
                  </div>
                )}
                <div className='text-center'>
                  <span className='text-gray-500'>
                    Vous n'avez pas de compte ? <Link to="/register" className="text-[#3bcf93] hover:text-[#34b684]">S'inscrire</Link>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={16} xl={18} className="sign-img hidden md:block">
            <img src={signinbg} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Content>
      <Footer className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <Menu mode="horizontal" className="justify-center mb-4">
            <Menu.Item>À propos</Menu.Item>
            <Menu.Item>Équipe</Menu.Item>
            <Menu.Item>Produits</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Tarifs</Menu.Item>
          </Menu>
          <Menu mode="horizontal" className="menu-nav-social justify-center mb-4">
            <Menu.Item>
              <Link to="#"><DribbbleOutlined /></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#"><TwitterOutlined /></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#"><InstagramOutlined /></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="#"><GithubOutlined /></Link>
            </Menu.Item>
          </Menu>
          <p className="text-center text-gray-600">
            Copyright © {new Date().getFullYear()} Sotradons. Tous droits réservés.
          </p>
        </div>
      </Footer>
    </Layout>
  );
}

export default Login;