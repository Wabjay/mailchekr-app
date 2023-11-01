import React from "react";
import Logo from "../../assets/images/logo.svg";

// import GoogleLogins from "../auth/GoogleLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogins from "../auth/GoogleLogin copy";

const AuthLayout = (props) => {

  const clientId = import.meta.env.VITE_GOOGLE_ID

  return (
    <div className="h-[100vh] flex flex-col gap-6 justify-center items-center mx-auto px-4 md:w-[528px] md:px-0 lg:w-[468px]">
      <img src={Logo} className="w-[129.59px]" alt="" />
      <p className="w-[90%] text-grey-900 text-[20px] leading-[28px] text-center font-bold tracking-[-0.8px] lg:text-[24px] lg:leding-[32px] lg:tracking-[-0.96px] mb-1">
      {props.text}
      </p>
      {/* <GoogleLogin login={props.login} /> */}

      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
          <GoogleLogins/>
          {/* <GoogleLogins /> */}
        </GoogleOAuthProvider>
      {props.children}
    </div>
  );
};

export default AuthLayout;
