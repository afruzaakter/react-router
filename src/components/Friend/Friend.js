import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetails = () => {
        // console.log('click me');
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to ={'/friend/'+id}>Show Detail</Link>
            <button onClick={showFriendDetails}>{username} id: {id}</button>
        </div>
    );
};

export default Friend;