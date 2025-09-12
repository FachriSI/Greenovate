import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Guide.css';
import Air from '../assets/Air.jpg';
import Botol from '../assets/Botol.jpg';
import Orang from '../assets/Orang.jpg';
import Rumah from '../assets/Rumah.jpg';
import supenoSurja from '../assets/supeno.jpg';
import instagramLogo from '../assets/instagram.svg';
import { AuthContext } from '../App';

const Guide = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isLoggedIn } = useContext(AuthContext);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Innovation", href: "/innovation" },
    { name: "Guide", href: "/guide" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];
  
  const filters = ['All', 'Energy', 'Water', 'Recycling', 'Consumption'];
  
  return (
    <div>
      <header style={{ backgroundColor: '#fff', padding: '1rem 2rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: link.name === 'Guide' ? '#607C3C' : '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
          </div>
          <Link to={isLoggedIn ? "/profile" : "/login"}>
            <img 
              src={isLoggedIn ? supenoSurja : '/Logo-greenovate.png'} 
              alt={isLoggedIn ? "Profile" : "Login"} 
              style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} 
            />
          </Link>
        </div>
      </header>
      <div className="guide-container">
        <h1 className="guide-title">TIPS AND GUIDES</h1>
        <h2 className="guide-subtitle">Explore our collection of tips and guides to help you live more sustainably</h2>
        
        <div className="search-container">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search any Guides" 
          />
        </div>
        
        <div className="filter-buttons">
          {filters.map(filter => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="cards-container">
          <div className="guide-card">
            <img src={Rumah} alt="Home sustainability" />
            <div className="card-content">
              <h3>10 Ways to Reduce Your Carbon Footprint at Home</h3>
              <p>Simple steps to reduce your carbon footprint and how to do it.</p>
              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
          
          <div className="guide-card">
            <img src={Botol} alt="Recycling guide" />
            <div className="card-content">
              <h3>Recycling Right: A Comprehensive Guide</h3>
              <p>Learn the best practices for recycling to maximize the impact</p>
              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
          
          <div className="guide-card">
            <img src={Air} alt="Water conservation" />
            <div className="card-content">
              <h3>Conserving Water: Tips for Every Household</h3>
              <p>Practical advice on how to use water more efficiently in your daily</p>
              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
          
          <div className="guide-card">
            <img src={Orang} alt="Eco-friendly choices" />
            <div className="card-content">
              <h3>Smart Consumption: Making Eco-Friendly Choices</h3>
              <p>Tips on making informed purchasing decisions that benefit</p>
              <button className="read-more-btn">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer style={{ marginTop: '5rem', borderTop: '1px solid #e5e7eb', padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
              <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/about" style={{ color: '#4b5563', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/innovation" style={{ color: '#4b5563', textDecoration: 'none' }}>Innovation</Link></li>
              <li><Link to="/guide" style={{ color: '#4b5563', textDecoration: 'none' }}>Guide</Link></li>
              <li><Link to="/community" style={{ color: '#4b5563', textDecoration: 'none' }}>Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Social Media</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" style={{ height: 24, width: 24 }} />
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>©2025 GREENOVATE. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Guide;