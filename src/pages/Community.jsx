import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ethanWario from '../assets/ethano.png';
import supenoSurja from '../assets/supeno.jpg';
import delimaSilalahi from '../assets/delima.jpg';
import silviAgusti from '../assets/aboutUs.png'; // Assuming this is Silvi's image
import instagramLogo from '../assets/instagram.svg';


const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Innovation", href: "/innovation" },
    { name: "Guide", href: "/guide" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
];

const initialCommunityPosts = [
    {
        author: "Delima Silalahi",
        role: "Innovator",
        time: "1 days ago",
        avatar: delimaSilalahi,
        title: "Sustainable Living Tips for Urban Dwellers",
        content: "Hey everyone! I wanted to share some tips on sustainable living that are perfect for those of us living in cities. It's all about making small changes that collectively have a big impact. For example, using reusable bags and containers for shopping, opting for public transport or cycling instead of driving, and reducing your meat consumption. Another great tip is to grow your own herbs or vegetables on your balcony or windowsill. These small steps can significantly reduce your environmental footprint. What are some of of your favorite sustainable practices? Let's share ideas and inspire each other!",
        likes: 105,
        comments: 30,
    },
    {
        author: "Budi Budiman",
        role: "Activist",
        time: "3 days ago",
        avatar: supenoSurja,
        title: "How Smart Energy Monitoring Changed My Habits",
        content: "Over the past few months, I have been experimenting with eco-friendly technology in my daily life, and one of the biggest changes I made was installing a smart energy monitoring system at home. It allows me to track which appliances consume the most electricity and shows me where I can cut back. I was surprised at how much energy I was wasting just by leaving devices on standby mode. By simply switching to LED bulbs and unplugging unused gadgets, my electricity bill dropped noticeably. What I love the most is that these small actions, supported by technology, don't just save money but also reduce my carbon footprint. It's a reminder that sustainable living doesn't always require drastic changes—sometimes it's the small, consistent habits that create the biggest impact.",
        likes: 200,
        comments: 128,
    },
    {
        author: "Silvi Agusti",
        role: "Educator",
        time: "4 days ago",
        avatar: silviAgusti,
        title: "Making Eco-Friendly Technology Accessible Easily",
        content: "To me, eco-friendly technology goes beyond innovation; it's about accessibility and inclusivity. I've worked with several communities in rural areas where access to clean water and electricity is still a challenge. What impressed me most were low-cost, solar-powered water filters that not only provide safe drinking water but also run sustainably without relying on expensive resources. These solutions show that technology doesn't have to be complicated to be impactful. When people see immediate improvements in their quality of life—like better health from clean water or more time saved from fetching water—they also become more open to embracing sustainability. My hope is that more developers and companies will focus on designing affordable technologies that can reach underprivileged communities. True sustainability should empower everyone, not just those who can afford it.",
        likes: 43,
        comments: 15,
    },
];

const topDiscussions = [
    "Sustainable Agriculture Practices",
    "Community Gardening Initiatives",
    "Eco-Friendly Product Design",
    "Renewable Energy Solutions",
    "Water Conservation and Management",
];

const featuredMembers = [
    { name: "Delima Silalahi", role: "Innovator", avatar: delimaSilalahi },
    { name: "Budi Budiman", role: "Activist", avatar: supenoSurja },
    { name: "Silvi Agusti", role: "Educator", avatar: silviAgusti },
];


