import React from "react";
import Button from "../global/button";

const category = ({ image, title }) => {
  return (
    <div className="relative bg-primary-white1 rounded-lg flex flex-col justify-end items-center h-36 sm:h-40 lg:h-52 w-full pb-3">
      <img className="absolute -top-12 w-20 lg:w-auto" src={image} alt={title} />
      <h1 className="text-black font-bold text-sm md:text-lg">{title}</h1>
      <Button theme="transparent" text="Shop" />
    </div>
  );
};

export default category;
