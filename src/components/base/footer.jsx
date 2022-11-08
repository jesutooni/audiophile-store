import React from "react";
import { ReactComponent as Logo } from "../../assets/images/audiophile.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";

const SocialIcons = ({ customClass }) => {
  return (
    <div
      className={`${customClass} items-center justify-center gap-4`}
    >
      <img src={facebook} alt="facebook-logo" className="cursor-pointer" />
      <img src={twitter} alt="twitter-logo" className="cursor-pointer" />
      <img src={instagram} alt="instagram-logo" className="cursor-pointer" />
    </div>
  );
};

const footer = () => {
  const navs = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <footer className="bg-primary-black pt-14 sm:pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center sm:items-start space-y-12">
        <div className="flex flex-col md:flex-row items-center sm:items-start justify-between w-full gap-12">
          <Logo />
          <ul className="text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-8 uppercase text-sm font-bold">
            {navs.map((nav) => (
              <li
                key={nav}
                className="cursor-pointer hover:text-peach-dark duration-200 tracking-[2px]"
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between w-full">
          <p className="md:max-w-[540px] font-medium text-[15px] leading-6 text-primary-white-50 text-center sm:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <SocialIcons customClass="hidden md:flex self-end" />
        </div>

        <div className="flex justify-between flex-col sm:flex-row w-full gap-12">
          <p className="font-bold text-primary-white-50 text-sm text-center">
            Copyright 2021. All Rights Reserved
          </p>
          <SocialIcons customClass="flex md:hidden" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
