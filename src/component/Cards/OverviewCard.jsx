
const OverviewCard = ({amount, label}) => {
  return (
    <div className="bg-green-100 rounded-[8px] p-4 pt-2 border-[1px] w-[162px]">
        <p className="text-green-700 font-bold text-[24px] leading-[32px] tracking-[-0.96px]">{amount}</p>
        <p className="text-grey-600 font-medium text-[12px] leading-[16px]">{label} </p>
    </div>
  )
}

export default OverviewCard