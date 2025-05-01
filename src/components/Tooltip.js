import React, { useState } from 'react';
import '../styles/App.css'; // ✅ Corrected path

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
