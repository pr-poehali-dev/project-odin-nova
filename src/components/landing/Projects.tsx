import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "agro-holding-sibir",
    title: "Агрохолдинг «Сибирь»",
    shortDescription: "Внедрение мониторинга 1 200 голов КРС. Снижение падежа на 34% за первые 6 месяцев работы системы.",
    mainImage: "https://cdn.poehali.dev/projects/a14c5cf7-de79-4bc2-8029-ff07f52b6a88/files/804a801f-b409-4068-bb0e-e7bf2dc4bf36.jpg",
  },
  {
    id: 2,
    slug: "moloko-don",
    title: "МТК «Молоко Дона»",
    shortDescription: "Автоматический контроль воспроизводства: выявляемость охоты выросла с 58% до 91%. +220 телят в год.",
    mainImage: "https://cdn.poehali.dev/projects/a14c5cf7-de79-4bc2-8029-ff07f52b6a88/files/db12cf3d-af01-4139-9339-0fb40d0fadc1.jpg",
  },
  {
    id: 3,
    slug: "ferma-privolzhye",
    title: "Ферма «Приволжье»",
    shortDescription: "GPS-геозоны и тревожные оповещения для пастбищного стада 800 голов. Потери скота сведены к нулю.",
    mainImage: "https://cdn.poehali.dev/projects/a14c5cf7-de79-4bc2-8029-ff07f52b6a88/files/98f9ae5d-d792-4fb1-8fed-c4e5743f61e2.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Реальные результаты
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">наших клиентов</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        От малых фермерских хозяйств до крупных агрохолдингов — TailTrail работает в любом масштабе и даёт измеримый результат уже в первый сезон.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Подробнее{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Получить демо
        </a>
      </div>
    </section>
  )
}
