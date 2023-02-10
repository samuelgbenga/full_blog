import React from "react";
import image1 from "./../../mockItems/img1.jpg";
import image2 from "./../../mockItems/img2.jpg";

const science = () => {
  return (
    <div className="w-full  my-12 px-12 box-border h-[400px]">
      <div className="grid md:grid-cols-3 box-border gap-3 h-full">
        <div className=" h-[400px] overflow-hidden">
          <img
            className="object-cover h-[50%] w-full rounded-lg "
            src={image1}
            alt="image2"
          />
          <h1 className="my-3 text-xl font-bold text-purple-900">
            Time to get Your Knowled of Science and in Order
          </h1>
          <p className="my-3 text-gray-500 text-sm">
            Come and Taste Scienc and See that it is sweeter than honey as it
            is.
          </p>
          <div className="my-3 text-purple-900 bg-white border border-purple-900 inline p-2  rounded">
            Read Article
          </div>
        </div>
        <div className="h-[400px] overflow-hidden">
          <img
            className="object-cover h-[50%] w-full rounded-lg"
            src={image2}
            alt="image2"
          />
          image 3
        </div>
        <div className="h-[400px] w-full flex md:flex-col gap-3 overflow-hidden">
          <div>subContainer1</div>
          <div>subContainer2</div>
          <div>subContainer3</div>
        </div>
      </div>
    </div>
  );
};

export default science;
