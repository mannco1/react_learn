
import './styles/App.css';

import PostItem from './Components/PostItem';
import { useState } from 'react';
import PostList from './Components/PostList';

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

const[posts2,setPosts2]=useState(
  [
    {id:0,title:"c++ 0",body:"c++ body"},
    {id:1,title:"c++ 1",body:"c++ body"},
    {id:2,title:"c++ 2",body:"c++ body"},
    {id:3,title:"c++ 3",body:"c++ body"},
    {id:4,title:"c++ 4",body:"c++ body"},
    {id:5,title:"c++ 5",body:"c++ body"},
  ]
)


  return (
    <div className="App">
     <PostList posts={posts} title="Список постов 1"/>
     <PostList posts={posts2} title="Список постов 2"/>
    </div>
  );
}

export default App;
