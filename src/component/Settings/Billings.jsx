import { useState } from "react"
import FreePlan from "../Cards/FreePlan"
import PaidPlan from "../Cards/PaidPlan"
import Plan from "../Cards/Plan"
import PlanTab from "./PlanTab"
import TableList from "../Tables/Table"
import { presidents } from "../Tables/president"

const Billings = () => {

  const [month, setMonth] = useState(null)
    const [subscribed, setSubscribed] = useState(true)

    const activeTab = (month) =>{
        setMonth(month)
        console.log(month)
      }


      const upgrade = (next) =>{
        setSubscribed(next)
        console.log(month)
      }

      
const columns = [
  {
   
    key: 'name',
    title: 'Date',
    dataIndex: 'table',
    width: 150,
    sorter: {
      compare: (a, b) => a.table - b.table,
    },
  },
  {
    key: 'emails',
    title: 'Order name',
    dataIndex: 'number',
        width: 215,
        sorter: {
          compare: (a, b) => a.number - b.number,
          // multiple: 3,
        },
  },
  {
    key: 'successful',
    title: 'Order number',
    dataIndex: 'success',
    width: 215,
    sorter: {
      compare: (a, b) => a.success - b.success,
      // multiple: 3,
    },
  },
  {
    key: 'failed',
    title: 'Paid amount',
    dataIndex: 'fail',
    width: 215,
    sorter: {
      compare: (a, b) => a.fail - b.fail,
      // multiple: 3,
    },
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'email',
    width: 150,
    render: (_, id) => (<button
    onClick={()=> (`/table/${id.id}`)} className='w-fit border border-grey-200 rounded-[8px] px-4 py-2'>
<span className="text-[12px] leading-0">Download</span></button>)
  }
]

  return (
    <div className="mt-4 lg:mt-6"> 
      {!subscribed ? <>
        <p className="text-grey-900 text-[20px] leading-[28px] font-bold tracking-[0.8px] lg:text-[24px] lg:leding-[32px] mb-1">Our pricing plans</p>
        <p className="text-grey-900 text-[16px] leading-[22px] mb-4 lg:mb-5">Create email validation entries and get better insights on your emails</p>
        <PlanTab active={activeTab}/>

        <div className="lg:flex lg:gap-[38px] jsutify-start">
        <FreePlan />
        <PaidPlan month={month} />
        </div></>
        :
        <Plan plan='free' next={upgrade}/>}

<div className="max-w-[831px] mt-10 billing">
<p className="text-[20px] font-bold tracking-[0.8px] leading-[28px] text-grey-900 capitalize mb-4 ">Order History</p>
<TableList columns={columns} dataSource={presidents} width='70%'/>
</div>

    </div>
  )
}

export default Billings