import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';
import { useState } from 'react';
import { Spin, Progress } from 'antd';


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

      if (response.status === 200 || response.status === 201) {
        console.log("voici la reponse", response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user._id);
      localStorage.setItem("role", response.data.user.role);
      console.log("voici la reponse", response.data.user._id);

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

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md relative">
          {loading && (
            <Progress 
              type="circle"
              percent={progress}
              status="active"
              showInfo={false}
              className="absolute top-0 left-0"
              strokeWidth={2}
              width={40}
              strokeColor="#3bcf93"
            />
          )}
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Connexion
            </h2>
            <Divider />
          </div>
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
              <Input placeholder="Email" className="rounded-md" onChange={handleInputChange} />
            </Form.Item>

            <Form.Item
              label="Mot de passe"
              name="password"
              rules={[
                { required: true, message: 'Veuillez entrer votre mot de passe!' },
                { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }
              ]}
            >
              <Input type='password' placeholder="Mot de passe" className="rounded-md" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="rounded-md bg-[#3bcf93] hover:bg-[#34b684] text-white"
                disabled={loading}
              >
                {loading ? <Spin /> : 'Connexion'}
              </Button>
            </Form.Item>
          </Form>
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
          {isRegistrationSuccessful && (
            <div className="bg-green-100 p-5 w-[100%] sm:w-[100%] rounded mb-10 items-center">
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
                  <div className="flex-1 leading-tight text-sm text-green-700 font-medium">succès</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-600 h-3 w-3">
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
              </div>
            </div>
          )}
          <div className='text-center'>
            <span className='text-gray-500'>
              Vous n'avez pas de compte ? <Link to="/register" className="text-[#3bcf93] hover:text-[#34b684]">S'inscrire</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;