// import React from 'react'

// export const Tooltip = (props) => {
//   return (
//     <div className='tooltip'><p className='tooltiptext' style={{backgroundColor: props.text.length ==0 ? "white" :"red", fontSize:"30px", color:'white', display:"inline-block", height:"100px", width:"200px",display:"flex",  padding:"20px", alignItems:'center'}} >{props.text}</p></div>
//   )
// }

// import React, { useState } from 'react'

// export const Tooltip = ({text, children}) => {

//   const [visible, setvisible]=useState(false)

//   return (
//     <div className='tooltip' onMouseLeave={()=>{setvisible(false)}} onMouseEnter={()=>{setvisible(true)}}>
//       {children}
//       {visible && <div className='tooltiptext' >{text}</div>}
//     </div>
//   )
// }

// export default Tooltip

import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div 
            className="tooltip" 
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className="tooltiptext">{text}</div>}
        </div>
    );
};

export default Tooltip;