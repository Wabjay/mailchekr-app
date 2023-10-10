import { useEffect } from "react";
import style from "./SideBar.module.css";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"

const SideBar = () => {


  const location = useLocation().pathname;
  console.log(location);

  return (
    <div className={style.sideBar}>
      {/* <p className={style.logo}> MailChekr </p> */}
      <img src={Logo} className="w-[133px] h-[33px] ml-[3px]"/>
      <div className={style.links}>
        <a className={`stroke-grey-600 hover:stroke-green-600 box-border ${location === '/' && 'stroke-green-600 text-green-600 bg-white'}`} href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${location === '/' && 'stroke-green-600'}`}
          >
            <path
              d="M3 8L12 3L21 8V20H3V8Z"
              stroke-width="2"
            />
            <circle cx="12" cy="12.5" r="3"  stroke-width="2" />
          </svg>
          <span className={`${location === '/' && 'text-green-600'}`}>Dashboard</span>
        </a>
        <a href="/emails" className={`fill-grey-600 hover:fill-green-600 box-border ${location === '/emails' && 'bg-white'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${location === '/emails' && 'fill-green-600'}`}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.6793 19.8234 13.3618 19.5236 13.8409C19.2364 14.3 18.8958 14.5 18.5 14.5C18.1042 14.5 17.7636 14.3 17.4764 13.8409C17.1766 13.3618 17 12.6793 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C13.5874 17 15.002 16.2603 15.918 15.1067C16.4757 15.8882 17.3388 16.5 18.5 16.5C19.761 16.5 20.6705 15.7785 21.2191 14.9017C21.755 14.0451 22 12.9776 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.9641 22 15.7988 21.4327 17.3455 20.4527L16.2751 18.7633C15.0391 19.5464 13.574 20 12 20C7.58172 20 4 16.4183 4 12ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
              // fill="#676664"
            />
          </svg>
          <span className={`${location === '/emails' && 'text-green-600'}`}>All Emails</span>
        </a>
        <a href="/api" className={`fill-grey-600 hover:fill-green-600 box-border ${location === '/api' && 'bg-white'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            // fill="none"
            className={`${location === '/api' && 'fill-green-600'}`}
            
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.24264 15.4334C4.46159 16.2145 4.46159 17.4808 5.24264 18.2619C6.02369 19.0429 7.29002 19.0429 8.07107 18.2619C8.85212 17.4808 8.85212 16.2145 8.07107 15.4334C7.29002 14.6524 6.02369 14.6524 5.24264 15.4334ZM3.82843 14.0192C5.14636 12.7013 7.15516 12.4953 8.68907 13.4012L13.7279 8.36238L14.435 7.65527L17.2635 4.82684L17.9706 4.11973L18.6777 4.82684L19.3848 5.53395L22.2132 8.36238L20.799 9.77659L17.9706 6.94816L16.5563 8.36238L19.3848 11.1908L17.9706 12.605L15.1421 9.77659L10.1033 14.8154C11.0092 16.3493 10.8032 18.3582 9.48528 19.6761C7.92318 21.2382 5.39052 21.2382 3.82843 19.6761C2.26633 18.114 2.26633 15.5813 3.82843 14.0192Z"
              // fill="#676664"
            />
          </svg>
          <span className={`${location === '/api' && 'text-green-600'}`}>API Keys</span>
        </a>
        <a href="/setting" className={`stroke-grey-600 hover:stroke-green-600 box-border ${location === '/setting' && 'bg-white'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${location === '/setting' && 'stroke-green-600'}`}
          >
            <path
              d="M10.481 3.55581C11.1658 2.40348 12.8342 2.40348 13.519 3.55581L13.7448 3.93562C14.1743 4.65832 15.0535 4.97834 15.8471 4.70081L16.2642 4.55496C17.5295 4.11246 18.8075 5.18482 18.5915 6.50779L18.5203 6.94384C18.3847 7.77356 18.8526 8.58387 19.6389 8.88138L20.0521 9.03773C21.3059 9.5121 21.5956 11.1551 20.5797 12.0296L20.2448 12.3179C19.6077 12.8664 19.4452 13.7878 19.8563 14.5212L20.0724 14.9066C20.7279 16.0759 19.8938 17.5207 18.5534 17.5376L18.1116 17.5432C17.2709 17.5538 16.5542 18.1553 16.3977 18.9813L16.3155 19.4154C16.066 20.7325 14.4984 21.3031 13.4607 20.4545L13.1186 20.1748C12.4678 19.6426 11.5322 19.6426 10.8814 20.1748L10.5393 20.4545C9.50164 21.3031 7.93395 20.7325 7.6845 19.4154L7.60228 18.9813C7.44583 18.1553 6.72907 17.5538 5.88842 17.5432L5.44664 17.5376C4.10625 17.5207 3.2721 16.0759 3.92761 14.9066L4.14366 14.5212C4.55477 13.7878 4.39229 12.8664 3.75516 12.3179L3.42032 12.0296C2.40443 11.1551 2.69413 9.5121 3.94788 9.03773L4.36111 8.88138C5.14742 8.58387 5.61525 7.77356 5.47975 6.94384L5.40854 6.50779C5.19248 5.18482 6.47048 4.11246 7.73583 4.55496L8.15288 4.70081C8.94647 4.97834 9.8257 4.65832 10.2552 3.93562L10.481 3.55581Z"
              stroke-width="2"
            />
            <circle cx="12" cy="12" r="3" stroke-width="2" />
          </svg>
          <span className={`${location === '/setting' && 'text-green-600'}`}>Settings</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
