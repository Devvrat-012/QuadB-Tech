import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './Components/TaskInput.jsx';
import TaskList from './Components/TaskList.jsx';
import { useDispatch } from "react-redux";
import { setTasks } from "./todosSlice.js"; // Import deleteTask and toggleCompleted actions

function App() {
  const tasks = useSelector((state) => state.todos.tasks);

  const dispatch = useDispatch();
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]);
  

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold m-4">To-Do App</h1>
      <TaskInput />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
