
import RegisterForm from '../../component/Forms/RegisterForm'
import AuthLayout from '../../component/Layouts/AuthLayout'

const Register = () => {

  
  const email = localStorage.getItem('email')


  return ( 
    <AuthLayout text='Create your Mailcheckr account'>
       <RegisterForm email={email}/>
    </AuthLayout>
  )
}

export default Register