import TeamMember from './TeamMember';
import CertificatesGallery from './CertificatesGallery';

export default function Team() {
  const teamMembers = [
    {
      image: "/assets/team-member-1.png",
      name: "Сергій",
      role: "Електромонтажник",
      experience: "10+ років досвіду",
      description: "Спеціалізується на житлових та комерційних електротехнічних системах."
    },
    {
      image: "/assets/team-member-2.png",
      name: "Олександр",
      role: "Інженер систем автоматизації",
      experience: "5+ років досвіду",
      description: "Спеціалізується на промислових електротехнічних системах та складних електротехнічних системах."
    },
    {
      image: "/assets/team-member-3.png",
      name: "Володимир",
      role: "Програміст",
      experience: "5+ років досвіду",
      description: "Спеціалізується на програмуванні електротехнічних систем та складних електротехнічних системах."
    }
  ];

  return (
    <section id="team" className="py-16 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Наша команда</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
          Над кожним проєктом працюють <span className="text-electric-blue">сертифіковані фахівці</span> — електромонтажники, інженери систем автоматизації та програмісти.
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
      
      {/* Certificates Gallery */}
      <CertificatesGallery />
    </section>
  );
}
