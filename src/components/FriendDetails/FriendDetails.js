import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] =useState({})
    // console.log(friend);
  useEffect(() =>{
      const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
      console.log(url);
    // fetch('https://jsonplaceholder.typicode.com/users/2')
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  }, [])
    return (
        <div>
           <h2>This is FriendDetails {friendId}</h2> 
           <h2>Name: {friend.name}</h2>
           <h4>Email:{friend.email} </h4>
           <h4><small>City:{friend.address?.city}</small></h4>
           <h4><small>CatchPhrase:{friend.company?.catchPhrase}</small></h4>
        </div>
    );
};

export default FriendDetails;