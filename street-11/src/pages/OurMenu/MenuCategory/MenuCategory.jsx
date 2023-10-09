import React from "react";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import Cover from "../../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, text }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} text={text} />}

      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="card-actions justify-center">
        <Link to="/order">
          {" "}
          <button className="mb-8 btn uppercase border-b-4 border-t-0 border-[#1F2937] text-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506]  mt-6">
            order your favourite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
