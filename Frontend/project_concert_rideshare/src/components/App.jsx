import React, { useState, useEffect } from 'react'

import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function App() {
    

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <Outlet />
            
        </>
    )
}

export default App
