import { useEffect, useState } from "react"
import OTPInput from "react-otp-input"

const OTPForm = ({pin}) => {
    const [otp, setOtp] = useState('')

    useEffect(()=>{
      pin(otp)
    },[otp])
  return (
    <OTPInput
    value={otp}
    onChange={setOtp}
    numInputs={5}
    // isInputNum={true}
    // placeholder={2}
    renderInput={(props) => <input {...props} />}
    renderSeparator={<span>  </span>}
    shouldAutoFocus
    containerStyle={{display: "flex", gap: "10px"}}
    inputStyle={{border: "solid 1px #BBBBB9", borderRadius: "8px", width: "36px", height:"36px", fontWeight:"500"}}
    />
  )
}

export default OTPForm