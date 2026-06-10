import WeeklyItem from './WeeklyItem'

export default function WeeklyWeather() {
  return (
    <section className="flex flex-col gap-1 shadow-glass px-4 py-3 rounded-3xl bg-bg-wite border border-white/20 mb-8">
      <p className="font-bold text-text-accent mb-1">주간 예보</p>
      <ul className="flex flex-col w-full divide-y divide-white/30">
        <WeeklyItem />
        <WeeklyItem />
        <WeeklyItem />
        <WeeklyItem />
        <WeeklyItem />
        <WeeklyItem />
        <WeeklyItem />
      </ul>
    </section>
  )
}
