import DustCard from './DustCard'
import { getPM10Label, getPM25Label, getPM10Percent, getPM25Percent } from "../../utils/weatherUtils";

export default function AirQuality({ airQualityData }) {
  const now = new Date();
  const times = airQualityData.time;
  const currentIndex = times.findIndex((time) => {
    const diff = (new Date(time) - now) / (1000 * 60 * 60);
    return diff >= -1 && diff <= 0;
  })
  const currentPM10 = Math.floor(airQualityData.pm10[currentIndex]);
  const currentPM25 = Math.floor(airQualityData.pm2_5[currentIndex]);

  return (
    <section className="flex flex-col gap-3 shadow-glass px-4 py-3 rounded-3xl bg-bg-wite border border-white/20">
      <p className="font-bold text-text-zaccent">대기질</p>
      <div className="flex gap-3">
        <DustCard label="미세먼지" status={getPM10Label(currentPM10)} value={currentPM10} percent={getPM10Percent(currentPM10)} />
        <DustCard label="초미세먼지" status={getPM25Label(currentPM25)} value={currentPM25} percent={getPM10Percent(currentPM25)} />
      </div>
    </section>
  )
}
