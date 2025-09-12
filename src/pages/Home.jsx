import ethanWario from '../assets/ethano.png';
import React, { useContext, useRef, useState } from "react";
import backgroundForest from '../assets/backgroundForest.jpg';
import aboutUsImg from '../assets/aboutUs.png';
import innovationsLogo from '../assets/innovationsLogo.svg';
import guidesLogo from '../assets/guidesLogo.svg';
import greenVideo from '../assets/greenVideo.mp4';

import supenoSurja from '../assets/supeno.jpg';
import delimaSilalahi from '../assets/delima.jpg';

import instagramLogo from '../assets/instagram.svg';

import communityLogo from '../assets/communityLogo.svg';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Innovation", href: "/innovation" },
  { name: "Guide", href: "#guide" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleJoinNow = () => {
    navigate('/login');
  };
  
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ fontFamily: 'Montserrat', background: '#f9fafb', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{ background: 'rgba(255,255,255,0.0)', padding: '2rem 0 1.5rem 0', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#fff', letterSpacing: 1 }}>GREENOVATE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} style={{ color: link.name === 'Home' ? '#e6ffb3' : '#fff', fontWeight: 500, fontSize: 16, textDecoration: 'none', position: 'relative' }}>{link.name}</Link>
            ))}
            {isLoggedIn ? (
              <Link to="/profile">
                <img 
                  src={supenoSurja} 
                  alt="User Avatar" 
                  style={{ height: 40, width: 40, borderRadius: '50%', cursor: 'pointer' }} 
                  title="Lihat profil"
                />
              </Link>
            ) : (
              <button onClick={handleJoinNow} style={{ marginLeft: 24, background: '#607C3C', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.5rem', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>Join Now</button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100vw', height: '100vh', background: `url(${backgroundForest}) center center / cover no-repeat`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.45)' }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
          <h1 style={{ color: '#fff', fontSize: 48, fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>LEARN TODAY, SUSTAIN TOMORROW</h1>
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 400, marginBottom: 32 }}>Empowering you to learn, connect and act sustainably for a greener future</p>
          <button style={{ background: '#fff', color: '#607C3C', border: 'none', borderRadius: 8, padding: '0.75rem 2.5rem', fontWeight: 600, fontSize: 18, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Explore Innovations</button>
        </div>
      </section>

      {/* Video Section */}
      <section style={{ width: '100%', background: '#f9fafb', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, width: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.07)', background: '#fff', position: 'relative' }}>
          <video 
            ref={videoRef}
            src={greenVideo} 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
            controls={isPlaying}
            preload="metadata"
          />
          {!isPlaying && (
            <button 
              onClick={toggleVideo}
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                background: 'rgba(255,255,255,0.85)', 
                border: 'none', 
                borderRadius: '50%', 
                width: 70, 
                height: 70, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                cursor: 'pointer', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)' 
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#607C3C"/>
                <polygon points="14,12 26,18 14,24" fill="#fff" />
              </svg>
            </button>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{ width: '100%', background: '#f3f7ed', padding: '3rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ color: '#607C3C', fontFamily: 'Montserrat', fontWeight: 600, fontSize: 28, marginBottom: 16 }}>ABOUT US</h2>
            <p style={{ color: '#222', fontFamily: 'Montserrat', fontWeight: 400, fontSize: 16, marginBottom: 24 }}>
              Greenovate is a digital education platform dedicated to fostering green innovation.<br />
              We empower individuals to learn, connect, and take sustainable actions, contributing to a healthier planet and a more sustainable future.
            </p>
            <button style={{ background: '#607C3C', color: '#fff', border: 'none', borderRadius: 8, padding: '0.6rem 1.5rem', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>View More</button>
          </div>
          <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: 352,
                height: 391,
                borderRadius: 15,
                background: `url(${aboutUsImg}) center/cover no-repeat`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section style={{ width: '100%', background: '#fff', padding: '3rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#607C3C', fontFamily: 'Montserrat', fontWeight: 600, fontSize: 28, marginBottom: 12 }}>KEY FEATURES</h2>
          <p style={{ color: '#222', fontFamily: 'Montserrat', fontWeight: 400, fontSize: 16, marginBottom: 32 }}>
            Discover how Greenovate empower you to learn, connect, and act sustainably
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#f9fafb', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem 1.5rem', minWidth: 200, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#eaeaea', borderRadius: 8, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <img src={innovationsLogo} alt="Innovations" style={{ width: 40, height: 40 }} />
              </div>
              <h3 style={{ color: '#607C3C', fontWeight: 600, fontSize: 18, marginBottom: 8, textAlign: 'center' }}>Innovations</h3>
              <p style={{ color: '#222', fontSize: 15, textAlign: 'center' }}>Explore cutting-edge green innovations and technologies</p>
            </div>
      
            <div style={{ background: '#f9fafb', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem 1.5rem', minWidth: 200, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#eaeaea', borderRadius: 8, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <img src={guidesLogo} alt="Guides" style={{ width: 40, height: 40 }} />
              </div>
              <h3 style={{ color: '#607C3C', fontWeight: 600, fontSize: 18, marginBottom: 8, textAlign: 'center' }}>Guides</h3>
              <p style={{ color: '#222', fontSize: 15, textAlign: 'center' }}>Access comprehensive guides and resources for sustainable living</p>
            </div>
            <div style={{ background: '#f9fafb', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '2rem 1.5rem', minWidth: 200, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ background: '#eaeaea', borderRadius: 8, width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <img src={communityLogo} alt="Community" style={{ width: 40, height: 40 }} />
              </div>
              <h3 style={{ color: '#607C3C', fontWeight: 600, fontSize: 18, marginBottom: 8, textAlign: 'center' }}>Community</h3>
              <p style={{ color: '#222', fontSize: 15, textAlign: 'center' }}>Connect with a community of like-minded individuals and experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Community Says Section */}
      <section style={{ width: '100%', background: '#f3f7ed', padding: '3rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#607C3C', fontFamily: 'Montserrat', fontWeight: 600, fontSize: 28, marginBottom: 12 }}>WHAT OUR COMMUNITY SAYS</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: 32 }}>
            {/* Testimonial Card 1 */}
            <div style={{ background: '#fff', borderRadius: 15, boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)', width: 372, height: 574, padding: '35px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
              <div style={{ width: 312, height: 504, borderRadius: 10, background: '#eaeaea', marginBottom: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={supenoSurja} alt="Supeno Surja" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ color: '#607C3C', fontWeight: 600, fontSize: 16, marginBottom: 6, textAlign: 'center' }}>Supeno Surja</h4>
              <p style={{ color: '#222', fontSize: 15, marginBottom: 0, textAlign: 'center' }}>
                "Greenovate is a game-changer in green education. Its innovate approach and community support are invaluable"
              </p>
            </div>
            {/* Testimonial Card 2 */}
            <div style={{ background: '#fff', borderRadius: 15, boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)', width: 372, height: 574, padding: '35px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
              <div style={{ width: 312, height: 504, borderRadius: 10, background: '#eaeaea', marginBottom: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={delimaSilalahi} alt="Delima Silalahi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ color: '#607C3C', fontWeight: 600, fontSize: 16, marginBottom: 6, textAlign: 'center' }}>Delima Silalahi</h4>
              <p style={{ color: '#222', fontSize: 15, marginBottom: 0, textAlign: 'center' }}>
                "The guides on Greenovate are incredibly practical and easy to follow. I've learned so much about sustainable living"
              </p>
            </div>
            {/* Testimonial Card 3 */}
            <div style={{ background: '#fff', borderRadius: 15, boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)', width: 372, height: 574, padding: '35px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
              <div style={{ width: 312, height: 504, borderRadius: 10, background: '#eaeaea', marginBottom: 16, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={ethanWario} alt="Ethano Warjo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ color: '#607C3C', fontWeight: 600, fontSize: 16, marginBottom: 6, textAlign: 'center' }}>Ethano Warjo</h4>
              <p style={{ color: '#222', fontSize: 15, marginBottom: 0, textAlign: 'center' }}>
                "I love the Greenovate community. It's inspiring to connect with others who are passionate about sustainability"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Update Section */}
      <section style={{ width: '100%', background: '#F7F7F7', padding: '4rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#607C3C', fontFamily: 'Montserrat', fontWeight: 600, fontSize: 28, marginBottom: 12 }}>STAY UPDATE WITH GREENOVATE</h2>
          <p style={{ color: '#222', fontFamily: 'Montserrat', fontWeight: 400, fontSize: 16, marginBottom: 32 }}>
            Subscribe to our newsletter for the latest news, innovations, and community updates.
          </p>
          <form style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 500, margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: '12px 16px',
                borderRadius: 8,
                border: '1px solid #c3d9b7',
                outline: 'none',
                fontSize: 16,
                background: '#fff',
                flex: 1,
              }}
            />
            <button
              type="submit"
              style={{
                background: '#607C3C',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 24px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: 16,
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #e0e0e0', padding: '40px 0 0 0', marginTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', padding: '0 32px' }}>
          {/* Logo & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/Logo.svg" alt="Greenovate Logo" style={{ width: 40, height: 40 }} />
            <span style={{ fontWeight: 700, fontSize: 22, color: '#5a7d3a', letterSpacing: 1 }}>GREENOVATE</span>
          </div>
          {/* Navigation */}
          <div style={{ minWidth: 180 }}>
            <h4 style={{ color: '#5a7d3a', fontWeight: 600, marginBottom: 10, fontSize: 16 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4d4d4d', fontSize: 15 }}>
              <li><a href="#about" style={{ color: '#4d4d4d', textDecoration: 'none' }}>About</a></li>
              <li><a href="#innovation" style={{ color: '#4d4d4d', textDecoration: 'none' }}>Innovation</a></li>
              <li><a href="#guide" style={{ color: '#4d4d4d', textDecoration: 'none' }}>Guide</a></li>
              <li><a href="#community" style={{ color: '#4d4d4d', textDecoration: 'none' }}>Community</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div style={{ minWidth: 180 }}>
            <h4 style={{ color: '#5a7d3a', fontWeight: 600, marginBottom: 10, fontSize: 16 }}>Social Media</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4d4d4d', textDecoration: 'none', fontSize: 22 }}>
              <img src={instagramLogo} alt="Instagram" style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} /> Instagram
            </a>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#7a7a7a', fontSize: 14, marginTop: 32, paddingBottom: 18 }}>
          ©2025 GREENOVATE. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Home;
