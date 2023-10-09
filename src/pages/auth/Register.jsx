import { useEffect, useState } from 'react'
import Google from '../../assets/images/google.svg'
import RegisterForm from '../../component/Forms/RegisterForm'
import EmailForm from '../../component/Forms/EmailForm'
import GoogleLogin from '../../component/auth/GoogleLogin'
import Logo from "../../assets/images/logo.svg"
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