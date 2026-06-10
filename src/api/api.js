export const getWeatherData = async (latitude, longitude) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current=temperature_2m,weathercode,apparent_temperature&timezone=Asia/Seoul`
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