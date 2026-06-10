export default function HourlyItem({ time, temp, weatherCode }) {
  const hour = new Date(time).getHours();

  return (
    <li className="flex flex-col items-center gap-2 text-sm shadow-glass px-4 py-3 w-16 shrink-0 snap-center rounded-2xl border-white/20 shadow-glass">
      <p className="text-text-muted font-black">{hour}시</p>
      <svg className="hr-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#f6c560"></circle><g stroke="#f6c560" strokeWidth="2" strokeLinecap="round"><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"></path></g></svg>
      <p className="font-semibold text-text-primary">{temp}°</p>
    </li>

  )
}