import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface BackupButtonProps {
  data: any;
}

export default function BackupButton({ data }: BackupButtonProps) {
  const { toast } = useToast();

  const handleDownload = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gianela-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "¡Respaldo descargado! 💾",
      description: "Tus datos han sido guardados de forma segura",
    });
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleDownload}
        variant="outline"
        size="sm"
        data-testid="button-download-backup"
      >
        <Download className="w-4 h-4 mr-2" />
        Descargar respaldo
      </Button>
    </motion.div>
  );
}
