import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Trash2 } from "lucide-react";
import { useState } from "react";

interface Note {
  id: string;
  content: string;
  category: "estudios" | "campañas" | "personales";
}

interface NotesZoneProps {
  notes: Note[];
  onAddNote: (note: Omit<Note, "id">) => void;
  onUpdateNote: (id: string, content: string) => void;
  onDeleteNote: (id: string) => void;
}

export default function NotesZone({ notes, onAddNote, onUpdateNote, onDeleteNote }: NotesZoneProps) {
  const [activeCategory, setActiveCategory] = useState<Note["category"]>("estudios");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const categories: Note["category"][] = ["estudios", "campañas", "personales"];
  const filteredNotes = notes.filter(note => note.category === activeCategory);

  const handleSaveNew = () => {
    if (newNoteContent.trim()) {
      onAddNote({ content: newNoteContent, category: activeCategory });
      setNewNoteContent("");
    }
  };

  const getCategoryColor = (category: Note["category"]) => {
    const colors = {
      estudios: "bg-chart-1/20 text-chart-1",
      campañas: "bg-chart-2/20 text-chart-2",
      personales: "bg-chart-3/20 text-chart-3"
    };
    return colors[category];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">📝 Zona de notas</h2>
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            data-testid={`button-category-${cat}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>

      <Card className="p-4 space-y-3">
        <Textarea
          placeholder={`Nueva nota en ${activeCategory}...`}
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          rows={3}
          data-testid="textarea-new-note"
        />
        <Button onClick={handleSaveNew} size="sm" data-testid="button-save-note">
          <Save className="w-4 h-4 mr-2" />
          Guardar nota
        </Button>
      </Card>

      <div className="space-y-3">
        {filteredNotes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-4 space-y-3 group">
              <div className="flex items-start justify-between gap-3">
                <Badge className={getCategoryColor(note.category)} data-testid={`badge-note-category-${note.id}`}>
                  {note.category}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onDeleteNote(note.id)}
                  data-testid={`button-delete-note-${note.id}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm whitespace-pre-wrap" data-testid={`text-note-content-${note.id}`}>
                {note.content}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No hay notas en esta categoría. ¡Empieza a escribir! ✍️</p>
        </div>
      )}
    </div>
  );
}
