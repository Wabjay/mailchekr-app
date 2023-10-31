import { useGoogleLogin } from '@react-oauth/google';
import Google from "../../assets/images/google.svg";

const GoogleLogins = () => {


   const signIn = useGoogleLogin(
    { 
    onSuccess:tokenResponse => console.log(tokenResponse),
    flow: 'redirect',
    onError: () => console.log('Login Failed'),
  },
  // console.log("first")
  );
  return (
    <>
    <button
          className="w-full h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
          onClick={signIn}
        >
          <img src={Google} className="h-[18px] w-[18px] mr-1" />
          Continue with Google
        </button>
    
      {/* <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}></GoogleLogin> */}
          
        </>
  );
};

export default GoogleLogins;
