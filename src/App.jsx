import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Redux Toolkit Todo App
        </h1>

        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;