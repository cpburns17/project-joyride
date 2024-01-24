import React, {useState} from 'react'

function Signup({setIsLoggedIn, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [social, setSocial] = useState("");

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
            "username" : username,
            "password" : password,
            "name" : name,
            "age" : age,
            "social" : social
        }
        console.log(newUser)
        setUser(newUser)
  };

  return (
    <div className="login-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          required="true"
          type="text"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <input
          placeholder="password"
          required="true"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <input
            placeholder="first and last name"
            required="true"
            type="text"
            value={name}
            onChange={handleName}
        />
        <br />
        <input
            placeholder="age"
            required="true"
            value={age}
            type="number"
            min="18"
            onChange={handleAge}
        />
        <br />
        <input
            placeholder="social media url"
            required="true"
            type="text"
            value={social}
            onChange={handleSocial}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
