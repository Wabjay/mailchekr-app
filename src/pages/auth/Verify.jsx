import { useContext, useState } from "react";
import OTPForm from "../../component/Forms/OTPForm";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "../../helper/api/axios";
import Logo from "../../assets/images/logo.svg";
import { TailSpin } from "react-loader-spinner";

const Verify = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [otp, setOTP] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

const email = sessionStorage.getItem('email')

  const verified = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "validateSignIn/login/otp",
        { otp },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      );

      const accessToken = JSON.stringify(response?.data?.jwtToken);
      const users = JSON.stringify(response?.data?.user);
      const email = JSON.stringify(response?.data?.user.email);
      const registered = response?.data?.user.displayName;

      registered ? navigate(`/`) : navigate("/signup");
      console.log(user.token);
      const tokens = accessToken.replaceAll('"', "");
      sessionStorage.setItem("token", tokens);
      sessionStorage.setItem("user", users);
      sessionStorage.setItem("email", email);
      user.setUser(users);
      user.setToken(tokens);
      console.log(user);
      console.log(users, tokens);
      setLoading(false);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      setLoading(false);
    }
  };
  const getPin = (pin) => {
    setOTP(pin);
    // console.log(pin)
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center mx-auto px-4 md:w-[528px] md:px-0 lg:w-[468px]">
      <img src={Logo} className="w-[129.59px] mb-3" alt="" />
      <p className="w-[90%] text-grey-900 text-[20px] leading-[28px] text-center font-bold tracking-[-0.8px] lg:text-[24px] lg:leading-[32px] lg:tracking-[-0.96px] mb-1">
        Check your mail
      </p>
      <div>
        <p className="w-full max-w-[385px] text-center text-grey-900 text-[14px] lg:text-[16px] leading-[22px]">
          We’ve sent a temporary login link and a secret code.
        </p>
        <p className="w-full max-w-[385px] text-center text-grey-900 text-[14px] lg:text-[16px] leading-[22px] mb-6">
          Please check your inbox at {email}
        </p>
      </div>

      <OTPForm pin={getPin} />
      <button
        className="my-6 w-full h-9 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
        onClick={verified}
      >
        <span>Login to your account</span>
        <TailSpin
          height="16"
          width="16"
          color="#B88700"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{ paddingRight: "8px" }}
          wrapperClass=""
          visible={loading}
        />
      </button>
    </div>
  );
};

export default Verify;
