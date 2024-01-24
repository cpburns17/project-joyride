import React, { useState } from 'react';

function PostCard({ post }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment);

    fetch("http://localhost:5555/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: comment,
        user_post_id: post.id, 
        transporter_post_id: post.type === 'transporter' ? post.id : null,
        passenger_post_id: post.type === 'passenger' ? post.id : null,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // Update the comments state immediately after posting a comment
        setComments([...comments, json]);
        // Clear the comment input
        setComment('');
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      {post.type === 'transporter' ? (
        <>
          <h2> Transporter</h2>
          <p>Vehicle: {post.vehicle}</p>
          <p>Seats: {post.seats}</p>
          <p>Event: {post.event}</p>
          <p>Location: {post.location}</p>
          <p>Details: {post.details}</p>
          <p>Request: {post.request}</p>
          {comments.length > 0 && (
            <>
              <p>Comments:</p>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>{comment.text}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <h2>Passenger</h2>
          <p>Offer: {post.offer}</p>
          <p>Event: {post.event}</p>
          <p>Location: {post.location}</p>
          <p>Details: {post.details}</p>
          <p>Request: {post.request}</p>
          {comments.length > 0 && (
            <>
              <p>Comments:</p>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>{comment.text}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
      <input
        type='text'
        name='comment'
        placeholder='Comment...'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type='button' onClick={handleCommentSubmit}>
        Submit
      </button>
    </div>
  );
}

export default PostCard;