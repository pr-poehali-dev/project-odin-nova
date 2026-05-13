import ContactFormButton from "./ContactFormButton"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Начните защищать <span className="text-[#2ECC71] dark:text-[#2ECC71]">стадо</span> уже сейчас
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Оставьте заявку — наш менеджер свяжется с вами в течение рабочего дня, проведёт бесплатную консультацию и подготовит расчёт для вашего хозяйства.
          </p>
          <div className="flex flex-col gap-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <div>📧 ivanovTailTrail@gmail.com</div>
            <div>💬 Telegram: @whitecow</div>
            <div>📞 +7 909 345 11 89 — Иван Иванов, руководитель отдела продаж</div>
          </div>
          <div>
            <ContactFormButton />
          </div>
        </div>

        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <img
            src="/purple-circle-wave-static.png"
            alt="TailTrail"
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}