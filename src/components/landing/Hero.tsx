import ContactFormButton from "./ContactFormButton"
import CowPattern from "./CowPattern"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-14 flex flex-col md:flex-row items-center min-h-[420px]">
        <div className="w-full md:w-3/5 z-10 relative">
          <div className="inline-flex items-center gap-2 bg-[#2ECC71]/10 text-[#2ECC71] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            🐄 Умная ферма — здоровое стадо
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
            Контроль здоровья
            <span className="block text-[#2ECC71]">КРС в реальном</span>
            времени
          </h1>
          <p className="my-6 text-base max-w-md text-gray-700 dark:text-gray-300 leading-relaxed">
            Носимые датчики + аналитическая платформа для отслеживания местоположения, активности и физического состояния каждого животного.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-[#2ECC71] dark:hover:text-[#2ECC71] transition-colors text-sm font-medium flex items-center gap-1">
              Как это работает →
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <div className="text-3xl font-bold text-black dark:text-white">98%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">точность диагностики</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black dark:text-white">24/7</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">мониторинг стада</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black dark:text-white">-30%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">потерь от болезней</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[42%] overflow-hidden rounded-r-3xl">
          <div className="absolute inset-0 bg-[#f0faf4] dark:bg-[#1a2e1a]" />
          <CowPattern className="absolute inset-0 w-full h-full" opacity={0.85} color="#2ECC71" />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-[#272829] to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
