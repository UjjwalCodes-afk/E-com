import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
import Aos from "aos";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            animi cupiditate. Labore possimus maiores quibusdam
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card section */}
            {ProductsData.map((item) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-display={item.aosDelay}
                  className="space-y-3"
                  key={item.id}
                >
                  <img
                    src={item.img}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                    alt=""
                  />
                  <h1 data-aos="fade-up" className="font-semibold">{item.title}</h1>
                  <p data-aos="fade-up" className="text-sm text-gray-600">{item.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"></FaStar>
                    <span>{item.rating}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 rounded-md p-4">View All Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;