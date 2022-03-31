import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])
   
    // console.log(newPost);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

        .then(data => setPosts(data))
        // .then(data => console.log(data))

    },[])
    return (
        <div>
            <h2>Every post Facebook ever had:{posts.length} </h2>
            {
                posts.map(post  =><Link key={post.id}
                to={`/posts/${post.id}`}>{post.id}
                
                </Link> )
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;