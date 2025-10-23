interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  experience: string;
  description: string;
}

export default function TeamMember({ image, name, role, experience, description }: TeamMemberProps) {
  return (
    <div className="bg-white border border-border-gray rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-electric-blue/80 text-white px-3 py-1 rounded-lg text-sm font-medium">
          {experience}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-heading-3 font-semibold text-slate-dark mb-1">{name}</h3>
        <p className="text-body text-electric-blue mb-3">{role}</p>
        <p className="text-body-sm text-slate-gray">
          {description}
        </p>
      </div>
    </div>
  );
}
