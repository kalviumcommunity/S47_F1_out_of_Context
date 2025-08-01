import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="rounded-full h-16 w-16"
            src="https://i.pinimg.com/736x/29/a7/97/29a797972ea730a4ff4b26855e6afa3f.jpg"
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <img
            className="h-8 w-15 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
            alt="Image"
          />
          <span className="text-black font-semibold italic text-3xl font-black mr-4">out of context</span>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={handleLogin}>
                Login
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full" onClick={handleSignup}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
