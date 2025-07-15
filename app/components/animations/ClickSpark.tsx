'use client';

import { useEffect } from 'react';

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export default function ClickSpark({
  children,
  sparkColor = '#fff',
  sparkSize = 6,
  sparkRadius = 20,
  sparkCount = 10,
  duration = 500,
}: ClickSparkProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        const angle = (2 * Math.PI * i) / sparkCount;
        const x = Math.cos(angle) * sparkRadius;
        const y = Math.sin(angle) * sparkRadius;

        spark.className = 'click-spark';
        Object.assign(spark.style, {
          position: 'fixed',
          top: `${clientY}px`,
          left: `${clientX}px`,
          width: `${sparkSize}px`,
          height: `${sparkSize}px`,
          backgroundColor: sparkColor,
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
          opacity: '1',
          animation: `spark-fade ${duration}ms ease-out`,
          zIndex: 9999,
        });

        document.body.appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, duration);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return <>{children}</>;
}
