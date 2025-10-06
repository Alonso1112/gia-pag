import { useState } from 'react';
import RomanticPopup from '../RomanticPopup';
import { Button } from '@/components/ui/button';

export default function RomanticPopupExample() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="p-8">
      <Button onClick={() => setIsVisible(true)} data-testid="button-show-popup">
        Mostrar mensaje romántico
      </Button>
      <RomanticPopup
        isVisible={isVisible}
        message="Eres mi motivo y mi calma 💞"
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
