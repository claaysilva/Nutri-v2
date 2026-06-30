import { useState } from 'react';
import { exames } from '../data';
import { Card, StatusPill, RangeBar } from './ui';

const FILTERS = [
  { id: 'all', label: 'Todos' },
  { id: 'issues', label: 'Atenção' },
  { id: 'ok', label: 'Normais' },
];

const STATUS_ORDER = { low: 0, high: 0, attention: 1, ok: 2 };

export function LabsTab() {
  const [filter, setFilter] = useState('all');
  const [group, setGroup] = useState('all');

  const allItems = Object.entries(exames).flatMap(([gk, g]) =>
    g.items.map(item => ({ ...item, group: g.title, groupKey: gk }))
  );

  // Filtro de status
  let items = allItems;
  if (filter === 'issues') items = items.filter(i => i.status !== 'ok');
  if (filter === 'ok') items = items.filter(i => i.status === 'ok');

  // Filtro de grupo
  if (group !== 'all') items = items.filter(i => i.groupKey === group);

  // Ordenar: alterados primeiro
  items.sort((a, b) => (STATUS_ORDER[a.status] || 99) - (STATUS_ORDER[b.status] || 99));

  // Contagens para os filtros
  const counts = {
    all: allItems.length,
    issues: allItems.filter(i => i.status !== 'ok').length,
    ok: allItems.filter(i => i.status === 'ok').length,
  };

  return (
    <>
      {/* Filtros */}
      <div className="card p-2 flex gap-1">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex-1 text-[11px] py-1.5 rounded font-medium transition-colors ${
              filter === f.id ? 'bg-ink text-white' : 'bg-surfaceAlt text-ink2'
            }`}
          >
            {f.label}
            <span className={`ml-1.5 tnum ${filter === f.id ? 'text-white/70' : 'text-ink4'}`}>
              {counts[f.id]}
            </span>
          </button>
        ))}
      </div>

      {/* Filtro de grupos */}
      <div className="-mx-3 px-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-1.5">
          <GroupChip active={group === 'all'} onClick={() => setGroup('all')}>
            Todos os sistemas
          </GroupChip>
          {Object.entries(exames).map(([k, g]) => (
            <GroupChip key={k} active={group === k} onClick={() => setGroup(k)}>
              {g.title}
            </GroupChip>
          ))}
        </div>
      </div>

      {/* Coleta info */}
      <div className="card px-3 py-2 flex items-center justify-between">
        <div>
          <div className="text-tag uppercase text-ink3">Coleta</div>
          <div className="text-xs font-medium tnum">13/maio/2026</div>
        </div>
        <div className="text-right">
          <div className="text-tag uppercase text-ink3">Total</div>
          <div className="text-xs font-medium tnum">{items.length} marcadores</div>
        </div>
      </div>

      {/* Lista densa */}
      <Card dense>
        <div>
          {items.map((item, i) => (
            <LabRow key={`${item.groupKey}-${item.name}`} item={item} isLast={i === items.length - 1} />
          ))}
        </div>
      </Card>
    </>
  );
}

function GroupChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-[11px] py-1 px-2.5 rounded-full whitespace-nowrap border ${
        active ? 'border-ink bg-ink text-white' : 'border-line bg-surface text-ink2'
      }`}
    >
      {children}
    </button>
  );
}

function LabRow({ item, isLast }) {
  return (
    <div className={`px-3 py-2.5 ${isLast ? '' : 'border-b border-lineSoft'}`}>
      <div className="flex items-baseline justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-ink truncate">{item.name}</div>
          <div className="text-[10px] text-ink3 tnum mt-0.5">
            ref {item.ref} · {item.unit}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="flex items-baseline gap-1 justify-end">
            <span className="text-metric-sm tnum mono font-semibold">{item.value}</span>
            <span className="text-[10px] text-ink3">{item.unit}</span>
          </div>
          <div className="mt-0.5">
            <StatusPill status={item.status}>
              {item.status === 'ok' && 'normal'}
              {item.status === 'attention' && 'atenção'}
              {item.status === 'low' && 'abaixo'}
              {item.status === 'high' && 'acima'}
            </StatusPill>
          </div>
        </div>
      </div>
      {item.note && (
        <div className={`mt-1.5 text-[10px] leading-snug ${
          item.status === 'low' || item.status === 'high' ? 'text-bad' :
          item.status === 'attention' ? 'text-warn' : 'text-ink3'
        }`}>
          {item.note}
        </div>
      )}
    </div>
  );
}
