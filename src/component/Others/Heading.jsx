import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom";

const Heading = ({text, children, back}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
  return (
    <div>
      {back && <p onClick={goBack}>Back</p>}
    <div className="flex justify-between items-center pb-5 md:pb-[35px] lg:pb-[26px]">
        <p className="text-[20px] font-bold tracking-[-0.8px] leading-[28px] text-grey-900 lg:text-[24px] lg:tracking-[-0.96px] lg:leading-[32px] capitalize ">{text}</p>
        {/* {isDesktop && children}  */}
        {children}
    </div>
    </div>
  )
}

export default Heading