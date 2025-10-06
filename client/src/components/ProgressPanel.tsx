import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Palette, Lightbulb } from "lucide-react";

interface ProgressStats {
  totalProjects: number;
  totalTemplates: number;
  totalNotes: number;
}

interface ProgressPanelProps {
  stats: ProgressStats;
}

export default function ProgressPanel({ stats }: ProgressPanelProps) {
  const messages = [
    "Tu creatividad florece 🌷✨",
    "Cada idea es un paso más cerca de tus sueños 💫",
    "Sigue brillando con tu talento único ⭐",
    "Tu imaginación no tiene límites 🎨"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">💫 Tu progreso creativo</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="text-3xl font-bold" data-testid="text-total-projects">
                {stats.totalProjects}
              </div>
            </motion.div>
            <p className="text-sm text-muted-foreground">Proyectos guardados</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <div className="text-3xl font-bold" data-testid="text-total-templates">
                {stats.totalTemplates}
              </div>
            </motion.div>
            <p className="text-sm text-muted-foreground">Plantillas favoritas</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-secondary-foreground" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="text-3xl font-bold" data-testid="text-total-notes">
                {stats.totalNotes}
              </div>
            </motion.div>
            <p className="text-sm text-muted-foreground">Notas e ideas</p>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-6 text-center bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center justify-center gap-2 text-lg font-serif font-light">
            <Heart className="w-5 h-5 text-primary" />
            <span data-testid="text-motivational-message">{randomMessage}</span>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
