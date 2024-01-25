import React, {useState, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import PostCard from './PostCard';

function Profile() {
    const { user } = useOutletContext();
    



    return (
        <div>
            {/* {renderPersonalPosts} */}
            <h1>WELCOME {user.name}</h1>
        </div>
    )
}

export default Profile