export default function WeeklyItem() {
  
  
  return (
    <li className="flex items-center justify-between py-2">
      <p className="w-8 text-sm font-black text-text-muted">월</p>

      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0">
          <path d="M6.5 14h10a4 4 0 0 0 .4-8 5 5 0 0 0-9.7 1.4A3.8 3.8 0 0 0 6.5 14Z" fill="#cfe3f2" stroke="#9cc3e3" strokeWidth="1.3" />
          <g stroke="#5aade6" strokeWidth="2" strokeLinecap="round">
            <path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3" />
          </g>
        </svg>
        <span className="text-xs text-text-accent w-8">30%</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-text-primary w-8 text-right">24°</span>
        <span className="text-text-muted w-8 text-right">15°</span>
      </div>
    </li>
  )
}
