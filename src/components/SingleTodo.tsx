import React from 'react'
import { Todo } from '../model';
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
};

export default function SingleTodo({ todo, todos, setTodos }: Props) {

  const handleDone = (id: number) => {
    const done = todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone }: todo);
    setTodos(done);
  };

  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <form className='todos__single'>
      {todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span className="icon"><FaEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}
