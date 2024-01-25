import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Signup from "./Signup"
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
                    navigate('/home')
                    setUser(data)
                })
                .catch((e) => console.log(e));
        }

    return (
    <>
        <header>
            {user === null ? <Login attemptLogin={attemptLogin}/> : null }
            {user != null ? <Navbar setFilterValue={setFilterValue} user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null}

            {user === null ? <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} /> : null}

        </header>
            <Outlet context={{ filterValue, setFilterValue, user }} />
        {user === null ? <Welcome/> : null}
    </>
);
}

export default App;