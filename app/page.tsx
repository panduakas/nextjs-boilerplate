"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const logo = logoRef.current;
    if (!canvas || !logo) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 3 + 1, // Star radius between 1 and 4
      alpha: Math.random(),
      twinkleSpeed: (Math.random() * 0.02 + 0.01) * 0.5, // Slower twinkle speed
      dx: (Math.random() - 0.5) * 0.5, // Horizontal movement speed
      dy: (Math.random() - 0.5) * 0.5, // Vertical movement speed
    }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        // Update star position
        star.x += star.dx;
        star.y += star.dy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Update star alpha for twinkling effect
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.fill();
      });
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = clientX / innerWidth;
      const yRatio = clientY / innerHeight;
      const brightness = 0.5 + (xRatio + yRatio) / 2; // Calculate brightness based on mouse position
      logo.style.setProperty('--brightness', brightness.toString());
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
        <h1 ref={logoRef} className="logo-text">AkuLagiBisnis</h1>
        <p className="typing-text mt-4">
          We're launching something amazing. Stay tuned!
        </p>
        <div className="animate-bounce text-6xl mt-8">
          🚀
        </div>
      </div>
    </div>
  );
}
