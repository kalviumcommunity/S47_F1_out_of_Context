// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/login';
import Signup from './Components/Signup';
import ContentSpace from './Components/ContentSpace';
import Logout from './Components/logout';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/content"
          element={
            <PrivateRoute>
              <ContentSpace />
            </PrivateRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
