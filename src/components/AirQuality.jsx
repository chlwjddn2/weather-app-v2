import DustCard from './DustCard'


export default function AirQuality() {
  return (
    <section className="flex flex-col gap-3 shadow-glass px-4 py-3 rounded-3xl bg-bg-wite border border-white/20">
      <p className="font-bold text-text-accent">대기질</p>
      <div className="flex gap-3">
        <DustCard label="미세먼지"   status="보통" value="43" percent={55} />
        <DustCard label="초미세먼지" status="좋음" value="18" percent={30} />
      </div>
    </section>
  )
}
