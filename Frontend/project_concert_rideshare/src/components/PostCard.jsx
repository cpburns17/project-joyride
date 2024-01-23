import React, { useState } from 'react';

function PostCard({ post }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = () => {
    // You can add logic here to handle the submission of the comment
    console.log('Comment submitted:', comment);
    // Clear the comment input after submission if needed
    setComment('');
  };


  

  return (
    <div>
      <h1>Posts</h1>
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
      {/* Additional features (e.g., save button, comment input) can be added here */}
      <input
        type='text'
        name='comment'
        placeholder='Comment...'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="button" onClick={handleCommentSubmit}>Submit</button>
      {/* Add any additional buttons or features as needed */}
    </div>
  );
}

export default PostCard;
