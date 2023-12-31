import { useContext, useMemo, useState } from "react";
import Heading from "../component/Others/Heading"
import ExportEmailModal from "../component/Modals/ExportEmailModal";
import Main from "../component/Layouts/Main";
import TableList from "../component/Tables/Table";
import { presidents } from "../component/Tables/president";
import axios from "../helper/api/axios";
import { UserContext } from "../context/UserContext";

const Emails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emails, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);

  const {token} = useContext(UserContext)
  const exportEmail = (resp) => {
    resp ? setOpenModal(resp) : setOpenModal(resp); // resp = true || false
  };

  useMemo(()=> {
    setLoading(true)
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
        // res.data.data.map(email => setEmail(email.validations.map(mail => [...emails, mail]) )) 
        const data = res.data.data.map(email => email.validations)
          data.map(email => email.map(mail => emails.push(mail)))
        console.log(emails)
        setEmail(emails)
      }
      ) 
    setLoading(false)
  } catch (err) {
    console.log(err)
  }
  },[emails])

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
    !loading &&
    <>
    
       <Heading text={`All Emails (${emails.length})`}>
          <button
            onClick={exportEmail}
            className="bg-yellow-400 rounded-[8px] py-3 px-4 text-grey-900 font-medium text-sm leading-[20px]"
          >
Export
          </button>
        </Heading>
        <Main>
         <TableList  columns={columns} dataSource={emails}>
          {console.log(emails)}
          </TableList>
        </Main>

        <ExportEmailModal open={openModal} openFunction={exportEmail} />

    </>
  )
}

export default Emails