import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost'

function Home() {
// const [posts, setPosts] = useState({
//     transporter_posts: [],
//     passenger_posts: [],
//   });

const [transporterPosts, setTransporterPosts] = useState([])
const [passengerPosts, setPassengerPosts] = useState([])

function renderTransporterPost(newPost) {
    setTransporterPosts([...transporterPosts, newPost])
}

function renderPassengerPost(newPost) {
    setTransporterPosts([...passengerPosts, newPost])
}


useEffect(() => {
fetch("http://127.0.0.1:5555/all_posts")
    .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
    })
    .then((data) => {
    console.log(data);
    setTransporterPosts(data.transporter_posts);
    setPassengerPosts(data.passenger_posts)
    })
    .catch((error) => console.error("Fetch error:", error));
}, []);

// Combine the two arrays with type
const combinedPosts = [
...transporterPosts.map((post) => ({
    ...post,
    type: "transporter",
})),
...passengerPosts.map((post) => ({ ...post, type: "passenger" })),
];

// Shuffle the combined array
for (let i = combinedPosts.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[combinedPosts[i], combinedPosts[j]] = [combinedPosts[j], combinedPosts[i]];
}

return (
<div>
    <CreatePost combinedPosts={combinedPosts} renderTransporterPost={renderTransporterPost} renderPassengerPost={renderPassengerPost} />
    <PostCard combinedPosts={combinedPosts} />
</div>
);
}

export default Home;






//     const [posts, setPosts] = useState([])
//     const allPosts = []


// fetch('http://localhost:5555/all_posts')
// .then(res => res.json())
// .then(data => {
//     console.log(data)

// })


// return (
//     <>
//     <h1>Home page</h1>

//     </>
// )
// }

