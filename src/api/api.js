export const getWeatherData = async (latitude, longitude) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current=temperature_2m,weathercode,apparent_temperature,windspeed_10m&timezone=Asia/Seoul&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max `
  )
  const weather = await res.json();

  return weather;
}

export const getCityData = async (latitude, longitude) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  )
  const geoData = await res.json();

  return geoData;
}

export const getAirQualityData = async (latitude, longitude) => {
  const res = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,pm2_5,uv_index&timezone=Asia/Seoul`
  )
  const data = await res.json();
  return data;
}