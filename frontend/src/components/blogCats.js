import React from "react";
import Science from "./blogCats/science";
import Philosophy from "./blogCats/philosophy";
import Myth from "./blogCats/myth";

const blogCats = () => {
  return (
    <div>
      blogs catergories
      <Science />
      <Philosophy />
      <Myth />
    </div>
  );
};

export default blogCats;
