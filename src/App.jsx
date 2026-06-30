import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { KPIBand } from './components/KPIBand';
import { Tabs } from './components/Tabs';
import { OverviewTab } from './components/OverviewTab';
import { BodyTab } from './components/BodyTab';
import { LabsTab } from './components/LabsTab';
import { ProtocolTab } from './components/ProtocolTab';
import { ActionsTab } from './components/ActionsTab';

const TABS = [
  { id: 'overview', label: 'Visão geral' },
  { id: 'body', label: 'Corpo' },
  { id: 'labs', label: 'Exames' },
  { id: 'protocol', label: 'Protocolo' },
  { id: 'actions', label: 'Ações' },
];

export default function App() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="max-w-md mx-auto">
        <TopBar />
        <KPIBand />
        <Tabs tabs={TABS} value={tab} onChange={setTab} />
        <div className="px-3 py-3 space-y-3 pb-24">
          {tab === 'overview' && <OverviewTab onJump={setTab} />}
          {tab === 'body' && <BodyTab />}
          {tab === 'labs' && <LabsTab />}
          {tab === 'protocol' && <ProtocolTab />}
          {tab === 'actions' && <ActionsTab />}
        </div>
      </div>
    </div>
  );
}
