import React, { useEffect, useState } from 'react';

const PostDetails = () => {
    const {postId} = useState()
    // console.log(postId);
    // const {post,setPost} = useState({})
    // useEffect(() => {

    //     const url = `https://jsonplaceholder.typicode.com/${postId}}`
    //     fetch(url)
    //     .then(res =>res.json())
    //     // .then(data => setPost(post))
    //     .then(data=> console.log(data))
    // },[postId])

    return (
        <div>
            {/* //error  */}
            <h4>This is post Details for:{postId}</h4>
            {/* <h2>Post-title:{post.title}</h2> */}
        </div>
    );
};

export default PostDetails;