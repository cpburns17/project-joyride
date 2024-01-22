import React, {useState, useEffect} from 'react'
import App from './App'
import Navbar from './Navbar'
import PostCard from './PostCard'


function Home () {
const [posts, setPosts] = useState({
    transporter_posts: [],
    passenger_posts: [],
    });

    useEffect(() => {
    fetch("http://127.0.0.1:5555/all_posts")
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        console.log(data); // log the data to the console
        setPosts(data);
        })
        .catch((error) => console.error("Fetch error:", error));
    }, []);

    return (
    <div>
        <PostCard posts={posts}/>
    </div>
    );
}





export default Home;