import { useEffect } from "react";
import Google from "../../assets/images/google.svg";
import { jwtDecode } from "jwt-decode";
import axios from "../../helper/api/axios";
import { useNavigate } from "react-router-dom";

const GoogleLogins = () => {

  // const [signIn, setSignIn] = useState(false)


  const navigate = useNavigate()

  const signIn = async (response) => {
    let user = jwtDecode(response.credential);
    console.log(user)
    const payload = {
      "email": user.email,
      "firstName": user.given_name,
      "lastName": user.family_name,
      "displayName": "@"+user.given_name,
      "image": user.picture
    }
    try {
       await axios.post(
        "userAuth/sign-in", payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
   sessionStorage.setItem('email', user.email)
    navigate(`/verify/${user.email}`)

    } catch (err) {
     
console.log(err)
    }
  }

  const clientID = import.meta.env.VITE_GOOGLE_ID

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({ 
      client_id: clientID,
      callback: signIn
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large", width: 400 }
    );

    // google.accounts.id.prompt();

  }, [])



 
  return (
<button
      className="relative overflow-hidden w-full h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
    >
<div id="signInDiv" className="w-full h-full absolute right-0 left-[6%] opacity-0"></div>
      <img src={Google} className="h-[18px] w-[18px] mr-1" />
      Continue with Google
    </button>
       
     
  );
};

export default GoogleLogins;
