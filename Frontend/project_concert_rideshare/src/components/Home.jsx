import React, { useState, useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'
import PostCard from './PostCard';
import CreatePost from './CreatePost'
import Carousel from "./Carousel";
import Jumbotron from './Jumbotron';

function Home() {

const [transporterPosts, setTransporterPosts] = useState([])
const [passengerPosts, setPassengerPosts] = useState([])

const { filterValue } = useOutletContext();

function renderTransporterPost(newPost) {
    setTransporterPosts([...transporterPosts, newPost])
}

function renderPassengerPost(newPost) {
    setPassengerPosts([...passengerPosts, newPost])
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

// Initialize filteredPosts with all posts
let filteredPosts = combinedPosts;

// Apply filters if filterValue is present
if (filterValue) {
    const lowerFilterValue = filterValue.toLowerCase();
    filteredPosts = filteredPosts.filter((post) =>
    (filterValue === "none" ||
        (filterValue === "passenger" || filterValue === "transporter") &&
        (post.type.toLowerCase() === lowerFilterValue || post.event.toLowerCase() === lowerFilterValue))
    );
}

console.log(filteredPosts);

// Shuffle the filtered array
for (let i = filteredPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredPosts[i], filteredPosts[j]] = [filteredPosts[j], filteredPosts[i]];
}


const renderAllPosts = filteredPosts.map((post) => <PostCard key={post.type + post.id} filteredPosts={filteredPosts} post={post}/>)



return (
    <div>
        <Carousel
            title={"Welcome to RideShare"}
            text={
                "Connect with fellow music or sports lovers by experiencing an enjoyable commute"
            }
            />

            <Jumbotron
            title={"Post, Connect, & Ride."}
            text={"Need a ride? Have a ride? Post it here and find someone to share the ride with!"}
            />
        <CreatePost renderTransporterPost={renderTransporterPost} renderPassengerPost={renderPassengerPost} />
        {renderAllPosts}
    </div>
    );
}

export default Home;