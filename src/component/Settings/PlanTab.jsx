import { useEffect, useState } from "react"

const PlanTab = ({active}) => {
const [plan, setPlan] = useState(true)

useEffect(()=>{
active(plan)
},[plan])

  return (
<div className="flex gap-1 w-fit px-1 py-[5px] bg-grey-50 rounded-[20px] mb-6">
       <p 
       onClick={(e) => setPlan(true)}
       className={`cursor-pointer text-grey-900 text-[14px] font-medium leading-[16px] py-[7px] px-4 rounded-[20px] ${plan && 'text-malachite-700 bg-white'}`}>Monthly</p>
    <p 
       onClick={(e) => setPlan(false)}
       className={`cursor-pointer text-grey-900 text-[14px] font-medium leading-[16px] py-[7px] px-4 rounded-[20px] ${!plan && 'text-malachite-700 bg-white'}`}>Yearly</p>

 </div>
    
    
    )
}

export default PlanTab