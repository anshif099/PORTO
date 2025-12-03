import React, { useState, useEffect } from 'react';
import { useCursor } from '../contexts/CursorContext';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovering } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
        isHovering ? 'w-8 h-8' : 'w-4 h-4'
      } bg-white/50 backdrop-blur-sm rounded-full`}
      style={{
        left: mousePosition.x - (isHovering ? 16 : 8),
        top: mousePosition.y - (isHovering ? 16 : 8),
      }}
    />
  );
};

export default Cursor;
