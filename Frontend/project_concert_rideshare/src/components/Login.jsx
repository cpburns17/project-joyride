// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; 

// function Login({ attemptLogin }) {

//     // const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChangeUsername = e => setUsername(e.target.value);
//     const handleChangePassword = e => setPassword(e.target.value);

//     function handleLogIn(e) {
//         e.preventDefault();
//         attemptLogin({ "username": username, "password": password });
//         // navigate('/home');
//     }

//     return (
//         <form onSubmit={handleLogIn}>
//             <h2>Login</h2>

//             <input
//                 type="text"
//                 onChange={handleChangeUsername}
//                 value={username}
//                 placeholder='username'
//             />

//             <input
//                 type="password"
//                 onChange={handleChangePassword}
//                 value={password}
//                 placeholder='password'
//             />
            
//             <input
//                 type="submit"
//                 value='Login'
//             />
//         </form>
//     );
// }

// export default Login;

import React, { useState } from "react";


function Login({ attemptLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleLogIn(e) {
    e.preventDefault();
    attemptLogin({ username: username, password: password });
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <form onSubmit={handleLogIn}>
          <h2 className="mb-1 text-center">Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;