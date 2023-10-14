import { useContext, useEffect, useState } from "react";
import Layout from "../component/Layouts/Layout";
import Heading from "../component/Others/Heading";
import ExportEmailModal from "../component/Modals/ExportEmailModal";
import Main from "../component/Layouts/Main";
import TableList from "../component/Tables/Table";
// import { president } from "../component/Tables/president";
import { useLocation } from "react-router-dom";
import axios from "../helper/api/axios";
import { UserContext } from "../context/UserContext";
import { Sorter } from "../component/sorter";
// import Table from "../component/Tables/AntTable";


const Tables = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emails, setEmails] = useState([]);
  const [entryName, setEntryName] = useState("");

  const {token, loading, setLoading } = useContext(UserContext);
  const [id, setId] = useState("");
  const location = useLocation().pathname;

  // useEffect(() => {
  //   const url = location.split("/");
  //   setId(url.slice(-1)[0]);
  // }, []);

  const exportEmail = (resp) => {
    resp ? setOpenModal(resp) : setOpenModal(resp); // resp = true || false
  };

  const columns = [
    {
      key: "1",
      title: "Email Address",
      dataIndex: "emailAddress",
      width: 170,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      }
    },
    {
      key: "2",
      title: "Email Type",
      dataIndex: "emailType",
      width: 170,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      },
    },
    {
      key: "3",
      title: "Email Format",
      dataIndex: "emailFormatStatus",
      width: 190,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      },
      render: (_, id) => (
        <span
          className={`${
            id.format === "Valid" ? "text-malachite-700" : "text-red-600"
          }`}
        >
          Invalid
        </span>
      ), //{id.success}
    },
    {
      key: "4",
      title: "Server Status",
      dataIndex: "serverStatus",
      width: 200,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      },
      render: (_, id) => (
        <span
          className={`${
            id.server !== "Valid" ? "text-malachite-700" : "text-red-600"
          }`}
        >
          Valid
        </span>
      ), //{id.server}
    },
    {
      key: "5",
      title: "Email Status",
      dataIndex: "emailStatus",
      width: 190,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      },
      render: (_, id) => (
        <span
          className={`${
            id.success === "Valid" ? "text-malachite-700" : "text-red-600" 
          }`}
        >
          Invalid
        </span>
      ), //{id.success}
    },
    {
      key: "6",
      title: "Validation Status",
      dataIndex: "validationStatus",
      width: 200,
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      },
      render: (_, id) => ( 
         id.validationStatus === "not_successful" ?
        <span
          className={`rounded-[8px] py-1 text-[12px] leading-[16px] font-medium text-red-600 bg-red-50 border-red-50 px-[17px]`}
        >
        Failed
        </span> : 
         <span
         className={"text-malachite-700 bg-malachite-50 border-malachite-50 px-[8px]"}
       >
       Success
       </span>
      ), 
    },
  ];

  useEffect( () => {
    const url = location.split("/");
    setId(url.slice(-1)[0]);
    const tableId = (url.slice(-1)[0])
    setLoading(true);
    loadTable(tableId)
  }, []);


  const loadTable = (tableId)=>{
     try {
      axios
        .get(`validatedEntries/${tableId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setEmails(res.data.data);
          setEntryName(res.data.data[0].entryName);
          setLoading(false);
          console.log(id)
        });
      setLoading(false);
    } catch (err) {
      console.log(err); 
      setLoading(false);
    }
  }
   
 

  return (
    <>
    {/* <Layout> */}
      <Heading back={true} text={`${entryName} `}>
        <button
          onClick={exportEmail}
          className="bg-yellow-400 rounded-[8px] py-3 px-4 text-grey-900 font-medium text-sm leading-[20px]"
        >
          Export emails
        </button>
      </Heading>
      <Main>
        
          <div className="tables">
            <TableList columns={columns} dataSource={emails} selection={true} />
            {/* <Table columns={columns} dataSource={emails} selection={true} /> */}
          </div>
        
      </Main>

      <ExportEmailModal open={openModal} openFunction={exportEmail} id={id} />
    {/* </Layout> */}
    </>
  );
};

export default Tables;
