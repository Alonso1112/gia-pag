import { useState } from 'react';
import CanvaBoard from '../CanvaBoard';

export default function CanvaBoardExample() {
  const [projects, setProjects] = useState([
    { id: '1', title: 'Campaña Rosa Pastel', url: 'https://canva.com/example1', notes: 'Para el lanzamiento de primavera' },
    { id: '2', title: 'Plantilla Instagram', url: 'https://canva.com/example2', notes: 'Stories y posts' },
  ]);

  return (
    <div className="p-8">
      <CanvaBoard
        projects={projects}
        onAddProject={(project) => setProjects([...projects, { ...project, id: Date.now().toString() }])}
        onDeleteProject={(id) => setProjects(projects.filter(p => p.id !== id))}
        onUpdateProject={(id, updates) => setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p))}
      />
    </div>
  );
}
