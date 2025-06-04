import React, { useRef, useEffect } from "react";

const AnimatedCursor = () => {
  const canvasRef = useRef(null);
  const trail = [];
  const maxTrail = 6; // Smaller trail length

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const updateTrail = (x, y) => {
      trail.push({ x, y });
      if (trail.length > maxTrail) trail.shift();
    };

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < trail.length - 1; i++) {
        const opacity = i / trail.length;
        const thickness = 10 * (1 - opacity);

        ctx.beginPath();
        ctx.moveTo(trail[i].x, trail[i].y);
        ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
        ctx.strokeStyle = `rgba(189, 221, 252, ${opacity})`; // Soft blue
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(189, 221, 252, 0.6)";

        ctx.stroke();
      }

      // Reset shadow to avoid affecting other canvas drawings
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      drawTrail();
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      updateTrail(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    />
  );
};

export default AnimatedCursor;
