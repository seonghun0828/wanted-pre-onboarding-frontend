import React, { ChangeEvent, useEffect, useState } from 'react';
import { createTodo } from '../axios_fns/createTodo.ts';
import { getTodos } from '../axios_fns/getTodos.ts';
import { updateTodo } from '../axios_fns/updateTodo.ts';

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState('');

  const clickHandler = () => {
    createTodo(input).then((todo: TodoType) => {
      setTodos((prev) => [...prev, todo]);
    });
  };
  const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const changeCheckboxHandler = async (todo: TodoType) => {
    const updatedTodo = await updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
    );
  };

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <div className="flex justify-center w-full p-10">
      <div className="flex flex-col justify-center w-1/2 gap-2">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center">To do</h1>
          <div className="flex justify-center gap-2">
            <input
              className="border"
              type="text"
              value={input}
              onChange={(e) => changeTextHandler(e)}
              data-testid="new-todo-input"
            />
            <button
              className="border"
              onClick={clickHandler}
              data-testid="new-todo-add-button"
            >
              추가
            </button>
          </div>
          <ul className="flex flex-col">
            {todos.map((todo) => (
              <li key={todo.id}>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => changeCheckboxHandler(todo)}
                  />
                  <span>{todo.todo}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
