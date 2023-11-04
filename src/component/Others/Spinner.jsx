import { TailSpin } from "react-loader-spinner"

const Spinner = ({height, width, loading}) => {
  return (
<div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
              <TailSpin
                height="300"
                width="300"
                color="#B88700"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{ paddingRight: "8px" }}
                wrapperClass=""
                visible={loading}
              />{console.log("LOADING...")}
            </div>
  )
}

export default Spinner