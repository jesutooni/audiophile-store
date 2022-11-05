import React from "react";
import { ReactComponent as Logo } from "../../assets/images/audiophile.svg";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";

const footer = () => {
  const navs = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <footer className="bg-primary-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div>
          <Logo />
          <p className="mt-9 max-w-[540px] font-medium text-[15px] leading-6 text-white opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>

          <p className="mt-14 font-bold text-white opacity-50 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div>
          <ul className="text-white flex items-center gap-8 uppercase text-sm font-bold">
            {navs.map((nav) => (
              <li key={nav} className="cursor-pointer">
                {nav}
              </li>
            ))}
          </ul>

          <div className="mt-24 flex items-center justify-end gap-4">
            <img src={facebook} alt="facebook-logo" />
            <img src={twitter} alt="twitter-logo" />
            <img src={instagram} alt="instagram-logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
