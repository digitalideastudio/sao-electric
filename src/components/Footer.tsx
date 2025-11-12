export default function Footer() {
  return (
    <footer className="bg-[#c5d1f0] text-slate-700 dark:text-slate-800 py-8 md:py-12 px-4 shadow-[0_-3px_6px_0_rgba(0,0,0,0.2)] dark:shadow-[0_-3px_6px_0_rgba(255,255,255,0.5)]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/assets/sao_electric.svg" 
                alt="SAO Electric" 
                className="h-13 md:h-16 w-auto"
              />
            </div>
            <p className="text-body-sm text-slate-600 dark:text-slate-700 mb-4">
            Ваша точка доступу у світ смарт технологій
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-600 dark:text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+380997402730" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">+380 (99) 740 27 30</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-600 dark:text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:saoelectric.ua@gmail.com" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">saoelectric.ua@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-600 dark:text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-body-sm text-slate-600 dark:text-slate-700">вул. Січових Стрільців, 123</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-800">Наші послуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Електрика для житлових приміщень</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Електрика для комерційних приміщень</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Електромонтаж</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Системи "Розумного Дому"</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Відеонагляд</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Блискавкозахист</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-800">Швидкі посилання</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Про нас</a></li>
              <li><a href="#services" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Наші послуги</a></li>
              <li><a href="#projects" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Недавні проекти</a></li>
              <li><a href="#team" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Наша команда</a></li>
              <li><a href="#contact" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Зв'язатися з нами</a></li>
              <li><a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Аварійна служба</a></li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-800">Робочі години</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm text-slate-600 dark:text-slate-700">Пн-Пт:</span>
                <span className="text-body-sm text-slate-600 dark:text-slate-700">7:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-slate-600 dark:text-slate-700">Субота:</span>
                <span className="text-body-sm text-slate-600 dark:text-slate-700">Вихідний</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm text-slate-600 dark:text-slate-700">Неділя:</span>
                <span className="text-body-sm text-slate-600 dark:text-slate-700">Вихідний</span>
              </div>
            </div>
            <div className="mt-4 bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
              <p className="text-button font-medium mb-1 text-slate-900 dark:text-slate-800">24/7 аварійна служба доступна</p>
              <p className="text-xs text-slate-600 dark:text-slate-700">Викличте нас в будь-який час для електричних проблем</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border-gray dark:border-slate-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-slate-600 dark:text-slate-700">© 2025 SAO Electric. Всі права застережено.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Політика конфіденційності</a>
              <a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Умови обслуговування</a>
              <a href="#" className="text-body-sm text-slate-600 dark:text-slate-700 hover:text-slate-900 dark:hover:text-slate-900 transition-colors cursor-pointer">Інформація про ліцензію</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
