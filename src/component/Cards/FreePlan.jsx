import Tag from '../../assets/images/free icon.svg'

const FreePlan = ({plan,text}) => {

  
  return (
    <div className="w-full h-fit text-left p-8 bg-white border border-gey-100 rounded-[24px] mt-4 mx-auto lg:w-fit lg:max-w-[351px] lg:mt-6 lg:mx-0">
     <p className="text-green-700 text-[24px] mb-6 font-bold leading-[32px] tracking-[0.96px] w-[90%] lg:w-full">FREE <span className="text-[14px] leading-[20px]">(No credit card required)</span></p>
     <p className="text-green-700 text-[48px] mb-10 font-bold leading-[40px] tracking-[-1px]">$0 <span className="text-[16px] leading-[22px] tracking-[0px] font-medium">Per month</span></p>
     <div className="flex flex-col gap-6 justify-start">
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px]'> 1 email validation entry</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px]'> 100 emails</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px]'> 1 email export</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px]'> Single email validation</p></div>
      <div className="flex gap-4 items-center"><img src={Tag} className='w-6 h-6' alt="" /><p className='text-[20px] leading-[28px]'> Multiple email validation</p></div>
     </div >

     <button 
     disabled
            className="mt-[40px] w-full h-9 flex justify-center items-center text-center text-white text-sm font-medium leading-[20px] rounded-[8px] border-[1px] border-green-200 bg-green-200"
            >Signup for free</button>
</div>
  )
}

export default FreePlan