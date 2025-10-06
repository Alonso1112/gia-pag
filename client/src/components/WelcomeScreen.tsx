import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import catImage from "@assets/stock_images/cute_8-bit_pixel_art_288091c9.jpg";

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 50,
            opacity: 0 
          }}
          animate={{ 
            y: -100, 
            opacity: [0, 1, 1, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{ 
            duration: 6 + Math.random() * 4, 
            repeat: Infinity, 
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {i % 3 === 0 ? "✨" : i % 3 === 1 ? "💕" : "🌸"}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Glass card */}
        <div className="backdrop-blur-xl bg-card/80 rounded-lg p-12 shadow-2xl border border-card-border">
          {/* Cat image with animation */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img 
                src={catImage} 
                alt="Gatito tierno" 
                className="w-32 h-32 object-cover rounded-lg"
                style={{ imageRendering: "pixelated" }}
              />
              <motion.div
                className="absolute -top-2 -right-2 text-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕
              </motion.div>
            </div>
          </motion.div>

          {/* Welcome text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-serif font-light mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Bienvenida a tu espacio creativo, Gianela
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground mb-8 font-light"
          >
            Un lugar hecho con amor para tu inspiración
          </motion.p>

          {/* Enter button with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              onClick={onEnter}
              size="lg"
              className="relative overflow-hidden group"
              data-testid="button-enter"
            >
              <span className="relative z-10">Entrar a mi espacio</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
