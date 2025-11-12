import TeamMember from './TeamMember';
import CertificatesGallery from './CertificatesGallery';

export default function Team() {
  const teamMembers = [
    {
      image: "/assets/team-member-serhii.jpg",
      name: "Сергій",
      role: "Електромонтажник",
      experience: "10+ років досвіду",
      description: "Спеціалізується на житлових та комерційних електротехнічних системах."
    },
    {
      image: "/assets/team-member-nazar.jpg",
      name: "Назар",
      role: "Інженер систем автоматизації",
      experience: "5+ років досвіду",
      description: "Спеціалізується на промислових електротехнічних системах та складних електротехнічних системах."
    },
    {
      image: "/assets/team-member-eugene.jpg",
      name: "Євген",
      role: "Програміст",
      experience: "5+ років досвіду",
      description: "Спеціалізується на програмуванні електротехнічних систем та складних електротехнічних системах."
    }
  ];

  return (
    <section id="team" className="py-12 md:py-16 px-4 bg-white dark:bg-black/20 dark:backdrop-blur-xl">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-heading-2 font-bold text-slate-dark dark:text-white mb-4">Наша команда</h2>
          <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 max-w-2xl mx-auto">
          Над кожним проєктом працюють <span className="text-electric-blue dark:text-[#ff8800] dark:font-normal">сертифіковані фахівці</span> — електромонтажники, інженери систем автоматизації та програмісти.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-[143px] md:gap-8 md:gap-y-8 pt-[83px] md:pt-[60px] items-stretch">
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
