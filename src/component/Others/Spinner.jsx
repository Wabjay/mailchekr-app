import { TailSpin } from "react-loader-spinner"

const Spinner = ({height, width, loading}) => {
  return (
    <TailSpin
    height={width ? width : "16"}
    width={width ? width : "16"}
    color="#B88700"
    ariaLabel="tail-spin-loading"
    radius="2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={loading}
  />
  )
}

export default Spinner