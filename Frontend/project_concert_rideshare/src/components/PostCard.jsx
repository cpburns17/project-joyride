import React from 'react';

function PostCard({ combinedPosts }) {


    
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
  );
}

export default PostCard;