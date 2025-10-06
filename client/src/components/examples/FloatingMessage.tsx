import FloatingMessage from '../FloatingMessage';

export default function FloatingMessageExample() {
  return (
    <div className="p-8 h-screen relative">
      <p className="text-muted-foreground">El emoji 💌 aparecerá flotando cada 3 minutos</p>
      <FloatingMessage onTrigger={() => console.log('Mensaje romántico activado')} />
    </div>
  );
}
