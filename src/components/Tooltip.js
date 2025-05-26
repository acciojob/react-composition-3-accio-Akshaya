import React, { useState } from "react";


const Tooltip = ({ text, children }) => {

    let [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}>
            {children}
            {
                showTooltip &&
                <div className="tooltiptext">{text}</div>
            }
        </div>
    )
}

export default Tooltip;