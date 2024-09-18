import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Street 11 | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      {/* <BistroBoss /> */}
      <PopularMenu />
      <ChefRecommends />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
