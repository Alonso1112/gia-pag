import { motion } from "framer-motion";

export default function Credits() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center py-12 space-y-4"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative inline-block"
      >
        <h3 
          className="text-xl font-serif font-light bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
          data-testid="text-credits"
        >
          Hecho con amor por Valentino 🌙 para Gianela 🌞
        </h3>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ filter: "blur(20px)" }}
        />
      </motion.div>

      <div className="flex justify-center gap-2">
        {["✨", "💕", "🌸", "💫", "🌷"].map((emoji, i) => (
          <motion.span
            key={i}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.2 
            }}
            className="text-2xl"
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
