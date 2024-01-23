import App from './App'
import Navbar from './Navbar'
import React, {useState, useEffect} from 'react'

function Profile () {
    const [userInfo, setUserInfo] = useState([])

useEffect(() => {
    fetch(`http://localhost:5555/users`)
    // fetch(`http://localhost:5555/users/3`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setUserInfo(data)
    })

}, [])

    const renderUser = userInfo.map((user) => 
    <div key={user.id}>
        <h1>Profile</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Social Media: {user.social}</p>
    </div>
)


return (
    <>
    {renderUser}
    </>
)
}

export default Profile;