import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      image: "/assets/project-1.jpg",
      title: "Сучасний офіс",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Бізнес-центр",
      year: "2024",
      description: "Повний електричний монтаж для 5-поверхового офісного будинку, включаючи LED освітлення, розподіл потужності та системи «Розумного Будинку»."
    },
    {
      image: "/assets/project-2.jpg",
      title: "Розкішний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Гірські будинки на Драгобраті",
      year: "2024",
      description: "Повний електричний ремонт та заміна електричного панелі для 6,000 кв. футів розкішного житлового будинку з інтеграцією системи «Розумного Будинку»."
    },
    {
      image: "/assets/project-3.jpg",
      title: "Виробничі об'єкти",
      category: "Промисловий",
      categoryColor: "bg-purple-light text-purple-dark",
      location: "Промисловий парк",
      year: "2023",
      description: "Високовольтний електричний монтаж для виробничого обладнання та розподілу потужності по всьому виробничому комплексу."
    },
    {
      image: "/assets/project-4.jpg",
      title: "Оновлення торгового центру",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Торговий район",
      year: "2023",
      description: "Електрична інфраструктура оновлення для 20-поверхового торгового центру, включаючи енергоефективне освітлення та системи розподілу потужності."
    },
    {
      image: "/assets/project-5.jpg",
      title: "Розумний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Суб'єктна громада",
      year: "2024",
      description: "Повний електричний системі «Розумного Будинку»."
    },
    {
      image: "/assets/project-6.jpg",
      title: "Освітлення магазину одягу",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Магазин одягу",
      year: "2023",
      description: "Освітлення магазину одягу, що гарантує безперервне електропостачання."
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-heading-2 font-bold text-slate-dark dark:text-white mb-4">Нещодавні проекти</h2>
          <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 max-w-2xl mx-auto">
            Подивіться на деякі з наших нещодавніх електричних проектів у житловому, комерційному та промисловому секторах.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </div>

      {/* Project Gallery Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${projects[selectedProject].categoryColor} px-3 py-1 rounded-lg text-xs font-medium`}>
                    {projects[selectedProject].category}
                  </span>
                  <h3 className="text-heading-2 font-bold text-slate-dark dark:text-white">{projects[selectedProject].title}</h3>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-body-sm text-slate-gray dark:text-slate-300">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {projects[selectedProject].location}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                    {projects[selectedProject].year}
                  </div>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => {
                    // Try to load additional project images, fallback to main image
                    const imagePath = `/assets/project-${selectedProject + 1}-${num}.png`;
                    return (
                      <div key={num} className="relative aspect-square bg-light-gray dark:bg-slate-700 rounded-lg overflow-hidden group">
                        <img 
                          src={imagePath} 
                          alt={`${projects[selectedProject].title} - фото ${num}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to main project image if additional images don't exist
                            (e.target as HTMLImageElement).src = projects[selectedProject].image;
                          }}
                        />
                        {/* Image overlay with description on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                          <p className="text-sm text-white text-center">
                            {projects[selectedProject].description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Description annotation */}
                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-border-gray dark:border-slate-600">
                  <p className="text-sm md:text-body text-slate-gray dark:text-slate-300">
                    <span className="font-semibold text-slate-dark dark:text-white">Опис проєкту: </span>
                    {projects[selectedProject].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
