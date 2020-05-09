import React from "react";
import "../style/App.css";
//import AboutMe from "./aboutme.js";
import FunStuff from "./funstuff.js";
import Accordion from "./accordion.js";
import Projects from "./projects.js";

function AllAccord() {
  /* 
  <Accordion title="About Me" id="abt">
        <div className="accordion-text">
          <AboutMe />
        </div>
      </Accordion>
   */
  return (
    <div className="accordContainer">
      <Accordion title="Experience" id="exp">
        <div className="accordion-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis
          eget nunc lobortis mattis aliquam. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Id eu nisl nunc mi ipsum faucibus vitae.
          Mattis vulputate enim nulla aliquet porttitor lacus. Viverra vitae
          congue eu consequat. Morbi non arcu risus quis varius quam quisque id
          diam. Molestie at elementum eu facilisis sed odio morbi quis commodo.
          Suspendisse interdum consectetur libero id faucibus. Cursus eget nunc
          scelerisque viverra mauris in aliquam. Mi proin sed libero enim sed
          faucibus turpis. Cras tincidunt lobortis feugiat vivamus at augue.
          Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
          Laoreet id donec ultrices tincidunt arcu non sodales neque. Amet
          volutpat consequat mauris nunc congue. Faucibus vitae aliquet nec
          ullamcorper sit.
        </div>
      </Accordion>
      <Accordion title="Projects" id="proj">
        <div className="accordion-text">
          <Projects />
        </div>
      </Accordion>
      <Accordion title="Fun Stuff" id="fun">
        <div className="accordion-text">
          {" "}
          <FunStuff />
        </div>
      </Accordion>
    </div>
  );
}

export default AllAccord;
