import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../About.css';
import Laptop from '../assets/Laptop.jpg';
import Fr from '../assets/Fr.jpg';
import Laut from '../assets/Laut.jpg';
import Tanah from '../assets/Tanah.jpg';
import Hutan from '../assets/hutan.jpg';
import Abstract from '../assets/Abstract.jpg';
import Emerald from '../assets/Emerald.jpg';
import Startup from '../assets/Startup.jpg';
import supenoSurja from '../assets/supeno.jpg';
import instagramLogo from '../assets/instagram.svg';
import { AuthContext } from '../App';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "/guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const About = () => {
  const { isLoggedIn } = useContext(AuthContext);

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
              <Link key={link.name} to={link.href} style={{ color: link.name === 'About' ? '#607C3C' : '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
            ))}
            <Link to={isLoggedIn ? "/profile" : "/login"}>
              <img 
                src={isLoggedIn ? supenoSurja : '/Logo-greenovate.png'} 
                alt={isLoggedIn ? "Profile" : "Login"} 
                style={{ height: 40, width: 40, borderRadius: '50%', objectFit: 'cover' }} 
              />
            </Link>
          </div>
        </div>
      </nav>

      <div className="about-container">
        <section className="about-hero">
          <h1>ABOUT GREENOVATE</h1>
          <p>Greenovate is a digital education platform dedicated to fostering green innovation. We empower individuals to learn, connect, and take sustainable actions, contributing to a healthier planet and a more sustainable future.</p>
        </section>

        <section className="why-section">
          <h2>WHY GREENOVATE EXISTS</h2>
          <div className="reasons-grid">
            <img src={Hutan} alt=''></img>
            <div className="reason-card">
              <h3>Combating Climate Change</h3>
              <p>We believe technology and frameworks can play a key role in integrating environmental economic and environmental outcomes through the protective and sustainable business and environment of greenovates to create.</p>
            </div>
            <img src={Laut} alt=''></img>
            <div className="reason-card">
              <h3>Protecting Biodiversity</h3>
              <p>We believe technology and frameworks can play a key role in integrating environmental economic and environmental outcomes through the protective and sustainable business and environment of greenovates to create.</p>
            </div>
            <img src={Tanah} alt=''></img>
            <div className="reason-card">
              <h3>Promoting Sustainability</h3>
              <p>Sustainability exists with knowledge and action. Through practical and risk management, we develop and foster our system to ensure that environmental reasonably impacting green living on value, accessible, and measurable.</p>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <h2>OUR JOURNEY</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year"></div>
              <div className="timeline-content">
                <h3>2023: Greenovate's inception</h3>
                <p>Associate with a variety of workplaces green education.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year"></div>
              <div className="timeline-content">
                <h3>2024: Launch of the Learning Platform</h3>
                <p>Limited for comprehensive skills, career updates and solutions to sustainability and resource.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year"></div>
              <div className="timeline-content">
                <h3>2025: Experience of Global Collaboration</h3>
                <p>Limited for excellence of global science to employees as much and impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="vision-and-mission">
          <div className="vm-container">
            <div className="vision-mision">
              <h2>VISION AND MISSION</h2>
              <img src={Fr} alt=''></img>
              <h4 className="vision">Our vision</h4>
              <p>A world where everyone has the knowledge and tools to contribute to a sustainable future</p>
              <p>We envision a global community actively engaged in green innovation, driving positive change fo the planet</p>
              <img src={Laptop} alt=''></img>
              <h4 className="mision">Our Mision</h4>
              <p>A world where everyone has the knowledge and tools to contribute to a sustainable future</p>
              <p>We envision a global community actively engaged in green innovation, driving positive change fo the planet</p>
            </div>
          </div>
        </section>
        
        <section className="collaborations">
          <div>
            <h2>GLOBAL COLLABORATIONS</h2>
            <img src={Startup} alt=''></img>
            <img src={Emerald} alt=''></img>
            <img src={Abstract} alt=''></img>
          </div>
        </section>
      </div>
      
      {/* Footer */}
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

export default About;