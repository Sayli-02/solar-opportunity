import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Interested in working together or just want to say hi? Feel free to reach out through any of the channels below!
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Contact Information</h3>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <ContactInfoItem
                                icon={<Mail color="var(--accent-color)" />}
                                title="Email"
                                value="ksayli235@gmail.com"
                                href="mailto:hello@sayli.dev"
                            />
                            <ContactInfoItem
                                icon={<Phone color="var(--accent-color)" />}
                                title="Phone"
                                value="+91 7558236448"
                                href="tel:+15550000000"
                            />
                            <ContactInfoItem
                                icon={<MapPin color="var(--accent-color)" />}
                                title="Location"
                                value="Kandivali Mumbai, Maharashtra"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{ padding: '2.5rem' }}
                    >
                        <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Your Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows="5"
                                    style={{ ...inputStyle, resize: 'none' }}
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background: 'var(--accent-gradient)',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: 'var(--border-radius)',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    marginTop: '1rem'
                                }}
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactInfoItem = ({ icon, title, value, href }) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{title}</h4>
            {href ? (
                <a href={href} style={{ fontSize: '1.1rem', fontWeight: 600 }}>{value}</a>
            ) : (
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{value}</span>
            )}
        </div>
    </div>
);

const inputStyle = {
    background: 'var(--bg-accent)',
    border: '1px solid var(--glass-border)',
    borderRadius: '8px',
    padding: '0.8rem 1rem',
    color: 'var(--text-primary)',
    width: '100%',
    outline: 'none',
    fontSize: '1rem',
    transition: 'var(--transition)',
};

export default Contact;
