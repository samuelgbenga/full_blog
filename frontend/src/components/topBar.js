import React from "react";
import { GiFrogFoot } from "react-icons/gi";
import { FcWiFiLogo } from "react-icons/fc";

const topBar = () => {
  return (
    <div className="w-full bg-white px-12 h-12">
      <div className="flex justify-between items-center h-full max-w-full text-blue-700">
        <div>
          <FcWiFiLogo className="text-4xl" />
        </div>
        <div className="flex justify-between gap-8">
          <span>Home</span>

          <span>Science</span>
          <span>Phylosophy</span>
          <span>Mythology</span>
          <span className="text-black">
            <i>
              <GiFrogFoot />
            </i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default topBar;
