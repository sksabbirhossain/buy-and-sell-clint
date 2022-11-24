import React from "react";
import Contact from "../../components/Contact/Contact";
import Slider from "../../components/Slider/Slider";
import AdvertisedItems from "./AdvertisedItems";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Slider />
      <AdvertisedItems />
      <Categories />
      <Contact />
    </>
  );
};

export default Home;
