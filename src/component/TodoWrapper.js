import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuid4 } from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuid4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {
      id: uuid4(), task: todo,
      completed: false, isEditing: false
    }])

    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      todo, completed: !todo.completed
    } : todo
    ))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const ediTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...
      todo, isEditing: !todo.isEditing
    } : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing
    } : todo))
  } 
  
  return (
    <div className='TodoWrapper'>
      <h1>Get Thing Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} ediTodo={ediTodo} />
        )

      ))}
    </div>
  )
}
