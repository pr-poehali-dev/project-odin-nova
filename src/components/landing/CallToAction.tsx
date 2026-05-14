import ContactFormButton from "./ContactFormButton"
import CowPattern from "./CowPattern"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-14 flex flex-col md:flex-row items-center min-h-[360px]">
        <div className="w-full md:w-3/5 z-10 relative">
          <h2 className="text-black dark:text-white mb-4 text-3xl md:text-4xl font-bold leading-tight">
            Начните защищать <span className="text-[#2ECC71]">стадо</span> уже сейчас
          </h2>
          <p className="mb-5 text-base max-w-md text-gray-700 dark:text-gray-300 leading-relaxed">
            Оставьте заявку — наш менеджер свяжется с вами в течение рабочего дня, проведёт бесплатную консультацию и подготовит расчёт для вашего хозяйства.
          </p>
          <div className="flex flex-col gap-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <div>📧 ivanovTailTrail@gmail.com</div>
            <div>💬 Telegram: @whitecow</div>
            <div>📞 +7 909 345 11 89 — Иван Иванов</div>
          </div>
          <ContactFormButton />
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
