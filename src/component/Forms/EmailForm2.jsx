import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";

import axios from '../../helper/api/axios';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/     

const EmailForm = ({email}) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setErrMsg('');
}, [mail,])

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await axios.post(LOGIN_URL, mail,
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.jwtToken;
      const message = response?.data?.message;
      const user = response?.data?.user;
      setAuth({ user, message, accessToken });
      setMail('');
      email(mail)
      setSuccess(true);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
      } else {
          setErrMsg('Login Failed');
      }
      errRef.current.focus();
  }
}

  return (
    <div className="w-full max-w-[485px]">
                    <form onSubmit={handleSubmit}>
          <div className="relative">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Email address</p>
            <input type="email" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="email" id="" placeholder={mail} onChange={checkEmail}/>
            <p ref={errRef} className={`absolute bottom-[-20px] text-[12px] text-red-500 text-left font-bold ${errMsg ? 'block' : 'hidden '}`}>Please enter a correct email</p>
          </div>
          
          <button
            onClick={Continue}
            className="bg-white rounded-[8px] border border-yellow-600 py-3 px-4 mt-10 w-full max-w-[485px] text-yellow-600 font-medium text-sm leading-[20px]"
          >
            Continue
          </button>
        </form>
    </div>
  )
}

export default EmailForm