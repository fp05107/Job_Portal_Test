import { useMemo } from "react";

const FloatingDots = () => {
  const dots = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 4}s`,
      delay: `${Math.random() * 2}s`,
    }));
  }, []);

  return (
    <div className="absolute animate-rotate360 top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full animate-float"
          style={{
            left: dot.left,
            top: dot.top,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
