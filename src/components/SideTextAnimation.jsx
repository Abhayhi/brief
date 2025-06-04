import React from 'react';

const SideTextAnimation = () => {
  // Generate alternating sequence for GUPTA (G, U, P, T, A, ...)
  const guptaLetters = 'ABHAY GUPTA ';
  const guptaSequence = Array.from({ length: 12 }, (_, i) => guptaLetters[i % guptaLetters.length]);

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@700&display=swap');

        .side-text-container {
          position: fixed;
          top: 0;
          bottom: 0;
          z-index: 10; /* Below Header (z-50) */
          display: none; /* Hidden on mobile */
          pointer-events: none; /* Prevent interaction */
        }
        .side-text-container.left {
          left: 1rem;
        }
        .side-text-container.right {
          right: 1rem;
        }
        .text-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          overflow: hidden;
        }
        .text-list {
          display: flex;
          flex-direction: column;
          animation: scrollUp var(--duration) linear infinite;
        }
        .text-item {
          color: #88BDF2; /* Black */
          font-size: 4rem; /* Larger size */
          font-weight: 700; /* Bold */
          font-family: 'Montserrat', 'Poppins', sans-serif; /* Minimalist bold font */
          margin: 1.5rem 0; /* Spacing between letters */
          text-transform: uppercase;
          line-height: 1; /* Tight line height for straight stacking */
        }
        @keyframes scrollUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        @media (min-width: 768px) {
          .side-text-container {
            display: block;
          }
        }
      `}</style>

      {/* Right Side: GUPTA Letters */}
      <div className="side-text-container right">
        <div className="text-column" style={{ '--duration': '15s' }}>
          <div className="text-list">
            {guptaSequence.map((letter, index) => (
              <span key={`right-${index}`} className="text-item">
                {letter}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {guptaSequence.map((letter, index) => (
              <span key={`right-dup-${index}`} className="text-item">
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTextAnimation;