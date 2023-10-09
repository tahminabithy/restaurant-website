import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import SecTitle from "../../components/SecTitle/SecTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
const OurMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  console.log(pizza);
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Street 11 | menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title={"our menu"}
        text={" Would you like to try a dish?"}
      />
      <SecTitle heading={"Don't miss"} subHeading={"today's offer"} />
      {/* popular menu */}
      <MenuCategory items={popularItems} />
      {/* dessert  */}
      <MenuCategory
        items={dessert}
        title="dessert"
        text=", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertBg}
      />
      {/* pizza */}
      <MenuCategory
        items={pizza}
        title="pizza"
        text=", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaBg}
      />
      {/* salad  */}
      <MenuCategory
        items={salads}
        title="salad"
        text="1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladBg}
      />
      {/* soup   */}
      <MenuCategory
        items={soup}
        title="soup"
        text="Loremer since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupBg}
      />
    </div>
  );
};

export default OurMenu;
