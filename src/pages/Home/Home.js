import React from "react";
import Slider from "../../components/Slider/Slider";
import AdvertisedItems from "./AdvertisedItems";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <Slider />
      <AdvertisedItems />
      <Categories />
    </>
  );
};

export default Home;
