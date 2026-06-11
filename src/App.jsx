import Header from './components/Header/Header';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import HourlyWeather from './components/HourlyWeather/HourlyWeather';
import WeeklyWeather from './components/WeeklyWeather/WeeklyWeather';
import AirQuality from './components/AirQuality/AirQuality';;
import SearchPanel from './components/SearchPanel/SearchPanel';

import { useState, useEffect } from 'react';
import { getWeatherData, getCityData, getAirQualityData } from './api/api';

export default function App() {
  const [coords, setCoords] = useState(null);
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  

  const getCurrentLocation = () => {
    navigator.geolocation?.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    }, (error) => {
      console.error('위치 권한 거부됨!!!');
      // 기본값 적용
      setCoords({ latitude: 37.5665, longitude: 126.9780 });
    });
  }

  const getCityName = async () => {
    const city = await getCityData(coords.latitude, coords.longitude);
    setCityName(`${city.address.city || ''} ${city.address.quarter || city.address.city_district || ''}`);
  }

  const getWeather = async () => {
    const weather = await getWeatherData(coords.latitude, coords.longitude);
    setWeatherData(weather);
  }

  const getAirQuality = async () => {
    const airQuality = await getAirQualityData(coords.latitude, coords.longitude);
    setAirQualityData(airQuality);
  }

  const fetchAll = async () => {
    await Promise.all([getCityName(), getWeather(), getAirQuality()]);
    setLoading(false);
  };

  // 1. 현재 위치 가져오기
  useEffect(() => {
    getCurrentLocation();
  }, [])

  // 2. 좌표 생기면 날씨 + 도시명 fetch
  useEffect(() => {
    if (!coords) return;
    fetchAll();
  }, [coords])

  if (loading) return <div className="min-h-screen sky-bg flex items-center justify-center">불러오는 중...</div>
  console.log(weatherData);

  return (
    <div className="min-h-screen sky-bg">
      <div className="sticky top-0 z-10 max-w-md mx-auto px-4 py-4 backdrop-blur-sm">
        <Header onSearchOpen={() => setIsSearchOpen(true)} />
      </div>
      <div className="max-w-md mx-auto px-4 pb-8">
        <CurrentWeather cityName={cityName} currentWeatherData={weatherData.current} />
        <HourlyWeather hourlyWeatherData={weatherData.hourly} />
        <WeeklyWeather weeklyWeahterData={weatherData.daily} />
        <AirQuality airQualityData={airQualityData.hourly} />
      </div>
      <SearchPanel
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCity={({ latitude, longitude }) => {
          setLoading(true);
          setCoords({ latitude, longitude });
        }}
      />
      
    </div>

  )
}
