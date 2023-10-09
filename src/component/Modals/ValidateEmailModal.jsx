import { useContext, useEffect, useState } from "react";
import Loader from "../Others/Loader";
import axios from "../../helper/api/axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const ValidateEmailModal = ({ open, openFunction }) => {
  const [showModal, setShowModal] = useState();
  const [loader, setLoader] = useState(false);
  const [table, setTable] = useState('')
  const [emails, setEmails] = useState()
  const [errMsg, setErrMsg] = useState('')
  const {token} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
    // Recieve Boolean to display the modal
    open ? setShowModal(open) : setShowModal(open);
  }, [open]);

  const closeModal = () => {
    // Send false on click of x
    openFunction(false);
  };

  // Form API
  const validate = async () => {
    setLoader(true);
    console.log(emails);
    // Successfull
    try {
      const response = await axios.post(
        "validateEntries",
        { emails:emails,
        entryName: table },
        {
          headers: { "Content-Type": "application/json",
          Authorization : `Bearer ${token}` },
        }
      )
      .then(response =>{
      console.log(JSON.stringify(response?.data.data));
      console.log(JSON.stringify(response.data.data.entryName));
      
        // email(mail);
        // setSuccess(success);
    setLoader(false)
    navigate(`/table/${response.data.data._id}`)
    }
    )

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
    setLoader(false)

      // errRef.current.focus();
    }
    console.log(emails, table)
  };

  return (
    showModal && (
      <div className="flex justify-center items-center bg-modalBlur fixed top-0 left-0 z-[300] w-full h-full">
        <div className="bg-white p-6 rounded-[12px] w-[90%] max-w-[448px]">
          <div className="flex justify-between mb-6">
            <p className="text-[20px] font-bold tracking-[0.8px] leading-[28px]">
              Validate emails
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={closeModal}
            >
              <circle cx="12" cy="12" r="10" fill="#F3F3F2" />
              <rect
                x="15.7129"
                y="7.22656"
                width="1.5"
                height="12"
                rx="0.75"
                transform="rotate(45 15.7129 7.22656)"
                fill="#676664"
              />
              <rect
                x="16.9492"
                y="15.5352"
                width="1.5"
                height="12"
                rx="0.75"
                transform="rotate(135 16.9492 15.5352)"
                fill="#676664"
              />
            </svg>
          </div>
          <div className="mb-6">{/* Input text  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Validation entry name</p>
            <input type="text" className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="name" id="" placeholder="Enter table name" onChange={(e)=> setTable(e.target.value)}/>
          </div>

          <div className="">{/* Text Area  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Enter your emails</p>
            <textarea className="py-2 px-4 text-sm leading-[20px] rounded-[8px] border-[1px] border-grey-300 bg-white  w-full"
            name="emails" id="" rows='4' placeholder="jondoe@gmail.com, mark@gmail.com, xyz@gmail.com,"  onChange={(e)=> setEmails(e.target.value)}>
            </textarea>
            <button 
            className="mt-[40px] w-full h-9 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
            onClick={validate}
            >Validate emails </button>
          </div>
        </div>
        <Loader status={loader}/>
      </div>
    
    )
  );
};



export default ValidateEmailModal;
