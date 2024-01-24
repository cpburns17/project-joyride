// import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
// import Signup from "./Signup"
// import Logout from "./Logout";
// import Welcome from "./Welcome";
// import Carousel from "./Carousel";
// import Jumbotron from './Jumbotron';

// import { Outlet } from "react-router-dom";

// function App() {
//     const [filterValue, setFilterValue] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null)

//     console.log(isLoggedIn)
//     console.log(user)

    

//     return (
//         <>
//           <header>
//             {isLoggedIn ? <Navbar setFilterValue={setFilterValue} /> : null}

//             {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}

//             {isLoggedIn && user ? <Logout setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : null}
//           </header>
//           <Outlet context={{ filterValue, setFilterValue }} />
//           {!isLoggedIn ? <Welcome/> : null}
//         </>
//       );
//     }
    
//     export default App;


import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Signup from "./Signup"
import Logout from "./Logout";
import Welcome from "./Welcome";
import Carousel from "./Carousel";
import Jumbotron from './Jumbotron';
import Login from './Login'

import { Outlet } from "react-router-dom";

function App() {
    const [filterValue, setFilterValue] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    console.log(isLoggedIn)
    console.log(user)

    useEffect(() => {
      fetch(`/check_session`).then((res) => {
          if (res.ok) {
              res.json().then((user) => setUser(user));
          }
      });
  }, []);


  /**********************
        Authentication
    ************************/

    function attemptLogin(userInfo) {
      fetch(`/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accepts: "application/json",
              },
          body: JSON.stringify(userInfo),
          })
              .then((res) => {
                  if (res.ok) {
                      return res.json();
                  }
                  throw res;
              })
              .then((data) => setUser(data))
              .catch((e) => console.log(e));
      }
    

    return (
        <>
          <header>
            <Login attemptLogin={attemptLogin}/>
            {isLoggedIn ? <Navbar setFilterValue={setFilterValue} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null}

            {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}

            
          </header>
          <Outlet context={{ filterValue, setFilterValue }} />
          {!isLoggedIn ? <Welcome/> : null}
        </>
      );
    }
    
    export default App;
