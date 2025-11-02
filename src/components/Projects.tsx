import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      image: "/assets/project-1.png",
      title: "Сучасний офіс",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Бізнес-центр",
      year: "2024",
      description: "Повний електричний монтаж для 5-поверхового офісного будинку, включаючи LED освітлення, розподіл потужності та системи «Розумного Будинку»."
    },
    {
      image: "/assets/project-2.png",
      title: "Розкішний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Гірські будинки на Драгобраті",
      year: "2024",
      description: "Повний електричний ремонт та заміна електричного панелі для 6,000 кв. футів розкішного житлового будинку з інтеграцією системи «Розумного Будинку»."
    },
    {
      image: "/assets/project-3.png",
      title: "Виробничі об'єкти",
      category: "Промисловий",
      categoryColor: "bg-purple-light text-purple-dark",
      location: "Промисловий парк",
      year: "2023",
      description: "Високовольтний електричний монтаж для виробничого обладнання та розподілу потужності по всьому виробничому комплексу."
    },
    {
      image: "/assets/project-4.png",
      title: "Оновлення торгового центру",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Торговий район",
      year: "2023",
      description: "Електрична інфраструктура оновлення для 20-поверхового торгового центру, включаючи енергоефективне освітлення та системи розподілу потужності."
    },
    {
      image: "/assets/project-5.png",
      title: "Розумний будинок",
      category: "Житловий",
      categoryColor: "bg-light-blue text-electric-blue",
      location: "Суб'єктна громада",
      year: "2024",
      description: "Повний електричний системі «Розумного Будинку»."
    },
    {
      image: "/assets/project-6.png",
      title: "Аварійна електропостачання лікарні",
      category: "Комерційний",
      categoryColor: "bg-green-light text-green-dark",
      location: "Лікарня",
      year: "2023",
      description: "Критичні аварійні системи електропостачання для лікарні, що гарантують безперервне електропостачання."
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Нещодавні проекти</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
            Подивіться на деякі з наших нещодавніх електричних проектів у житловому, комерційному та промисловому секторах.
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
