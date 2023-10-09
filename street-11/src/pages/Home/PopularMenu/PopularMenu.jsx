import SecTitle from "../../../components/SecTitle/SecTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SecTitle heading={"Cheack it out"} subHeading={"from our menu"} />
      <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
