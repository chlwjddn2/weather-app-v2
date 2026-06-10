export default function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full text-2xl">
          🌤
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide text-blue-400 text-shadow-2xl">Weather</h1>
        </div>
      </div>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20">
        🔍
      </button>
    </header>
  )
}