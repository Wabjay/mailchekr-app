import { useEffect, useState } from "react";
import Loader from "../Others/Loader";
import { Radio, Select, Space } from "antd";
import Close from "../../assets/images/close.svg"
import axios from "../../helper/api/axios";
import {Document, Page} from "react-pdf"


const ExportEmailModal = ({ open, openFunction, id }) => {
  const [showModal, setShowModal] = useState();
  const [loader, setLoader] = useState(false);
  const [format, setFormat] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [pdf, setPdf] = useState('');
  


  useEffect(() => {
    open ? setShowModal(open) : setShowModal(open);
  }, [open]);

  const closeModal = () => {
    openFunction(false);
  };

  // Select export format function
  const handleChange = (value) => {
    setFormat(value);
    console.log(value)
  };


  // Radio Buttons function for export type
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };

    // Form API
    const exportEmails = () => {
      setLoader(true);
        try {
          axios
            .get(`generate-pdf/${radioValue === "success" ? `success/${id}` : radioValue === "fail" ? `failed/${id}` : `${id}`}`, {
              headers: {
                "Content-Type": "application/pdf",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              // res.blob()
              setPdf(res.data)
              console.log(res.data);
         
            })
            setLoader(false);
           
            
        } catch (err) {
          console.log(err);
          setLoader(false);
        }
    };

  return (
    <>
    {showModal && (
      <div className="flex justify-center items-center bg-modalBlur fixed top-0 left-0 z-[300] w-full h-full">
        <div className="bg-white p-6 rounded-[12px] w-[90%] max-w-[448px]">
          <div className="flex justify-between mb-6">
            <p className="text-[20px] font-bold tracking-[0.8px] leading-[28px]">
              Export emails
            </p>
         <img src={Close} alt="" className="w-6 h-6" onClick={closeModal} />
          </div>

          <div className="">{/* Text Area  */}
            <p className="text-sm font-medium leading-[20px] text-grey-900 mb-2">Select format</p>
         
        <Select
      defaultValue="pdf"
      style={{
        width: '100%'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'pdf',
          label: 'PDF',
        },
        {
          value: 'xsml',
          label: 'Excel',
        },
        
      ]}
    />

<p className="text-sm font-medium leading-[20px] text-grey-900 mt-6">Select validation status</p>

<Radio.Group onChange={onChange} value={radioValue}>
      <Space direction="vertical">
        <Radio value='all'>All status</Radio>
        <Radio value='success'>Successful</Radio>
        <Radio value='fail'>Failed</Radio>
      </Space>
    </Radio.Group>


        
            <button 
            className="mt-[40px] w-fit px-4 h-9 flex justify-start items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-yellow-400 bg-yellow-400"
            onClick={exportEmails}
            >Export Emails</button>
          </div>
        </div>
        <Loader status={loader}/>
      </div>
    
    )}
    <div>
      <iframe src={pdf} className="w-full h-full"></iframe>
    </div>
    </>
  );
};



export default ExportEmailModal;
