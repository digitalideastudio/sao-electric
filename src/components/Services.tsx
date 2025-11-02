import ServiceCard from './ServiceCard';

export default function Services() {
  const starIcon = (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const services = [
    {
      icon: starIcon,
      title: "Електрика для житлових приміщень",
      description: "Повний спектр послуг з електрики для будинків, включаючи проводку, розетки, освітлення та оновлення щитків.",
      features: ["Проводка в будинку", "Встановлення розеток", "Дизайн освітлення", "Оновлення щитків"]
    },
    {
      icon: starIcon,
      title: "Електрика для комерційних приміщень",
      description: "Професійні електричні рішення для офісів, торгових площ та комерційних будівель.",
      features: ["Офісна проводка", "Аварійне освітлення", "Кабельні системи", "Системи безпеки"]
    },
    {
      icon: starIcon,
      title: "Промислова електрика",
      description: "Надійні електричні інсталяції для виробничих та промислових об'єктів.",
      features: ["Керування двигунами", "Розподіл енергії", "Проводка обладнання", "Обслуговування"]
    },
    {
      icon: starIcon,
      title: "Аварійні послуги",
      description: "Кваліфікований аварійний ремонт електрики та усунення несправностей 24/7.",
      features: ["Відключення живлення", "Електричні несправності", "Аварійний ремонт", "Підтримка 24/7"]
    },
    {
      icon: starIcon,
      title: "LED освітлення",
      description: "Енергоефективні LED рішення для всіх типів об'єктів.",
      features: ["Перехід на LED", "Розумне освітлення", "Ландшафтне освітлення", "Економія енергії"]
    },
    {
      icon: starIcon,
      title: "Технічні огляди",
      description: "Комплексні перевірки електричної безпеки та відповідність стандартам.",
      features: ["Відповідність стандартам", "Аудит безпеки", "Звіти про огляди", "Сертифікація"]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-slate-50/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Що ми пропонуємо</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
          Ми реалізуємо повний цикл робіт — від проєкту до запуску системи:          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
