// src/components/WeatherIcon.jsx
export default function WeatherIcon({ code, size = 24 }) {
  // 맑음
  if (code === 0) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#f6c560"/>
      <g stroke="#f6c560" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>
      </g>
    </svg>
  )

  // 구름 조금
  if (code <= 2) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="10" r="4" fill="#f6c560"/>
      <g stroke="#f6c560" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 3v1.5M10 15.5V17M3 10h1.5M15.5 10H17M5 5l1 1M13.5 13.5l1 1M15 5l-1 1M6.5 13.5l-1 1"/>
      </g>
      <path d="M14 13a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8 4 4 0 0 1 7 0z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
    </svg>
  )

  // 흐림
  if (code <= 3) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 17a4 4 0 0 0 0-8 4 4 0 0 0-7.5-2A4 4 0 1 0 6 17h12z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
    </svg>
  )

  // 안개
  if (code <= 48) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10a4 4 0 0 0-7.5-2A4 4 0 1 0 6 16h12a4 4 0 0 0 0-8z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
      <g stroke="#7b9bb0" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 19h16M6 22h12"/>
      </g>
    </svg>
  )

  // 이슬비
  if (code <= 55) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10a4 4 0 0 0-7.5-2A4 4 0 1 0 6 16h12a4 4 0 0 0 0-8z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
      <g stroke="#7b9bb0" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 19l-1 3M12 19l-1 3M16 19l-1 3"/>
      </g>
    </svg>
  )

  // 비
  if (code <= 67) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10a4 4 0 0 0-7.5-2A4 4 0 1 0 6 16h12a4 4 0 0 0 0-8z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
      <g stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 19l-2 4M12 19l-2 4M16 19l-2 4"/>
      </g>
    </svg>
  )

  // 눈
  if (code <= 77) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10a4 4 0 0 0-7.5-2A4 4 0 1 0 6 16h12a4 4 0 0 0 0-8z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
      <g stroke="#7b9bb0" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 19l-1 2M12 19v2M16 19l1 2"/>
      </g>
      <g fill="#7b9bb0">
        <circle cx="7.5" cy="22" r="1"/>
        <circle cx="12" cy="22" r="1"/>
        <circle cx="16.5" cy="22" r="1"/>
      </g>
    </svg>
  )

  // 소나기
  if (code <= 82) return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="8" r="3" fill="#f6c560"/>
      <g stroke="#f6c560" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 2v1M10 13v1M4 8H3M17 8h-1M5.5 3.5l.7.7M13.8 11.8l.7.7M5.5 12.5l.7-.7"/>
      </g>
      <path d="M17 13a3.5 3.5 0 0 0-6.5-1.5A3.5 3.5 0 1 0 7 18h10a3.5 3.5 0 0 0 0-7z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"/>
      <g stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 21l-2 2M13 21l-2 2M17 21l-2 2"/>
      </g>
    </svg>
  )

  // 천둥번개
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 10a4 4 0 0 0-7.5-2A4 4 0 1 0 6 16h12a4 4 0 0 0 0-8z" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5"/>
      <path d="M13 12l-3 5h4l-3 5" stroke="#f6c560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}