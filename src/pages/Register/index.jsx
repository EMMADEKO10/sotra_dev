import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import axios from 'axios';
import Navbar from '../../components/Navbars/NavBar';


function Register() {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    console.log('Received values of form: ', value);

    try {
      const {name, email, password} = value
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/users`, { name, email, password });
      

      if (response.status === 201) {

        setTimeout(() => {
          navigate('/Login');
        }, 3000);
      } else {
        // Handle unsuccessful registration
      }
    } catch (error) {
      if (error.response) {
        console.error('Erreur de réponse du serveur:', error.response.data);
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
              S inscrire
            </h2>
            <Divider />
          </div>
          <Form
            layout="vertical"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              label="Nom"
              name="name"
              rules={[
                { required: true, message: 'Veuillez entrer votre nom!' },
                { min: 3, max: 50, message: 'Le nom doit avoir entre 3 et 50 caractères' }
              ]}
            >
              <Input placeholder="Nom" className="rounded-md" />
            </Form.Item>

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
              <Input type='password' placeholder="Confirmer le mot de passe" className="rounded-md" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="rounded-md bg-[#3bcf93] hover:bg-[#34b684] text-white">
                S inscrire
              </Button>
            </Form.Item>

            <div className='text-center'>
              <span className='text-gray-500'>
                Vous avez déjà un compte ? <Link to="/login" className="text-[#3bcf93] hover:text-[#34b684]">Connexion</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
