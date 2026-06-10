import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import HourlyWeather from './components/HourlyWeather/HourlyWeather';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import AirQuality from './components/AirQuality/AirQuality';

import { useState, useEffect } from 'react';
import { getWeatherData, getCityData } from './api/api';

export default function App() {
  const [coords, setCoords] = useState(null);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    navigator.geolocation?.getCurrentPosition((postion) => {
      const { latitude, longitude } = postion.coords;
       setCoords({ latitude, longitude });
    }, (error) => {
      console.error('위치 권한 거부됨!!!');
      // 기본값 적용
      setCoords({ latitude: 37.5665, longitude: 126.9780 });
    });
  }

  const getCiyName = async () => {
    const city = await getCityData(coords.latitude, coords.longitude);
    
    setCityName(`${city.address.city || '' } ${city.address.quarter || city.address.city_district || ''}`);
  }

  const getWeather = async () => {
    const weather = await getWeatherData(coords.latitude, coords.longitude);
    setWeatherData(weather);
    setLoading(false);
  }

  // 1. 현재 위치 가져오기
  useEffect(() => {
    getCurrentLocation();
  }, [])

  // 2. 좌표 생기면 날씨 + 도시명 fetch
  useEffect(() => {
    if (!coords) return
    getCiyName();
    getWeather();
  }, [coords])

  if (loading) return <div className="min-h-screen sky-bg flex items-center justify-center">불러오는 중...</div>
  console.log(cityName);
  console.log(weatherData);

  return (
    <div className="min-h-screen sky-bg overflow-hidden">
      <div className="max-w-md mx-auto px-4 pt-4 pb-8">
        <Header ></Header>
        <CurrentWeather cityName={cityName} currentWeatherData={weatherData.current}></CurrentWeather>
        <HourlyWeather hourlyWeatherData={weatherData.hourly}></HourlyWeather>
        <WeeklyWeather></WeeklyWeather>
        <AirQuality></AirQuality>
      </div>
    </div>
  )
}
