'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor') as HTMLDivElement;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="custom-cursor">
      <div className="gem-container">
        <div className="aura1"></div>
        <div className="aura2"></div>
        <img src="/gem-cursor.png" className="gem" alt="Cursor" />
      </div>
    </div>
  );
}
