import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RomanticPopupProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

export default function RomanticPopup({ isVisible, message, onClose }: RomanticPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/20 backdrop-blur-md z-40"
            onClick={onClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[400px]"
          >
            <div className="bg-card/95 backdrop-blur-xl rounded-lg p-8 shadow-2xl border border-card-border relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={onClose}
                data-testid="button-close-popup"
              >
                <X className="w-4 h-4" />
              </Button>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-5xl text-center mb-4"
              >
                💌
              </motion.div>

              <p className="text-lg font-serif text-center font-light leading-relaxed">
                {message}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
