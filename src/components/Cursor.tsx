import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCursor } from '../contexts/CursorContext';

const Cursor: React.FC = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovering: imageHover } = useCursor();
  const [textHover] = useState(false); // unchanged

  const isHovering = textHover || imageHover;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const size = location.pathname === '/AmazeWit' ? 18 : (isHovering ? 40 : 18);
  const radius = size / 2;

  return (
    <div
      className="
        fixed
        pointer-events-none
        z-[9999]
        rounded-full
        transition-all
        duration-200
        ease-out
        mix-blend-difference
      "
      style={{
        width: size,
        height: size,
        left: mousePosition.x - radius,
        top: mousePosition.y - radius,
        backgroundColor: '#ffffff',
      }}
    />
  );
};

export default Cursor;
