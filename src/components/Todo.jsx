import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-slate-400 text-center">
          No todos yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-slate-700 px-4 py-3 rounded-lg"
            >
              <span className="text-white">
                {todo.text}
              </span>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="p-2 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-500 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12M9 7V4h6v3m-8 0v12a2 2 0 002 2h6a2 2 0 002-2V7"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;