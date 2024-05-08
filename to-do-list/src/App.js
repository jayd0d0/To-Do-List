import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
            placeholder="Add a new task"
            className="border p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2">
            Add Task
          </button>
        </form>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex items-center justify-between mb-2">
              <span
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 font-semibold">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="text-center py-4 border-t fixed bottom-0 w-full bg-white">
      Made By Jason Do
      </footer>
    </div>
  );
}

export default App;