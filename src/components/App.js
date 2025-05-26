
// import React,{useState} from "react";
// import './../styles/App.css';
// import { Tooltip } from "./Tooltip";

// const App = () => {

//   const [text1,setText1]=useState("");
//   const [text2,setText2]=useState("");

//  function handleOver1(){
// setText1("This is a tooltip")
//  }

//  function handleOver2(){
//   setText2("This is another tooltip")
  
//  }


//   return (
//     <div>
//       <Tooltip  text={text1} />
//      <h1 style={{height:"200px" ,width:"400px"}} onMouseEnter={()=>setText1("")} onMouseLeave={handleOver1} >Hover Over Me</h1>

//      <h4 onMouseOut={()=>setText2("")}  onMouseOver={handleOver2}>This is another Hover</h4>
     
//      <Tooltip text={text2}/>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'
// import Tooltip from './Tooltip'


// export const App = () => {
 
//   return (

//     <div>
//       <Tooltip text="This is a Tooltip"><h2>Hover over me</h2>
//       </Tooltip>
//       <Tooltip text="This is another Tooltip"><h4>Hover over this Paragraph</h4></Tooltip>
//     </div>
//   )
// }

// export default App

import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

const App = () => {
    return (
        <div>
            <Tooltip text="This is a tooltip">
                <h2>Hover over me</h2>
            </Tooltip>
            <Tooltip text="This is another tooltip">
                <p>Hover over this paragraph</p>
            </Tooltip>
        </div>
    );
};

export default App;