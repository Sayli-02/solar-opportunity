import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" id="home">
            <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span style={{
                        color: 'var(--accent-color)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Welcome to my portfolio
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Hi, I'm <span className="gradient-text">Sayli</span> <br />
                        I build digital experiences.
                    </h1>
                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        fontSize: '1.2rem'
                    }}>
                        A passionate full-stack developer specializing in building exceptional digital experiences that are functional, beautiful, and user-centric.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--accent-gradient)',
                                padding: '0.8rem 2rem',
                                borderRadius: '30px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 10px 20px -10px var(--accent-glow)'
                            }}
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.a>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <SocialIcon icon={<Github size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                            <SocialIcon icon={<Mail size={20} />} href="#" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-glow)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: -1,
                opacity: 0.3
            }}></div>
        </section>
    );
};

const SocialIcon = ({ icon, href }) => (
    <motion.a
        href={href}
        whileHover={{ y: -3, color: 'var(--accent-color)' }}
        className="glass"
        style={{
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%'
        }}
    >
        {icon}
    </motion.a>
);

export default Hero;
