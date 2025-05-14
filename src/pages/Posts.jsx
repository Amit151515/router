import React, { useEffect, useState } from 'react'

const Posts = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
      const getPosts = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              const data = await response.json();
              setPosts(data);
              console.log(data);
              
          } catch (error) {
              console.error(error);
          }
      };

      getPosts();
  }, []);

  return (
    <>
            <div className="container">
            <h1>Публикация пользователей</h1>
            {!posts ? (
                <p>Загрузка публикациий пользователей...</p>
            ) : (
                <div className="box posts">
                    {posts.map((item) => (
                        <div key={item.id} className="item">
                            <h2> Id user: {item.userId} </h2>
                            <h3>title: {item.title}</h3>
                            <p> information: {item.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </>
  )
}

export default Posts