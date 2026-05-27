import { useMemo } from 'react';

export default function Dust({ count = 16 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      top: Math.random() * 100,
      left: -Math.random() * 30,
      size: 2 + Math.random() * 5,
      duration: 30 + Math.random() * 50,
      delay: -Math.random() * 60,
      anim: 1 + Math.floor(Math.random() * 3),
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="dust" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          style={{
            top: `${p.top}vh`,
            left: `${p.left}vw`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `drift-${p.anim} ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
