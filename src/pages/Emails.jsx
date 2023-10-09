import { useEffect, useState } from "react";
import Layout from "../component/Layouts/Layout"
import Heading from "../component/Others/Heading"
import ExportEmailModal from "../component/Modals/ExportEmailModal";
import Main from "../component/Layouts/Main";
import TableList from "../component/Tables/Table";
import { presidents } from "../component/Tables/president";
import axios from "../helper/api/axios";

const Emails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emails, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const exportEmail = (resp) => {
    resp ? setOpenModal(resp) : setOpenModal(resp); // resp = true || false
  };

  useEffect(()=> {
    setLoading(true)
    try {
      axios.get('validatedEntries',
          {
              headers: { 
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
               },
          }
          
      )
      .then(res => {
        console.log(res.data.emails.map(email => email))
        res.data.emails.map(email => setEmail(email.validations))
          // setEmail(res.data.emails)
      }
      )
      
      // console.log(localStorage.getItem('token'))
     
      // const users = JSON.stringify(response.mesage);    
    setLoading(false)
      // setUser(users);
      
  } catch (err) {
    console.log(err)
  }
  },[])

  const columns = [
    {
        key: '1',
        title: 'Email Address',
        dataIndex: 'email',
        width: 150,
        sorter: { 
          compare: (a, b) =>  a.email - b.email,
       },
    },
    {
        key: '2',
        title: 'Email Type',
        dataIndex: 'emailType',
        width: 150,
        sorter: { 
          compare: (a, b) =>  a.id - b.id,
       },

    },
  
    {
        key: '5',
        title: 'Validation Status',
        dataIndex: 'validationStatus',
        width: 150,
        sorter: { 
          compare: (a, b) =>  a.validationStatus - b.validationStatus,
       },
        render: (status) => (
          status === 'not_successful' ? 
        <span className="text-[12px] font-medium leading[16px] text-red-600 bg-red-50 px-2 py-1 border-red-50 rounded-[8px]">Failed</span> :
        <span className="text-[12px] font-medium leading[16px] text-malachite-800 bg-malachite-50 px-2 py-1 border-malachite-50 rounded-[8px]">Success</span>

      )
    }, 
   
]
  
  return (
    <Layout>
       <Heading text="All Emails">
          <button
            onClick={exportEmail}
            className="bg-yellow-400 rounded-[8px] py-3 px-4 text-grey-900 font-medium text-sm leading-[20px]"
          >
Export
          </button>
        </Heading>
        <Main>
         <TableList  columns={columns} dataSource={emails}/>
        </Main>

        <ExportEmailModal open={openModal} openFunction={exportEmail} />

    </Layout>
  )
}

export default Emails