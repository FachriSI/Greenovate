import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex flex-row">
      {/* Form container - Left side */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white px-8 py-12 lg:px-14 lg:py-10" style={{ fontFamily: 'Montserrat' }}>
        {/* Logo only */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <img src="/Logo.svg" alt="Greenovate Logo" className="h-12" />
            <span className="text-3xl font-bold text-gray-900" style={{ lineHeight: '3rem' }}>greenovate</span>
          </div>
        </div>
        
        <h1
          style={{
            color: '#000',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginBottom: '0.5rem',
          }}
        >
          Welcome to Greenovate
        </h1>
        <p
          style={{
            color: '#000',
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: 'normal',
            marginBottom: '2.5rem',
          }}
        >
          Join Greenovate and be part of the change
        </p>
        <form className="w-full flex flex-col gap-6">
          <div>
            <label htmlFor="fullName" style={{ color: '#000', fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', marginBottom: '0.5rem', display: 'block', fontSize: '1rem' }}>Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Enter Full Name" 
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none"
              style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', color: '#000' }}
            />
          </div>
          
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
          </div>
          
          <button 
            type="submit" 
            className="w-full text-white py-3 rounded-md mt-6 hover:opacity-90 transition-opacity font-medium"
            style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', backgroundColor: '#607C3C' }}
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm" style={{ fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal', color: '#000' }}>
          Already have an account?{' '}
          <Link to="/login" className="font-medium hover:underline" style={{ color: "#607C3C", fontWeight: 500, fontStyle: 'normal', lineHeight: 'normal' }}>
            Login here
          </Link>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="hidden lg:block w-1/2">
        <img 
          src="/green-building.jpg" 
          alt="Green Building" 
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
