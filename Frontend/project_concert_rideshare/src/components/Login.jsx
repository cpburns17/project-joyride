import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login({ attemptLogin }) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = e => setUsername(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);

    function handleLogIn(e) {
        e.preventDefault();
        attemptLogin({ "username": username, "password": password });
        navigate('/home');
    }

    return (
        <form onSubmit={handleLogIn}>
            <h2>Login</h2>

            <input
                type="text"
                onChange={handleChangeUsername}
                value={username}
                placeholder='username'
            />

            <input
                type="text"
                onChange={handleChangePassword}
                value={password}
                placeholder='password'
            />
            
            <input
                type="submit"
                value='Login'
            />
        </form>
    );
}

export default Login;
