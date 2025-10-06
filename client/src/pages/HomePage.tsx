import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import RomanticPopup from "@/components/RomanticPopup";
import FloatingMessage from "@/components/FloatingMessage";
import CanvaBoard from "@/components/CanvaBoard";
import TemplateGallery from "@/components/TemplateGallery";
import ColorPalette from "@/components/ColorPalette";
import ProgressPanel from "@/components/ProgressPanel";
import NotesZone from "@/components/NotesZone";
import AIChat from "@/components/AIChat";
import Credits from "@/components/Credits";
import CustomCursor from "@/components/CustomCursor";
import BackupButton from "@/components/BackupButton";
import { ScrollArea } from "@/components/ui/scroll-area";

const romanticMessages = [
  "Eres mi motivo y mi calma 💞",
  "Brillas incluso cuando no te das cuenta ✨",
  "Tu creatividad es infinita 🌸",
  "Cada día contigo es un regalo 💝",
  "Eres la inspiración más hermosa 🌷"
];

const colorPalettes = [
  ['#FFD1DC', '#FFFFFF', '#FFD700', '#E6E6FA', '#F5DEB3'],
  ['#FFC0CB', '#FAF0E6', '#DDA0DD', '#FFE4B5', '#F0E68C'],
  ['#FFB6C1', '#F5F5DC', '#EEE8AA', '#DEB887', '#D8BFD8'],
];

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showRomanticPopup, setShowRomanticPopup] = useState(false);
  const [romanticMessage, setRomanticMessage] = useState("");
  const [currentPalette, setCurrentPalette] = useState(0);

  // LocalStorage state
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("gianela-projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem("gianela-templates");
    return saved ? JSON.parse(saved) : [
      { id: '1', title: 'Rosa Elegante', color: '#FFB6C1', category: 'Social Media', url: 'https://canva.com/template1' },
      { id: '2', title: 'Dorado Premium', color: '#FFD700', category: 'Marketing', url: 'https://canva.com/template2' },
    ];
  });

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("gianela-notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem("gianela-chat");
    return saved ? JSON.parse(saved) : [
      { id: '1', role: 'assistant', content: '¡Hola Gianela! Soy tu asistente creativo. ¿En qué puedo ayudarte hoy? ✨' }
    ];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("gianela-projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("gianela-templates", JSON.stringify(templates));
  }, [templates]);

  useEffect(() => {
    localStorage.setItem("gianela-notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("gianela-chat", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const handleFloatingMessageClick = () => {
    const message = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    setRomanticMessage(message);
    setShowRomanticPopup(true);
  };

  const handleSendMessage = (message: string) => {
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: message
    };
    setChatMessages([...chatMessages, userMessage]);

    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: 'Esta es una respuesta de ejemplo. Conecta la API de Gemini para respuestas reales ✨'
      };
      setChatMessages((prev: typeof chatMessages) => [...prev, aiResponse]);
    }, 1000);
  };

  const allData = {
    projects,
    templates,
    notes,
    chatMessages,
    exportDate: new Date().toISOString()
  };

  if (!hasEntered) {
    return <WelcomeScreen onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <FloatingMessage onTrigger={handleFloatingMessageClick} />
      <RomanticPopup
        isVisible={showRomanticPopup}
        message={romanticMessage}
        onClose={() => setShowRomanticPopup(false)}
      />

      <ScrollArea className="h-screen">
        <div className="max-w-7xl mx-auto p-8 space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tu Espacio Creativo
            </h1>
            <p className="text-muted-foreground font-serif">
              Un lugar especial para todas tus ideas ✨
            </p>
            <div className="flex justify-center">
              <BackupButton data={allData} />
            </div>
          </motion.div>

          {/* Progress Panel */}
          <ProgressPanel
            stats={{
              totalProjects: projects.length,
              totalTemplates: templates.length,
              totalNotes: notes.length
            }}
          />

          {/* Canva Board */}
          <CanvaBoard
            projects={projects}
            onAddProject={(project) => setProjects([...projects, { ...project, id: Date.now().toString() }])}
            onDeleteProject={(id) => setProjects(projects.filter((p: any) => p.id !== id))}
            onUpdateProject={(id, updates) => setProjects(projects.map((p: any) => p.id === id ? { ...p, ...updates } : p))}
          />

          {/* Template Gallery */}
          <TemplateGallery templates={templates} />

          {/* Color Palette */}
          <ColorPalette
            palette={colorPalettes[currentPalette]}
            onRefresh={() => setCurrentPalette((currentPalette + 1) % colorPalettes.length)}
          />

          {/* Notes Zone */}
          <NotesZone
            notes={notes}
            onAddNote={(note) => setNotes([...notes, { ...note, id: Date.now().toString() }])}
            onUpdateNote={(id, content) => setNotes(notes.map((n: any) => n.id === id ? { ...n, content } : n))}
            onDeleteNote={(id) => setNotes(notes.filter((n: any) => n.id !== id))}
          />

          {/* AI Chat */}
          <AIChat
            messages={chatMessages}
            onSendMessage={handleSendMessage}
          />

          {/* Credits */}
          <Credits />
        </div>
      </ScrollArea>
    </div>
  );
}
