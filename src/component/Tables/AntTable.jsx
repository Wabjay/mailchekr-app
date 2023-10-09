import { useState, useEffect } from "react";

import moment from "moment";

import { useNavigate } from 'react-router-dom';
import { Button,  Badge, Table} from "antd";

export default function AntTable() {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  // const [pageLoading, setPageLoading] = useState(false);
  let navigate = useNavigate();
  navigate(`/`)



  const columns = [
    {
      key: 1,
      title: 'Date',
      dataIndex: 'created_at',
      render:  (created_at)=> (<span className="text-small">
        {moment(created_at).format(
              "ddd, MMM Do YYYY"
                      )}
                      </span>)
    },
    {
      key: 1,
      title: 'Name',
      dataIndex: 'pickup',
      render: (pickup)=> pickup.name
    },
    {
      key: 2,
      title: 'Status',
      dataIndex: 'status',
      render: (status => <Badge
      color={status.status === "dispatched" ? "blue" : 
      status.status === "new" ? "green" : 
      status.status === 'processed' ? "green" : 
      status.status === "processing" ? "yellow" 
      : "red"}
      text={status.status.toUpperCase()}
    />),
    filters:[
      {text:"NEW", value:"new"},
      {text:"PROCESSING", value:"processing"},
      {text:"PROCESSED", value:"processed"},
      {text:"DISPATCHED", value:"dispatched"},
      {text:"CANCELLED", value:"cancelled"}
    ],
    onFilter:(filterStatus, record)=>{
      console.log(record.status.status)
      console.log(filterStatus)
      return record.status.status === filterStatus
    }
    },
    {
      key: 1,
      title: 'Reference',
      dataIndex: 'reference'
    },
    {
      key: 1,
      title: 'Address',
      dataIndex: 'pickup',
      render: (pickup)=> pickup.address
    },
    {
      key: 3,
      title: 'Email',
      dataIndex: 'pickup',
      render: (pickup)=> pickup.email
    },
    {
      title: "View Order",
      key: "action",
      dataSource: "user",
      render: (record) => (
        <Button type="primary" onClick={() => Router.push(`/orders/${record._id}`)}>
          View Order
          
        </Button>
      )
    }
  ];

  return (
    <>
        <div className="container-fluid">
            <Table
            loading={loading}
            columns={columns}
            dataSource={orders}
            pagination={{
              current: page,
              pageSize: pageSize,
              total: orders.length,
              onChange: (page, pageSize)=>{
                setPage(page);
                setPageSize(pageSize);
              }
            }
            }
            />   
        </div>
    </>
  );
}
