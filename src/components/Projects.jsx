import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            description: 'A professional dashboard for managing sales, orders and inventory analytics.',
            tags: ['Next.js', 'Tailwind', 'Chart.js'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'TaskFlow App',
            description: 'Streamlined task management with real-time collaboration and dark mode.',
            tags: ['React', 'Node.js', 'MongoDB'],
            links: { github: '#', live: '#' },
            image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A collection of projects I've built that demonstrate my technical skills and problem-solving abilities.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="glass"
        style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <div style={{ height: '220px', overflow: 'hidden' }}>
            <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.links.github} aria-label="Github"><Github size={20} /></a>
                    <a href={project.links.live} aria-label="Live Demo"><ExternalLink size={20} /></a>
                </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                {project.description}
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {project.tags.map(tag => (
                    <span key={tag} style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: 600 }}>
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Projects;
