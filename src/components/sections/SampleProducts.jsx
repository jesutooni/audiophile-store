import React from "react";
import Button from "../global/button";
import SampleSpeakerLarge from "../../assets/images/sample-speaker-large.svg";
import SampleEarphone from "../../assets/images/sample-earphone.svg";
import SampleEarphoneTablet from "../../assets/images/sample-earphone-tablet.svg";
import SampleSpeaker2 from "../../assets/images/sample-speaker-2.svg";
import SampleSpeaker2Tab from "../../assets/images/sample-speaker-2-tablet.svg";
import SampleSpeaker2Mob from "../../assets/images/sample-speaker-2-mobile.svg";

const SampleProducts = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 space-y-6 sm:space-y-8 md:space-y-12">
      <div className=" bg-peach-dark rounded-lg flex flex-col md:flex-row items-center gap-7 md:items-start md:justify-between px-12 lg:px-24 pt-12 lg:pt-24 pb-16 md:pb-0">
        <div>
          <img className="w-48 md:w-auto" src={SampleSpeakerLarge} alt="" />
        </div>
        <div className="max-w-[340px] sm:pt-9 text-center md:text-left flex flex-col items-center md:block md:pb-8">
          <h1 className="font-bold text-4xl sm:text-[56px] tracking-widest sm:leading-[58px] text-white">
            ZX9 <br />
            SPEAKER
          </h1>
          <p className="font-medium text-sm leading-6 text-primary-white-75 my-6 sm:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button theme="black" text="See Product" />
        </div>
      </div>

      <div className="relative">
        <img className="rounded-lg hidden md:block" src={SampleSpeaker2} alt="" />
        <img className="rounded-lg hidden xs:block md:hidden" src={SampleSpeaker2Tab} alt="" />
        <img className="rounded-lg w-full xs:hidden" src={SampleSpeaker2Mob} alt="" />
        <div className="absolute top-1/2 -translate-y-1/2 left-7 sm:left-12 md:left-20">
          <h1 className="font-bold text-[28px] leading-10 tracking-widest mb-8">
            ZX7 SPEAKER
          </h1>
          <Button theme="white" text="See Product" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 md:gap-8">
        <div className="w-full">
          <img
            className="rounded-lg w-full sm:w-auto sm:hidden md:block"
            src={SampleEarphone}
            alt=""
          />
          <img
            className="rounded-lg hidden sm:block md:hidden"
            src={SampleEarphoneTablet}
            alt=""
          />
        </div>
        <div className="w-full bg-primary-white1 rounded-lg flex items-center">
          <div className="px-6 md:pl-12 lg:pl-24 py-10 sm:py-0">
            <h1 className="text-black font-bold text-[28px] mb-8 tracking-widest">
              YX1 EARPHONES
            </h1>
            <Button theme="white" text="See Product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleProducts;
