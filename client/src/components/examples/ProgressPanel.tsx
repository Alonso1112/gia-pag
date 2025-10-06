import ProgressPanel from '../ProgressPanel';

export default function ProgressPanelExample() {
  return (
    <div className="p-8">
      <ProgressPanel
        stats={{
          totalProjects: 12,
          totalTemplates: 8,
          totalNotes: 24
        }}
      />
    </div>
  );
}
