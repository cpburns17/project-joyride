import React, {useState} from 'react';

function PostCard({ filteredPosts }) {

    const [comment, setComment] = useState('')

// function handleSave() {

//     const savedPost = {

//     }
// }

return (
<div>
    <h1>Posts</h1>
    {filteredPosts.map((post, index) => (
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
        {/* <button onClick={handleSave}> Save </button> */}
        <input type='text' name='comment' placeholder='Comment...' value={comment} onChange={(e) => setComment(e.target.value)}/>
        </>
        ) : (
        <>
        <h2>Passenger</h2>
        <p>Offer: {post.offer}</p>
        <p>Event: {post.event}</p>
        <p>Location: {post.location}</p>
        <p>Details: {post.details}</p>
        <p>Request: {post.request}</p>
        {/* <button onClick={handleSave}> Save </button> */}
        <input type='text' name='comment' placeholder='Comment...' value={comment} onChange={(e) => setComment(e.target.value)}/>
        </>
        )}
    </div>
    ))}
</div>
);
}

export default PostCard;