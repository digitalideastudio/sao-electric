import TeamMember from './TeamMember';

export default function Team() {
  const teamMembers = [
    {
      image: "/assets/team-member-1.png",
      name: "Michael Johnson",
      role: "Master Electrician & Owner",
      experience: "15+ years",
      description: "Licensed master electrician with expertise in residential and commercial electrical systems."
    },
    {
      image: "/assets/team-member-2.png",
      name: "Sarah Davis",
      role: "Electrical Engineer",
      experience: "10+ years",
      description: "Specializes in industrial electrical design and complex electrical system planning."
    },
    {
      image: "/assets/team-member-3.png",
      name: "Robert Wilson",
      role: "Senior Electrician",
      experience: "12+ years",
      description: "Expert in electrical installations, maintenance, and emergency electrical services."
    }
  ];

  return (
    <section id="team" className="py-16 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Meet Our Expert Team</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
            Our certified electricians bring years of experience and expertise to every project, ensuring safe and reliable electrical solutions.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              experience={member.experience}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
