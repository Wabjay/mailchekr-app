import { useContext, useEffect, useMemo, useState } from "react";
import OverviewCard from "../component/Cards/OverviewCard";
// import Layout from "../component/Layouts/Layout";
import Main from "../component/Layouts/Main";
import ValidateEmailModal from "../component/Modals/ValidateEmailModal";
import Heading from "../component/Others/Heading";
import { UserContext } from "../context/UserContext";
import TableList from "../component/Tables/Table";
// import { presidents } from "../component/Tables/president";
import { useNavigate } from "react-router-dom";
import View from "../assets/images/view.svg"
import axios from "../helper/api/axios";
import { Sorter } from "../component/sorter";
import Spinner from "../component/Others/Spinner";
// import Table from "../component/Tables/AntTable";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [validations, setValidations] = useState(0);
  const [emails, setEmail] = useState([]);
  const [emailLength, setEmailLength] = useState(0);
  const [loader, setLoader] = useState(false);


const {user, token, setLoading} = useContext(UserContext)


  const validateEmail = (resp) => {
    resp ? setOpenModal(resp) : setOpenModal(resp); // resp = true || false
  };

  useMemo(()=> {
    setLoading(true)
    setLoader(true);
    try {
      axios.get('validatedEntries',
          {
              headers: { 
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`
               },
          }
      )
      .then(res => {
          setEmail(res.data.data)
          setValidations(res.data.data.length)

          const data = res.data.data.map(email => email.validations)
          data.map(email => email.map(mail => emails.push(mail)))
        console.log(emails)
        setEmailLength(emails.length)
          console.log(res.data.data)
    setLoader(false);
    setLoading(false)
      }
      )
    setLoader(false);
    setLoading(false)

  } catch (err) {
    console.log(err)  
    setLoader(false);
    setLoading(false)
  }
  },[])


const columns = [
  {
   
    key: 'name',
    title: 'Table Name',
    dataIndex: 'entryName',
    width: 150,
    render:  (entryName) =><p className="capitalize">{entryName}</p>
  },
  {
    key: 'emails',
    title: 'No of Emails',
    dataIndex: 'numberOfEmailsValidated',
        width: 150,
        sorter: {
          compare: Sorter.DEFAULT,
          multiple: 3
        },
  },
  {
    key: 'successful',
    title: 'Successful Validations',
    dataIndex: 'totalNumberOfSuccessfulValidations',
    width: 215,
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    },
  },
  {
    key: 'failed',
    title: 'Failed Validations',
    dataIndex: 'totalNumberOffailedValidations',
    width: 215,
    sorter: {
      compare: Sorter.DEFAULT,
      multiple: 2
    },
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'email',
    width: 20,
    render: (_, id) => (<button
    onClick={()=> navigate(`/table/${id._id}`)} className='w-[77px] border border-grey-200 rounded-[8px] flex items-center gap-1 pl-[13px] pr-4 py-2'>
    <img src={View} className="w-4 h-4" alt="view icon" />
<span className="text-[12px] leading-0">View</span></button>)
  },
]

let navigate = useNavigate();


  return (
    <>
      {/* <Layout loading={loading}> */}
      <Spinner loading={loader}/>

        <Heading text={`Hello ${user?.displayName},`}>
          <button
            onClick={validateEmail}
            className="bg-yellow-400 rounded-[8px] py-2 px-4 md:py-3 text-grey-900 font-medium text-sm leading-[20px]"
          >
            Validate Email
          </button>
        </Heading>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-4 md:mb-[22px] lg:mb-6">
          <OverviewCard amount={emailLength} label="No of valid emails" />
          <OverviewCard amount={validations} label={`No of validations`} />
        </div>
<p className="text-[16px] font-bold leading-[22px] text-grey-900 mb-4 md:mb-[22px] lg:mb-6">Validation entries</p>
        <Main>
         {/* <TableUncontrolled /> */}
         <TableList  columns={columns} dataSource={emails}/>
         {/* <Table columns={columns} dataSource={emails}/> */}

        </Main>
        <ValidateEmailModal open={openModal} openFunction={validateEmail} />
      {/* </Layout> */}
    </>
  );
};

export default Home;
