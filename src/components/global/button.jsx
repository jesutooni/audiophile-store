import React from "react";
import { ReactComponent as RightCaret } from "../../assets/images/icons/caret-right.svg";

const button = ({ theme, text }) => {
  const themeClasses = {
    peach: "bg-peach-dark hover:bg-peach-light text-white",
    white:
      "bg-transparent hover:bg-black border border-black text-black hover:text-white",
    black: "bg-black hover:bg-[#4C4C4C] text-white",
    transparent:
      "text-primary-black-50 hover:opacity-100 hover:text-peach-dark",
  };
  return (
    <button
      className={`py-3.5 px-8 font-bold text-xs uppercase flex items-center gap-3 ${themeClasses[theme]} duration-300 ease-in-out tracking-[1px]`}
    >
      {text}
      {theme === "transparent" && <RightCaret />}
    </button>
  );
};

export default button;
