import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/to-do/authSlice.js';

function TaskPage() {
  const dispatch = useDispatch();
  return (
    <div className="container mt-5 p-4 border rounded shadow-lg bg-white">
    <h1 className="text-center mb-4">Task List</h1>
    <button  style={{marginTop:'5px' , marginLeft:'85px'}} onClick={() => dispatch(logout())}>Logout</button>
    <TaskInput />
    <TaskList />
  </div>
  )
}

export default TaskPage