import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';


function Login() {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    console.log('Received values of form: ', value);

    try {
      const { email, password } = value
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log('Received values of form: ', password, email);

      const response = await axios.post(`${apiUrl}/login`, { password, email });
      console.log("voici la reponse", response.data.token)

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user",response.data.user)

      if (response.status === 200 || response.status === 201) {
       
        setTimeout(() => {
          navigate('/');
        },3000);
      } else {
        // Handle unsuccessful login
      }
    } catch (error) {
      if (error.response) {
        console.error('Erreur de réponse du serveur:', error.response);
      } else {
        console.error('Erreur lors de la requête:', error.message);
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

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
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
              <Input placeholder="Email" className="rounded-md" />
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

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="rounded-md bg-[#3bcf93] hover:bg-[#34b684] text-white">
                Connexion
              </Button>
            </Form.Item>

            <div className='text-center'>
              <span className='text-gray-500'>
                Vous n avez pas de compte ? <Link to="/register" className="text-[#3bcf93] hover:text-[#34b684]">S inscrire</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
