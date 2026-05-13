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

        <div className="hidden md:flex md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 items-center justify-center overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/a14c5cf7-de79-4bc2-8029-ff07f52b6a88/files/98f9ae5d-d792-4fb1-8fed-c4e5743f61e2.jpg"
            alt="TailTrail — здоровое стадо"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>
    </section>
  )
}