import { getDay } from "../../utils/weatherUtils";
import WeatherIcon from '../WeatherIcon/WeatherIcon';

export default function WeeklyItem({ time, maxTemp, minTemp, precipitation, weatherCode, isCurrent }) {
  const day = getDay(time);
  const flooredMaxTemp  = Math.floor(maxTemp);
  const flooredMinTemp  = Math.floor(minTemp);

  return (
    <li className={`flex items-center justify-between px-3 py-3 rounded-2xl ${isCurrent ? 'border-2 border-[#8bb6da] bg-[#DDF0FF]' : 'bg-white'}`}>
      <p className="w-8 text-sm font-black text-text-muted text-center">{isCurrent ? '오늘' : day}</p>

      <div className="flex items-center gap-1">
        <WeatherIcon code={weatherCode} size={20}></WeatherIcon>
        <span className="text-xs text-text-accent w-8">{precipitation}%</span>
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-text-primary w-8 text-right">{flooredMaxTemp}°</span>
        <span className="text-text-muted w-8 text-right">{flooredMinTemp}°</span>
      </div>
    </li>
  )
}
