import React, { useState, useEffect } from 'react'

// import NavBar from "./components/NavBar";

// import { Outlet } from "react-router-dom";

function App() {
    const [search, setSearch] = useState("")

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <h1>Starting Application Page</h1>
            </main>
        </>
    )
}

export default App
