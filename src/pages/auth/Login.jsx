import EmailForm from '../../component/Forms/EmailForm'
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../component/Layouts/AuthLayout';

const Login = () => {

  let navigate = useNavigate();
    const email = (email) => {
        console.log(email)
        navigate(`/verify/${email}`)
    }

  return (
           <AuthLayout text='Login in to Mailcheckr account' login={true}>
      <EmailForm email={email}/> 
        </AuthLayout>
  )
}

export default Login