import React from "react";
import { ReactComponent as Logo } from "../../assets/images/audiophile.svg";
import CartIcon from "../../assets/images/icons/cart.svg";

const navigation = () => {
  const navs = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <header className="bg-black">
      <nav className="flex items-center justify-between  py-9 border-b border-white max-w-6xl mx-auto">
        <Logo />
        <ul className="text-white flex items-center gap-8 uppercase text-sm font-bold">
          {navs.map((nav) => (
            <li key={nav} className="cursor-pointer">
              {nav}
            </li>
          ))}
        </ul>
        <div>
          <img src={CartIcon} alt="cart-icon" />
        </div>
      </nav>
    </header>
  );
};

export default navigation;
