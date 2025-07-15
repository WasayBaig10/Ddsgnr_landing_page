'use client';

import { useEffect, useRef } from 'react';

export default function TrailingCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const isMoving = useRef<boolean>(false);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);

  const maxTrailLengthPx = 300;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      isMoving.current = true;
      points.current.push({ x: e.clientX, y: e.clientY });

      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      fadeTimeout.current = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };

    const getDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let totalLength = 0;

      for (let i = points.current.length - 1; i > 0; i--) {
        const p1 = points.current[i];
        const p2 = points.current[i - 1];

        const segmentLength = getDistance(p1, p2);
        totalLength += segmentLength;

        if (totalLength > maxTrailLengthPx) {
          points.current = points.current.slice(i);
          break;
        }
      }

      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i];
        const p2 = points.current[i + 1];

        const progress = i / points.current.length;
        const thickness = 2 + progress * 6; // start thin, get thicker
        const opacity = progress; // tail is more transparent

        ctx.beginPath();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(192, 192, 192, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.stroke();
      }

      if (!isMoving.current && points.current.length > 0) {
        points.current.shift();
      }

      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
}
