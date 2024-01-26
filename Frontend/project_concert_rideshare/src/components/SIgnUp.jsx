// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signup({ setIsLoggedIn, setUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [social, setSocial] = useState("");
//   const navigate = useNavigate();

//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleName = (e) => {
//     setName(e.target.value);
//   };

//   const handleAge = (e) => {
//     setAge(e.target.value);
//   };

//   const handleSocial = (e) => {
//     setSocial(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);

//     const newUser = {
//       "name": name,
//       "age": age,
//       "social": social,
//       "username": username,
//       "password": password
//     };

//     fetch('api/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newUser)
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         console.log('User created:', data);
//         // setUser(data);
//         // Redirect to /home
//         // navigate('/home');
//       })
//       .catch((error) => {
//         console.error('Error creating user:', error);
//       });
//   };

//   return (
//     <div className="login-form">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="username"
//           required={true}
//           type="text"
//           value={username}
//           onChange={handleUsername}
//         />
//         <br />
//         <input
//           placeholder="password"
//           required={true}
//           type="password"
//           value={password}
//           onChange={handlePassword}
//         />
//         <br />
//         <input
//           placeholder="first and last name"
//           required={true}
//           type="text"
//           value={name}
//           onChange={handleName}
//         />
//         <br />
//         <input
//           placeholder="age"
//           required={true}
//           value={age}
//           type="number"
//           min="18"
//           onChange={handleAge}
//         />
//         <br />
//         <input
//           placeholder="social media url"
//           required={true}
//           type="text"
//           value={social}
//           onChange={handleSocial}
//         />
//         <br />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [social, setSocial] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSocial = (e) => {
    setSocial(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    const newUser = {
      name: name,
      age: age,
      social: social,
      username: username,
      password: password,
    };

    fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("User created:", data);
        // setUser(data);
        // Redirect to /home
        // navigate('/home');
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-1 text-center">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={age}
              onChange={handleAge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="social">Social</label>
            <input
              type="text"
              className="form-control"
              id="social"
              value={social}
              onChange={handleSocial}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
