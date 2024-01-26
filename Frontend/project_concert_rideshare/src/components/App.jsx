// import React, { useState, useEffect } from 'react';
// import Navbar from "./Navbar";
// import Signup from './SIgnUp';
// import Welcome from "./Welcome";
// import Login from './Login'
// import { useNavigate } from 'react-router-dom'; 

// import { Outlet } from "react-router-dom";

// function App() {
//     const [filterValue, setFilterValue] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null)
    // const navigate = useNavigate();
    
    

//     console.log(isLoggedIn)
//     console.log(user)

//     useEffect(() => {
//       fetch(`api/check_session`).then((res) => {
//           if (res.ok) {
//               res.json().then((user) => setUser(user));
//           }
//       });
//   }, []);


//   /**********************
//         Authentication
//     ************************/


//     function attemptLogin(userInfo) {
//       fetch(`api/login`, {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//               Accepts: "application/json",
//               },
//           body: JSON.stringify(userInfo),
//           })
//               .then((res) => {
//                   if (res.ok) {
//                       return res.json();
//                   }
//                   throw res;
//               })
//               .then((data) => {
//                 setUser(data)
//                 navigate('/home');

//               })
//               .catch((e) => console.log(e));
//       }
    

//       return (
//         <>
//           <header>
//             {user === null ? <Login attemptLogin={attemptLogin}/> : null }
//             {user != null ? <Navbar setFilterValue={setFilterValue} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null}

//             {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}

            
//           </header>
//           <Outlet context={{ filterValue, setFilterValue, user }} />
//           {user === null ? <Welcome/> : null}
//         </>
//       );
//     }
    
//     export default App;



import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Signup from './SIgnUp';
import Welcome from "./Welcome";
import Login from "./Login";
import { useNavigate } from 'react-router-dom'; 

import { Outlet } from "react-router-dom";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  console.log(isLoggedIn);
  console.log(user);

  useEffect(() => {
    fetch(`api/check_session`).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  // Authentication
  function attemptLogin(userInfo) {
    fetch(`api/login`, {
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
      .then((data) => {
        navigate("/home");
        setUser(data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <header>
        {user === null && !showSignup ? (
          <Login attemptLogin={attemptLogin} />
        ) : null}
        {user != null ? (
          <Navbar
            setFilterValue={setFilterValue}
            user={user}
            setUser={setUser}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : null}

        {user === null && showSignup ? (
          <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
        ) : null}

        {user === null ? (
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-primary"
              onClick={() => setShowSignup(!showSignup)}
            >
              {showSignup ? "Go to Login" : "Go to Signup"}
            </button>
          </div>
        ) : null}
      </header>
      <Outlet context={{ filterValue, setFilterValue, user }} />
      {user === null ? <Welcome /> : null}
    </>
  );
}

export default App;