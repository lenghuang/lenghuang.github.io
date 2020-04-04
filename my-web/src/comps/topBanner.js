import img from "../pics/top.JPG";
import React from "react";
import TopLine from "./cuteTop.js";
import "../style/App.css";

function TopBanner() {
  return (
    <div className="TopBanner">
      {TopLine()}
      <img className="toptop" src={img} alt="top" width="100%" />
    </div>
  );
}

export default TopBanner;
