import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" id="about" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Hello! I'm Sayli, a developer who enjoys crafting things for the web. My journey in web development started with a curiosity for how things work on the internet, and since then, I've been dedicated to learning and building.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                I focus on creating clean, efficient, and user-friendly applications. I believe that good design is just as important as solid code, and I strive to find the perfect balance between the two.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and terminal discussions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Quick Facts</h3>
                        <ul style={{ display: 'grid', gap: '1rem' }}>
                            <FactItem label="Location" value="Kandivali, Mumbai" />

                            <FactItem label="Education" value="Computer Science with AIML" />
                            <FactItem label="Interests" value="AI, Web Design, UX, Data Analysis" />
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const FactItem = ({ label, value }) => (
    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
        <span style={{ fontWeight: 600 }}>{label}</span>
        <span style={{ color: 'var(--text-secondary)' }}>{value}</span>
    </li>
);

export default About;
