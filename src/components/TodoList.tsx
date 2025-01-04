import React from 'react'
import { Todo } from '../model';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoList({ todos, setTodos }: Props) {

  return (
    <div className='todos'>
      {todos.map(todo => (
        <li>{todo.todo}</li>
      ))}
    </div>
  )
}
