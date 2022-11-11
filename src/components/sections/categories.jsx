import React from "react";
import CategoryContainer from "../containers/category.container";
import headphone from '../../assets/images/headphone.svg'
import speaker from '../../assets/images/speaker.svg'
import earphone from '../../assets/images/earphone.svg'

const categories = () => {
  const categories = [
    {
      id: 1,
      image: headphone,
      title: "Headphones",
    },
    {
      id: 2,
      image: speaker,
      title: "Speakers",
    },
    {
      id: 3,
      image: earphone,
      title: "Earphones",
    },
  ];
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-16 sm:gap-8 px-6 pt-32 lg:pt-48 pb-24 lg:pb-40 max-w-6xl mx-auto">
      {categories.map(({ id, image, title }) => (
        <CategoryContainer key={id} title={title} image={image} />
      ))}
    </section>
  );
};

export default categories;
