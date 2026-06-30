import { bia, fita, exames } from '../data';

export function KPIBand() {
  const latest = bia[bia.length - 1];
  const prev = bia[bia.length - 2];
  const lastFita = fita[fita.length - 1];
  const prevFita = fita[fita.length - 2];

  // Conta status exames
  const all = Object.values(exames).flatMap(g => g.items);
  const outOfRange = all.filter(i => i.status === 'low' || i.status === 'high').length;

  const kpis = [
    {
      label: 'Peso',
      value: latest.peso,
      unit: 'kg',
      delta: (latest.peso - prev.peso).toFixed(1),
      goal: 'lower',
    },
    {
      label: '% Gordura',
      value: latest.pgc,
      unit: '%',
      delta: (latest.pgc - prev.pgc).toFixed(1),
      goal: 'lower',
    },
    {
      label: 'Massa musc.',
      value: latest.musc,
      unit: 'kg',
      delta: (latest.musc - prev.musc).toFixed(1),
      goal: 'higher',
    },
    {
      label: 'Cintura',
      value: lastFita.cintura,
      unit: 'cm',
      delta: (lastFita.cintura - prevFita.cintura).toFixed(0),
      goal: 'lower',
    },
  ];

  return (
    <div className="bg-surface border-b border-line">
      <div className="grid grid-cols-4 divide-x divide-lineSoft">
        {kpis.map(k => {
          const num = parseFloat(k.delta);
          const positive = k.goal === 'lower' ? num <= 0 : num >= 0;
          const arrow = num > 0 ? '↑' : num < 0 ? '↓' : '–';
          return (
            <div key={k.label} className="px-2 py-3">
              <div className="text-[9px] uppercase text-ink3 font-semibold tracking-wide">
                {k.label}
              </div>
              <div className="mt-1 flex items-baseline gap-0.5">
                <span className="font-semibold text-base tnum leading-none">
                  {k.value}
                </span>
                <span className="text-[10px] text-ink3">{k.unit}</span>
              </div>
              <div className={`mt-1 flex items-center gap-0.5 text-[10px] tnum ${
                positive ? 'text-ok' : 'text-warn'
              }`}>
                <span>{arrow}</span>
                <span>{Math.abs(num).toFixed(k.unit === '%' ? 1 : 0)}{k.unit}</span>
              </div>
            </div>
          );
        })}
      </div>
      {outOfRange > 0 && (
        <div className="px-4 py-1.5 bg-warnBg border-t border-line flex items-center justify-between">
          <span className="text-[11px] text-warn font-medium">
            {outOfRange} exame{outOfRange > 1 ? 's' : ''} fora da faixa
          </span>
          <span className="text-[10px] text-warn">↓ rolar para detalhes</span>
        </div>
      )}
    </div>
  );
}
