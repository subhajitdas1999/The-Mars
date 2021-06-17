import React, { useState } from "react";
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";

function Header() {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div className="header">
      <button onClick={()=>setOpenLinks(!openLinks)} className="hamber__btn"><MenuIcon fontSize="large"/></button>
      <ul className="nav-list" id={openLinks && "header__list"} onClick={()=>setOpenLinks(!openLinks)}>
        <Link to="/" className="header_link">
          <li>Home</li>
        </Link>
        <Link to="/raw-images" className="header_link ani1">
          <li>Rover Images</li>
        </Link>
        <Link to="/ingenuity" className="header_link">
          <li>Ingenuity</li>
        </Link>
        <Link to="/whymars" className="header_link">
          <li>why mars</li>
        </Link>
      </ul>
      
    </div>
  );
}

export default Header;
