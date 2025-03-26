import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/to-do/tasksSlice";
import { fetchJoke } from "../redux/features/to-do/tasksSlice";


function TaskInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setTask(e.target.value);
  };

  //function to add task when user adds task 
  const handleAdd = (e) => {
    e.preventDefault();// since we using form and handling the work by ourselfs we need to stop form from auto refreshing after submission 
    if (task.trim() === "") return; // Prevent empty todos
    dispatch(addTodo(task)); // dispatching addTodo action to add task 

    //here we are featching data from api and showing it in the form of aleart 
    dispatch(fetchJoke()).then((result) => { 
      if (fetchJoke.fulfilled.match(result)) {
        alert(`${result.payload.setup} - ${result.payload.punchline}`);
      } else {
        console.error("Failed to load joke:", result.error);
        alert("Failed to load joke. Please try again later.");
      }
    });
    setTask(""); // Clear input after adding
  };

  return (
    <form onSubmit={handleAdd} className="flex items-center gap-2 mb-6 mt-5">
      <input
        className="flex-grow p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={task}
        aria-label="Add new task"
        onChange={handleOnchange}
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm transition"
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
