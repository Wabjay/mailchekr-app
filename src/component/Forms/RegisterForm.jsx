import { useState } from "react"
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router";
import axios from "../../helper/api/axios";

const RegisterForm = ({email}) => {

    const [username, setUsername] = useState("Enter your preferred  Username");
    const [mail, setEmail] = useState(email);
    const [firstName, setFirstName] = useState("Enter your first Name");
    const [lastName, setLastName] = useState("Enter your last name");
    const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    
      const RegisterProfile = async (e) => {
        e.preventDefault();
        console.log(e)
        setLoading(true)
        const payload = {
          "email": mail,
          "firstName": firstName,
          "lastName": lastName,
          "displayName": username
        }
        try {
          const response = await axios.post(
            "userAuth/sign-up", payload,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          console.log(JSON.stringify(response?.data));
          console.log(JSON.stringify(response));
        setLoading(false)
        navigate(`/verify/${email}`)
        console.log(`/verify/${email}`)
    
        } catch (err) {
          if (!err?.response) {
            setErrMsg("No Server Response");
          } else if (err.response?.status === 400) {
            setErrMsg("Missing Username or Password");
    
          } else if (err.response?.status === 401) {
            setErrMsg("Unauthorized");
          }else {
            setErrMsg("Login Failed");
          }
        setLoading(false)
    
          // errRef.current.focus();
        }
      };
    
      const Logout = () => {
        // API to Logout Profile
      };

  return (
    <div className="w-full max-w-[485px]">
        <form onSubmit={RegisterProfile}>
          <div className="">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Email Address</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-grey-50  w-full"
            name="email" id="" placeholder={mail} onChange={(e)=> setEmail(e.target.value)} disabled/>
          </div>
          <div className="flex gap-6 mt-6 w-full">
             <div className=" w-full">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">First Name</p>
            <input type="text" className="py-2 px-4 text-[16px] leading-[22px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          </div>
          <div className=" w-full">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Last Name</p>
            <input type="text" className="py-2 px-4 text-[16px] leading-[22px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder={lastName
            } onChange={(e)=> setLastName(e.target.value)}/>
          </div>
          </div>
          <div className="mt-6">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Username</p>
            <input type="text" className="py-2 px-4 text-[16px] leading-[22px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="username" id="" placeholder={username} onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          
          <button
            onClick={RegisterProfile}
            className="bg-white rounded-[8px] border border-yellow-600 py-3 px-4 mt-10 w-fit text-yellow-600 font-medium text-sm leading-[20px]"
          >
           
            <span> Sign Up</span>  
          <TailSpin
          height="16"
          width="16"
          color="#B88700"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{paddingRight: '8px'}}
          wrapperClass=""
          visible={loading}
        />
          </button>
          </form>
    <p className="w-full text-center text-grey-900 text-[16px] leading-[22px] mt-6">By signing up, you agree to the terms and services and Data Processing Agreement</p>
        
    </div>
  )
}

export default RegisterForm