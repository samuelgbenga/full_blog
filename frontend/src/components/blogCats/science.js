import React from "react";
import image1 from "./../../mockItems/img1.jpg";
import image2 from "./../../mockItems/img2.jpg";

const science = () => {
  return (
    <div className="w-full  my-12 mx-auto px-12 h-auto overflow-x-hidden ">
      <div className=" grid md:grid-cols-3 box-border gap-6 h-auto ">
        <div className="w-full h-auto ">
          <img
            className="object-cover h-[250px] md:h-[300px] w-full rounded-lg "
            src={image1}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-xl font-bold text-purple-900">
              Time to get Your Knowled of Science and in Order
            </h1>
            <p className=" text-gray-500 text-sm">
              Come and Taste Scienc and See that it is sweeter than honey as it
              is.
            </p>
            <div className="text-purple-900 bg-white border border-purple-900   p-1 my-1  rounded">
              Read Article
            </div>
          </div>
        </div>
        <div className="h-auto w-full ">
          <img
            className="object-cover h-[250px] md:h-[300px] w-full rounded-lg"
            src={image2}
            alt="image2"
          />
          <div className="my-3 flex flex-col gap-2 items-start">
            <h1 className=" text-xl font-bold text-purple-900">
              Time to get Your Knowled of Science and in Order
            </h1>
            <p className=" text-gray-500 text-sm">
              Come and Taste Scienc and See that it is sweeter than honey as it
              is.
            </p>
            <div className="text-purple-900 bg-white border border-purple-900  p-1 my-1  rounded">
              Read Article
            </div>
          </div>
        </div>

        {/* the colument section */}
        <div className="h-auto w-full flex md:flex-col gap-6">
          <div className=" flex flex-col gap-1 items-start">
            <h1 className=" text-[14px] font-bold text-purple-900">
              Time to get Your Knowled of Science and in Order
            </h1>
            <p className=" text-gray-500 text-[12px]">
              Come and Taste Scienc and See that it is sweeter than honey as it
              is.Come and Taste Scienc and See that it is sweeter than honey as
              it is.
            </p>
            <div className="text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
          <div className=" flex flex-col gap-1 items-start">
            <h1 className=" text-[14px] font-bold text-purple-900">
              Time to get Your Knowled of Science and in Order
            </h1>
            <p className=" text-gray-500 text-[12px]">
              Come and Taste Scienc and See that it is sweeter than honey as it
              is.Come and Taste Scienc and See that it is sweeter than honey as
              it is.
            </p>
            <div className="text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
          <div className=" flex flex-col gap-1 items-start">
            <h1 className=" text-[14px] font-bold text-purple-900">
              Time to get Your Knowled of Science and in Order
            </h1>
            <p className=" text-gray-500 text-[12px]">
              Come and Taste Scienc and See that it is sweeter than honey as it
              is.Come and Taste Scienc and See that it is sweeter than honey as
              it is.
            </p>
            <div className="text-purple-700  underline underline-offset-2">
              Read in 3 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default science;
