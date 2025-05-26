import React, { useState, cloneElement } from "react";

const ToolTip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  // Clone the child and apply event handlers and 'tooltip' class
  const childWithProps = cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  });

  return (
    <>
      {childWithProps}
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </>
  );
};

export default ToolTip;
