// src/hooks/useDragScroll.js
import { useRef } from 'react';

export default function useDragScroll() {
  const listRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - listRef.current.offsetLeft;
    scrollLeft.current = listRef.current.scrollLeft;
    listRef.current.style.cursor = 'grabbing';
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = x - startX.current;
    listRef.current.scrollLeft = scrollLeft.current - walk;
  }

  const onMouseUp = () => {
    isDragging.current = false;
    listRef.current.style.cursor = 'grab';
  }

  return { listRef, onMouseDown, onMouseMove, onMouseUp };
}