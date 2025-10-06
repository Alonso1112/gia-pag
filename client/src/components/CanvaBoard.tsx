import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, ExternalLink, Trash2 } from "lucide-react";
import { useState } from "react";

interface CanvaProject {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  notes: string;
}

interface CanvaBoardProps {
  projects: CanvaProject[];
  onAddProject: (project: Omit<CanvaProject, "id">) => void;
  onDeleteProject: (id: string) => void;
  onUpdateProject: (id: string, updates: Partial<CanvaProject>) => void;
}

export default function CanvaBoard({ projects, onAddProject, onDeleteProject, onUpdateProject }: CanvaBoardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", url: "", notes: "" });

  const handleAdd = () => {
    if (newProject.title && newProject.url) {
      onAddProject(newProject);
      setNewProject({ title: "", url: "", notes: "" });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">🌼 Mi espacio creativo</h2>
        <Button
          onClick={() => setIsAdding(!isAdding)}
          size="sm"
          data-testid="button-add-project"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nuevo proyecto
        </Button>
      </div>

      {isAdding && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-4 space-y-3">
            <Input
              placeholder="Título del proyecto"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              data-testid="input-project-title"
            />
            <Input
              placeholder="URL de Canva"
              value={newProject.url}
              onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
              data-testid="input-project-url"
            />
            <Textarea
              placeholder="Notas (opcional)"
              value={newProject.notes}
              onChange={(e) => setNewProject({ ...newProject, notes: e.target.value })}
              rows={2}
              data-testid="textarea-project-notes"
            />
            <div className="flex gap-2">
              <Button onClick={handleAdd} size="sm" data-testid="button-save-project">
                Guardar
              </Button>
              <Button onClick={() => setIsAdding(false)} variant="outline" size="sm" data-testid="button-cancel-project">
                Cancelar
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="p-4 space-y-3 group">
              <div className="flex items-start justify-between">
                <h3 className="font-medium flex-1" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(project.url, '_blank')}
                    data-testid={`button-open-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => onDeleteProject(project.id)}
                    data-testid={`button-delete-${project.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              {project.notes && (
                <p className="text-sm text-muted-foreground" data-testid={`text-project-notes-${project.id}`}>
                  {project.notes}
                </p>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline truncate block"
                data-testid={`link-project-url-${project.id}`}
              >
                {project.url}
              </a>
            </Card>
          </motion.div>
        ))}
      </div>

      {projects.length === 0 && !isAdding && (
        <div className="text-center py-12 text-muted-foreground">
          <p>Aún no tienes proyectos. ¡Agrega tu primera idea! ✨</p>
        </div>
      )}
    </div>
  );
}
