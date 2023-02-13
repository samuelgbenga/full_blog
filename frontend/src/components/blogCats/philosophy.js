import React from "react";
import image3 from "./../../mockItems/img3.jpg";
import image4 from "./../../mockItems/img4.jpg";
import image1 from "./../../mockItems/img1.jpg";
import image5 from "./../../mockItems/img5.jpg";

const philosophy = () => {
  return (
    <div className="w-full h-auto px-12 overflow-hidden">
      <div className="flex justify-between my-4">
        <div className="text-purple-900 text-xl">Philosphical Views</div>
        <div className="text-purple-900 bg-white border border-purple-900 box-content  p-1  rounded-xl text-xs">
          Read All Article
        </div>
      </div>
      <div className="grid md:grid-cols-4  gap-3 ">
        <div className="w-full h-auto ">
          <img
            className="object-cover h-[200px] md:h-[100px]  lg:h-[200px] w-full rounded-lg "
            src={image1}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-[16px] font-bold text-purple-900">
              Philosophical View
            </h1>
            <p className=" text-gray-500 text-[10px]">
              Come and Taste Philosophical view and see.
            </p>
            <div className="text-[12px] text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
          <img
            className="object-cover h-[200px] md:h-[100px]  lg:h-[200px] w-full rounded-lg "
            src={image3}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-[16px] font-bold text-purple-900">
              Philosophical View
            </h1>
            <p className=" text-gray-500 text-[10px]">
              Come and Taste Philosophical view and see.
            </p>
            <div className="text-[12px] text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
          <img
            className="object-cover h-[200px] md:h-[100px] lg:h-[200px] w-full rounded-lg "
            src={image5}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-[16px] font-bold text-purple-900">
              Philosophical View
            </h1>
            <p className=" text-gray-500 text-[10px]">
              Come and Taste Philosophical view and see.
            </p>
            <div className="text-[12px] text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
        </div>
        <div className="w-full h-auto ">
          <img
            className="object-cover h-[200px] md:h-[100px]  lg:h-[200px] w-full rounded-lg "
            src={image4}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-[16px] font-bold text-purple-900">
              Philosophical View
            </h1>
            <p className=" text-gray-500 text-[10px]">
              Come and Taste Philosophical view and see.
            </p>
            <div className="text-[12px] text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default philosophy;
