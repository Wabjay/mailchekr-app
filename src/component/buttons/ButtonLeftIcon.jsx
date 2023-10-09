const ButtonWithoutIcon = ({ buttonFunction, color, text }) => {
  // const buttonFunction =(params)=> {

  // }

  return (
    <div>
      <button
        onClick={buttonFunction}
        className={`rounded-[8px] py-3 px-4 font-medium text-sm leading-[20px] border
            ${
              color === "yellow"
                ? "bg-yellow-400  text-grey-900"
                : color === "light-yellow"
                ? "bg-white border-yellow-600 text-yellow-600 "
                : color === "green"
                ? "bg-green-500 border-green-500 text-white"
                : color === "light-green"
                ? "bg-white border-green-200 text-green-200"
                : "bg-white text-grey-200 border-grey-200"
            }`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonWithoutIcon;
