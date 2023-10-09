import SecTitle from "../../../components/SecTitle/SecTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white py-20 my-16 ">
      <SecTitle heading={"check it out"} subHeading={"from our menu"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 lg:py-20 px-8 lg:px-36">
        <div className="flex justify-center items-center">
          {" "}
          <img className="lg:w-4/5" src={img} alt="" />
        </div>

        <div className="flex justify-center items-center bg--slate-400 opacity-100">
          <div className="text-justify ">
            <h3>March 20,2023</h3>
            <h2 className="uppercase my-2">Where can i get some</h2>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum alias, perspiciatis debitis libero explicabo ratione
              quisquam mollitia consectetur atque nam non ipsum deleniti
              pariatur fuga laborum maxime necessitatibus. Amet ipsam eum soluta
              odio, mollitia, veritatis perferendis corrupti quos culpa placeat
              voluptate vel sapiente. Modi provident aliquam esse laboriosam
              natus!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-6">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
