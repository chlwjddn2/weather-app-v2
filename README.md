# 날씨 앱

브라우저 위치 기반 실시간 날씨 정보를 제공하는 React 웹 앱입니다. 현재 날씨, 시간별/주간 예보, 대기질 정보를 한눈에 확인할 수 있으며, 도시 검색으로 전 세계 어디든 조회할 수 있습니다.

## 주요 기능

- **현재 날씨** — 기온, 날씨 상태, 체감 온도, 위치명 표시
- **시간별 예보** — 24시간 단위 기온 및 날씨 아이콘
- **주간 예보** — 7일 최고·최저 기온 및 강수 확률
- **대기질** — 미세먼지(PM10) · 초미세먼지(PM2.5) 수치 및 등급
- **도시 검색** — 전 세계 도시 검색 (디바운스 적용)
- **위치 자동 감지** — 브라우저 Geolocation API 사용, 거부 시 서울 기본값

## 기술 스택

| 분류 | 기술 |
|---|---|
| 프레임워크 | React 19 |
| 빌드 도구 | Vite 8 |
| 스타일링 | Tailwind CSS 4 |
| 날씨 API | [Open-Meteo](https://open-meteo.com/) (무료, API 키 불필요) |
| 대기질 API | [Open-Meteo Air Quality](https://air-quality-api.open-meteo.com/) |
| 지오코딩 | [Nominatim (OpenStreetMap)](https://nominatim.org/) |

## 시작하기

### 사전 요구사항

- Node.js 18 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:5173` 접속 후 위치 권한을 허용하면 현재 위치의 날씨를 불러옵니다.

### 빌드

```bash
npm run build
```

## 프로젝트 구조

```
src/
├── api/
│   └── api.js                 # Open-Meteo, Nominatim API 호출
├── components/
│   ├── Header/                # 헤더 및 검색 버튼
│   ├── CurrentWeather/        # 현재 날씨 카드
│   ├── HourlyWeather/         # 시간별 예보
│   ├── WeeklyWeather/         # 주간 예보
│   ├── AirQuality/            # 대기질 (미세먼지)
│   ├── WeatherIcon/           # 날씨 코드 → 아이콘 변환
│   └── SearchPanel/           # 도시 검색 슬라이드 패널
├── hooks/
│   └── useDragScroll.js       # 가로 스크롤 드래그 훅
├── utils/
│   └── weatherUtils.js        # 날씨 코드 · 대기질 라벨 유틸
└── App.jsx                    # 루트 컴포넌트, 데이터 페칭
```

## 사용 API

모든 API는 **무료이며 API 키가 필요 없습니다.**

| API | 용도 |
|---|---|
| `api.open-meteo.com/v1/forecast` | 현재 날씨, 시간별·주간 예보 |
| `air-quality-api.open-meteo.com/v1/air-quality` | PM10, PM2.5, UV 지수 |
| `nominatim.openstreetmap.org/reverse` | 좌표 → 도시명 변환 |
| `nominatim.openstreetmap.org/search` | 도시명 검색 |
