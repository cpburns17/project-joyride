// import { NavLink } from "react-router-dom";
// import React, { useState } from "react";


// /* define the NavBar component */
// function Navbar({ setFilterValue }) {


//   return (
//     <div>
//       <nav className="navbar p-3 navbar-expand-lg navbar-light bg-light fixed-top">
//         <NavLink to="/home" className="navbar-brand">
//           Home
//         </NavLink>
//         <NavLink to="/profile" className="nav-link">
//           Profile
//         </NavLink>
//         <NavLink to="/saved" className="nav-link">
//           Saved
//         </NavLink>
//         <div className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             id="navbarDropdownMenuLink"
//             data-toggle="dropdown"
//             aria-haspopup="true"
//             aria-expanded="false"
//           >
//             Filter By
//           </a>
//           <div
//             className="dropdown-menu"
//             aria-labelledby="navbarDropdownMenuLink"
//           >
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("none")}
//             >
//               None
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("concert")}
//             >
//               Concert
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("festival")}
//             >
//               Festival
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("sporting")}
//             >
//               Sporting
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("misc")}
//             >
//               Misc. Event
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("transporter")}
//             >
//               Transporter
//             </a>
//             <a
//               className="dropdown-item"
//               href="#"
//               onClick={() => setFilterValue("passenger")}
//             >
//               Passenger
//             </a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logout from "./Logout";


/* define the NavBar component */
function Navbar({ setFilterValue, user, setUser, isLoggedIn, setIsLoggedIn }) {


  return (
    <div>
      <nav className="navbar p-3 navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink to="/home" className="navbar-brand">
          Home
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink to="/saved" className="nav-link">
          Saved
        </NavLink>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter By
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("none")}
            >
              None
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("concert")}
            >
              Concert
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("festival")}
            >
              Festival
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("sporting")}
            >
              Sporting
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("misc")}
            >
              Misc. Event
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("transporter")}
            >
              Transporter
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setFilterValue("passenger")}
            >
              Passenger
            </a>
          </div>
        </div>
        {isLoggedIn && user ? <Logout user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : null}
      </nav>
    </div>
  );
}

export default Navbar;