import React, { useState } from 'react';

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  return (
    <div className="flex justify-center w-full p-10">
      <div className="flex flex-col justify-center w-1/2 gap-2">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center">To do</h1>
          <div className="flex justify-center gap-2">
            <input
              className="border"
              type="text"
              data-testid="new-todo-input"
            />
            <button className="border" data-testid="new-todo-add-button">
              추가
            </button>
          </div>
          <ul className="flex flex-col">
            {todos.map(({ id, todo, isCompleted }) => (
              <li>
                <label className="flex gap-2" htmlFor="">
                  <input type="checkbox" />
                  <span>{todo}</span>
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
