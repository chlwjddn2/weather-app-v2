import { useState, useEffect, useRef } from 'react';
import { searchCity } from '../../api/api';

export default function SearchPanel({ isOpen, onClose, onSelectCity }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(debounceTimer.current);
    if (!value.trim()) {
      setResults([]);
      return;
    }

    debounceTimer.current = setTimeout(async () => {
      setIsSearching(true);
      const data = await searchCity(value);
      setResults(data);
      setIsSearching(false);
    }, 400);
  };

  const handleSelect = (result) => {
    onSelectCity({
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
      displayName: result.display_name,
    });
    onClose();
  };

  const getLabel = (result) => {
    const addr = result.address;
    const city = addr.city || addr.town || addr.county || addr.state || '';
    const country = addr.country || '';
    const district = addr.quarter || addr.suburb || addr.city_district || '';
    return { city, district, country };
  };

  return (
    <>
      {/* 딤 배경 */}
      <div className={`fixed inset-0 z-20 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />

      {/* 슬라이드 패널 */}
      <div className={`fixed top-0 right-0 z-30 h-full w-full max-w-md bg-[#EFF7FE] shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* 헤더 */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-blue-100">
          <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-blue-100 transition text-text-secondary text-xl">
            ←
          </button>
          <input ref={inputRef} type="text" value={query} onChange={handleChange}placeholder="도시명을 입력하세요" className="flex-1 bg-transparent text-text-primary placeholder-text-muted text-base font-medium outline-none"/>
          {query && (
            <button onClick={() => { setQuery(''); setResults([]); }}className="text-text-muted text-sm hover:text-text-primary">
              ✕
            </button>
          )}
        </div>

        {/* 결과 목록 */}
        <ul className="overflow-y-auto h-[calc(100%-72px)]">
          {isSearching && ( <li className="px-5 py-4 text-text-muted text-sm">검색 중...</li> )}
          {!isSearching && query && results.length === 0 && ( <li className="px-5 py-4 text-text-muted text-sm">검색 결과가 없어요</li> )}
          {results.map((result) => {
            const { city, district, country } = getLabel(result);
            return (
              <li key={result.place_id}>
                <button onClick={() => handleSelect(result)} className="w-full flex items-center gap-3 px-5 py-4 hover:bg-blue-50 transition text-left border-b border-blue-50">
                  <span className="text-text-accent text-lg">📍</span>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">
                      {city}{district ? ` ${district}` : ''}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">{country}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
