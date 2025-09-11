
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/instagram.svg';
import supenoSurja from '../assets/supeno.jpg';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "/#guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const Contact = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan popup
    setShowSuccessPopup(true);
    
    // Opsional: Setelah beberapa detik, sembunyikan popup
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', background: '#fafbfa', minHeight: '100vh', position: 'relative' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: link.name === 'Contact' ? '#607C3C' : '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
            <img src={supenoSurja} alt="User Avatar" style={{ height: 40, width: 40, borderRadius: '50%' }} />
          </div>
        </div>
      </nav>
      
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1rem 0 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#222', marginBottom: '1rem' }}>CONTACT US</h1>
        <p style={{ color: '#666', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: 650 }}>
          We're here to help! Reach out with any questions, feedback, or suggestions. Our team is dedicated to providing prompt and helpful responses.
        </p>
        <form 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: 450, margin: '0' }}
          onSubmit={handleSubmit}
        >
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 500, color: '#222', marginBottom: 4, display: 'block' }}>Your Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Full Name" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd', fontSize: '1rem' }} 
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 500, color: '#222', marginBottom: 4, display: 'block' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd', fontSize: '1rem' }} 
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label style={{ fontWeight: 500, color: '#222', marginBottom: 4, display: 'block' }}>Your Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Your Message" 
              style={{ width: '100%', padding: '0.75rem', borderRadius: 6, border: '1px solid #ddd', fontSize: '1rem', minHeight: 120, resize: 'vertical' }} 
            />
          </div>
          <button 
            type="submit" 
            style={{ background: '#607C3C', color: '#fff', border: 'none', borderRadius: 8, padding: '0.85rem', fontWeight: 500, fontSize: '1.1rem', marginTop: '1rem', cursor: 'pointer' }}
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Footer */}
      {/* Success Popup */}
      {showSuccessPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <div style={{
            background: '#fff',
            padding: '20px 25px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1001,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '100px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#607C3C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" style={{ width: '16px', height: '16px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 500 }}>Message sent successfully!</span>
          </div>
        </div>
      )}
      
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
              <li><Link to="/#about" style={{ color: '#4b5563', textDecoration: 'none' }}>About</Link></li>
              <li><Link to="/innovation" style={{ color: '#4b5563', textDecoration: 'none' }}>Innovation</Link></li>
              <li><Link to="/#guide" style={{ color: '#4b5563', textDecoration: 'none' }}>Guide</Link></li>
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

export default Contact;
