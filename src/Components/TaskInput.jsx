import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../todosSlice.js'; // Import addTask action

function TaskInput() {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      // Dispatch addTask action
      dispatch(addTask({ id: Date.now(), task: newTask, completed: false }));
      setNewTask('');

      // Save tasks to local storage
      const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get existing tasks or create an empty array
      tasks.push({ id: Date.now(), task: newTask, completed: false }); // Add new task to the array
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks back to local storage
    }
  };

  return (
    <form onSubmit={handleAddTask} className='flex flex-row m-5 p-5 md:px-24 lg:px-60'>
      <input
        type="text"
        className="p-2 rounded-md border hover:bg-gray-900 text-white bg-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 rounded-md">
        Add
      </button>
    </form>
  );
}

export default TaskInput;
