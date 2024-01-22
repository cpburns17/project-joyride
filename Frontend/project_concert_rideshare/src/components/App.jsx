import React, { useState, useEffect } from 'react'
import {Outlet} from 'react-router-dom'

import Navbar from "./Navbar";

// import { Outlet } from "react-router-dom";

function App() {
    const [search, setSearch] = useState("")


    return (
        <>
            <header>
                <Navbar/>
            </header>
            <Outlet />
        </>
    )
}

export default App;
