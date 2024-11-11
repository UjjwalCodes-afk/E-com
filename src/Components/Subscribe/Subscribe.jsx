import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
const BannerImg = {
  backgroundImg: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20  dark:bg-gray-800 text-white bg-primary"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold mb-2">
            Get Notified About New Products
          </h1>
          <input data-aos = "fade-up" type="text" placeholder="Enter your email" className="w-full p-3 rounded-full mb-3" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;