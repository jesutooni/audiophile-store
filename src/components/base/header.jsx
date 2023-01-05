import React from "react";
import { ReactComponent as Logo } from "../../assets/images/audiophile.svg";
import { ReactComponent as Hamburger } from "../../assets/images/icons/hamburger.svg";
import CartIcon from "../../assets/images/icons/cart.svg";

const navigation = () => {
  const navs = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <header className="bg-black">
      <div className="px-6">
        <nav className="flex items-center justify-between py-9 border-b border-[#FFFFFF33] max-w-6xl mx-auto">
          <div className="flex gap-10 items-center">
            <Hamburger className="md:hidden cursor-pointer" />
            <Logo className="hidden sm:block cursor-pointer" />
          </div>
          <Logo className="sm:hidden"/>
          <ul className="text-white hidden md:flex items-center gap-8 uppercase text-sm font-bold">
            {navs.map((nav) => (
              <li
                key={nav}
                className="cursor-pointer hover:text-peach-dark duration-200 tracking-[2px]"
              >
                {nav}
              </li>
            ))}
          </ul>
          <div>
            <img src={CartIcon} alt="cart-icon" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default navigation;
