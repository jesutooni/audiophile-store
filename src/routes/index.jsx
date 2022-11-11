import React from "react";
import Hero from "../components/sections/hero";
import Categories from "../components/sections/categories";
import Location from "../components/sections/location";
import SampleProducts from "../components/sections/SampleProducts";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Categories />
      <SampleProducts />
      <Location />
    </React.Fragment>
  );
};

export default HomePage;
