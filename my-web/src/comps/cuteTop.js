import React from "react";
import ReactRotatingText from "react-rotating-text";
import git from "../pics/github.png";
import linked from "../pics/linkedin-logo.png";
import res from "../pics/resumepic.png";
import "../style/App.css";

function TopLine() {
  return (
    <div className="TopLine">
      <div style={{ position: "relative", float: "left" }}>
        Len Huang:{" "}
        <ReactRotatingText
          emptyPause={1100}
          typingInterval={100}
          items={[
            "Problem Solver",
            "Eternal Student",
            "Software Engineer",
            "Brogrammer",
            "The Next Hokage",
          ]}
        />
      </div>
      <div
        style={{
          position: "relative",
          float: "right",
          textAlign: "right",
          align: "right",
        }}
      >
        {" "}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "calc((5px + 1.2vmin + 0.5vmax) / 1.5)",
          }}
        >
          {" "}
          Links:{" "}
        </span>
        <a href="https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2FHuang_Len%20Resume.pdf?alt=media&token=097ea47e-1b56-4fa7-8887-740d5e922d8c">
          <img src={res} alt="resume" className="icon-top" />
        </a>
        <a href="https://github.com/lenghuang">
          <img src={git} alt="gitlink" className="icon-top" />
        </a>
        <a href="https://www.linkedin.com/in/len-huang-622403178/">
          <img src={linked} alt="linkedinlink" className="icon-top" />
        </a>
      </div>
    </div>
  );
}

export default TopLine;
