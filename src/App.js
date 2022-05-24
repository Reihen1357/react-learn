import React from 'react';
import {useState} from 'react'
// import ClassCounter from './components/ClassCounter';
// import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Python', body: 'Language'},
    {id: 3, title: 'React', body: 'A JavaScript library'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [search, setSearch] = useState('')

  function getSortedPost() {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPosts = getSortedPost()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value = {search}
          onChange= {event => setSearch(event.target.value)}
          placeholder='Search'
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by'
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={sortedPosts} title='Посты про JS'/>
        : <h1 style={{textAlign: 'center', color: 'aqua'}}>
            Posts not found
          </h1>
      }
    </div>
  );
}

export default App;
