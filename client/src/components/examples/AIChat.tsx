import { useState } from 'react';
import AIChat from '../AIChat';

export default function AIChatExample() {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant' as const, content: '¡Hola! Soy tu asistente creativo. ¿En qué puedo ayudarte hoy?' },
    { id: '2', role: 'user' as const, content: '¿Qué colores van bien con rosa pastel?' },
    { id: '3', role: 'assistant' as const, content: 'El rosa pastel combina hermosamente con blanco, dorado suave, lila, beige y verde menta. Estas combinaciones crean paletas elegantes y modernas.' },
  ]);

  return (
    <div className="p-8">
      <AIChat
        messages={messages}
        onSendMessage={(msg) => setMessages([...messages, { 
          id: Date.now().toString(), 
          role: 'user', 
          content: msg 
        }])}
      />
    </div>
  );
}
