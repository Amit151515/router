import React, { useEffect, useState } from 'react'

const Todo = () => {

  const [toDo, setToDo] = useState(null)

  useEffect(() => {
    const getTodo = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setToDo(data);
            console.log(data);
            
        } catch (error) {
            console.error(error);
        }
    };

    getTodo();
}, []);
  return (
    <>
    <div className="container">
    <h1>Страница пользователей</h1>

    {!toDo ? (
        <p>Загрузка...</p>
    ) : (
        <div className="box todo">
            {toDo.map((item) => (
                <div key={item.id} className="item">
                    <h2> Id user: {item.userId} </h2>
                    <h3>Title: {item.title}</h3>
                    {item.completed ? (
                      <p>Completed: Successfully</p>
                    ) : (
                      <p>Completed: Not successful</p>
                    )}
                </div>
            ))}
        </div>
    )}
</div>
</>
  )
}

export default Todo