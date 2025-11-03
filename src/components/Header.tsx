import { useState, useEffect } from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [selectedSection, setSelectedSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Update selected section based on scroll position
  useEffect(() => {
    const sections = ['about', 'services', 'team', 'projects']; // Only radio button sections
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setSelectedSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border-gray sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/assets/sao_electric.svg" 
              alt="SAO Electric" 
              className="h-10 md:h-13 w-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="radio-container">
              <input
                checked={selectedSection === 'about'}
                onChange={(e) => e.target.checked && scrollToSection('about')}
                id="radio-about"
                name="radio-nav"
                type="radio"
                value="about"
              />
              <label htmlFor="radio-about" className="text-body">Про нас</label>
              
              <input
                checked={selectedSection === 'services'}
                onChange={(e) => e.target.checked && scrollToSection('services')}
                id="radio-services"
                name="radio-nav"
                type="radio"
                value="services"
              />
              <label htmlFor="radio-services" className="text-body">Наші послуги</label>
              
              <input
                checked={selectedSection === 'team'}
                onChange={(e) => e.target.checked && scrollToSection('team')}
                id="radio-team"
                name="radio-nav"
                type="radio"
                value="team"
              />
              <label htmlFor="radio-team" className="text-body">Наша команда</label>
              
              <input
                checked={selectedSection === 'projects'}
                onChange={(e) => e.target.checked && scrollToSection('projects')}
                id="radio-projects"
                name="radio-nav"
                type="radio"
                value="projects"
              />
              <label htmlFor="radio-projects" className="text-body">Нещодавні проекти</label>

              <div className="glider-container">
                <div className="glider"></div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('contact')} className="bg-electric-blue text-white px-4 py-2 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors cursor-pointer">Зв'язатися з нами</button>
            <input
              type="checkbox"
              className="theme-toggle"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
              aria-label="Toggle theme"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
