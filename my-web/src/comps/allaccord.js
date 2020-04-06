import React from "react";
import "../style/App.css";
import AboutMe from "./aboutme.js";
import FunStuff from "./funstuff.js";
import Accordion from "./accordion.js";

function AllAccord() {
  return (
    <div className="accordContainer">
      <Accordion title="About Me" id="abt">
        <div className="accordion-text">
          <AboutMe />
        </div>
      </Accordion>
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
          ullamcorper sit. Volutpat consequat mauris nunc congue nisi vitae
          suscipit tellus. Donec enim diam vulputate ut pharetra. Sit amet
          volutpat consequat mauris nunc congue nisi vitae. Etiam tempor orci eu
          lobortis elementum nibh tellus. Tempor commodo ullamcorper a lacus
          vestibulum. Nunc id cursus metus aliquam eleifend mi in. Consequat
          mauris nunc congue nisi vitae suscipit. Auctor urna nunc id cursus
          metus aliquam eleifend. Elementum sagittis vitae et leo duis. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Blandit cursus
          risus at ultrices mi. Leo duis ut diam quam nulla porttitor massa id
          neque. Tellus at urna condimentum mattis pellentesque. At erat
          pellentesque adipiscing commodo elit at imperdiet dui accumsan. Diam
          sollicitudin tempor id eu nisl. Sed augue lacus viverra vitae congue
          eu consequat ac. Sed viverra ipsum nunc aliquet bibendum enim
          facilisis gravida neque. In ante metus dictum at tempor commodo
          ullamcorper a lacus. Ipsum dolor sit amet consectetur adipiscing elit
          duis. Dui ut ornare lectus sit amet est. Sit amet tellus cras
          adipiscing. Bibendum enim facilisis gravida neque convallis. Sit amet
          facilisis magna etiam tempor orci eu. Sem nulla pharetra diam sit.
          Convallis a cras semper auctor neque. Diam sollicitudin tempor id eu
          nisl nunc mi ipsum. Eget mauris pharetra et ultrices neque. Tristique
          magna sit amet purus gravida quis blandit. Purus gravida quis blandit
          turpis cursus. Platea dictumst vestibulum rhoncus est pellentesque
          elit. Quam quisque id diam vel quam elementum. Senectus et netus et
          malesuada fames ac turpis. At augue eget arcu dictum varius duis at.
          Feugiat in fermentum posuere urna nec tincidunt praesent semper
          feugiat. Phasellus faucibus scelerisque eleifend donec pretium
          vulputate. Ornare quam viverra orci sagittis. Nulla pharetra diam sit
          amet nisl suscipit adipiscing bibendum. At elementum eu facilisis sed.
          Bibendum at varius vel pharetra. Porttitor rhoncus dolor purus non.
          Vel facilisis volutpat est velit egestas dui id ornare. Duis tristique
          sollicitudin nibh sit amet commodo. Imperdiet proin fermentum leo vel.
          Netus et malesuada fames ac turpis egestas. Leo duis ut diam quam
          nulla porttitor massa id neque. Consequat ac felis donec et odio
          pellentesque. Amet aliquam id diam maecenas. Posuere urna nec
          tincidunt praesent semper feugiat nibh sed. Pharetra vel turpis nunc
          eget lorem dolor sed viverra ipsum. Nec ullamcorper sit amet risus
          nullam eget felis eget. Nec ullamcorper sit amet risus. Blandit turpis
          cursus in hac habitasse platea. Consectetur adipiscing elit ut aliquam
          purus sit amet. Id porta nibh venenatis cras sed felis eget velit.
          Amet dictum sit amet justo donec enim diam.
        </div>
      </Accordion>
      <Accordion title="Projects" id="proj">
        <div className="accordion-text">
          {" "}
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
          ullamcorper sit. Volutpat consequat mauris nunc congue nisi vitae
          suscipit tellus. Donec enim diam vulputate ut pharetra. Sit amet
          volutpat consequat mauris nunc congue nisi vitae. Etiam tempor orci eu
          lobortis elementum nibh tellus. Tempor commodo ullamcorper a lacus
          vestibulum. Nunc id cursus metus aliquam eleifend mi in. Consequat
          mauris nunc congue nisi vitae suscipit. Auctor urna nunc id cursus
          metus aliquam eleifend. Elementum sagittis vitae et leo duis. Orci
          phasellus egestas tellus rutrum tellus pellentesque eu. Blandit cursus
          risus at ultrices mi. Leo duis ut diam quam nulla porttitor massa id
          neque. Tellus at urna condimentum mattis pellentesque.
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
