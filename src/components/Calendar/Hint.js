import React from "react";
import "./style.css";
import { Tooltip } from "react-tooltip";

function Hint() {
  return (
    <div className="hint-container">
      <p className="hint-paragraph less">Меньше</p>
      <div data-tooltip-id="hint-tooltip" data-tooltip-content="0 contribution" className="cell cell-empty"></div>
      <div data-tooltip-id="hint-tooltip" data-tooltip-content="1+ contributions" className="cell cell-1"></div>
      <div data-tooltip-id="hint-tooltip" data-tooltip-content="10+ contributions" className="cell cell-2"></div>
      <div data-tooltip-id="hint-tooltip" data-tooltip-content="20+ contributions" className="cell cell-3"></div>
      <div data-tooltip-id="hint-tooltip" data-tooltip-content="30+ contributions" className="cell cell-4"></div>
      <p className="hint-paragraph more">Больше</p>
      <Tooltip id="hint-tooltip" />
    </div>
  );
}

export default Hint;
