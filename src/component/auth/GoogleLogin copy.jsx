import Google from "../../assets/images/google.svg";
import { useGoogleLogin  } from "@react-oauth/google";
import { useState } from "react";

import axios from "../../helper/api/axios";
import { useNavigate } from "react-router-dom";

const GoogleLogins = () => {

  // const [signIn, setSignIn] = useState(false)


  const navigate = useNavigate()

  const SignIn =
//   (email) => {
//     console.log(email)
//     navigate(`/verify/${email}`)
// }
   useGoogleLogin(
    { 
  //  onSuccess:tokenResponse => console.log(tokenResponse),
   onSuccess: async tokenResponse => {
     console.log(tokenResponse);
     // fetching userinfo can be done on the client or the server
     const userInfo = await axios
       .get('https://www.googleapis.com/oauth2/v3/userinfo', {
         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
       })
       .then(res => res.data);

     console.log(userInfo);
     await axios.post(
       "userAuth/sign-in",
       { email: userInfo.email },
       {
         headers: { "Content-Type": "application/json" },
       }
     );
       // setSuccess(success);
   sessionStorage.setItem('email', userInfo.email)
   navigate(`/verify/${userInfo.email }`)
   },
   flow: 'auth-code',
   // signInFlow: "redirect",
   onError: () => console.log('Login Failed'),
 },
 console.log("first")
 );



  return (

    <button
    onClick={()=>SignIn()}
      className="w-full h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
    >
      <img src={Google} className="h-[18px] w-[18px] mr-1" />
      Continue with Google
    </button>
  );
};

export default GoogleLogins;
