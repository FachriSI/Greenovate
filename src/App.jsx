
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { useState, useEffect, createContext } from 'react';

import Innovation from './pages/Innovation';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import About from './pages/About';
import Guide from './pages/Guide';
import ArticleGuide from './pages/articleGuide';

import InnovationDetail from './pages/InnovationDetail';

import Community from './pages/Community';

// Create context to share login state across components
export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/innovation/:id" element={<InnovationDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/10-ways-reduce-carbon" element={<ArticleGuide />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
