import { Provider } from 'react-redux';
import './App.css'
import { store } from './redux/store.js';
import { useSelector } from 'react-redux';
import TaskPage from './components/TaskPage.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <TaskPage />
  )
}

export default App
