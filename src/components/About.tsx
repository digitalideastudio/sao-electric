import StatItem from './StatItem';

export default function About() {
  const starIcon = (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="flex items-center gap-16 mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-heading-2 font-bold text-slate-dark mb-4">About SAO Electric</h2>
            <p className="text-body-lg text-slate-gray mb-4">
              With over 15 years of experience in the electrical industry, SAO Electric has become a trusted name for residential, commercial, and industrial electrical services.
            </p>
            <p className="text-body text-slate-gray mb-4">
              Our team of certified electricians is committed to providing safe, reliable, and efficient electrical solutions. We stay up-to-date with the latest electrical codes and technologies to ensure your projects are completed to the highest standards.
            </p>
            <p className="text-body text-slate-gray">
              From simple electrical repairs to complex industrial installations, we approach every project with professionalism, attention to detail, and a commitment to customer satisfaction.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-[600px]">
            <img src="/assets/about-image.png" alt="About SAO Electric" className="w-full h-[337px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-8">
          <StatItem icon={starIcon} value="500+" label="Projects Completed" />
          <StatItem icon={starIcon} value="200+" label="Happy Customers" />
          <StatItem icon={starIcon} value="15+" label="Years Experience" />
          <StatItem icon={starIcon} value="100%" label="Safety Record" />
        </div>
      </div>
    </section>
  );
}
