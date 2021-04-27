import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import logo from "./img/logo.png";
import football from "./img/img.png";
import table from "./img/table.png";

function App() {
      
useEffect(() => {
    
	gsap.to(".logo", {
      duration: 2,
      x: 300,
      backgroundColor: "#560563",
      borderRadius: "20%",
      border: "5px solid white",
      ease: "elastic",
    });
	
	gsap.set(".logo2, .table", {transformOrigin: "50% 50%"});
	gsap.to(".logo2, .table", {duration: 2, rotation: 360});

  }, []);

  return (
    <>
      <div className="demo">
        <img src={logo} alt="" className="logo" width="400px" />
      </div>

      <div>
        <img className="logo2" src={football} alt="" width="400px" /> <br/>
        <img className="table" src={table} alt="table" width="400px"/>
      </div>
    </>
  );
}

export default App;
