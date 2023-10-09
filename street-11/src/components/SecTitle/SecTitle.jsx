import React from "react";

const SecTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex justify-center items-center  mt-6">
      <div className="mx-auto md:4/12 lg::w-3/12 text-center">
        {" "}
        <p className="text-[#D99904] italic">---{heading}---</p>
        <h1 className="text-3xl uppercase mt-4 border-y-2 border-gray-300 py-4">
          {subHeading}
        </h1>
      </div>
    </div>
  );
};

export default SecTitle;
