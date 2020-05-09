import React from "react";
import JN from "../pics/jntsa.JPG";
//import ddash from "../pics/ddash.JPG";
import "../style/fun.css";
import "../style/about.css";

function FunStuff() {
  return (
    <div className="w3-row">
      <div className="w3-half">
        <div className="funDesc">
          Outside of computer science, I enjoy sports, music, and advocacy. I
          competed at the national level in the Discus Throw in high school,
          placing 3rd in the Emerging Elite Division of{" "}
          <a
            style={{ color: "#c5760e" }}
            href="https://nj.milesplit.com/videos/394069"
          >
            the New Balance Nationals
          </a>{" "}
          Track and Field Meet with a{" "}
          <a
            style={{ color: "#c5760e" }}
            href="https://www.tapinto.net/towns/holmdel-and-colts-neck/sections/sports/articles/passing-of-the-torch-new-discus-record-connects-huang-and-holmdel-legend-balkovic"
          >
            school record throw{" "}
          </a>
          of 171'2", and am now continuing at the the{" "}
          <a
            style={{ color: "#c5760e" }}
            href="https://athletics.cmu.edu/sports/mtrack/2019-20/releases/20200125vysewt"
          >
            NCAA Division III
          </a>{" "}
          level for Carnegie Mellon University. Music provides me motivation and
          comfort so I taught myself guitar and joined the{" "}
          <a
            style={{ color: "#c5760e" }}
            href="https://www.youtube.com/watch?v=-5hjfOI_XaY"
          >
            Joyful Noise{" "}
          </a>{" "}
          acapella group. I led my high school's civic engagement programs
          through the YMCA NE Model United Nations conference. My senior year, I
          was fortunate enough to be chosen as 23 out of 2000+ delegates to
          represent our program at the Conference of National Affairs. Here, my
          proposal for streamling the college application process for
          ex-convicts in order to reduce recidivism rates survived to be in the
          top 100/600+ proposals presented.
        </div>
      </div>
      <div className="w3-half">
        <div className="w3-row">
          {" "}
          <div className="rightpic">
            <img src={JN} className="funPic" alt="TheBois" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunStuff;
