import WeeklyItem from './WeeklyItem'

export default function WeeklyWeather({ weeklyWeahterData }) {
  const maxTemps = weeklyWeahterData.temperature_2m_max;
  const minTemps = weeklyWeahterData.temperature_2m_min;
  const precipitations = weeklyWeahterData.precipitation_probability_max;
  const times = weeklyWeahterData.time;
  const codes = weeklyWeahterData.weathercode;

  return (
    <section className="flex flex-col gap-1 shadow-glass px-4 py-3 rounded-3xl bg-bg-wite border border-white/20 mb-8">
      <p className="font-bold text-text-accent mb-1">주간 예보</p>
      <ul className="flex flex-col w-full divide-y divide-white/30">
        {times.map((time, index) => (
          <WeeklyItem
            key={time}
            time={time}
            maxTemp={maxTemps[index]}
            minTemp={minTemps[index]}
            precipitation={precipitations[index]}
            weatherCode={codes[index]}
            isCurrent={index === 0}
          />
        ))}
      </ul>
    </section>
  )
}
