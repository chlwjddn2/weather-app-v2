import HourlyItem from './HourlyItem';
import { getWeatherText } from "../../utils/weatherUtils";

export default function HourlyWeather({ hourlyWeatherData }) {
  const times = hourlyWeatherData.time;
  const temps = hourlyWeatherData.temperature_2m;
  const codes = hourlyWeatherData.weathercode;
  
  const now = new Date();
  
  const filtered = times.reduce((acc, time, i) => {
    const itemTime = new Date(time);
    const diffHours = (itemTime - now) / (1000 * 60 * 60);
    if (diffHours >= -1 && diffHours <= 48) {
      acc.push({ time, temp: temps[i], weatherCode: codes[i] });
    }
    return acc;
  }, []);
  
  const currentWeatherCode = filtered[0].weatherCode;

  return (
    <section className="flex flex-col items-start gap-3 shadow-glass px-4 py-3 rounded-3xl bg-bg-wite border border-white/20 mb-8">
  
      <p className='font-bold text-text-accent'>현재는 {getWeatherText(currentWeatherCode)} 날씨가 예상돼요.</p>

      <ul className="flex items-center gap-3 overflow-x-auto w-full scroll-smooth snap-x snap-mandatory scrollbar-hide py-1 bg-bg-wite">
        {filtered.map((item) => (
          <HourlyItem key={item.time} time={item.time} temp={item.temp} weatherCode={item.weatherCode} />
        ))}
      </ul>
    </section>
  )
}