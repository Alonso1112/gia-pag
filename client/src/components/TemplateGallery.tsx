import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface Template {
  id: string;
  title: string;
  color: string;
  category: string;
  url: string;
}

interface TemplateGalleryProps {
  templates: Template[];
}

export default function TemplateGallery({ templates }: TemplateGalleryProps) {
  const [filter, setFilter] = useState<string>("all");
  
  const categories = ["all", ...Array.from(new Set(templates.map(t => t.category)))];
  const filteredTemplates = filter === "all" 
    ? templates 
    : templates.filter(t => t.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-semibold">🌸 Plantillas favoritas</h2>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              data-testid={`button-filter-${cat}`}
            >
              {cat === "all" ? "Todas" : cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="overflow-hidden group cursor-pointer">
              <div 
                className="h-32 flex items-center justify-center text-white font-semibold text-lg transition-transform group-hover:scale-105"
                style={{ backgroundColor: template.color }}
              >
                {template.title}
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" data-testid={`badge-category-${template.id}`}>
                    {template.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8"
                    onClick={() => window.open(template.url, '_blank')}
                    data-testid={`button-open-template-${template.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground truncate" data-testid={`text-template-url-${template.id}`}>
                  {template.url}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No hay plantillas en esta categoría</p>
        </div>
      )}
    </div>
  );
}
