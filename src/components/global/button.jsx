import React from "react";

const button = ({ theme, children }) => {
  const themeClasses = {
    peach: "bg-peach-dark hover:bg-peach-light text-white",
    white:
      "bg-white hover:bg-black border border-black text-black hover:text-white",
    transparent: "text-black opacity-50 hover:opacity-100 text-peach-dark",
  };
  return (
    <button className={`py-4 px-8 font-bold text-sm ${themeClasses[theme]}`}>
      {children}
    </button>
  );
};

export default button;
