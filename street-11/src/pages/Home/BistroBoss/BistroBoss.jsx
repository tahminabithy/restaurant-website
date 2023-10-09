import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div style={{ background: `url(${chefService})` }}>
      <div className="text-center bg-white ">
        {" "}
        <img src={chefService} alt="" />
        <h1 className="font-['Cinzel'] text-4xl uppercase ">bistro boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eos distinctio commodi. Voluptas, animi nisi vero quisquam officia
          consequuntur similique omnis vitae nemo molestiae, suscipit ipsum
          error repudiandae, rerum dolores.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
