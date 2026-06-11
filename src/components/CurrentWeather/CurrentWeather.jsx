import { useEffect, useState } from 'react';
import { getWeatherLabel } from "../../utils/weatherUtils";

export default function CurrentWeather({ cityName, currentWeatherData }) {
  const temp = currentWeatherData.temperature_2m;
  const code = currentWeatherData.weathercode;
  const apparemtTemp = currentWeatherData.apparent_temperature;

  return (
    <section className="flex flex-col items-start mb-4">
      <div className="flex justify-center shadow-glass text-text-secondary  rounded-4xl items-center gap-2 px-4 py-2 bg-bg-wite mb-8">
        <svg viewBox="0 0 24 24" fill="none" width="30" height="30"><path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"></path><circle cx="12" cy="10" r="2.5" fill="#7b9bb0"></circle></svg>
        <p className="font-bold text-xl">{cityName}</p>
      </div>

      <div className="flex items-start flex-col gap-3 text-center mb-10 font-bold text-white">
        <p className="font-bold text-6xl">{temp}°</p>
        <p >{getWeatherLabel(code)}</p>
      </div>

      <div className="font-bold text-white">
        <p className="font-bold text-xs">체감온도 {apparemtTemp}°</p>
      </div>
    </section>
  )
}