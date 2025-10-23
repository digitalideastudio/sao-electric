export default function Hero() {
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
    <section className="bg-gradient-to-br from-white to-blue-50/20 py-20 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="flex items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h1 className="text-hero font-bold text-slate-dark mb-6">
              Professional <span className="text-electric-blue">Electrical</span><br />
              Services You Can Trust
            </h1>
            
            <p className="text-body-lg text-slate-gray mb-6">
              From residential wiring to industrial installations, our certified electricians deliver safe, reliable, and efficient electrical solutions for all your needs.
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-body text-slate-dark">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-body text-slate-dark">24/7 Emergency Services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-body text-slate-dark">Free Estimates & Consultations</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="bg-electric-blue text-white px-6 py-3 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors">
                Get Free Estimate
              </button>
              <button onClick={() => scrollToSection('services')} className="border border-electric-blue text-electric-blue px-6 py-3 rounded-lg text-button font-medium hover:bg-electric-blue hover:text-white transition-colors">
                Our Services
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-[600px] relative">
            <img src="/assets/hero-image.png" alt="Professional Electrician" className="w-full h-[800px] object-cover rounded-lg shadow-2xl" />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-electric-blue text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
