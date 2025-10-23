export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border-gray sticky top-0 z-50">
      <div className="max-w-[1359px] mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-electric-blue rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-dark">SAO Electric</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-body text-slate-dark hover:text-electric-blue transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-body text-slate-dark hover:text-electric-blue transition-colors">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-body text-slate-dark hover:text-electric-blue transition-colors">Team</button>
            <button onClick={() => scrollToSection('projects')} className="text-body text-slate-dark hover:text-electric-blue transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="bg-electric-blue text-white px-4 py-2 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors">Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
