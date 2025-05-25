import React, { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../store/todos/todosSlice'

const Todo = () => {
  const { todos } = useSelector((state) => state.todos) 
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getTodos())
  }, [])

  return (
    <>
    <div className="container">
    <h1>Страница пользователей</h1>


        <div className="box todo">
            {todos && todos.map((item) => (
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
</div>
</>
  )
}

export default Todo