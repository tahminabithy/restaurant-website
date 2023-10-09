import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="lg:flex justify-center items-center gap-4 p-4">
      <div className="flex justify-center items-center">
        {" "}
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>

      <div className="p-6">
        <div>
          {" "}
          <h3 className="text-xl font-['Cinzel']">{name}--------</h3>
          <p className="text-base">{recipe}</p>
        </div>{" "}
      </div>
      <h3 className="px-6 text-[#BB8506]">${price}</h3>
    </div>
  );
};

export default MenuItem;
