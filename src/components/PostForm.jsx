import React from 'react'
import { useState } from 'react'
import MyInput from './UI/inputs/MyInput'
import MyButton from './UI/buttons/MyButton'

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''})
  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
        ...post,
        id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  return (
    <div>
        <form>
        {/* Управляемый компонент (двустороннее связывание) */}
        <MyInput
          value={post.title}
          onChange= {event => setPost({...post, title: event.target.value})}
          type='text'
          placeholder='Name of post'
        />
        {/* Неуправляемый/неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange= {event => setPost({...post, body: event.target.value})}
          type='text'
          placeholder='Post description'
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  )
}

export default PostForm