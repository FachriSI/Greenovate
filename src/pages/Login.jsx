import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sukses
    login(); // Set isLoggedIn to true
    navigate('/'); // Kembali ke halaman home
  };

  return (
    <div className="h-screen flex flex-row relative overflow-hidden">
      {/* Form container - Left side */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white px-8 py-12 lg:px-14 lg:py-10 z-10" style={{ fontFamily: 'Montserrat' }}>
        {/* Logo and Brand */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <img src="/Logo.svg" alt="Greenovate Logo" className="h-12" />
            <span className="text-3xl font-bold text-gray-900" style={{ lineHeight: '3rem', fontWeight: 500 }}>GREENOVATE</span>
          </div>
        </div>
        <h1 style={{ color: '#000', fontSize: '36px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal', marginBottom: '0.5rem' }}>Welcome Back!</h1>
        <p style={{ color: '#000', fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', marginBottom: '2.5rem' }}>Login your account and explore Greenovate</p>
  <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" style={{ color: '#000', fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', marginBottom: '0.5rem', display: 'block', fontSize: '1rem' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Email" 
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none"
              style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', color: '#000' }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ color: '#000', fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', marginBottom: '0.5rem', display: 'block', fontSize: '1rem' }}>Password</label>
            <div className="relative">
              <input 
                type="password" 
                id="password" 
                placeholder="Enter Password" 
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none pr-10" 
                style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', color: '#000' }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
              </span>
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" style={{ color: '#607C3C', fontSize: '0.95rem' }}>Forgot Password?</a>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full text-white py-3 rounded-md mt-6 hover:opacity-90 transition-opacity font-medium"
            style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', backgroundColor: '#607C3C' }}
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-sm" style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', color: '#000' }}>
          Don't have an account?{' '}
          <Link to="/register" className="font-medium hover:underline" style={{ color: '#607C3C', fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal' }}>
            Register here
          </Link>
        </div>
      </div>
      {/* Right side with the green building image */}
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
           style={{ 
             backgroundImage: "url('/green-building.jpg')",
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}>
      </div>
    </div>
  );
};

export default Login;
