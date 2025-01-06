import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../model';
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<string>>;
};

export default function SingleTodo({ todo, todos, setTodos }: Props) {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    const done = todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone }: todo);
    setTodos(done);
  };

  const handleDelete = (id: number) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const handleClickEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    } else {
      setEdit(false);
    }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )))
    setEdit(false);
  };

  useEffect(() => {
    if (edit) inputRef.current?.focus();
  }, [edit]);

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__single--text'
        />
      ) : (
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ) : (
          <span className='todos__single--text'>{todo.todo}</span>
        )
      )}
      <div>
        <span className="icon" onClick={() => handleClickEdit()}><FaEdit /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}
