import {Form, Input, Button} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import Divider from '../../components/Divider';
import axios from 'axios';
import { useState } from 'react';

function Register() {

  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const onFinish = async (value) => {
    console.log('Received values of form: ', value);
    // Par exemple, vous pouvez convertir l'objet en JSON
    try {
      const {name, email, password} = value
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/users`, { name, email, password });

      // Ajoutez ici la logique pour gérer la réponse de votre backend
      if (response.status === 201) { // Check for successful registration response
        setIsRegistrationSuccessful(true);
        setSuccessMessage('Inscription réussie !', isRegistrationSuccessful, successMessage); // Set success message
        // Optionally, perform other actions like clearing the form

        // After a short delay, redirect to the homepage
        setTimeout(() => {
          navigate('/Login');
        }, 3000); // Replace 2000 with desired delay in milliseconds
      } else {
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      if (error.response) {
        // Erreur avec réponse du serveur
        console.error('Erreur de réponse du serveur:', error.response.data);
      
      } else {
        // Erreur de configuration ou autre
        console.error('Erreur lors de la requête:', error.message);
      }
    }
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

  

  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
    <div className="bg-white p-3 rounded w-[450px]">
    <h1 className="text-center text-2xl font-bold">Register</h1>

      <Divider/>

      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >


        <Form.Item label="Nom" name="name"
        rules={[
          { required: true },
          { min: 3, max: 50, message: 'Le nom doit avoir entre 3 et 50 caractères' }
        ]}
        >
          <Input placeholder="Nom" />
        </Form.Item>

        <Form.Item label="Email" name="email"
        rules={[
          { required: true },
          { type: 'email' }
        ]}

        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item label="Mot de passe" name="password"
        rules={[
          { required: true },
          { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }
        ]}

        >
          <Input type='password' placeholder="Mot de passe" />
        </Form.Item>

        <Form.Item label="Confirmer le mot de passe" name="password2"
        rules={[
          { required: true },
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
          <Input type='password' placeholder="Mot de passe" />
        </Form.Item>


            <Button type="primary" htmlType="submit" block>
              S inscrire
            </Button>

            <div className='mt-5 text-center'>
            <span className='text-gray-500'>
            Vous avez déjà un compte?  <Link to="/login" className="text-primary">Connexion</Link>
            </span>
            </div>
      </Form>
    </div>
  </div>
  )
}

export default Register