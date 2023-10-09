import { useState } from 'react';
import Tag from '../../assets/images/paid icon.svg'


const PaidPlan = ({month}) => {
// const [month, setMonth] = useState(month)
    
const upgrade = ()=>{

}
    
const cancel = ()=>{

}
  return (
    <div className="relative w-full h-fit text-left p-8 bg-green-700 border border-gey-100 rounded-[24px] mt-4 mx-auto lg:w-fit lg:max-w-[351px] lg:mt-6 lg:mx-0">

{!month  && <p className="w-fit rotate-[-4.113deg] mt-[-57px] mx-auto h-9 flex justify-center items-center text-yellow-900 text-grey-900 text-sm font-bold leading-[28px] rounded-[20px] px-4 border-[4px] border-white bg-yellow-400">Preffered</p>}
     
     <p className={`text-yellow-400 text-[24px] ${!month && 'mt-[17px]'} mb-6 font-bold leading-[32px] tracking-[0.96px] w-[90%]`}>PRO</p>
     <p className="text-yellow-400 text-[48px] mb-10 font-bold leading-[40px] tracking-[-1px]">{month ? '$7' : '$72'}<span className="text-[16px] leading-[22px] tracking-[0px] font-medium pl-2">Per {month ? 'month' : 'year'}</span></p>
     <div className="flex flex-col gap-6 justify-start">
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px] text-white '>Unlimited email validation entry</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px] text-white '>Unlimited email export</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px] text-white '>Single email validation</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px] text-white '>Multiple email validation</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px] text-white '>Export all emails</p></div>
     </div >
     {!month ?
     <button 
            className="mt-[40px] w-full h-9 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-green-500 bg-yellow-400"
            onClick={cancel}
            >Upgrade to pro</button> : 
            <button 
            className="mt-[40px] w-full h-9 flex justify-center items-center text-center text-grey-900 text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-green-500 bg-yellow-400"
            onClick={upgrade}
            >Upgrade to pro</button> }
</div>
  );
};

export default PaidPlan;
