import { useEffect, useState } from 'react';

const weatherCodeText = (code) => {
  if (code === 0) return '맑음';
  if (code <= 3) return '구름 조금';
  if (code <= 48) return '안개';
  if (code <= 55) return '이슬비';
  if (code <= 57) return '어는 이슬비';
  if (code <= 65) return '비';
  if (code <= 67) return '어는 비';
  if (code <= 77) return '눈';
  if (code <= 82) return '소나기';
  if (code <= 99) return '천둥번개';
  return '';
}

export default function CurrentWeather({ cityName, currentWeatherData }) {
  const [currentWeatherCode, setWeatherCode] = useState('');
  const temp = currentWeatherData.temperature_2m;
  const code = currentWeatherData.weathercode;
  const apparemtTemp = currentWeatherData.apparent_temperature;

  return (
    <section className="flex flex-col items-start mb-4">
      <div className="flex justify-center shadow-glass text-text-secondary  rounded-4xl flex items-center gap-2 px-4 py-2 bg-bg-wite mb-8">
        <svg viewBox="0 0 24 24" fill="none" width="30" height="30"><path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" fill="#cfe3f2" stroke="#7b9bb0" strokeWidth="1.5"></path><circle cx="12" cy="10" r="2.5" fill="#7b9bb0"></circle></svg>
        <p className="font-bold text-xl">{cityName}</p>
      </div>

      <div className="flex items-start flex-col gap-3 text-center mb-10 font-bold text-white">
        <p className="font-bold text-6xl">{temp}°</p>
        <p >{weatherCodeText(code)}</p>
      </div>

      <div className="font-bold text-white">
        <p className="font-bold text-xs">체감온도 {apparemtTemp}°</p>
      </div>
    </section>
  )
}