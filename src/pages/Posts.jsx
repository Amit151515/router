import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/posts/postsSlice'

const Posts = () => {


    const { posts } = useSelector((state) => state.posts) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])
  return (
    <>
            <div className="container">
            <h1>Публикация пользователей</h1>
                <div className="box posts">
                    {posts && posts.map((item) => (
                        <div key={item.id} className="item">
                            <h2> Id user: {item.userId} </h2>
                            <h3>title: {item.title}</h3>
                            <p> information: {item.body}</p>
                        </div>
                    ))}
                </div>
        </div>
    </>
  )
}

export default Posts