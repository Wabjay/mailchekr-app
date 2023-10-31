import { useEffect, useRef, useState } from "react";
import axios from "../../helper/api/axios";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
const EmailForm = ({ email }) => {
  const emailRef = useRef();

  const [mail, setEnterEmail] = useState("");
  const [errMsg, setErrMsg] = useState("No Server Response");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkEmail = (e) => {
    // setEmail(e.target.value)
    setEnterEmail(e.target.value);
    {
      setSuccess(false);
    }
  };
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [mail]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    setLoading(true)
    !emailRegex.test(mail) && setSuccess(true);
    try {
      await axios.post(
        "userAuth/sign-in",
        { email: mail },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
        email(mail);
        setSuccess(success);
    setLoading(false)
    sessionStorage.setItem('email', mail)
    navigate(`/verify/${mail}`)

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");

      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else if (err.response?.status === 404) {
        navigate(`/signup`)
        localStorage.setItem('email', mail)
        sessionStorage.setItem('email', mail)
        setErrMsg("User does not exist, PLease create an Account");
        console.log("User does not exist, PLease create an Account");

      } else {
        setErrMsg("Login Failed");
      }
    setLoading(false)
    setTimeout(() => {setErrMsg("")}, 2000);
      // errRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-[485px]">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          {/* Input text  */}
          <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">
            Email address
          </p>
          <input
            ref={emailRef}
            autoComplete="off"
            value={mail}
            required
            type="email"
            className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="email"
            id="email"
            placeholder='Enter your email address'
            onChange={checkEmail}
          />
          <p
            className={`absolute bottom-[-20px] text-[12px] text-red-500 text-left font-bold ${
              success ? "block" : "hidden "
            }`}
          >
            Please enter a correct email
          </p>
        </div>

        <button
          // onClick={Continue}
          type="submit"
          className="flex gap-2 justify-center items-center bg-white rounded-[8px] border border-yellow-600 py-3 px-4 mt-10 w-full max-w-[485px] text-yellow-600 font-medium text-sm leading-[20px]"
        >
         <span>Continue</span>  
          <TailSpin
          height="16"
          width="16"
          color="#B88700"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
        />
        
        </button>
        {errMsg!=="" && (
          <div className="bg-red-500 text-white lowercase mx-auto mt-3 p-1 px-4 border-red-500 border-[1px] w-fit rounded-md">{errMsg}</div>
        )}
      </form>
    </div>
  );
};

export default EmailForm;
