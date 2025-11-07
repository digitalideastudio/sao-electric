import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

// Carousel component for project images
function ProjectCarousel({ images, projectTitle }: { images: string[]; projectTitle: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Pre-load first image
  const [validImages, setValidImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize valid images
  useEffect(() => {
    setValidImages(images);
    setCurrentIndex(0);
    setLoadedImages(new Set([0]));
    setFailedImages(new Set());
  }, [images]);

  // Ensure currentIndex always points to a valid image
  useEffect(() => {
    if (validImages.length > 0 && failedImages.has(currentIndex)) {
      // Find next valid image
      const nextValid = validImages.findIndex((_, i) => !failedImages.has(i));
      if (nextValid !== -1) {
        setCurrentIndex(nextValid);
      }
    }
  }, [currentIndex, validImages, failedImages]);

  // Handle image load errors
  const handleImageError = (index: number) => {
    setFailedImages(prev => {
      const newFailed = new Set([...prev, index]);
      
      // If current image failed, move to next valid one
      if (index === currentIndex) {
        // Try next valid image
        let nextValid = validImages.findIndex((_, i) => i > index && !newFailed.has(i));
        if (nextValid === -1) {
          // Try previous valid image
          nextValid = [...validImages.keys()].reverse().find(i => i < index && !newFailed.has(i)) ?? -1;
        }
        if (nextValid !== -1) {
          setCurrentIndex(nextValid);
        }
      }
      
      return newFailed;
    });
  };

  // Preload adjacent images
  useEffect(() => {
    if (validImages.length === 0) return;
    
    const preloadIndices = [
      currentIndex - 1,
      currentIndex,
      currentIndex + 1
    ].filter(idx => idx >= 0 && idx < validImages.length);

    preloadIndices.forEach(idx => {
      if (!loadedImages.has(idx)) {
        const img = new Image();
        img.src = validImages[idx];
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, idx]));
        };
      }
    });
  }, [currentIndex, validImages, loadedImages]);

  const handlePrevious = () => {
    if (validImages.length === 0) return;
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = validImages.length - 1;
    
    // Skip failed images
    while (failedImages.has(newIndex) && newIndex !== currentIndex) {
      newIndex = newIndex - 1;
      if (newIndex < 0) newIndex = validImages.length - 1;
    }
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    if (validImages.length === 0) return;
    let newIndex = currentIndex + 1;
    if (newIndex >= validImages.length) newIndex = 0;
    
    // Skip failed images
    while (failedImages.has(newIndex) && newIndex !== currentIndex) {
      newIndex = newIndex + 1;
      if (newIndex >= validImages.length) newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext(); // Swipe left -> next
    }
    if (distance < -minSwipeDistance) {
      handlePrevious(); // Swipe right -> previous
    }
  };

  if (validImages.length === 0) {
    return (
      <div className="relative aspect-video bg-light-gray dark:bg-slate-700 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
        <div className="text-slate-gray">Завантаження...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col" ref={carouselRef}>
      {/* Main Image Container - Bigger on mobile */}
      <div className="relative min-h-[60vh] md:min-h-0 md:aspect-video bg-light-gray dark:bg-slate-700 rounded-lg overflow-hidden">
        {validImages.map((imageSrc, index) => {
          if (failedImages.has(index)) return null;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {loadedImages.has(index) || index === currentIndex ? (
                <img
                  src={imageSrc}
                  alt={`${projectTitle} - фото ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading={index === currentIndex ? 'eager' : 'lazy'}
                  onError={() => handleImageError(index)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-pulse text-slate-gray">Завантаження...</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {validImages.length - failedImages.size > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 active:bg-black/90 text-white rounded-full p-2.5 md:p-2 z-20 transition-all touch-manipulation"
            aria-label="Previous image"
          >
            <svg className="w-7 h-7 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 active:bg-black/90 text-white rounded-full p-2.5 md:p-2 z-20 transition-all touch-manipulation"
            aria-label="Next image"
          >
            <svg className="w-7 h-7 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {validImages.length > 1 && validImages.length - failedImages.size > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {validImages.map((_, index) => {
            if (failedImages.has(index)) return null;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full touch-manipulation ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-electric-blue'
                    : 'w-2 h-2 bg-slate-gray hover:bg-slate-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            );
          })}
        </div>
      )}

      {/* Image Counter */}
      {(() => {
        // Get all valid image indices (excluding failed ones)
        const validIndices = validImages.map((_, i) => i).filter(i => !failedImages.has(i));
        const validCount = validIndices.length;
        const currentPositionIndex = validIndices.indexOf(currentIndex);
        const currentPosition = currentPositionIndex >= 0 ? currentPositionIndex + 1 : 1;
        
        return validCount > 1 ? (
          <div className="text-center mt-2 text-sm text-slate-gray dark:text-slate-300">
            {currentPosition} / {validCount}
          </div>
        ) : null;
      })()}
    </div>
  );
}

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
      description: "Повний електричний монтаж для 5-поверхового офісного будинку, включаючи LED освітлення, розподіл потужності та системи «Розумного Будинку».",
      imageCount: 5 // Optional: specify number of additional images. If not set, will try up to 12 images
    },
    {
      image: "/assets/project-2.jpg",
      title: "Розкішний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Гірські будинки на Драгобраті",
      year: "2024",
      description: "Повний електричний ремонт та заміна електричного панелі для 6,000 кв. футів розкішного житлового будинку з інтеграцією системи «Розумного Будинку».",
      imageCount: 5
    },
    {
      image: "/assets/project-3.jpg",
      title: "Виробничі об'єкти",
      category: "Промисловий",
      categoryColor: "bg-purple-light text-purple-dark",
      location: "Промисловий парк",
      year: "2023",
      description: "Високовольтний електричний монтаж для виробничого обладнання та розподілу потужності по всьому виробничому комплексу.",
      imageCount: 5
    },
    {
      image: "/assets/project-4.jpg",
      title: "Оновлення торгового центру",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Торговий район",
      year: "2023",
      description: "Електрична інфраструктура оновлення для 20-поверхового торгового центру, включаючи енергоефективне освітлення та системи розподілу потужності.",
      imageCount: 5
    },
    {
      image: "/assets/project-5.jpg",
      title: "Розумний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Суб'єктна громада",
      year: "2024",
      description: "Повний електричний системі «Розумного Будинку».",
      imageCount: 5
    },
    {
      image: "/assets/project-6.jpg",
      title: "Освітлення магазину одягу",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Магазин одягу",
      year: "2023",
      description: "Освітлення магазину одягу, що гарантує безперервне електропостачання.",
      imageCount: 5
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
          className="fixed inset-0 bg-black/80 z-50 flex items-start md:items-center justify-center p-0 md:p-4 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
          onTouchStart={(e) => {
            // Allow closing on backdrop touch
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="relative max-w-6xl w-full min-h-full md:min-h-0 md:h-auto md:my-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedProject(null);
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedProject(null);
              }}
              className="fixed top-3 right-3 md:absolute md:top-4 md:right-4 md:-top-12 md:right-0 text-white hover:text-gray-300 active:text-gray-400 transition-colors cursor-pointer z-[60] p-2 md:p-2 touch-manipulation bg-black/50 md:bg-transparent rounded-full md:rounded-none backdrop-blur-sm md:backdrop-blur-none"
              aria-label="Close modal"
              type="button"
            >
              <svg className="w-6 h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white dark:bg-slate-800 rounded-none md:rounded-lg overflow-hidden shadow-2xl min-h-full md:min-h-0 md:h-auto flex flex-col">
              <div className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <span className={`${projects[selectedProject].categoryColor} px-3 py-1 rounded-lg text-xs font-medium w-fit`}>
                    {projects[selectedProject].category}
                  </span>
                  <h3 className="text-xl md:text-heading-2 font-bold text-slate-dark dark:text-white">{projects[selectedProject].title}</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-body-sm text-slate-gray dark:text-slate-300">
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
                
                {/* Image Carousel - Takes more space on mobile */}
                <div className="mb-3 md:mb-4">
                  {(() => {
                    const currentProject = projects[selectedProject];
                    const projectIndex = selectedProject + 1;
                    const maxImages = currentProject.imageCount || 12;
                    
                    // Build array of all image URLs (main + additional)
                    // imageCount specifies number of additional images
                    // If imageCount=5, we want 5 additional images: 2, 3, 4, 5, 6
                    const allImages: string[] = [currentProject.image];
                    
                    // Add additional images: project-X-2.jpg through project-X-(imageCount+1).jpg
                    // Loop from 2 to (imageCount + 1) to get exactly imageCount additional images
                    for (let i = 2; i <= maxImages + 1; i++) {
                      allImages.push(`/assets/project-${projectIndex}-${i}.jpg`);
                    }
                    
                    return (
                      <ProjectCarousel 
                        images={allImages} 
                        projectTitle={currentProject.title}
                      />
                    );
                  })()}
                </div>
                
                {/* Description annotation */}
                <div className="mt-3 md:mt-4 p-3 md:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-border-gray dark:border-slate-600">
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
