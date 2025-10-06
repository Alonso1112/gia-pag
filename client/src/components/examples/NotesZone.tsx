import { useState } from 'react';
import NotesZone from '../NotesZone';

export default function NotesZoneExample() {
  const [notes, setNotes] = useState([
    { id: '1', content: 'Terminar presentación de marketing', category: 'estudios' as const },
    { id: '2', content: 'Ideas para campaña de San Valentín', category: 'campañas' as const },
    { id: '3', content: 'Recordar enviar correo importante', category: 'personales' as const },
  ]);

  return (
    <div className="p-8">
      <NotesZone
        notes={notes}
        onAddNote={(note) => setNotes([...notes, { ...note, id: Date.now().toString() }])}
        onUpdateNote={(id, content) => setNotes(notes.map(n => n.id === id ? { ...n, content } : n))}
        onDeleteNote={(id) => setNotes(notes.filter(n => n.id !== id))}
      />
    </div>
  );
}
