import { useState } from "react"
import Layout from "../component/Layouts/Layout"
import Main from "../component/Layouts/Main"
import Heading from "../component/Others/Heading"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ButtonWithoutIcon from "../component/buttons/ButtonLeftIcon";

const Api = () => {

const [state,  setState] = useState({value: 'dab3eeeeb04ac84333aacbf503852354', copied: false})

  return (
    <Layout>
    <Heading text="API Keys"/>
    <Main>
      <p className="text-grey-900 font-medium leading-[20px] w-[220px]">Configure your applicatication with this credentials</p>
      <div className="mt-2 flex flex-wrap justify-start items-center gap-[14px]">
         <input value={state.value}
         disabled
       className="disabled:bg-grey-10 border border-grey-200 rounded-[8px] w-full max-w-[312px] h-8 px-4 text-[16px] text-Inter text-grey-500 leading-[20px]"
          onChange={({target: {value}}) => setState({value, copied: false})} />

      <CopyToClipboard text={state.value}
          onCopy={() => setState({copied: true})}>
          <span  className="active:bg-green-700 active:text-white flex gap-1 items-center border border-grey-200 rounded-[8px] w-fit h-8 px-4 text-[16px] font-medium text-grey-900 leading-[22px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
<path d="M5.5 5V4.25H4.75V5H5.5ZM5.5 18H4.75L5.5 18.75V18ZM15.9006 6.11499L15.3171 6.58624L15.9006 6.11499ZM17.8338 8.50854L17.2504 8.97979L17.8338 8.50854ZM15.5 17.25H5.5V18.75H15.5V17.25ZM6.25 18L6.25 5H4.75L4.75 18H6.25ZM17.75 10.3936V15H19.25V10.3936H17.75ZM5.5 5.75L13.5667 5.75V4.25L5.5 4.25V5.75ZM15.3171 6.58624L17.2504 8.97979L18.4173 8.03729L16.484 5.64374L15.3171 6.58624ZM13.5667 5.75C14.2466 5.75 14.89 6.05738 15.3171 6.58624L16.484 5.64374C15.7721 4.76229 14.6998 4.25 13.5667 4.25V5.75ZM19.25 10.3936C19.25 9.53602 18.9561 8.7044 18.4173 8.03729L17.2504 8.97979C17.5737 9.38006 17.75 9.87904 17.75 10.3936H19.25ZM15.5 18.75C17.5711 18.75 19.25 17.0711 19.25 15H17.75C17.75 16.2426 16.7426 17.25 15.5 17.25V18.75Z" fill="#676664"/>
<path d="M12.5 5V1.5L8.5 1.5L4 1.5C2.34315 1.5 1 2.84315 1 4.5L1 14H6" stroke="#676664" stroke-width="1.5" stroke-linejoin="bevel"/>
</svg> Copy</span>
        </CopyToClipboard>
      </div>
     

<ButtonWithoutIcon text="Button without text" buttonFunction={()=> console.log('button tester')} />
    </Main>
    {/* */}
 </Layout> 
  )
}

export default Api