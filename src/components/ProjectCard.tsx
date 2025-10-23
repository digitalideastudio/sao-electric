interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  categoryColor: string;
  location: string;
  year: string;
  description: string;
}

export default function ProjectCard({ image, title, category, categoryColor, location, year, description }: ProjectCardProps) {
  return (
    <div className="bg-white border border-border-gray rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute top-4 left-4 ${categoryColor} px-3 py-1 rounded-lg text-xs font-medium`}>
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-heading-3 font-semibold text-slate-dark mb-3">{title}</h3>
        <div className="flex items-center gap-4 mb-3 text-body-sm text-slate-gray">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {location}
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            {year}
          </div>
        </div>
        <p className="text-body-sm text-slate-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
