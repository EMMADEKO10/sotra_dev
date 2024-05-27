import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import { useState } from 'react';
import axios from 'axios';


const DATA_URL = "http://localhost:3700/api"


function Login() {
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const onFinish = async (value) => {
    // Les valeurs du formulaire seront dans l'objet 'value'
    console.log('Received values of form: ', value);

    try {
      const { email, password } = value

      console.log('Received values of form: ', password, email);

      const response = await axios.post(`${DATA_URL}/login`, { password, email });
      console.log("voici la reponse", response.data.token)

      localStorage.setItem("token", response.data.token)
      // window.location.href = "/";

      
      // Ajoutez ici la logique pour gérer la réponse de votre backend
      if (response.status === 201) { // Check for successful registration response
        setIsRegistrationSuccessful(true);
        setSuccessMessage('Connexion réussie ! :', isRegistrationSuccessful, successMessage); // Set success message
        // Optionally, perform other actions like clearing the form

        // After a short delay, redirect to the homepage
        setTimeout(() => {
          navigate('/');
        }); // Replace 2000 with desired delay in milliseconds
      } else {
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      if (error.response) {
        // Erreur avec réponse du serveur
        console.error('Erreur de réponse du serveur:', error.response);

      } else {
        // Erreur de configuration ou autre
        console.error('Erreur lors de la requête:', error.message);
      }
    }

    // -------------------------------------------------------------------------------------------------

  }

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

  // useEffect(()=>{
  //   if (localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, [navigate]);


  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-white p-3 rounded w-[450px]">
        <h1 className="text-center text-2xl font-bold">Login</h1>

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
              { required: true },
              { type: 'email' }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              { required: true },
              { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }
            ]}
          >
            <Input type='password' placeholder="Mot de passe" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Connexion
          </Button>

          <div className='mt-5 text-center'>
            <span className='text-gray-500'>
              Vous n’avez pas de compte ?  <Link to="/register" className="text-primary">S inscrire</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login;
