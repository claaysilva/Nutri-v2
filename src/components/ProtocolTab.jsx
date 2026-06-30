import { suplementos, hormonal, planoAtual } from '../data';
import { Card, StatusPill } from './ui';

const meals = [
  { time: '07h', label: 'Shot', items: planoAtual.shot, type: 'list' },
  { time: '10h', label: 'Café da manhã', items: planoAtual.cafe.opcoes, type: 'options' },
  { time: '14h', label: 'Almoço', text: planoAtual.almoco.composicao, type: 'text' },
  { time: '19h', label: 'Jantar', items: planoAtual.jantar.opcoes, type: 'options' },
  { time: '22h', label: 'Antes de dormir', text: planoAtual.noite, type: 'text' },
];

export function ProtocolTab() {
  return (
    <>
      {/* Suplementação - tabela densa */}
      <Card title="Suplementação diária" dense>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-lineSoft">
              <th className="text-left py-2 px-3 font-semibold text-ink3 text-[10px] uppercase">Suplemento</th>
              <th className="text-right py-2 px-3 font-semibold text-ink3 text-[10px] uppercase">Dose</th>
              <th className="text-right py-2 px-3 font-semibold text-ink3 text-[10px] uppercase">Horário</th>
            </tr>
          </thead>
          <tbody>
            {suplementos.map((s, i) => (
              <tr key={i} className={i < suplementos.length - 1 ? 'border-b border-lineSoft' : ''}>
                <td className="py-2 px-3">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-[10px] text-ink3 mt-0.5">{s.notes}</div>
                </td>
                <td className="py-2 px-3 text-right tnum mono">{s.dose}</td>
                <td className="py-2 px-3 text-right text-[10px] text-ink3 uppercase tracking-wide">{s.when}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Hormonal */}
      <Card title="Protocolo hormonal · Dr. Leo">
        <div className="space-y-2">
          {hormonal.map((h, i) => (
            <div key={i} className="border-l-2 border-accent pl-3 py-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">{h.name}</span>
                <StatusPill status="attention">{h.status}</StatusPill>
              </div>
              <div className="text-[11px] text-ink2 mt-0.5">{h.dose}</div>
              <div className="text-[10px] text-ink3 mt-0.5 italic">{h.goal}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Cardápio - timeline densa */}
      <Card title="Cardápio diário">
        <div className="space-y-2.5">
          {meals.map((m, i) => (
            <div key={i} className="grid grid-cols-[44px_1fr] gap-3 pb-2 border-b border-lineSoft last:border-0 last:pb-0">
              <div className="text-[11px] font-semibold text-ink3 tnum mono">{m.time}</div>
              <div>
                <div className="text-xs font-semibold mb-1">{m.label}</div>
                {m.type === 'list' && (
                  <ul className="space-y-0.5">
                    {m.items.map((item, j) => (
                      <li key={j} className="text-[11px] text-ink2 leading-snug">• {item}</li>
                    ))}
                  </ul>
                )}
                {m.type === 'options' && (
                  <ul className="space-y-1">
                    {m.items.map((opt, j) => (
                      <li key={j} className="text-[11px] text-ink2 leading-snug pl-2 border-l border-lineSoft">
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
                {m.type === 'text' && (
                  <p className="text-[11px] text-ink2 leading-snug">{m.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
