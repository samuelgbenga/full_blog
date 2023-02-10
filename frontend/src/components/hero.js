import React from "react";
//import Hero from "./../mockItems/img2.jpg";

const hero = () => {
  return (
    <div className="bg-[url('../src/mockItems/img6.jpg')] bg-cover bg-center bg-no-repeat w-full h-[700px] flex items-end justify-start p-16 tracking-wide md:tracking-widest">
      <div className="h-[50%] lg:h-[65%]">
        {" "}
        <h1 className="text-purple-900 font-bold text-5xl lg:text-6xl my-6 lg:my-10">
          Time to Get Your Facts <br /> Straight and in Order
        </h1>
        <p className="my-6 text-gray-700 font-bold lg:my-10">
          To have a good knowledge of things is not as easy as going to school
          to get <br /> a College degree or polytechic Diploma
        </p>
        <div className="my-6 text-white bg-purple-900 inline p-2  rounded lg:my-10">
          Read Article
        </div>
      </div>
    </div>
  );
};

export default hero;
