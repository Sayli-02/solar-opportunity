import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        padding: '3rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Sayli. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Built with React & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
