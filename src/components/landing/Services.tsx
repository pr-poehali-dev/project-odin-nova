import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Ранняя диагностика болезней",
    description: "Датчики фиксируют отклонения в температуре, активности и поведении животного задолго до появления видимых симптомов — вы получаете уведомление и успеваете вмешаться.",
    icon: "HeartPulse",
    color: "bg-[#2ECC71]",
  },
  {
    id: 2,
    title: "GPS-мониторинг и геозоны",
    description: "Отслеживайте местоположение каждой головы в реальном времени. Система мгновенно сигнализирует о выходе животного за пределы установленной зоны.",
    icon: "MapPin",
    color: "bg-[#2ECC71]",
  },
  {
    id: 3,
    title: "Контроль воспроизводства",
    description: "Алгоритмы платформы автоматически определяют охоту и оптимальное время для осеменения, повышая выход телят и снижая холостые циклы.",
    icon: "BarChart3",
    color: "bg-[#2ECC71]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Три ключевые проблемы,
        <span className="block text-[#2ECC71] dark:text-[#2ECC71]">которые мы решаем</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Точные данные с носимых датчиков и аналитическая платформа TailTrail повышают рентабельность и биобезопасность предприятия — без зависимости от человеческого фактора.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}