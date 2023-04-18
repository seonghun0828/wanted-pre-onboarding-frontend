import React, { ChangeEvent, useEffect, useState } from 'react';
import { createTodo } from '../axios_fns/createTodo.ts';
import { getTodos } from '../axios_fns/getTodos.ts';
import { updateTodo } from '../axios_fns/updateTodo.ts';
import { deleteTodo } from '../axios_fns/deleteTodo.ts';

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState('');
  const [editableId, setEditableId] = useState(-1);
  const [editTodo, setEditTodo] = useState('');

  const clickHandler = () => {
    createTodo(input).then((todo: TodoType) => {
      setTodos((prev) => [...prev, todo]);
    });
  };
  const changeAddInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

  const clickEditHandler = (e, clickedId: number) => {
    e.preventDefault();
    todos.forEach(({ id, todo }) => {
      if (id === clickedId) {
        setEditTodo(todo);
      }
    });
    setEditableId(clickedId);
  };

  const clickDeleteHandler = (clickedId: number) => {
    deleteTodo(clickedId).then(() =>
      setTodos((prev) => prev.filter(({ id }) => id !== clickedId))
    );
  };

  const clickCancelEditHandler = (e) => {
    e.preventDefault();
    setEditableId(-1);
  };

  const changeEditInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const clickSubmitEditHandler = async (todo: TodoType) => {
    const updatedTodo = await updateTodo({ ...todo, todo: editTodo });
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
    );
    setEditableId(-1);
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
              onChange={(e) => changeAddInputHandler(e)}
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
                  {editableId === todo.id ? (
                    <>
                      <input
                        className="border"
                        type="text"
                        value={editTodo}
                        onChange={(e) => changeEditInputHandler(e)}
                        data-testid="modify-input"
                      />
                      <button
                        className="border"
                        onClick={() => clickSubmitEditHandler(todo)}
                        data-testid="submit-button"
                      >
                        제출
                      </button>
                      <button
                        className="border"
                        onClick={clickCancelEditHandler}
                        data-testid="cancel-button"
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{todo.todo}</span>
                      <div>
                        <button
                          className="border"
                          onClick={(e) => clickEditHandler(e, todo.id)}
                          data-testid="modify-button"
                        >
                          수정
                        </button>
                        <button
                          className="border"
                          onClick={() => clickDeleteHandler(todo.id)}
                          data-testid="delete-button"
                        >
                          삭제
                        </button>
                      </div>
                    </>
                  )}
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
