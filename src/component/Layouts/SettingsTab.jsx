import { useEffect, useState } from "react"

const SettingsTab = ({active}) => {
const [tab, setTab] = useState('edit')

useEffect(()=>{
active(tab)
},[tab])
  return (
<div className="flex gap-1 w-full max-w-[831px] pl-2 py-[5px] bg-grey-50 rounded-[8px] ">
       <p 
       onClick={(e) => setTab('edit')}
       className={`cursor-pointer text-grey-600 text-[12px] leading-[16px] py-[7px] px-4 rounded-[8px] rounded-[8px] hover:text-malachite-700 ${ tab === 'edit' && 'bg-white shadow-button'}`}>Profile</p>
       <p 
       onClick={(e) => setTab('billing')}
       className={`cursor-pointer text-grey-600 text-[12px] leading-[16px] py-[7px] px-4 rounded-[8px] rounded-[8px] hover:text-malachite-700 ${ tab === 'billing' && 'bg-white shadow-button'}`}>Billings</p>

    </div>
    
    
    )
}

export default SettingsTab