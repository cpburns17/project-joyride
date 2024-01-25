import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Signup from "./Signup"
import Logout from "./Logout";
import Welcome from "./Welcome";
import Carousel from "./Carousel";
import Jumbotron from './Jumbotron';

import { Outlet } from "react-router-dom";

function App() {
    const [filterValue, setFilterValue] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    console.log(isLoggedIn)
    console.log(user)

    

return (
    <>
        <header className='header'>
            {isLoggedIn ? <Navbar setFilterValue={setFilterValue} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null}

            {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}
        </header>
        <Outlet context={{ filterValue, setFilterValue, isLoggedIn, setIsLoggedIn }} />
        {!isLoggedIn ? <Welcome/> : null}
    </>
    );
}

export default App;