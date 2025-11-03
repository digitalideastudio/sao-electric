import ServiceCard from './ServiceCard';
import Lamp from './Lamp';

export default function Services() {
  const lampIcon = <Lamp />;

  const services = [
    {
      icon: lampIcon,
      title: "Електрика для житлових приміщень",
      description: "Повний спектр послуг з електрики для будинків, включаючи проводку, розетки, освітлення та оновлення щитків.",
      features: ["Проводка в будинку", "Встановлення розеток", "Дизайн освітлення", "Оновлення щитків"]
    },
    {
      icon: lampIcon,
      title: "Електрика для комерційних приміщень",
      description: "Професійні електричні рішення для офісів, торгових площ та комерційних будівель.",
      features: ["Офісна проводка", "Аварійне освітлення", "Кабельні системи", "Системи безпеки"]
    },
    {
      icon: lampIcon,
      title: "Промислова електрика",
      description: "Надійні електричні інсталяції для виробничих та промислових об'єктів.",
      features: ["Керування двигунами", "Розподіл енергії", "Проводка обладнання", "Обслуговування"]
    },
    {
      icon: lampIcon,
      title: "Аварійні послуги",
      description: "Кваліфікований аварійний ремонт електрики та усунення несправностей 24/7.",
      features: ["Відключення живлення", "Електричні несправності", "Аварійний ремонт", "Підтримка 24/7"]
    },
    {
      icon: lampIcon,
      title: "LED освітлення",
      description: "Енергоефективні LED рішення для всіх типів об'єктів.",
      features: ["Перехід на LED", "Розумне освітлення", "Ландшафтне освітлення", "Економія енергії"]
    },
    {
      icon: lampIcon,
      title: "Технічні огляди",
      description: "Комплексні перевірки електричної безпеки та відповідність стандартам.",
      features: ["Відповідність стандартам", "Аудит безпеки", "Звіти про огляди", "Сертифікація"]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-heading-2 font-bold text-slate-dark dark:text-white mb-4">Що ми пропонуємо</h2>
          <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 max-w-2xl mx-auto">
          Ми реалізуємо повний цикл робіт — від проєкту до запуску системи:          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
