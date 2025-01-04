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
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
      <div>
        <span className="icon"><FaEdit /></span>
        <span className="icon"><MdDelete /></span>
        <span className="icon"><MdDone /></span>
      </div>
    </form>
  )
}
