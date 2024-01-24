import React, { useState } from 'react';

function Logout({setUser, setIsLoggedIn}) {

    const handleLogout = () => {
    setIsLoggedIn(false)
    setUser({})
    };

return (
    <button onClick={handleLogout}>
        Logout
    </button>
);
}

export default Logout;