import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import instagramLogo from '../assets/instagram.svg';
import supenoSurja from '../assets/supeno.jpg';
import { AuthContext } from '../App';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "/guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const profileActivities = [
  {
    type: "Viewed Innovations",
    title: "The Solar Bloom",
    description: "Explore Solar Bloom: The Future of Solar Energy at Innovations Page",
    link: "/innovation"
  },
  {
    type: "Read Guide",
    title: "How to Reduce Carbon",
    description: "Read the guide '10 Ways to Reduce Your Carbon Footprint at Home' in the Tips & Guides page to discover practical eco-friendly actions.",
    link: "/guide"
  },
  {
    type: "Sent Feedback",
    title: "",
    description: "Submitted feedback through the Contact Us page to share thoughts and suggestions for Greenovate.",
    link: "/contact"
  },
  {
    type: "First Community Post",
    title: "",
    description: "Created first post in the Community page, joining the discussion and sharing your ideas with others.",
    link: "/community"
  }
];

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', background: '#f9fafb', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
            <Link to="/profile">
              <img src={supenoSurja} alt="User Avatar" style={{ height: 40, width: 40, borderRadius: '50%', border: '2px solid #607C3C' }} />
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Profile Card */}
        <div style={{ 
          background: '#f8faf5', 
          borderRadius: '1rem', 
          padding: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #e5e7eb',
          marginBottom: '2rem'
        }}>
          <img 
            src={supenoSurja} 
            alt="Budi Budiman" 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '3px solid #607C3C',
              marginBottom: '1rem'
            }} 
          />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Budi Budiman</h2>
          <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Activist</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Joined in 2025</p>
        </div>

        {/* Recent Activity */}
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent Activity</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {profileActivities.map((activity, index) => (
            <Link 
              key={index} 
              to={activity.link}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                background: 'white',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #e5e7eb',
              }}
            >
              <div>
                <p style={{ color: '#607C3C', fontWeight: '500', marginBottom: '0.25rem' }}>{activity.type}: {activity.title}</p>
                <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{activity.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Logout Button */}
        <div style={{ marginTop: '2rem' }}>
          <button 
            onClick={handleLogout}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#ef4444',
              textDecoration: 'none',
              fontWeight: '500',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '2rem 1rem', marginTop: '3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
              <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/#about" style={{ color: '#4b5563', textDecoration: 'none' }}>About</Link>
              <Link to="/innovation" style={{ color: '#4b5563', textDecoration: 'none' }}>Innovation</Link>
              <Link to="/#guide" style={{ color: '#4b5563', textDecoration: 'none' }}>Guide</Link>
              <Link to="/community" style={{ color: '#4b5563', textDecoration: 'none' }}>Community</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Social Media</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" style={{ height: 24, width: 24 }} />
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>©2025 GREENOVATE. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
