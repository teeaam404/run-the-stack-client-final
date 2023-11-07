import React from "react";
import Banner from "../Banner/Banner";
import QuestionBanner from "../QuestionBanner/QuestionBanner";
import ReputationBanner from "../ReputationBanner/ReputationBanner";
import BlogBanner from "../BlogBanner/BlogBanner";
import FlipCard from "../FlipCard/FlipCard";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuestionBanner />
      <ReputationBanner />
      <BlogBanner />
      <Footer/>
    </div>
  );
};

export default Home;
