import Link from "next/link";

import React from "react";

const Button = (props) => {
  const { type, text, link, url, hollow, mobile, disabled } = props;

  const btnStyles =
    "h-full w-36 sm:w-56 bg-red border-red border-2 border-solid text-white text-xl uppercase px-4 py-3 rounded-md font-medium duration-300 drop-shadow-md hover:bg-white hover:text-red hover:scale-105";

  const hollowBtnStyles =
    "h-full w-36 sm:w-56 bg-white border-white border-2 border-solid text-white text-xl uppercase px-4 py-3 rounded-md font-medium duration-300 bg-opacity-0 hover:bg-opacity-100 hover:text-red  hover:scale-105";

  const disabledBtnStyles =
    "h-full w-36 sm:w-56 border-red border-2 bg-red text-white text-xl uppercase px-4 py-3 rounded-md font-medium duration-300 drop-shadow-md opacity-50";

  if (link) {
    return (
      <Link href={link} className={mobile ? "block lg:hidden" : "block"}>
        <button
          className={hollow ? hollowBtnStyles : btnStyles}
          type={type || "button"}
        >
          {text}
        </button>
      </Link>
    );
  } else if (url) {
    return (
      <a
        href={url}
        className={mobile ? "block lg:hidden" : "block"}
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={hollow ? hollowBtnStyles : btnStyles}
          type={type || "button"}
        >
          {text}
        </button>
      </a>
    );
  } else {
    return (
      <div className={mobile ? "block lg:hidden" : "block"}>
        <button
          className={
            disabled ? disabledBtnStyles : hollow ? hollowBtnStyles : btnStyles
          }
          type={type || "button"}
          disabled={disabled}
        >
          {text}
        </button>
      </div>
    );
  }
};

export default Button;
