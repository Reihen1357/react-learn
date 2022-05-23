import React from 'react';
import {useState} from 'react'
// import ClassCounter from './components/ClassCounter';
// import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript', body: 'Description'},
    {id: 3, title: 'JavaScript', body: 'Description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
