import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-10);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-50 text-sm"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {index % 2 === 0 ? "✨" : "💕"}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
