import {Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom';
import Divider from '../../components/Divider';

// const rules = [
//   { 
//     required: true, 
//     message: 'Veuillez entrer !' 
//   },
// ]
function Login() {

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
    <h1 className="text-center text-2xl font-bold">Login</h1>

      <Divider/>

      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >


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


            <Button type="primary" htmlType="submit" block>
              Connexion
            </Button>

            <div className='mt-5 text-center'>
            <span className='text-gray-500'>
            Vous n’avez pas de compte ?  <Link to="/register" className="text-primary">S'inscrire</Link>
            </span>
            </div>
      </Form>
    </div>
  </div>
  )
}

export default Login