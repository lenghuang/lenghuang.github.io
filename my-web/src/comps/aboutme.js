import React from "react";
import caseWest from "../pics/case.JPG";
import "../style/about.css";

function AboutMe() {
  return (
    <div className="w3-row">
      <div className="w3-half">
        <div className="leftpic">
          <img
            src={caseWest}
            className="case"
            alt=" N Saker of NSC Creatives"
          />
        </div>
      </div>
      <div className="w3-half">
        <div className="caseDesc">
          Hi there! My name is Len Huang and I'm a big guy with an even bigger
          heart. I have a passion for applying the abstract theories of computer
          science to the practical challenges of the world. I'm currently a
          student at Carnegie Mellon University studying Computer Science,
          challenging myself with difficult curricula and diverse
          extracurriculars.{" "}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
