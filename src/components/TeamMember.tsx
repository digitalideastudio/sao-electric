import { useState, useRef, useEffect } from 'react';
import Lamp from './Lamp';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  experience: string;
  description: string;
}

export default function TeamMember({ image, name, role, experience, description }: TeamMemberProps) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isActive]);

  return (
    <div 
      ref={cardRef}
      className="group relative overflow-visible w-full h-full flex flex-col"
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(!isActive);
      }}
    >
      {/* Lamp - only visible in dark theme on hover */}
      <Lamp />
      
      <div className="relative z-[1] bg-white dark:bg-slate-800 border border-border-gray dark:border-slate-700 rounded-xl overflow-hidden shadow-sm w-full h-full flex flex-col">
        <div className="relative h-64 flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className={`team-member-image w-full h-full object-cover transition-all duration-1000 ease-in-out ${isActive ? 'team-member-active' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-electric-blue/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {experience}
          </div>
        </div>
        <div className="p-6 text-center flex flex-col flex-grow">
          <h3 className="text-heading-3 font-semibold text-slate-dark dark:text-white mb-1">{name}</h3>
          <p className="text-body text-electric-blue dark:text-[#ff8800] dark:font-normal mb-3">{role}</p>
          <p className="text-body-sm text-slate-gray dark:text-slate-300 flex-grow">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
