import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.onclick !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[10001] transition-all duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isPointer ? '4px' : '8px',
          height: isPointer ? '4px' : '8px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: isPointer
            ? '0 0 10px #0E1118, 0 0 20px #1d212a'
            : '0 0 8px #0E1118',
          opacity: isPointer ? 0.8 : 1
        }}
      />

      {/* Cursor Ring */}
      <div
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[10000] transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.5 : 0})`,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `2px solid ${isPointer ? '#1d212a' : '#0E1118'}`,
          opacity: isPointer ? 0.8 : 0.5,
          background: isPointer
            ? 'radial-gradient(circle, rgba(14, 17, 24, 0.1) 0%, transparent 70%)'
            : 'transparent'
        }}
      />
    </>
  );
}
