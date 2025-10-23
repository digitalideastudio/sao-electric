import ServiceCard from './ServiceCard';

export default function Services() {
  const starIcon = (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const services = [
    {
      icon: starIcon,
      title: "Residential Electrical",
      description: "Complete home electrical services including wiring, outlets, lighting, and panel upgrades.",
      features: ["Home Wiring", "Outlet Installation", "Lighting Design", "Panel Upgrades"]
    },
    {
      icon: starIcon,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for offices, retail spaces, and commercial buildings.",
      features: ["Office Wiring", "Emergency Lighting", "Data Cabling", "Security Systems"]
    },
    {
      icon: starIcon,
      title: "Industrial Electrical",
      description: "Heavy-duty electrical installations for manufacturing and industrial facilities.",
      features: ["Motor Controls", "Power Distribution", "Equipment Wiring", "Maintenance"]
    },
    {
      icon: starIcon,
      title: "Emergency Services",
      description: "24/7 emergency electrical repairs and troubleshooting for urgent situations.",
      features: ["Power Outages", "Electrical Faults", "Emergency Repairs", "24/7 Support"]
    },
    {
      icon: starIcon,
      title: "LED Lighting",
      description: "Energy-efficient LED lighting solutions for all types of properties.",
      features: ["LED Conversion", "Smart Lighting", "Landscape Lighting", "Energy Savings"]
    },
    {
      icon: starIcon,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections and code compliance services.",
      features: ["Code Compliance", "Safety Audits", "Inspection Reports", "Certification"]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-slate-50/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Our Electrical Services</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
            We offer comprehensive electrical services for residential, commercial, and industrial clients with a focus on safety, quality, and reliability.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
