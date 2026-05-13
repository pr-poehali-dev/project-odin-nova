export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0" style={{ width: 40, height: 40 }}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <rect width="40" height="40" rx="10" fill="#2ECC71"/>
          <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="22">🐄</text>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-black dark:text-white tracking-tight">TailTrail</span>
        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-normal">Умная ферма — здоровое стадо</span>
      </div>
    </div>
  )
}

export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <rect width="40" height="40" rx="10" fill="#2ECC71"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="22">🐄</text>
    </svg>
  )
}
