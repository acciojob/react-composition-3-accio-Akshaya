import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="App" id="main">
          <Tooltip text="This is a tooltip for the button">
            <button>Hover over me</button>
          </Tooltip>

          <Tooltip text="Tooltip for text">
                <p>Hover over this text</p>
          </Tooltip>
        </div>
    </div>
  );
};

export default App;
