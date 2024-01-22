import App from './App'
import Navbar from './Navbar'
import Home from './Home'
import React, {useState} from 'react'

function PostCard ({posts}) {

    // Combine the two arrays with type
const combinedPosts = [
...posts.transporter_posts.map((post) => ({
    ...post,
    type: "transporter",
})),
...posts.passenger_posts.map((post) => ({ ...post, type: "passenger" })),
];

// Shuffle the combined array
for (let i = combinedPosts.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[combinedPosts[i], combinedPosts[j]] = [combinedPosts[j], combinedPosts[i]];
}

return (
    <div>
        <h1>Posts</h1>
        {combinedPosts.map((post, index) => (
        <div key={index}>
            {post.type === "transporter" ? (
            <>
                <h2> Transporter</h2>
                <p>Vehicle: {post.vehicle}</p>
                <p>Seats: {post.seats}</p>
                <p>Event: {post.event}</p>
                <p>Location: {post.location}</p>
                <p>Details: {post.details}</p>
                <p>Request: {post.request}</p>
            </>
            ) : (
            <>
                <h2>Passenger</h2>
                <p>Offer: {post.offer}</p>
                <p>Event: {post.event}</p>
                <p>Location: {post.location}</p>
                <p>Details: {post.details}</p>
                <p>Request: {post.request}</p>
            </>
            )}
        </div>
        ))}


    </div>
)
}

export default PostCard;