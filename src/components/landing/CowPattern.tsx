interface CowPatternProps {
  className?: string
  opacity?: number
  color?: string
}

export default function CowPattern({ className = "", opacity = 1, color = "#2ECC71" }: CowPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 420"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
    >
      <rect width="800" height="420" fill="white" />
      {/* Пятна — точная копия паттерна с картинки */}
      <ellipse cx="90" cy="60" rx="55" ry="42" fill={color} />
      <ellipse cx="85" cy="100" rx="30" ry="22" fill={color} />
      <ellipse cx="50" cy="200" rx="48" ry="65" fill={color} />
      <ellipse cx="30" cy="320" rx="40" ry="52" fill={color} />
      <ellipse cx="80" cy="390" rx="55" ry="38" fill={color} />

      <ellipse cx="200" cy="30" rx="28" ry="18" fill={color} />
      <ellipse cx="220" cy="130" rx="38" ry="30" fill={color} />
      <ellipse cx="190" cy="250" rx="32" ry="24" fill={color} />
      <ellipse cx="230" cy="360" rx="42" ry="32" fill={color} />

      <ellipse cx="340" cy="70" rx="70" ry="90" fill={color} />
      <ellipse cx="380" cy="200" rx="55" ry="40" fill={color} />
      <ellipse cx="330" cy="320" rx="38" ry="55" fill={color} />
      <ellipse cx="370" cy="400" rx="50" ry="30" fill={color} />

      <ellipse cx="490" cy="40" rx="42" ry="28" fill={color} />
      <ellipse cx="510" cy="130" rx="28" ry="20" fill={color} />
      <ellipse cx="480" cy="240" rx="35" ry="48" fill={color} />
      <ellipse cx="510" cy="360" rx="30" ry="22" fill={color} />

      <ellipse cx="610" cy="80" rx="55" ry="70" fill={color} />
      <ellipse cx="640" cy="210" rx="44" ry="32" fill={color} />
      <ellipse cx="600" cy="330" rx="50" ry="38" fill={color} />
      <ellipse cx="630" cy="410" rx="38" ry="24" fill={color} />

      <ellipse cx="730" cy="40" rx="45" ry="35" fill={color} />
      <ellipse cx="760" cy="140" rx="30" ry="42" fill={color} />
      <ellipse cx="740" cy="260" rx="42" ry="28" fill={color} />
      <ellipse cx="780" cy="360" rx="35" ry="50" fill={color} />
      <ellipse cx="750" cy="415" rx="50" ry="28" fill={color} />
    </svg>
  )
}
