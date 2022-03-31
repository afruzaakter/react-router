
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/ >}></Route>
       <Route path='/friends' element={<Friends></Friends>}></Route>
       <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
       <Route path='/posts' element={<Posts></Posts>}>
         <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
       </Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
