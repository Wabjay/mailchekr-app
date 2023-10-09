
const Plan = ({plan,text, next}) => {

  const UpgradeAccount = ()=>{
next(false)
  }

  const CancelAccount = ()=>{

  }
  
  return (
    <div className="w-full max-w-[831px] text-center p-6 bg-white border border-gey-100 rounded-[12px] mt-4 lg:mt-6">
      <p className=" text-grey-900 text-[20px] font-bold leading-[28px] tracking-[0.8px] lg:text-[24px] font-bold lg:leading-8 lg:tracking-[0.96px]"> {plan === "free" ? "Free Plan": "Pro Business Annual: Active"}</p>
      <p className="text-grey-900 text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] mt-1">{plan === "free" ? "Upgrade your plan to pro to enjoy unlimited validation entries" : "Next payment on August 3rd, 2024 for $150 annually"}  </p>
      {plan === "free" ?  <button
            onClick={UpgradeAccount}
            className="bg-yellow-400 rounded-[8px] py-3 px-4 mt-6 w-full max-w-[166px] text-grey-900 font-medium text-[16px] leading-[22px]"
          >
            Upgrade to PRO
          </button> : <button
            onClick={CancelAccount}
            className="bg-white border border-grey-200 rounded-[8px] py-3 px-4 mt-6 w-full max-w-[376px] text-grey-900 font-medium text-sm leading-[20px]"
          >
            Cancel subscription
          </button>}
      {/* */}
</div>
  )
}

export default Plan