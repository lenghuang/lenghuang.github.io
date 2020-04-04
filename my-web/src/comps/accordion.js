import "../style/App.css";
import "../style/accord.css";
import React, { useState, useRef, useEffect } from "react";

// Modified this: https://codesandbox.io/s/react-accordion-shixian-n705f

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <button className={"accordion-title-" + props.id} onClick={toogleActive}>
        <span className="titleText">{props.title} </span>
        <span className={active ? "accordion-icon rotate" : "accordion-icon"}>
          >
        </span>
      </button>

      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
