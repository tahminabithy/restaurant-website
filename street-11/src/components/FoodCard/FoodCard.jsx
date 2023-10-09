import React from "react";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image } = item;
  return (
    <div className="my-4 card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-yellow-500 absolute right-4 top-3 text-white p-2 rounded-md text-lg">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="text-center text-xl font-semibold">{name}</h2>
        <p className="text-justify text-[#737373]">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506]  mt-6">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
