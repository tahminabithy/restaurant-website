import React from "react";
import img from "../../../assets/home/slide1.jpg";
const RecommendedCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-20">
      <figure>
        <img className="w-full h-80" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-center">Shoes!</h2>
        <p className="text-center">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-center">
          <button className="py-2 px-4 rounded-md text-[#BB8506] bg-[#1F2937] hover:bg-[#E8E8E8] border-b-2 border-[#BB8506]">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
