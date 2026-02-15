import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Layout, Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        { title: 'Frontend', icon: <Globe />, skills: ['HTML', 'CSS/TAILWIND', 'JAVASCRIPT', 'REACT'] },
        { title: 'Data Analysis', icon: <Server />, skills: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'] },
        { title: 'Design', icon: <Layout />, skills: ['Figma', 'UI/UX', 'Framer Motion', 'Responsive'] }
    ];

    return (
        <section className="section" id="skills">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        I've worked with a variety of technologies in the web development ecosystem. Here are some of my core competencies.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="glass"
                            style={{ padding: '2rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ color: 'var(--accent-color)' }}>{cat.icon}</div>
                                <h3 style={{ fontSize: '1.5rem' }}>{cat.title}</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        style={{
                                            background: 'var(--bg-accent)',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            border: '1px solid var(--glass-border)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
