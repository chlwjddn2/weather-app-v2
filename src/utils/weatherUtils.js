// 문장용 (CurrentWeather)
export const getWeatherText = (code) => {
  if (code === 0) return '맑은';
  if (code <= 3) return '구름 낀';
  if (code <= 48) return '안개 낀';
  if (code <= 55) return '이슬비 내리는';
  if (code <= 57) return '어는 이슬비 내리는';
  if (code <= 65) return '비 오는';
  if (code <= 67) return '비 오는';
  if (code <= 77) return '눈 오는';
  if (code <= 82) return '소나기 내리는';
  if (code <= 99) return '천둥번개 치는';
  return '';
}

// 단어용 (CurrentWeather)
export const getWeatherLabel = (code) => {
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

export const getPM10Label = (code) => {
  if (code <= 30) return '좋음';
  if (code <= 80) return '보통';
  if (code <= 150) return '나쁨';
  return '매우 나쁨';
}

export const getPM25Label = (code) => {
  if (code <= 15) return '좋음';
  if (code <= 35) return '보통';
  if (code <= 75) return '나쁨';
  return '매우 나쁨';
}

export const getPM10Percent = (value) => {
  return Math.min(Math.floor((value / 150) * 100), 100);
}

export const getPM25Percent = (value) => {
  return Math.min(Math.floor((value / 75) * 100), 100);
}

export const getDay = (dateStr) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(dateStr);
  return days[date.getDay()];
}