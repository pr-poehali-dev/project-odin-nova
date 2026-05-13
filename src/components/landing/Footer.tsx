import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Logo from "./Logo"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="#" className="flex justify-center mb-4">
          <Logo />
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-2">
          Умная ферма — здоровое стадо. Носимые датчики и аналитическая платформа для контроля здоровья КРС.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          По вопросам сотрудничества: <a href="mailto:ivanovTailTrail@gmail.com" className="text-[#2ECC71] hover:underline">ivanovTailTrail@gmail.com</a>
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} TailTrail. Все права защищены.
        </p>
      </div>
    </footer>
  )
}