import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
            transition: 'var(--transition)',
            background: isScrolled ? 'var(--glass-bg)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    SAYLI<span style={{ color: 'var(--accent-color)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="nav-link"
                                style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--accent-gradient)',
                                padding: '0.6rem 1.5rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}
                        >
                            Hire Me
                        </motion.a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', color: 'var(--text-primary)', display: 'none' }}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <style>{`
        .nav-link:hover { color: var(--text-primary) !important; }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
