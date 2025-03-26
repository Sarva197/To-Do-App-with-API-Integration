import { createSlice, createAsyncThunk , nanoid  } from "@reduxjs/toolkit";
import axios from 'axios';


// Load tasks from localStorage
const loadTasks = () => {
  try {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error("Failed to load tasks from localStorage:", error);
    return [];
  }
};

//fetching joke for joke api and exporting 
export const fetchJoke = createAsyncThunk(
  'todos/fetchJoke',
  async () => {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    return response.data;
  }
);

// Sort tasks by priority(High , Medium , Low)
const sortTasksByPriority = (tasks) => {
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  return tasks.sort((a, b) => priorityOrder[a.isPrioritized] - priorityOrder[b.isPrioritized]);
};

// Initialize the store with loaded tasks or an empty array
const initialState = {
  todos: Array.isArray(loadTasks()) ? loadTasks() : [],//if local task has tasks then it will get loded or else an empty array is initialized
};

export const tasksSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { // reducer takes two arguments state and action . State is like an event and action is a responce to that event , action is an object
      //creating a new todo object , isPrioritized is by default set to low 
      const newTodo = {
        id: nanoid(),
        task: action.payload,// payload contains the task which is passed by handleAdd in taskinput.jsx
        isPrioritized: "low",
      };
      state.todos.push(newTodo); //using mutatble syntax to push new task into store 
      state.todos = sortTasksByPriority(state.todos); // sorting them in there order of priority 
      localStorage.setItem("tasks", JSON.stringify(state.todos)); // storing task in localstorage
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);//filtering out the task which is not to be deleted and assigning it to state.todos arry itself (filter returns new array)
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    // reducer to prioritize tasks 
    prioritizeTodo: (state, action) => {
      const { id, priority } = action.payload; // gets two arguments , id and priority 
      const todo = state.todos.find((todo) => todo.id === id); // finding the todo matching the id sent
      if (todo) {
        todo.isPrioritized = priority; // setting the priority of the task by the value seleted by user 
      }
      state.todos = sortTasksByPriority(state.todos); // once priorities are set we need to run sortTasksByPriority() function inorder to show them with there new priorities
      localStorage.setItem("tasks", JSON.stringify(state.todos)); // store them in local storage 
      //here we are storing in locastorage again with the new order of tasks 
    },
  },
});

export const { addTodo, deleteTodo, prioritizeTodo} = tasksSlice.actions; // exporting actions to use in taskInput.jsx and taskList.jsx
export default tasksSlice.reducer; // exporting the reducer to use in store
