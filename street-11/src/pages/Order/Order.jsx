import React, { useState } from "react";
import coverImg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
const Order = () => {
  const [order, setOrder] = useState("");
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Cover
        img={coverImg}
        title={"Our shop"}
        text={"Would you like to try a dish?"}
      />
      {/* ----------------------- */}

      <div className="mt-20 mb-16 flex justify-center items-center">
        <button
          onClick={() => setOrder("salad")}
          className=" uppercase text-sm md:text-base font-semibold hover:text-[#BB8506] border-[#BB8506] focus:text-violet-700 "
        >
          salad
        </button>
        <button
          onClick={() => setOrder("pizza")}
          className="ml-6 uppercase text-sm md:text-base font-semibold  hover:text-[#BB8506]  border-[#BB8506] focus:text-violet-700"
        >
          Pizza
        </button>
        <button
          onClick={() => setOrder("soup")}
          className="ml-6 uppercase text-sm md:text-base font-semibold  hover:text-[#BB8506]  border-[#BB8506] focus:text-violet-700"
        >
          soups
        </button>
        <button
          onClick={() => setOrder("desserts")}
          className="ml-6 uppercase text-sm md:text-base font-semibold  hover:text-[#BB8506] border-[#BB8506] focus:text-violet-700"
        >
          Desserts
        </button>
        <button
          onClick={() => setOrder("drink")}
          className="ml-6 uppercase text-sm md:text-base font-semibold  hover:text-[#BB8506]  border-[#BB8506] focus:text-violet-700"
        >
          Drinks
        </button>
      </div>
      {/* ------------------ */}

      {order === "salad" ? (
        <div className="grid grid-col-1 md:grid-cols-3 gap-8">
          {salads?.slice(0, 6).map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        ""
      )}
      {order === "desserts" ? (
        <div className="grid col-1 md:grid-cols-3 gap-8">
          {dessert?.slice(0, 6).map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        ""
      )}
      {order === "soup" ? (
        <div className="grid col-1 md:grid-cols-3 gap-8">
          {soup?.slice(0, 6).map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        ""
      )}
      {order === "pizza" ? (
        <div className="grid col-1 md:grid-cols-3 gap-8">
          {pizza?.slice(0, 6).map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        ""
      )}
      {order === "drink" ? (
        <div className="grid col-1 md:grid-cols-3 gap-8">
          {drink.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Order;
