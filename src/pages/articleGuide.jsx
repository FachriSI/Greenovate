import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rumah from '../assets/Rumah.jpg';
import Botol from '../assets/Botol.jpg';
import Orang from '../assets/Orang.jpg';
import instagramLogo from '../assets/instagram.svg';
import supenoSurja from '../assets/supeno.jpg';
import { AuthContext } from '../App';
import '../articleGuide.css';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "/guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const ArticleGuide = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <div style={{ fontFamily: 'Montserrat', background: '#fff', color: '#333' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: link.name === 'Guide' ? '#607C3C' : '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
            <Link to={isLoggedIn ? "/profile" : "/login"}>
              <img 
                src={isLoggedIn ? supenoSurja : '/Logo-greenovate.png'} 
                alt={isLoggedIn ? "Profile" : "Login"} 
                style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} 
              />
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main style={{ padding: '2rem 2rem 4rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '2rem', color: '#555', fontSize: '0.9rem' }}>
            <Link to="/guide" style={{ color: '#607C3C', textDecoration: 'none' }}>Guides</Link>
            <span> » </span>
            <span>Home Sustainability</span>
            <span> » </span>
            <span>10 Ways to Reduce Your Carbon Footprint</span>
          </div>
          
          {/* Article Content */}
          <article className="main-article">
            <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 700, marginBottom: '1.5rem' }}>10 Ways to Reduce Your Carbon Footprint at Home</h1>
            <img src={Rumah} alt="Home sustainability" style={{ width: '100%', borderRadius: '16px', marginBottom: '2rem', height: 'auto' }} />
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>Reducing your carbon footprint at home is a significant step towards a more sustainable lifestyle. Here are ten practical ways to make a difference.</p>
            
            <div style={{ marginBottom: '2rem' }}>
              <ol style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Energy Efficiency:</strong> Switch to LED lighting, unplug electronics when not in use, and use smart power strips.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Renewable Energy:</strong> Consider installing solar panels or switching to a renewable energy provider.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Smart Thermostat:</strong> Use a smart thermostat to optimize heating and cooling schedules.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Water Conservation:</strong> Fix leaks, install low-flow showerheads, and collect rainwater for gardening.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Reduce, Reuse, and Recycle:</strong> Minimize consumption, reuse items, and recycle properly.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Composting:</strong> Start a compost bin for food scraps and yard waste.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Sustainable Diet:</strong> Reduce meat consumption and buy locally sourced foods.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Eco-Friendly Cleaning:</strong> Use natural cleaning products and avoid harsh chemicals.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Green Transportation:</strong> Walk, bike, or use public transport more often.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <strong>Plant Trees:</strong> Plant trees around your home to absorb carbon dioxide.
                </li>
              </ol>
            </div>
            
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>By implementing these tips, you can significantly reduce your environmental impact and contribute to a healthier planet.</p>
          </article>
        </div>
      </main>
      
      {/* Related Articles */}
      <section style={{ background: '#f9fafb', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#333', textAlign: 'center', marginBottom: '3rem' }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <img src={Botol} alt="Recycling guide" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>Recycling Right: A Comprehensive Guide</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1rem' }}>Learn the best practices for recycling to maximize the impact</p>
                <button style={{ background: '#607C3C', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem', fontWeight: 500, cursor: 'pointer' }}>Read More</button>
              </div>
            </div>
            
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <img src={Orang} alt="Eco-friendly choices" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>Smart Consumption: Making Eco-Friendly Choices</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '1rem' }}>Tips on making informed purchasing decisions that benefit</p>
                <button style={{ background: '#607C3C', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem', fontWeight: 500, cursor: 'pointer' }}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #eee', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#607C3C' }}>GREENOVATE</span>
          </div>
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['About', 'Innovation', 'Guide', 'Community'].map(item => (
                <li key={item}><Link to={`/${item.toLowerCase()}`} style={{ color: '#333', textDecoration: 'none' }}>{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#607C3C', fontWeight: 600, marginBottom: '1rem' }}>Social Media</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#333', textDecoration: 'none' }}>
              <img src={instagramLogo} alt="Instagram" style={{ width: 24, height: 24 }} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
          ©2025 GREENOVATE. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default ArticleGuide;