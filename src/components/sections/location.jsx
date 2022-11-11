import React from "react";
import HeadphoneOnUser from "../../assets/images/headphone-on-user.svg";
import HeadphoneOnUserTablet from "../../assets/images/headphone-on-user-tablet.svg";
import HeadphoneOnUserMobile from "../../assets/images/headphone-on-user-mobile.svg";

const location = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-36 flex flex-col-reverse md:flex-row justify-between items-center gap-16 md:gap-12">
      <div className="md:max-w-md">
        <h1 className="font-bold text-[28px] sm:text-[40px] leading-[36px] tracking-wider uppercase text-center md:text-left">
          Bringing you the <span className="text-peach-dark">best</span> audio
          gear
        </h1>
        <p className="text-sm font-medium leading-6 text-primary-black-50 mt-8 text-center md:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div>
        <img
          className="rounded-lg hidden md:block"
          src={HeadphoneOnUser}
          alt="user with headphone"
        />
        <img
          className="rounded-lg hidden sm:block md:hidden"
          src={HeadphoneOnUserTablet}
          alt="user with headphone"
        />
        <img
          className="rounded-lg sm:hidden"
          src={HeadphoneOnUserMobile}
          alt="user with headphone"
        />
      </div>
    </section>
  );
};

export default location;
