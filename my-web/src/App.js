import React from "react";
import TopBanner from "./comps/topBanner.js";
import AllAccord from "./comps/allaccord.js";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">{TopBanner()}</div>
      <div className="body">{AllAccord()}</div>
      <div className="footer">
        {" "}
        <a href="https://github.com/lenghuang">
          <span style={{ color: "#c5760e" }}>
            <u>Made by Len Huang &copy; April 2020</u>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
