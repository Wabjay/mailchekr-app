import Google from '../../assets/images/google.svg'

const Register = () => {
  return (
    <div className="h-[100vh] flex flex-col gap-6 justify-center items-center">
    <img className="w-[165px] h-[112px] bg-green-700 " alt="" />
    <p className="text-grey-900 text-[20px] leading-[28px] font-bold tracking-[0.8px] lg:text-[24px] lg:leding-[32px] mb-1">Create your Mailcheckr account</p>
    <button 
        className="w-full max-w-[485px] h-12 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
        // onClick={}
        ><img src={Google}className="h-[18px] w-[18px] mr-1"/>Continue with Google</button>
   <button 
        className="w-full max-w-[485px] h-12 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-grey-200 bg-white"
        // onClick={}
        >Continue with Email</button>
    <a href='/register' className="w-full max-w-[485px] text-center text-grey-900 text-[16px] leading-[22px] mb-4 lg:mb-5">By signing up, you agree to the terms and services and Data Processing Agreement</a>

</div>
  )
}

export default Register