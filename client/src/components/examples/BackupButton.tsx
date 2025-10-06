import BackupButton from '../BackupButton';

export default function BackupButtonExample() {
  const mockData = {
    projects: [{ id: '1', title: 'Proyecto demo' }],
    notes: [{ id: '1', content: 'Nota demo' }],
  };

  return (
    <div className="p-8">
      <BackupButton data={mockData} />
    </div>
  );
}
