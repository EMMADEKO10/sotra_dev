import {Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom';
import Divider from '../../components/Divider';

// const rules = [
//   { 
//     required: true, 
//     message: 'Veuillez entrer !' 
//   },
// ]
function Register() {

  const onFinish = (value) => {
    console.log('Received values of form: ', value);
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