import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-flex items-center gap-2 bg-[#2ECC71]/10 text-[#2ECC71] text-sm font-medium px-3 py-1 rounded-full mb-4">
            🐄 Умная ферма — здоровое стадо
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Контроль здоровья
            <span className="block text-[#2ECC71] dark:text-[#2ECC71]">КРС в реальном</span>
            времени
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Носимые датчики + аналитическая платформа для отслеживания местоположения, активности и физического состояния каждого животного. Устраняем человеческий фактор и предотвращаем финансовые потери.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Как это работает
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">98%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">точность диагностики</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">24/7</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">мониторинг стада</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black dark:text-white">-30%</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">потерь от болезней</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="https://cdn.poehali.dev/projects/a14c5cf7-de79-4bc2-8029-ff07f52b6a88/files/804a801f-b409-4068-bb0e-e7bf2dc4bf36.jpg"
            alt="TailTrail — умная ферма"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}