import { NavLink } from "react-router-dom";
import React from "react";

import { useNavigate } from "react-router-dom";


/* define the NavBar component */
function Navbar() {
    const navigate = useNavigate();

  
  

  return (
    <>
    <NavLink to="/home" className="nav-link">Home</NavLink>
    <NavLink to="/profile" className="nav-link">Profile</NavLink>
    <NavLink to="/saved" className="nav-link">Saved</NavLink>
    </>
  )
};

export default Navbar;

