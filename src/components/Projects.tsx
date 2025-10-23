import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      image: "/assets/project-1.png",
      title: "Modern Office Complex",
      category: "Commercial",
      categoryColor: "bg-green-light text-green-dark",
      location: "Downtown Business District",
      year: "2024",
      description: "Complete electrical installation for a 5-story office building including LED lighting, power distribution, and smart building systems."
    },
    {
      image: "/assets/project-2.png",
      title: "Luxury Home Electrical",
      category: "Residential",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Hillside Estates",
      year: "2024",
      description: "Full home rewiring and electrical panel upgrade for a 6,000 sq ft luxury residence with home automation integration."
    },
    {
      image: "/assets/project-3.png",
      title: "Manufacturing Facility",
      category: "Industrial",
      categoryColor: "bg-purple-light text-purple-dark",
      location: "Industrial Park",
      year: "2023",
      description: "High-voltage electrical installation for manufacturing equipment and facility-wide power distribution systems."
    },
    {
      image: "/assets/project-4.png",
      title: "Retail Center Upgrade",
      category: "Commercial",
      categoryColor: "bg-green-light text-green-dark",
      location: "Shopping District",
      year: "2023",
      description: "Electrical infrastructure upgrade for a 20-store retail center including energy-efficient lighting and power systems."
    },
    {
      image: "/assets/project-5.png",
      title: "Smart Home Installation",
      category: "Residential",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Suburban Community",
      year: "2024",
      description: "Complete smart home electrical system with automated lighting, security integration, and energy management."
    },
    {
      image: "/assets/project-6.png",
      title: "Hospital Emergency Power",
      category: "Commercial",
      categoryColor: "bg-green-light text-green-dark",
      location: "Medical Center",
      year: "2023",
      description: "Critical emergency power systems installation for hospital facility ensuring uninterrupted power supply."
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Recent Projects</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
            Take a look at some of our recent electrical projects across residential, commercial, and industrial sectors.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              categoryColor={project.categoryColor}
              location={project.location}
              year={project.year}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
