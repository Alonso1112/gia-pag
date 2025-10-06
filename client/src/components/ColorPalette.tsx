import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, RefreshCw } from "lucide-react";
import { useState } from "react";

interface ColorPaletteProps {
  palette: string[];
  onRefresh: () => void;
}

export default function ColorPalette({ palette, onRefresh }: ColorPaletteProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyColor = (color: string, index: number) => {
    navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">🎨 Paleta del día</h2>
        <Button
          onClick={onRefresh}
          variant="outline"
          size="sm"
          data-testid="button-refresh-palette"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Nueva paleta
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {palette.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group cursor-pointer" onClick={() => copyColor(color, index)}>
              <motion.div
                className="h-32 transition-all"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.05 }}
                data-testid={`color-swatch-${index}`}
              />
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono" data-testid={`text-color-${index}`}>
                    {color}
                  </code>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: copiedIndex === index ? 1 : 0 }}
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Haz clic en cualquier color para copiar su código hex
      </p>
    </div>
  );
}
