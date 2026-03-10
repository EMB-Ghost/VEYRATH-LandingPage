'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor') as HTMLDivElement;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.14;
      cursorY += (mouseY - cursorY) * 0.14;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animate);
    };
    animate();

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