import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import Profile from './pages/Profile.jsx'

const MainApp = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));  // Initialize token from localStorage

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={token ? <Navigate to='/userdashboard' /> : <Login />} />

        {token ? (
          <>
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path='*' element={<Navigate to='/login' />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};


createRoot(document.getElementById('root')).render(<MainApp />);