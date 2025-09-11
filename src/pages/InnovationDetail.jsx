import React from 'react';
import { Link, useParams } from 'react-router-dom';
import instagramLogo from '../assets/instagram.svg';
import solarImage from '../assets/innovation/solar.png';
import aisolaImage from '../assets/innovation/aisola.jpg';
import driveImage from '../assets/innovation/drive.jpg';


const innovationData = {
  id: 1,
  title: 'Solar Bloom',
  category: 'Solar Energy',
  subtitle: 'Harnessing the power of the sun with nature-inspired design and intelligent tracking',
  image: solarImage,
  description: "Solar Bloom is a revolutionary solar energy solution featuring flower-like panels that intelligently track the sun's movement throughout the day. This biomimicry-based design maximizes energy absorption by maintaining an optimal angle to the sun's rays. The sun-tracking mechanism utilizes advanced sensors and lightweight robotics to orient the 'petals,' resulting in a significant boost in energy generation efficiency compared to static panels. Beyond its technical prowess, Solar Bloom offers an aesthetic and harmonious integration into landscapes, making renewable energy beautiful.",
  impact: "By continuously tracking the sun, Solar Bloom achieves up to 30% more solar energy production than conventional fixed solar installations. This increased efficiency translates directly to a greater reduction in CO2 emissions, with each unit preventing an estimated 1.5 tons of CO2 from entering the atmosphere annually. Its unique design not only makes it highly effective but also serves as an educational tool, demonstrating the power of combining technology with nature's wisdom to create a sustainable future.",
};

const relatedInnovations = [
  { id: 7, title: 'Aisola', category: 'Solar Energy', description: 'Smart solar panels with tracking system that follows the sun.', image: aisolaImage },
  { id: 4, title: 'Eco Drive', category: 'Transportation', description: 'Electric vehicle charging stations powered by renewable energy.', image: driveImage },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Innovation", href: "/innovation" },
    { name: "Guide", href: "/#guide" },
    { name: "Community", href: "/#community" },
    { name: "Contact", href: "/#contact" },
];

const InnovationDetail = () => {


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
          </div>
          <img src="https://i.pravatar.cc/40?img=1" alt="User Avatar" style={{ height: 40, borderRadius: '50%' }} />
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '2rem 2rem 4rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '2rem', color: '#555', fontSize: '0.9rem' }}>
            <Link to="/innovation" style={{ color: '#607C3C', textDecoration: 'none' }}>Innovations</Link>
            <span>  </span>
            <span>{innovationData.category}</span>
            <span>  </span>
            <span>{innovationData.title}</span>
          </div>

          {/* Header */}
          <header style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 700, marginBottom: '0.5rem' }}>{innovationData.title}: The Future of Solar Energy</h1>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>{innovationData.subtitle}</p>
          </header>

          {/* Image */}
          <img src={innovationData.image} alt={innovationData.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '3rem' }} />

          {/* Description */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>Description</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555' }}>{innovationData.description}</p>
          </section>

          {/* Real World Impact */}
          <section>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>Real World Impact</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555' }}>{innovationData.impact}</p>
          </section>
        </div>
      </main>

      {/* Related Innovations */}
      <section style={{ background: '#f9fafb', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#333', textAlign: 'center', marginBottom: '3rem' }}>Related Innovations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
            {relatedInnovations.map(item => (
              <div key={item.id} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333' }}>{item.title}</h3>
                  <p style={{ color: '#607C3C', fontWeight: 600, margin: '0.25rem 0' }}>{item.category}</p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
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

export default InnovationDetail;
