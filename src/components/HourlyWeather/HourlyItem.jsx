import WeatherIcon from '../WeatherIcon/WeatherIcon';

export default function HourlyItem({ time, temp, weatherCode, isCurrent }) {
  const hour = new Date(time).getHours();
  
  return (
    <li className={`flex flex-col items-center gap-2 text-xs px-4 py-3 w-16 shrink-0 snap-center rounded-2xl  ${isCurrent ? 'border-2 border-[#8bb6da] bg-[#DDF0FF]' : 'bg-white'}`}>
      <p className="text-text-muted font-black">{hour}시</p>
      <WeatherIcon code={weatherCode} size={24}></WeatherIcon>
      <p className="font-semibold text-text-primary">{temp}°</p>
    </li>
  )
}
