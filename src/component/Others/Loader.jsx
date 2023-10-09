import { Oval } from "react-loader-spinner"

const Loader = ({status}) => {
  return (
   status && <div className="flex flex-col justify-center items-center bg-modalBlur fixed top-0 left-0 z-[350] w-full h-full">
        <Oval
  height={56}
  width={56}
  color="#FFC936"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4F7D54"
  strokeWidth={5}
  strokeWidthSecondary={5}

/>
<p className="text-white text-[16px] font-bold leading-[22px] mt-4">Validating...</p>
{/* color: var(--money-white, #FFF);
text-align: center;
font-family: Untitled Sans;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px; */}
    </div>
  )
}

export default Loader