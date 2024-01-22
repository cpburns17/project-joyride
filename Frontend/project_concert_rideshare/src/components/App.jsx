import React, { useState, useEffect } from 'react'

import Navbar from "./Navbar";

// import { Outlet } from "react-router-dom";

function App() {
    const [search, setSearch] = useState("")

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <h1>Welcome Page</h1>
            </main>
        </>
    )
}

export default App;
