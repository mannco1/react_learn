
import './styles/App.css';
import Post from './Components/Post';
import PostItem from './Components/PostItem';
import { useState } from 'react';

function App() {
const[posts,setPosts]=useState(
  [
    {id:0,title:"js0",body:"body"},
    {id:1,title:"js1",body:"body"},
    {id:2,title:"js2",body:"body"},
    {id:3,title:"js3",body:"body"},
    {id:4,title:"js4",body:"body"},
    {id:5,title:"js5",body:"body"},
  ]
)


  return (
    <div className="App">
      {posts.map(post =>
     <PostItem post={post} key={post.id}/>
      )}
    </div>
  );
}

export default App;
