import CustomCursor from '../CustomCursor';

export default function CustomCursorExample() {
  return (
    <div className="p-8 h-screen flex items-center justify-center">
      <p className="text-lg text-muted-foreground">Mueve el cursor para ver el efecto ✨</p>
      <CustomCursor />
    </div>
  );
}
