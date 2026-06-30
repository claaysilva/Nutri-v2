import { useState } from 'react';
import { bia, fita, metas } from '../data';
import { Card, Spark, StatusPill } from './ui';

const METRICS = [
  { key: 'peso', label: 'Peso', unit: 'kg', goal: 'lower' },
  { key: 'pgc', label: '% Gordura', unit: '%', goal: 'lower' },
  { key: 'musc', label: 'M. muscular', unit: 'kg', goal: 'higher' },
  { key: 'gordura', label: 'M. gordura', unit: 'kg', goal: 'lower' },
  { key: 'visceral', label: 'Visceral', unit: '', goal: 'lower' },
  { key: 'tmb', label: 'TMB', unit: 'kcal', goal: 'higher' },
  { key: 'whr', label: 'WHR', unit: '', goal: 'lower' },
  { key: 'imc', label: 'IMC', unit: '', goal: 'lower' },
];

export function BodyTab() {
  const [m, setM] = useState('musc');
  const metric = METRICS.find(x => x.key === m);
  const points = bia.filter(b => b[m] !== null && b[m] !== undefined);
  const latest = points[points.length - 1];
  const first = points[0];
  const delta = (latest[m] - first[m]).toFixed(metric.key === 'whr' ? 2 : 1);

  return (
    <>
      {/* Grid de 8 métricas com sparkline mini — overview */}
      <Card title="Bioimpedância — 6 medições">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          {METRICS.map(metric => {
            const vals = bia.map(b => b[metric.key]).filter(v => v != null);
            const last = vals[vals.length - 1];
            const ini = vals[0];
            const d = (last - ini).toFixed(metric.key === 'whr' ? 2 : 1);
            const positive = metric.goal === 'lower' ? parseFloat(d) <= 0 : parseFloat(d) >= 0;
            const isActive = m === metric.key;
            return (
              <button
                key={metric.key}
                onClick={() => setM(metric.key)}
                className={`text-left border rounded-md px-2 py-2 transition-colors ${
                  isActive ? 'border-ink bg-surfaceAlt' : 'border-line bg-surface'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase font-semibold text-ink3 tracking-wide">
                    {metric.label}
                  </div>
                  <Spark values={vals} width={36} height={14} />
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-metric-sm tnum">{last}<span className="text-[10px] text-ink3 ml-0.5">{metric.unit}</span></span>
                  <span className={`text-[10px] tnum ${positive ? 'text-ok' : 'text-warn'}`}>
                    {parseFloat(d) > 0 ? '+' : ''}{d}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Card de detalhe da métrica selecionada */}
      <Card title={`Detalhe — ${metric.label}`}>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-metric-xl tnum">{latest[m]}</span>
          <span className="text-xs text-ink3">{metric.unit}</span>
          <span className="ml-auto text-[10px] text-ink3">
            de <span className="tnum">{first[m]}{metric.unit}</span> em {first.label}
          </span>
        </div>

        {/* Histórico em tabela densa */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-lineSoft">
              <th className="text-left font-semibold text-ink3 text-[10px] uppercase py-1.5">Data</th>
              <th className="text-right font-semibold text-ink3 text-[10px] uppercase py-1.5">Valor</th>
              <th className="text-right font-semibold text-ink3 text-[10px] uppercase py-1.5 w-14">Δ</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p, i) => {
              const prev = i > 0 ? points[i - 1][m] : null;
              const d = prev != null ? (p[m] - prev).toFixed(metric.key === 'whr' ? 2 : 1) : null;
              const isLast = i === points.length - 1;
              return (
                <tr key={p.date} className={isLast ? 'bg-surfaceAlt' : ''}>
                  <td className="py-1.5 text-ink2 tnum text-[11px]">{p.label}</td>
                  <td className="py-1.5 text-right tnum mono font-medium">{p[m]}{metric.unit}</td>
                  <td className="py-1.5 text-right text-[10px] tnum">
                    {d != null ? (
                      <span className={parseFloat(d) > 0 ? 'text-warn' : parseFloat(d) < 0 ? 'text-ok' : 'text-ink3'}>
                        {parseFloat(d) > 0 ? '+' : ''}{d}
                      </span>
                    ) : <span className="text-ink4">—</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Medidas de fita */}
      <Card title="Medidas de fita métrica">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-lineSoft">
              <th className="text-left font-semibold text-ink3 text-[10px] uppercase py-1.5">Data</th>
              <th className="text-right font-semibold text-ink3 text-[10px] uppercase py-1.5">Peitoral</th>
              <th className="text-right font-semibold text-ink3 text-[10px] uppercase py-1.5">Braço</th>
              <th className="text-right font-semibold text-ink3 text-[10px] uppercase py-1.5">Cintura</th>
            </tr>
          </thead>
          <tbody>
            {fita.map((f, i) => {
              const prev = i > 0 ? fita[i - 1] : null;
              const isLast = i === fita.length - 1;
              return (
                <tr key={f.date} className={isLast ? 'bg-surfaceAlt' : ''}>
                  <td className="py-1.5 text-ink2 tnum text-[11px]">{f.label}</td>
                  <td className="py-1.5 text-right tnum mono font-medium">{f.peitoral}<span className="text-[10px] text-ink3 ml-0.5">cm</span></td>
                  <td className="py-1.5 text-right tnum mono font-medium">{f.braco}<span className="text-[10px] text-ink3 ml-0.5">cm</span></td>
                  <td className="py-1.5 text-right tnum mono font-medium">{f.cintura}<span className="text-[10px] text-ink3 ml-0.5">cm</span></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t border-line">
              <td className="pt-2 text-[10px] uppercase text-ink3 font-semibold">Δ total</td>
              <td className="pt-2 text-right text-[11px] tnum text-ok font-semibold">+3 cm</td>
              <td className="pt-2 text-right text-[11px] tnum text-ok font-semibold">+1,7 cm</td>
              <td className="pt-2 text-right text-[11px] tnum text-ok font-semibold">+1 cm</td>
            </tr>
          </tfoot>
        </table>
      </Card>

      {/* Metas detalhadas */}
      <Card title="Metas — próximos 7 dias">
        <div className="space-y-2.5">
          {[
            { label: 'Gordura visceral', cur: metas.visceral.atual, meta: metas.visceral.meta, unit: '', viable: true },
            { label: 'Cintura', cur: metas.cintura.atual, meta: metas.cintura.meta, unit: ' cm', viable: true },
            { label: '% Gordura total', cur: metas.pgc.atual, meta: metas.pgc.meta, unit: '%', viable: false },
            { label: '% Subcutânea', cur: metas.subcutanea.atual, meta: metas.subcutanea.meta, unit: '%', viable: false },
          ].map(item => (
            <div key={item.label} className="border-b border-lineSoft pb-2 last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">{item.label}</span>
                <StatusPill status={item.viable ? 'ok' : 'attention'}>
                  {item.viable ? 'realista' : 'em 30 dias'}
                </StatusPill>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5 tnum mono text-xs">
                <span className="text-ink3">{item.cur}{item.unit}</span>
                <span className="text-ink4">→</span>
                <span className="font-semibold">{item.meta}{item.unit}</span>
                <span className="ml-auto text-ink3 text-[10px]">
                  diferença {(item.cur - item.meta).toFixed(1)}{item.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
