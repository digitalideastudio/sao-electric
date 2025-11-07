import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
  const [selectedSection, setSelectedSection] = useState('about');
  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<number | null>(null);
  const lockedSectionRef = useRef<string | null>(null);
  const gliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    // Clear any existing timeout
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    
    setSelectedSection(sectionId);
    isManualScrollRef.current = true;
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate target scroll position accounting for header height
      const headerHeight = 80; // Approximate header height
      const targetPosition = element.offsetTop - headerHeight;
      
      // Use window.scrollTo for more control, especially for last section
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Wait for scroll to complete by checking scroll position
      let checkCount = 0;
      const maxChecks = 40; // Maximum 4 seconds (40 * 100ms)
      
      const checkScrollComplete = () => {
        const currentPosition = window.scrollY;
        const distance = Math.abs(currentPosition - targetPosition);
        
        // If we're close to target (within 20px) or max checks reached, re-enable handler
        if (distance < 20 || checkCount >= maxChecks) {
          // Add a delay to ensure scroll handler doesn't interfere
          manualScrollTimeoutRef.current = window.setTimeout(() => {
            isManualScrollRef.current = false;
          }, 300);
        } else {
          checkCount++;
          manualScrollTimeoutRef.current = window.setTimeout(checkScrollComplete, 100);
        }
      };
      
      // Start checking after initial scroll delay
      manualScrollTimeoutRef.current = window.setTimeout(checkScrollComplete, 100);
    }
  };

  // Update selected section based on scroll position
  useEffect(() => {
    const sections = ['about', 'services', 'team', 'projects']; // Only radio button sections
    let scrollTimeout: number | null = null;
    let lastScrollTime = Date.now();
    let isScrolling = false;
    
    const updateSection = () => {
      if (isManualScrollRef.current) {
        return;
      }
      
      // Don't update if section is locked (during scrolling)
      if (lockedSectionRef.current !== null) {
        return;
      }
      
      const scrollPosition = window.scrollY;
      const headerOffset = 150; // Offset for header height
      
      // Find the section that we're currently viewing
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition + headerOffset >= sectionTop && scrollPosition < sectionBottom) {
            setSelectedSection((prev) => {
              // Only update if it's actually different
              if (prev !== sections[i]) {
                return sections[i];
              }
              return prev;
            });
            break;
          }
        }
      }
    };
    
    const handleScroll = () => {
      // Don't update section when user manually clicked a category
      if (isManualScrollRef.current) {
        return;
      }
      
      // Update last scroll time
      lastScrollTime = Date.now();
      
      // Lock the current section when scrolling starts
      if (!isScrolling) {
        isScrolling = true;
        // Lock to the current selected section to prevent changes
        setSelectedSection((current) => {
          lockedSectionRef.current = current;
          return current; // Keep it the same
        });
      }
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Only update section after scrolling has completely stopped for 300ms
      // This prevents jumping while continuously scrolling
      scrollTimeout = window.setTimeout(() => {
        const timeSinceLastScroll = Date.now() - lastScrollTime;
        // Double-check that scrolling has actually stopped
        if (timeSinceLastScroll >= 300) {
          isScrolling = false;
          lockedSectionRef.current = null; // Unlock the section
          updateSection();
        }
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Update glider position based on selected section
  useEffect(() => {
    const updateGlider = () => {
      if (!gliderRef.current || !containerRef.current) return;

      const labelId = `radio-${selectedSection}`;
      const label = document.querySelector(`label[for="${labelId}"]`) as HTMLElement;
      
      if (label) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const labelRect = label.getBoundingClientRect();
        
        const left = labelRect.left - containerRect.left;
        const width = labelRect.width;
        
        gliderRef.current.style.left = `${left}px`;
        gliderRef.current.style.width = `${width}px`;
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      updateGlider();
    });
    
    // Also update on window resize
    window.addEventListener('resize', updateGlider);
    
    return () => {
      window.removeEventListener('resize', updateGlider);
    };
  }, [selectedSection]);

  return (
    <header className="bg-[#c5d1f0]/65 backdrop-blur-sm border-b border-border-gray dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            <img 
              src="/assets/sao_electric.svg" 
              alt="SAO Electric" 
              className="h-14 md:h-20 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="radio-container" ref={containerRef}>
              <input
                checked={selectedSection === 'about'}
                onChange={(e) => e.target.checked && scrollToSection('about')}
                id="radio-about"
                name="radio-nav"
                type="radio"
                value="about"
              />
              <label htmlFor="radio-about" className="text-body text-slate-900 dark:text-slate-900">Про нас</label>
              
              <input
                checked={selectedSection === 'services'}
                onChange={(e) => e.target.checked && scrollToSection('services')}
                id="radio-services"
                name="radio-nav"
                type="radio"
                value="services"
              />
              <label htmlFor="radio-services" className="text-body text-slate-900 dark:text-slate-900">Наші послуги</label>
              
              <input
                checked={selectedSection === 'team'}
                onChange={(e) => e.target.checked && scrollToSection('team')}
                id="radio-team"
                name="radio-nav"
                type="radio"
                value="team"
              />
              <label htmlFor="radio-team" className="text-body text-slate-900 dark:text-slate-900">Наша команда</label>
              
              <input
                checked={selectedSection === 'projects'}
                onChange={(e) => e.target.checked && scrollToSection('projects')}
                id="radio-projects"
                name="radio-nav"
                type="radio"
                value="projects"
              />
              <label htmlFor="radio-projects" className="text-body text-slate-900 dark:text-slate-900">Нещодавні проекти</label>

              <div className="glider-container">
                <div className="glider" ref={gliderRef}></div>
              </div>
            </div>
            
            <button onClick={() => scrollToSection('contact')} className="bg-electric-blue text-white px-4 py-2 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors cursor-pointer flex-shrink-0">Зв'язатися з нами</button>
            <input
              type="checkbox"
              className="theme-toggle flex-shrink-0"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
              aria-label="Toggle theme"
            />
          </nav>

          {/* Mobile Navigation - Button and Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-electric-blue text-white px-3 py-2 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors cursor-pointer flex-shrink-0 text-sm"
            >
              Зв'язатись з нами
            </button>
            <input
              type="checkbox"
              className="theme-toggle flex-shrink-0"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
              aria-label="Toggle theme"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
