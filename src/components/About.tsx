import StatItem from './StatItem';

export default function About() {
  const lampIcon = (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
    </svg>
  );

  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-white dark:bg-black/20">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-full md:max-w-[600px]">
            <h2 className="text-2xl md:text-heading-2 font-bold text-slate-dark dark:text-white mb-4">Про SAO Electric</h2>
            <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 mb-4 font-bold">
            Електрика має бути непомітною, але ідеально працювати.
            </p>
            <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 mb-4">
            Маючи <span className="font-bold">понад 10 років досвіду</span> у сфері електрики, SAO Electric стала надійним партнером для житлових, комерційних та промислових об'єктів.            </p>
            <p className="text-sm md:text-body text-slate-gray dark:text-slate-300 mb-4">
            Наша команда <span className="font-semibold text-slate-gray dark:text-white">сертифікованих електриків</span> старанно забезпечує безпечні, надійні та ефективні електротехнічні рішення.
            Ми постійно стежимо за оновленнями стандартів і технологій, щоб кожен проєкт відповідав найвищим вимогам галузі.            </p>
            <p className="text-sm md:text-body text-slate-gray dark:text-slate-300">
            Від простих ремонтів до складних промислових систем — ми підходимо до кожного завдання з <span className="font-bold">професіоналізмом, увагою до деталей</span> та щирим прагненням до <span className="font-bold">задоволення клієнта</span>.            </p>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-full md:max-w-[600px] w-full">
            <img src="/assets/about-image.jpg" alt="Про SAO Electric" className="w-full h-[250px] md:h-[337px] object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem icon={lampIcon} value="100+" label="Успішно виконаних проєктів" />
          <StatItem icon={lampIcon} value="50+" label="Задоволених клієнтів" />
          <StatItem icon={lampIcon} value="10+" label="Років досвіду" />
          <StatItem icon={lampIcon} value="100%" label="Гарантія безпеки" />
        </div>
      </div>
    </section>
  );
}
