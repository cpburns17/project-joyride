import React, {useState, useEffect} from 'react'
import {useOutletContext} from 'react-router-dom'
import PostCard from './PostCard';

function Profile() {
    const { user } = useOutletContext();
    const [transporterPostsTwo, setTransporterPostsTwo] = useState([])
    const [passengerPostsTwo, setPassengerPostsTwo] = useState([])

    
    
    
    useEffect(() => {
    fetch("api/all_posts")
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        console.log(data);
        setTransporterPostsTwo(data.transporter_posts);
        setPassengerPostsTwo(data.passenger_posts)
        })
        .catch((error) => console.error("Fetch error:", error));
    }, []);
    
    // Combine the two arrays with type
    const combinedPostsTwo = [
    ...transporterPostsTwo.map((post) => ({
        ...post,
        type: "transporter",
    })),
    ...passengerPostsTwo.map((post) => ({ ...post, type: "passenger" })),
    ];
    
    const filteredUserPosts = combinedPostsTwo.filter((post) => post.user_id == user.id)
    
    console.log(filteredUserPosts)

    const renderUserPosts = filteredUserPosts.map((post) => <PostCard key={post.type + post.id} post={post}/>)

    

    return (
        <div className='profile-page'>
            <h1 className='profile-welcome'>Welcome {user.name}</h1>
            {renderUserPosts}
        </div>
    )
}

export default Profile