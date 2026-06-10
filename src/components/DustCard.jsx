const STATUS_STYLE = {
  좋음:     { text: 'text-text-accent',  bar: 'bg-text-accent' },
  보통:     { text: 'text-yellow-500',   bar: 'bg-yellow-500' },
  나쁨:     { text: 'text-orange-500',   bar: 'bg-orange-500' },
  매우나쁨: { text: 'text-red-500',      bar: 'bg-red-500' },
}

export default function DustCard({ label, status, value, percent }) {
  const { text, bar } = STATUS_STYLE[status]
  return (
    <div className="flex-1 flex flex-col gap-2 bg-white/30 rounded-2xl px-4 py-3">
      <p className="text-xs text-text-muted">{label}</p>
      <p className={`text-lg font-black ${text}`}>{status}</p>
      <div className="relative h-1.5 w-full rounded-full bg-white/50">
        <div className={`absolute left-0 top-0 h-full rounded-full ${bar}`} style={{ width: `${percent}%` }} />
      </div>
      <p className="text-xs text-text-muted">{value} μg/m³</p>
    </div>
  )
}