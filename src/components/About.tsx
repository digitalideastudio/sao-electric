import StatItem from './StatItem';

export default function About() {
  const starIcon = (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="flex items-center gap-16 mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Про SAO Electric</h2>
            <p className="text-body-lg text-slate-gray mb-4">
            Маючи <span className="text-electric-blue">понад 10 років досвіду</span> у сфері електрики, SAO Electric стала надійним партнером для житлових, комерційних та промислових об’єктів.            </p>
            <p className="text-body text-slate-gray mb-4">
            Наша команда <span className="text-electric-blue">сертифікованих електриків</span> старанно забезпечує безпечні, надійні та ефективні електротехнічні рішення.
            Ми постійно стежимо за оновленнями стандартів і технологій, щоб кожен проєкт відповідав найвищим вимогам галузі.            </p>
            <p className="text-body text-slate-gray">
            Від простих ремонтів до складних промислових систем — ми підходимо до кожного завдання з <span className="text-electric-blue">професіоналізмом, увагою до деталей</span> та щирим прагненням до <span className="text-electric-blue">задоволення клієнта</span>.            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-[600px]">
            <img src="/assets/about-image.png" alt="Про SAO Electric" className="w-full h-[337px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-8">
          <StatItem icon={starIcon} value="100+" label="Успішно виконаних проєктів" />
          <StatItem icon={starIcon} value="50+" label="Задоволених клієнтів" />
          <StatItem icon={starIcon} value="10+" label="Років досвіду" />
          <StatItem icon={starIcon} value="100%" label="Гарантія безпеки" />
        </div>
      </div>
    </section>
  );
}
