import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
    const [filterValue, setFilterValue] = useState("")


    return (
        <>
            <header>
                <Navbar setFilterValue={setFilterValue}/>
            </header>
            <Outlet context={{filterValue, setFilterValue}}/>

        </>
    )
}

export default App