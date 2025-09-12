
import React from 'react';
import supenoSurja from '../assets/supeno.jpg';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/instagram.svg';


// Import innovation images
import solarImage from '../assets/innovation/solar.png';
import aquaImage from '../assets/innovation/aqua.jpg';
import driveImage from '../assets/innovation/drive.jpg';
import wasteImage from '../assets/innovation/waste.jpg';
import kopernikImage from '../assets/innovation/kopernik.jpg';
import electruImage from '../assets/innovation/electru.png';
import aisolaImage from '../assets/innovation/aisola.jpg';
import cycleImage from '../assets/innovation/cycle.jpg';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "/guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const innovations = [
  { id: 1, title: 'Solar Bloom', category: 'Solar Energy', description: 'Flower-like solar panels that track the sun. The evolution of panel.', image: solarImage },
  { id: 2, title: 'Aqua Cycle', category: 'Agriculture', description: 'Smart water recycling for urban areas, really helpful to save water.', image: aquaImage },
  { id: 3, title: 'Eco Drive', category: 'Transportation', description: 'Affordable long-range electric vehicles, eco-friendly vehicles.', image: driveImage },
  { id: 4, title: 'Waste-Wise', category: 'Waste Management', description: 'Powered waste machine that has sorting technology for each trash.', image: wasteImage },
  { id: 5, title: 'Kopernik', category: 'Agriculture', description: 'Impactful technologies such as energy-efficient stoves.', image: kopernikImage },
  { id: 6, title: 'Electru', category: 'Agriculture', description: 'Smart water recycling for urban areas, really helpful to save water.', image: electruImage },
  { id: 7, title: 'Aisola', category: 'Solar Energy', description: 'Smart solar panels with tracking system that follows the sun.', image: aisolaImage },
  { id: 8, title: 'Electrum Cycle', category: 'Transportation', description: 'Electric motorcycle fleet project aiming to cut daily emissions.', image: cycleImage },
];

const categories = ['All', 'Solar Energy', 'Agriculture', 'Transportation', 'Waste Management'];

const Innovation = () => {
  return (
    <div style={{ fontFamily: 'Montserrat', background: '#fff', color: '#333' }}>
      {/* Navbar */}
      <nav style={{ background: '#fff', padding: '1.5rem 0', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#607C3C', letterSpacing: 1 }}>GREENOVATE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: link.name === 'Innovation' ? '#607C3C' : '#333', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
            <Link to="/profile">
              <img src={supenoSurja} alt="User Avatar" style={{ height: 40, width: 40, borderRadius: '50%' }} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#607C3C', fontWeight: 700 }}>GREEN INNOVATIONS</h1>
            <p style={{ fontSize: '1.25rem', color: '#555', marginTop: '0.5rem' }}>
              Explore groundbreaking technologies and visionary startups driving a sustainable future
            </p>
          </header>

          {/* Search and Filters */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', marginBottom: '2rem' }}>
              <input
                type="text"
                placeholder="Search any Innovation"
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  borderRadius: '999px',
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                }}
              />
              <svg style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#888' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    border: '1px solid #ddd',
                    background: cat === 'All' ? '#607C3C' : '#fff',
                    color: cat === 'All' ? '#fff' : '#333',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Innovations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', justifyContent: 'center' }}>
            {innovations.map(item => (
              <Link to={`/innovation/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  width: '282px', 
                  height: '464px',
                  background: '#fff', 
                  borderRadius: '15px', 
                  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>{item.title}</h3>
                    <p style={{ color: '#607C3C', fontWeight: 600, margin: '0.25rem 0' }}>{item.category}</p>
                    <p style={{ color: '#555', fontSize: '0.9rem', marginTop: '10px' }}>{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4rem', gap: '0.5rem' }}>
            <button style={{ padding: '0.5rem', border: 'none', background: 'transparent' }}>{'<<'}</button>
            <button style={{ padding: '0.5rem', border: 'none', background: 'transparent' }}>{'<'}</button>
            {[1, 2, 3].map(num => (
              <button key={num} style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #ddd', background: num === 1 ? '#607C3C' : '#fff', color: num === 1 ? '#fff' : '#333' }}>{num}</button>
            ))}
            <span>...</span>
            <button style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', color: '#333' }}>10</button>
            <button style={{ padding: '0.5rem', border: 'none', background: 'transparent' }}>{'>'}</button>
            <button style={{ padding: '0.5rem', border: 'none', background: 'transparent' }}>{'>>'}</button>
          </div>
        </div>
      </main>

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

export default Innovation;
