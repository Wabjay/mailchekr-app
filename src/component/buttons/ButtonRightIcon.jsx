const ButtonWithoutIcon = ({ buttonFunction, color, text, icon }) => {



  return (
    <div>
      <button
        onClick={buttonFunction}
        className={`rounded-[8px] py-3 px-4 font-medium text-sm leading-[20px] border flex w-${width} max-w-${maxWidth}
            ${
              color === "yellow"
                ? "bg-yellow-400 border-yellow-400 text-grey-900"
                : color === "light-yellow"
                ? "bg-white border-yellow-600 text-yellow-600"
                : color === "green"
                ? "bg-green-500 border-green-500 text-white"
                : color === "light-green"
                ? "bg-white border-green-200 text-green-200"
                : "bg-white text-grey-200 border-grey-200"
            }`}
      >
        {text} <img src={icon} />
      </button>
    </div>
  );
};

export default ButtonWithoutIcon;
