import { useState } from 'react';
import ColorPalette from '../ColorPalette';

export default function ColorPaletteExample() {
  const palettes = [
    ['#FFD1DC', '#FFFFFF', '#FFD700', '#E6E6FA', '#F5DEB3'],
    ['#FFC0CB', '#FAF0E6', '#DDA0DD', '#FFE4B5', '#F0E68C'],
  ];
  
  const [currentPalette, setCurrentPalette] = useState(0);

  return (
    <div className="p-8">
      <ColorPalette
        palette={palettes[currentPalette]}
        onRefresh={() => setCurrentPalette((currentPalette + 1) % palettes.length)}
      />
    </div>
  );
}
