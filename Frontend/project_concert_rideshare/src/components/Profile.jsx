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

    filteredUserPosts.sort((a, b) => a.id - b.id);

    const renderUserPosts = filteredUserPosts.map((post) => <PostCard key={post.type + post.id} post={post}/>)

    

return (
    <div className='profile'>
        <h1 className='profile-welcome'>Welcome, {user.name}</h1>
            <p className='user-info'> Username: {user.username}</p>
            <p className='user-info'>Age: {user.age}</p>
            <p className='user-info'>Social media: {user.social} </p>
        <div className='profile-page'> 
            <div className='profile-posts'>
            <h1 className='saved-posts'>Saved Posts:</h1>
                {renderUserPosts}
            </div>
        </div>
    </div>
)
}

export default Profile