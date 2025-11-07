export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 py-12 md:py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-full md:max-w-[600px]">
            <h1 className="text-3xl md:text-hero font-bold text-slate-dark dark:text-white mb-4 md:mb-6">
              S<span className="text-red">A</span>O <span className="text-electric-blue dark:font-normal">Electric</span><br />
              Ваша точка доступу <br/>  у світ смарт технологій
            </h1>
            
            <p className="text-base md:text-body-lg text-slate-gray dark:text-slate-300 mb-6">
            SAO Electric — це команда електриків, інженерів і автоматників, які створюють електросистеми нового покоління.
            <br/>Ми поєднуємо класичну електрику з сучасними технологіями «Розумного Дому», щоб кожен дім, офіс чи шоурум працював ефективно, безпечно й комфортно.
            <br/>Наша філософія проста: <span className="text-slate-gray dark:text-white font-bold">електрика має бути непомітною, але ідеально працювати</span>.
            <br/>Ми цінуємо чистий монтаж, продуману логіку керування й акуратність у кожній деталі — від кабелю до інтерфейсу на iPad.            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm md:text-body text-slate-dark dark:text-white">Сертифіковані майстри KNX, Hager, AJAX</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm md:text-body text-slate-dark dark:text-white">Акуратний монтаж та перевірена якість</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-electric-blue rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-sm md:text-body text-slate-dark dark:text-white">Індивідуальні рішення для кожного об'єкта</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-electric-blue text-white px-6 py-3 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors cursor-pointer">
              Підібрати рішення для мого дому
              </button>
              <button onClick={() => scrollToSection('services')} className="border border-electric-blue text-electric-blue dark:font-normal px-6 py-3 rounded-lg text-button font-medium hover:bg-electric-blue hover:text-white transition-colors cursor-pointer">
              Дізнатись більше
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1 max-w-full md:max-w-[600px] relative w-full">
            <img src="/assets/hero-image.jpg" alt="Професійний електрик" className="w-full h-[400px] md:h-[600px] lg:h-[800px] object-cover rounded-lg shadow-2xl" />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-electric-blue text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">років досвіду</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
