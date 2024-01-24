import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Signup from "./Signup"
import Logout from "./Logout";
import Welcome from "./Welcome"

import { Outlet } from "react-router-dom";

function App() {
    const [filterValue, setFilterValue] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    console.log(isLoggedIn)
    console.log(user)

    

return (
    <>
        <header>
        {isLoggedIn ? <Navbar setFilterValue={setFilterValue} /> : null}

        {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}

        {isLoggedIn && user ? <Logout setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : null}
        </header>
        <Outlet context={{ filterValue, setFilterValue }} />
        {!isLoggedIn ? <Welcome/> : null}
    </>
);
}

export default App;