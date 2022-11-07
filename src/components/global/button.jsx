import React from "react";
import { ReactComponent as RightCaret } from "../../assets/images/icons/caret-right.svg";

const button = ({ theme, text }) => {
  const themeClasses = {
    peach: "bg-peach-dark hover:bg-peach-light text-white",
    white:
      "bg-white hover:bg-black border border-black text-black hover:text-white",
    transparent:
      "text-primary-black-50 hover:opacity-100 hover:text-peach-dark",
  };
  return (
    <button
      className={`py-4 px-8 font-bold text-sm uppercase flex items-center gap-3 ${themeClasses[theme]} duration-150`}
    >
      {text}
      <RightCaret />
    </button>
  );
};

export default button;
