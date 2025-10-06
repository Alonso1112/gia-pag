import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingMessageProps {
  onTrigger: () => void;
}

export default function FloatingMessage({ onTrigger }: FloatingMessageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 10000);
    }, 180000); // 3 minutos

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 100, x: "-50%" }}
      className="fixed bottom-8 left-1/2 z-50 cursor-pointer"
      onClick={onTrigger}
      whileHover={{ scale: 1.1 }}
      data-testid="floating-message-trigger"
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-6xl drop-shadow-lg"
      >
        💌
      </motion.div>
    </motion.div>
  );
}
