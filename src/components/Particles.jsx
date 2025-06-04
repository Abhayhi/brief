import React, { useEffect } from 'react';

const PARTICLE_COUNT = 15;

const random = (min, max) => Math.random() * (max - min) + min;

const Particles = () => {
  // Inject keyframes style once
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(100%);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {[...Array(PARTICLE_COUNT)].map((_, i) => {
        const size = random(4, 10);
        const left = random(0, 100);
        const duration = random(4, 10);
        const delay = random(0, 10);

        const style = {
          position: 'absolute',
          bottom: 0,
          width: size,
          height: size,
          left: `${left}%`,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          borderRadius: '50%',
          animationName: 'floatUp',
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDelay: `${delay}s`,
          willChange: 'transform, opacity',
          pointerEvents: 'none',
          zIndex: 0,
        };

        return <div key={i} style={style} />;
      })}
    </>
  );
};

export default Particles;
