import { BrowserRouter, Routes, Route , Navigate  } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js';
import { Provider  , useSelector} from 'react-redux'; //provider helps to access stor for its children
import Login from "./pages/Login.jsx";

//protecting the root to avoid  unauthorized access
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/todo" element={<ProtectedRoute><App /></ProtectedRoute>} />
    </Routes>
  </BrowserRouter>
</Provider>
)

