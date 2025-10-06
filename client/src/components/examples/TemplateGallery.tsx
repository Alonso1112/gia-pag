import TemplateGallery from '../TemplateGallery';

export default function TemplateGalleryExample() {
  const templates = [
    { id: '1', title: 'Rosa Elegante', color: '#FFB6C1', category: 'Social Media', url: 'https://canva.com/template1' },
    { id: '2', title: 'Dorado Premium', color: '#FFD700', category: 'Marketing', url: 'https://canva.com/template2' },
    { id: '3', title: 'Lila Suave', color: '#DDA0DD', category: 'Social Media', url: 'https://canva.com/template3' },
    { id: '4', title: 'Beige Natural', color: '#F5DEB3', category: 'Branding', url: 'https://canva.com/template4' },
  ];

  return (
    <div className="p-8">
      <TemplateGallery templates={templates} />
    </div>
  );
}
