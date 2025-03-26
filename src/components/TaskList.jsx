import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  prioritizeTodo,
} from "../redux/features/to-do/tasksSlice";

function TaskList() {
  const todos = useSelector((state) => state.todos?.todos || []);
  const dispatch = useDispatch();

  //handling deletion of task 
  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };


  //handling the priorities of tasks 
  const handlePriority = (id , priority) => {
    dispatch(prioritizeTodo({ id, priority }));//we get two values from select while onChange event triggers , id and property(high, medium , low )
  };


  if (!Array.isArray(todos) || todos.length === 0) {
    return <p className="text-center mt-4">No tasks available. Add some!</p>;
  }

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <li
          key={todo.id} // Key added here (important for React lists)
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.isPrioritized === "high" ? "border-danger" : "border-secondary"
          } border-left`}
          style={{
            height: "60px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            className={
              todo.isPrioritized === "high"
                ? "text-danger fw-bold"
                : "text-dark"
            }
          >
            • {todo.task}
          </span>
          <div className="d-flex gap-2">
              <select value={todo.isPrioritized} onChange={(e) => handlePriority(todo.id, e.target.value)}> 
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            <button
              onClick={() => handleDel(todo.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
