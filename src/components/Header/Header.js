import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
          <h1>Welcome to my fancy Routing !!!</h1>  
          <nav>
              
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/friends">Friends</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/posts">Posts</CustomLink>
              {/* <Link to="/post">Posts</Link> */}
             
          </nav>
        </div>
    );
};

export default Header;