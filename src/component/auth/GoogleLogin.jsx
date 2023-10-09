import React, { useContext, useEffect, useState } from "react";
import Google from "../../assets/images/google.svg";
// import { useGoogleLogin } from "react-google-login";
// import { useGoogleLogin } from "@react-oauth/google";

import { gapi } from "gapi-script";
import axios from "../../helper/api/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const GoogleLogin = ({ login }) => {
  const [loading, setLoading] = useState(false);
  const [errmsg, setErrMsg] = useState(false);

  // const navigate = useNavigate();
  // const user = useContext(UserContext);

  // const onSuccess = (res) => {
  //   console.log("success: ", res.profileObj);
  //   setLoading(true);
  //   const payload = login
  //     ? { email: res.profileObj.email }
  //     : {
  //         email: res.profileObj.email,
  //         firstName: res.profileObj.familyName,
  //         lastName: res.profileObj.givenName,
  //         googleId: res.profileObj.googleId,
  //       };
  //   try {
  //     const { message, jwtToken } = axios.post("googleAuth/Login", payload, {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     navigate(`/`);
  //     console.log(user.token);
  //     localStorage.setItem("token", jwtToken);
  //     localStorage.setItem("user", message);
  //     user.setUser(message);
  //     user.setToken(jwtToken);
  //     console.log(user);
  //     console.log(message, jwtToken);
  //     console.log(`${res.profileObj.email}`);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing Username or Password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthorized");
  //     } else {
  //       setErrMsg("Login Failed");
  //     }
  //     setLoading(false);
  //   }
  // };

  // const onFailure = (res) => {
  //   console.log("failure: ", res);
  // };

  // const clientId = import.meta.env.VITE_GOOGLE_ID;

  // useEffect(() => {
  //   gapi.load("client:auth2", () => {
  //     gapi.auth2.init({ clientId: clientId });
  //   });
  // }, []);

  // const { signIn } = useGoogleLogin({
  //   onSuccess,
  //   onFailure,
  //   clientId,
  // });
  return (
    <button
      className="w-full h-12 flex justify-center items-center text-center text-grey-900 text-[16px] font-medium leading-[22px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
      // onClick={signIn}
    >
      <img src={Google} className="h-[18px] w-[18px] mr-1" />
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