const Community = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(initialCommunityPosts);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');

    const handlePost = () => {
        if (!newPostTitle.trim() || !newPostContent.trim()) {
            alert('Judul dan konten tidak boleh kosong!');
            return;
        }
        const newPost = {
            author: "Budi Budiman", // Bisa diganti sesuai user login
            role: "Activist",
            time: "Just now",
            avatar: supenoSurja,
            title: newPostTitle,
            content: newPostContent,
            likes: 0,
            comments: 0,
        };
        setPosts([newPost, ...posts]);
        setNewPostTitle('');
        setNewPostContent('');
    };

    return (
        <div style={{ fontFamily: 'Montserrat, sans-serif', background: '#f9fafb' }}>
            {/* Navbar */}
            <nav style={{ background: '#fff', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
                        <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        {navLinks.map(link => (
                            <Link key={link.name} to={link.href} style={{ color: link.name === 'Community' ? '#607C3C' : '#000', fontWeight: 500, fontSize: 16, textDecoration: 'none' }}>{link.name}</Link>
                        ))}
                        <Link to="/profile">
                            <img src={supenoSurja} alt="User Avatar" style={{ height: 40, width: 40, borderRadius: '50%' }} />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 1rem' }}>
                <header style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#111827' }}>COMMUNITY</h1>
                    <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>Join the conversation and collaborate with fellow innovators</p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Search */}
                        <div style={{ background: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20, color: '#9ca3af' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <input type="text" placeholder="Search any Topics" style={{ border: 'none', outline: 'none', marginLeft: '0.5rem', width: '100%', fontSize: '1rem' }} />
                        </div>

                        {/* Create Post */}
                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <img src={supenoSurja} alt="Budi Budiman" style={{ width: 48, height: 48, borderRadius: '50%' }} />
                                <div>
                                    <p style={{ fontWeight: 'bold', margin: 0 }}>Budi Budiman</p>
                                    <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem' }}>Activist</p>
                                </div>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Add title for your post" 
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', marginBottom: '1rem', fontSize: '1rem' }} 
                                value={newPostTitle}
                                onChange={e => setNewPostTitle(e.target.value)}
                            />
                            <textarea 
                                placeholder="Share your thoughts!" 
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', height: 80, marginBottom: '1rem', fontSize: '1rem', resize: 'none' }}
                                value={newPostContent}
                                onChange={e => setNewPostContent(e.target.value)}
                            ></textarea>
                            <button 
                                style={{ width: '100%', background: '#607C3C', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
                                onClick={handlePost}
                            >Post</button>
                        </div>

                        {/* Posts */}
                        {posts.map((post, index) => (
                            <div key={index} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <img src={post.avatar} alt={post.author} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                                    <div>
                                        <p style={{ fontWeight: 'bold', margin: 0 }}>{post.author}</p>
                                        <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem' }}>{post.role} | {post.time}</p>
                                    </div>
                                </div>
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{post.title}</h3>
                                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{post.content}</p>
                                <div style={{ display: 'flex', gap: '1.5rem', color: '#6b7280', marginTop: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                                        <span>{post.likes}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Top Discussions */}
                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem' }}>Top Discussions</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {topDiscussions.map((topic, index) => (
                                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{topic}</span>
                                        <span style={{ background: '#eef7e2', color: '#607C3C', borderRadius: '9999px', padding: '0.1rem 0.6rem', fontSize: '0.75rem', fontWeight: 'bold' }}>{Math.floor(Math.random() * 50) + 10}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Featured Members */}
                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem' }}>Featured Members</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {featuredMembers.map((member, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <img src={member.avatar} alt={member.name} style={{ width: 40, height: 40, borderRadius: '50%' }} />
                                        <div>
                                            <p style={{ fontWeight: 'bold', margin: 0 }}>{member.name}</p>
                                            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem' }}>{member.role}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ background: '#f0f2f0', color: '#4b5563', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <img src="/Logo.svg" alt="Greenovate Logo" style={{ height: 40 }} />
                            <span style={{ fontWeight: 700, fontSize: 22, color: '#000' }}>GREENOVATE</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/#about" style={{ color: '#4b5563', textDecoration: 'none' }}>About</Link></li>
                            <li><Link to="/innovation" style={{ color: '#4b5563', textDecoration: 'none' }}>Innovation</Link></li>
                            <li><Link to="/#guide" style={{ color: '#4b5563', textDecoration: 'none' }}>Guide</Link></li>
                            <li><Link to="/community" style={{ color: '#4b5563', textDecoration: 'none' }}>Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Social Media</h4>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram" style={{ height: 24, width: 24 }} />
                        </a>
                    </div>
                </div>
                <div style={{ maxWidth: 1200, margin: '3rem auto 0', textAlign: 'center', borderTop: '1px solid #d1d5db', paddingTop: '2rem' }}>
                    <p>©2025 GREENOVATE. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Community;
