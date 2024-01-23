// import React, { useState, useEffect } from 'react';
// import PostCard from './PostCard';
// import { Outlet, useOutletContext } from "react-router-dom";

// function Home() {
//   const [posts, setPosts] = useState({
//     transporter_posts: [],
//     passenger_posts: [],
//   });

//   const {filterValue} = useOutletContext();
//   console.log(filterValue)

//   useEffect(() => {
//     fetch("http://127.0.0.1:5555/all_posts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPosts(data);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, []);

//   // Combine the two arrays with type
//   const combinedPosts = [
//     ...posts.transporter_posts.map((post) => ({
//       ...post,
//       type: "transporter",
//     })),
//     ...posts.passenger_posts.map((post) => ({ ...post, type: "passenger" })),
//   ];

//   console.log(combinedPosts)

//   // Filter posts based on filterValue
//   const filteredPosts = combinedPosts.filter((post) => {
//     if (filterValue === "Passenger" || filterValue === "Transporter") {
//       return post.type.toLowerCase() === filterValue.toLowerCase();
//     } else {
//       return post.event.toLowerCase() === filterValue.toLowerCase();
//     }
//   });

//   console.log(filteredPosts)

//   // Shuffle the filtered array
//   for (let i = filteredPosts.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [filteredPosts[i], filteredPosts[j]] = [filteredPosts[j], filteredPosts[i]];
//   }

//   return (
//     <div>
//       <PostCard filteredPosts={filteredPosts} />
//     </div>
//   );
// }

// export default Home;









// import React, { useState, useEffect } from 'react';
// import PostCard from './PostCard';
// import CreatePost from './CreatePost';
// import { Outlet, useOutletContext } from "react-router-dom";

// function Home() {
//   const [transporterPosts, setTransporterPosts] = useState([]);
//   const [passengerPosts, setPassengerPosts] = useState([]);

//   function renderTransporterPost(newPost) {
//     setTransporterPosts([...transporterPosts, newPost]);
//   }

//   const { filterValue } = useOutletContext();
//   console.log(filterValue);

//   useEffect(() => {
//     fetch("http://127.0.0.1:5555/all_posts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setTransporterPosts(data.transporter_posts);
//         setPassengerPosts(data.passenger_posts);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, []);

//   // Combine the two arrays with type
//   const combinedPosts = [
//     ...transporterPosts.map((post) => ({
//       ...post,
//       type: "transporter",
//     })),
//     ...passengerPosts.map((post) => ({ ...post, type: "passenger" })),
//   ];

// //   let filteredPosts = [];
// //   for (const post of combinedPosts) {
// //     const lowerFilterValue = filterValue ? filterValue.toLowerCase() : '';
// //     if ((filterValue === "passenger" || filterValue === "transporter") && (post.type.toLowerCase() === lowerFilterValue || post.event.toLowerCase() === lowerFilterValue)
// //     ) {
// //       filteredPosts.push(post);
// //     } else if (post.event.toLowerCase() === lowerFilterValue) {
// //       filteredPosts.push(post);
// //     }
    
// //   }


// let filteredPosts = [];
// const lowerFilterValue = filterValue ? filterValue.toLowerCase() : '';

// for (const post of combinedPosts) {
//   if (filterValue === "none" || 
//     ((filterValue === "passenger" || filterValue === "transporter") && 
//     (post.type.toLowerCase() === lowerFilterValue || post.event.toLowerCase() === lowerFilterValue))) {
//     filteredPosts.push(post);
//   }
// }

// console.log(filteredPosts);




//   console.log(filteredPosts);

//   // Shuffle the filtered array
//   for (let i = filteredPosts.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [filteredPosts[i], filteredPosts[j]] = [filteredPosts[j], filteredPosts[i]];
//   }

//   return (
//     <div>
//       <CreatePost renderTransporterPost={renderTransporterPost} />
//       <PostCard combinedPosts={filteredPosts} />
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
  const [transporterPosts, setTransporterPosts] = useState([]);
  const [passengerPosts, setPassengerPosts] = useState([]);

  function renderTransporterPost(newPost) {
    setTransporterPosts([...transporterPosts, newPost]);
  }

  const { filterValue } = useOutletContext();
  console.log(filterValue);

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
        setPassengerPosts(data.passenger_posts);
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

  return (
    <div>
      <CreatePost renderTransporterPost={renderTransporterPost} />
      <PostCard combinedPosts={filteredPosts} />
    </div>
  );
}

export default Home;