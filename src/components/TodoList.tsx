import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoList({ todos, setTodos }: Props) {

  return (
    <div className='todos'>
      {todos.map(todo => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}
