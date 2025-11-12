import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Plasma from './components/Plasma';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Initialize theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    let shouldBeDark = false;
    
    if (saved === 'dark') {
      shouldBeDark = true;
    } else if (saved === 'light') {
      shouldBeDark = false;
    } else {
      // Default to light mode if no saved preference
      shouldBeDark = false;
    }
    
    setIsDark(shouldBeDark);
    const root = document.documentElement;
    if (shouldBeDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Update theme when isDark changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="font-inter bg-white dark:bg-transparent relative min-h-screen">
      {isDark && (
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
          <Plasma
            color="#8384D6"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>
      )}
      <div className="relative z-10">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Services />
        <Team />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
