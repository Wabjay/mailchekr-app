import GoogleLogin from './GoogleLogin'
import Logo from "../../assets/images/logo.svg"
import AuthLayout from '../Layouts/AuthLayout'

const AuthCard = () => {


  return (
   <AuthLayout text='Log in to Mailcheckr account'>
  <a href='/login'
        className="w-full h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-grey-200 bg-white"
        >Continue with Email</a>
    {/* <p className="w-[90%] max-w-[485px] text-center text-grey-900 text-[16px] leading-[22px] mb-4 lg:mb-5">By signing up, you agree to the terms and services and Data Processing Agreement</p> */}
</AuthLayout>
  )
}

export default AuthCard