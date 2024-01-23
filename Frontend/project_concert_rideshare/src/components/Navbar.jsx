import { NavLink } from "react-router-dom";
import React, {useState} from "react";

import { useNavigate } from "react-router-dom";


/* define the NavBar component */
function Navbar({setFilterValue}) {
    const navigate = useNavigate();

    
    function handleSubmit(e) {
        e.preventDefault()
        const selectedValue = e.target.elements.filterType.value;
        console.log(selectedValue);
        setFilterValue(selectedValue);
    }
  
  

  return (
    <nav>
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/saved" className="nav-link">Saved</NavLink>
        <form action="#" method="get" onSubmit={handleSubmit}>Filter By: 
            <label htmlFor="filterType"></label>
            <select name="filterType" id="filterType">
                <option value="none">None</option>
                <option value="concert">Concert</option>
                <option value="festival">Festival</option>
                <option value="sporting">Sporting</option>
                <option value="misc">Misc. Event</option>
                <option value="transporter">Transporter</option>
                <option value="passenger">Passenger</option>
            </select>
            <button type="submit">Apply Filters</button>
        </form>
    </nav>
  )
};

export default Navbar;


