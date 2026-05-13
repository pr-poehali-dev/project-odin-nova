import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Как работают датчики TailTrail?",
    answer:
      "Датчик крепится на ухо или ошейник животного и непрерывно собирает данные: температура тела, шаги, жвачная активность, положение в пространстве. Данные передаются на платформу по защищённому каналу связи, и вы видите состояние каждой головы в личном кабинете в режиме реального времени.",
  },
  {
    id: 2,
    question: "Как быстро окупается система?",
    answer:
      "По данным наших клиентов, система окупается за 4–8 месяцев. Основная экономия достигается за счёт снижения падежа, своевременного лечения и роста выхода телят. Мы готовим персональный расчёт ROI для вашего хозяйства.",
  },
  {
    id: 3,
    question: "Подходит ли TailTrail для небольших ферм?",
    answer:
      "Да. Система масштабируется от 50 до 10 000+ голов. Мы предлагаем тарифы для хозяйств любого размера — вы платите только за подключённые датчики без скрытых сборов.",
  },
  {
    id: 4,
    question: "Нужен ли стабильный интернет на ферме?",
    answer:
      "Нет. Датчики работают по LoRaWAN — это энергоэффективный радиопротокол с дальностью до 15 км на открытой местности. Достаточно одного шлюза на хозяйство. Система работает даже при нестабильном интернете — данные накапливаются локально и синхронизируются при подключении.",
  },
  {
    id: 5,
    question: "Сколько времени занимает внедрение?",
    answer:
      "Базовое внедрение занимает 1–3 дня: установка шлюза, маркировка животных, настройка личного кабинета и обучение персонала. Мы приезжаем на ферму сами и берём все технические вопросы на себя.",
  },
  {
    id: 6,
    question: "Есть ли интеграция с существующими системами учёта?",
    answer:
      "Да. TailTrail интегрируется с популярными системами управления стадом (SelHoz, КЭДО, 1С-Агро и другими) через открытый API. Ваши данные остаются в привычном интерфейсе, а мы дополняем их аналитикой по здоровью.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#2ECC71] dark:text-[#2ECC71]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Всё, что вы хотели узнать о системе TailTrail до начала сотрудничества.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#2ECC71] dark:hover:text-[#2ECC71] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#2ECC71]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}