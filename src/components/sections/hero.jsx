import React from "react";
import Button from "../global/button";
import HeroImage from "../../assets/images/hero-image.svg";

const hero = () => {
  return (
    <section className="bg-[#0E0E0E]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div>
          <div className="space-y-6 mb-10">
            <h1 className="uppercase text-primary-white-50 tracking-[10px] text-sm">
              New Product
            </h1>
            <h1 className="font-bold text-white tracking-[2px] text-[56px] leading-[58px]">
              XX99 Mark II <br />
              Headphones
            </h1>
            <p className="font-medium text-sm leading-6 text-primary-white-75 max-w-[349px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <Button theme="peach" text="See Product" />
        </div>

        <div>
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default hero;
