import React, { useState, useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'
import PostCard from './PostCard';
import CreatePost from './CreatePost'
import Carousel from "./Carousel";
import Jumbotron from './Jumbotron';

function Home() {

const [transporterPosts, setTransporterPosts] = useState([])
const [passengerPosts, setPassengerPosts] = useState([])

const { filterValue, user } = useOutletContext();

function renderTransporterPost(newPost) {
    setTransporterPosts([...transporterPosts, newPost])
}

function renderPassengerPost(newPost) {
    setPassengerPosts([...passengerPosts, newPost])
}


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
  <div className='home'>
  <Carousel
      title={"Welcome to Joyride"}
      text={
          "Connect with fellow music or sports lovers by experiencing an enjoyable commute"
      }
      />

      <Jumbotron
      title={"Post, Connect, & Ride."}
      text={"Need a ride? Have a ride? Post it here and find someone to share the ride with!"}
      />
  <CreatePost renderTransporterPost={renderTransporterPost} renderPassengerPost={renderPassengerPost} user={user}/>
  <div className='render-posts'>
  {renderAllPosts}
  </div>
</div>
);
}

export default Home;

// import React, { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import PostCard from './PostCard';
// import CreatePost from './CreatePost';
// import Carousel from "./Carousel";
// import Jumbotron from './Jumbotron';

// function Home() {
//     const [allPosts, setAllPosts] = useState([]);
//     const [filteredPosts, setFilteredPosts] = useState([]);
//     const { filterValue } = useOutletContext();

//     function renderTransporterPost(newPost) {
//         setAllPosts([...allPosts, { ...newPost, type: "transporter", timestamp: new Date() }]);
//     }

//     function renderPassengerPost(newPost) {
//         setAllPosts([...allPosts, { ...newPost, type: "passenger", timestamp: new Date() }]);
//     }

//     useEffect(() => {
//         fetch("http://127.0.0.1:5555/all_posts")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 const transporterPosts = data.transporter_posts.map(post => ({ ...post, type: "transporter", timestamp: new Date(post.timestamp) }));
//                 const passengerPosts = data.passenger_posts.map(post => ({ ...post, type: "passenger", timestamp: new Date(post.timestamp) }));
//                 const combinedPosts = [...transporterPosts, ...passengerPosts];

//                 // Sort the combined array by timestamp in descending order (newer posts first)
//                 const sortedPosts = combinedPosts.sort((a, b) => b.timestamp - a.timestamp);

//                 // Apply filters if filterValue is present
//                 const updatedFilteredPosts = filterValue
//                     ? sortedPosts.filter((post) =>
//                           filterValue === "none" ||
//                           (filterValue === "passenger" || filterValue === "transporter") &&
//                           (post.type.toLowerCase() === filterValue.toLowerCase() || post.event.toLowerCase() === filterValue.toLowerCase())
//                       )
//                     : sortedPosts;

//                 setFilteredPosts(updatedFilteredPosts);
//             })
//             .catch((error) => console.error("Fetch error:", error));
//     }, [filterValue]);

//     const renderAllPosts = filteredPosts.map((post) => (
//         <PostCard key={post.type + post.id} filteredPosts={filteredPosts} post={post} />
//     ));

//     return (
//         <div className='home'>
//             <Carousel
//                 title={"Welcome to Joyride"}
//                 text={"Connect with fellow music or sports lovers by experiencing an enjoyable commute"}
//             />

//             <Jumbotron
//                 title={"Post, Connect, & Ride."}
//                 text={"Need a ride? Have a ride? Post it here and find someone to share the ride with!"}
//             />

//             <CreatePost renderTransporterPost={renderTransporterPost} renderPassengerPost={renderPassengerPost} />

//             <div className='render-posts'>
//                 {renderAllPosts}
//             </div>
//         </div>
//     );
// }

// export default Home;
