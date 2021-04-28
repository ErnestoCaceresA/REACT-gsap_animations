import React, { useState } from "react";
import {Link} from 'react-router-dom'

function Header() {
  // funcion para el boton sidebar para que al dar click se active la propiedad .sidebar.active{ left: 0; }
  const show = () => {
    document.querySelector(".sidebar").classList.toggle("active");
  };

  return (
    <>
      <div className="sidebar" onClick={show}>
        <div className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul>	
          <Link to="/" className="li"> Inicio </Link>
          <Link to="/introduccion" className="li"> Introduccion </Link>
          <li>section</li>
          <li>section</li>
          <li>section</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
