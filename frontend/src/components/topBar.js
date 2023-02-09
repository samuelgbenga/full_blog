import React from "react";
import { GiFrogFoot } from "react-icons/gi";
import { FcWiFiLogo } from "react-icons/fc";

const topBar = () => {
  return (
    <div className="max-w-full bg-white h-12">
      <div className="flex justify-between max-w-full p-4 px-12">
        <div>
          <FcWiFiLogo />
        </div>
        <div className="flex justify-between gap-8">
          <span>Home</span>

          <span>Science</span>
          <span>Phylosophy</span>
          <span>Mythology</span>
          <span>
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
