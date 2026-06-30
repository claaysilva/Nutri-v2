import { bia, fita, exames, metas } from '../data';
import { Card, StatusDot, StatusPill, Spark } from './ui';

export function OverviewTab({ onJump }) {
  const latest = bia[bia.length - 1];

  // Conta exames por status
  const all = Object.values(exames).flatMap(g => g.items);
  const ok = all.filter(i => i.status === 'ok').length;
  const att = all.filter(i => i.status === 'attention').length;
  const out = all.filter(i => i.status === 'low' || i.status === 'high').length;

  // Sparklines
  const pesoSpark = bia.map(b => b.peso);
  const muscSpark = bia.map(b => b.musc);
  const pgcSpark = bia.map(b => b.pgc);
  const visSpark = bia.map(b => b.visceral);

  return (
    <>
      {/* Card de evolução com 4 sparks */}
      <Card title="Evolução de janeiro a junho">
        <div className="grid grid-cols-2 gap-3">
          <SparkStat label="Peso" current={latest.peso} initial={bia[0].peso} unit="kg" values={pesoSpark} goal="lower" />
          <SparkStat label="% Gordura" current={latest.pgc} initial={bia[0].pgc} unit="%" values={pgcSpark} goal="lower" />
          <SparkStat label="Massa muscular" current={latest.musc} initial={bia[0].musc} unit="kg" values={muscSpark} goal="higher" />
          <SparkStat label="Visceral" current={latest.visceral} initial={8} unit="" values={visSpark} goal="lower" />
        </div>
      </Card>

      {/* Status dos exames */}
      <Card title="Painel laboratorial" action={
        <button onClick={() => onJump('labs')} className="text-[10px] text-info font-semibold">VER →</button>
      }>
        <div className="grid grid-cols-3 gap-2 text-center">
          <StatusBlock n={ok} label="normal" color="ok" />
          <StatusBlock n={att} label="atenção" color="warn" />
          <StatusBlock n={out} label="alterado" color="bad" />
        </div>
        <div className="mt-3 pt-3 border-t border-lineSoft space-y-1.5">
          {all.filter(i => i.status === 'low' || i.status === 'high').map(i => (
            <div key={i.name} className="flex items-center justify-between text-xs">
              <span className="text-ink2">{i.name}</span>
              <span className="tnum font-medium mono">{i.value} {i.unit}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Metas da semana */}
      <Card title="Metas da Juliana (7 dias)" action={
        <button onClick={() => onJump('body')} className="text-[10px] text-info font-semibold">VER →</button>
      }>
        <div className="space-y-2">
          <MetaRow label="Visceral" cur={metas.visceral.atual} meta={metas.visceral.meta} unit="" realistic />
          <MetaRow label="Cintura" cur={metas.cintura.atual} meta={metas.cintura.meta} unit="cm" realistic />
          <MetaRow label="% Gordura" cur={metas.pgc.atual} meta={metas.pgc.meta} unit="%" />
          <MetaRow label="% Subcutânea" cur={metas.subcutanea.atual} meta={metas.subcutanea.meta} unit="%" />
        </div>
      </Card>

      {/* Próximas ações resumidas */}
      <Card title="Para esta semana" action={
        <button onClick={() => onJump('actions')} className="text-[10px] text-info font-semibold">TODAS →</button>
      }>
        <ul className="space-y-1.5 text-xs">
          <li className="flex gap-2"><span className="text-ink4">•</span><span>Adesão de 80%+ ao plano alimentar</span></li>
          <li className="flex gap-2"><span className="text-ink4">•</span><span>Treino seg–sex inegociável</span></li>
          <li className="flex gap-2"><span className="text-ink4">•</span><span>Castanha do Pará 1–2/dia (selênio baixo)</span></li>
          <li className="flex gap-2"><span className="text-ink4">•</span><span>Carne vermelha 1–2×/semana (zinco)</span></li>
        </ul>
      </Card>

      {/* Contexto clínico */}
      <Card title="Contexto clínico">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <Info label="Idade" value="27 anos" />
          <Info label="Altura" value="175 cm" />
          <Info label="IMC" value={`${latest.imc}`} />
          <Info label="TMB" value={`${latest.tmb} kcal`} />
        </div>
        <div className="mt-3 pt-3 border-t border-lineSoft">
          <div className="text-tag uppercase text-ink3 mb-1">Anatomia</div>
          <div className="text-xs text-ink2">1 testículo (orquiectomia)</div>
        </div>
        <div className="mt-2">
          <div className="text-tag uppercase text-ink3 mb-1">Equipe</div>
          <div className="text-xs text-ink2">Dr. Leonardo Gobbi · endócrino</div>
          <div className="text-xs text-ink2">Juliana Santos · nutricionista</div>
        </div>
      </Card>
    </>
  );
}

function SparkStat({ label, current, initial, unit, values, goal }) {
  const delta = (current - initial).toFixed(1);
  const positive = goal === 'lower' ? parseFloat(delta) <= 0 : parseFloat(delta) >= 0;
  return (
    <div>
      <div className="text-[10px] uppercase text-ink3 font-semibold tracking-wide mb-1">
        {label}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-0.5">
            <span className="text-metric tnum">{current}</span>
            <span className="text-[10px] text-ink3">{unit}</span>
          </div>
          <div className={`text-[10px] tnum mt-0.5 ${positive ? 'text-ok' : 'text-warn'}`}>
            {parseFloat(delta) > 0 ? '+' : ''}{delta}{unit}
          </div>
        </div>
        <Spark values={values} width={56} height={22} />
      </div>
    </div>
  );
}

function StatusBlock({ n, label, color }) {
  const bgs = { ok: 'bg-okBg', warn: 'bg-warnBg', bad: 'bg-badBg' };
  const fgs = { ok: 'text-ok', warn: 'text-warn', bad: 'text-bad' };
  return (
    <div className={`${bgs[color]} rounded py-2`}>
      <div className={`text-metric-xl tnum ${fgs[color]}`}>{n}</div>
      <div className={`text-[9px] uppercase tracking-wide mt-1 ${fgs[color]} font-semibold`}>
        {label}
      </div>
    </div>
  );
}

function MetaRow({ label, cur, meta, unit, realistic }) {
  const delta = (cur - meta).toFixed(1);
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-2">
        <span className="text-ink2">{label}</span>
        {realistic ? (
          <StatusPill status="ok">realista</StatusPill>
        ) : (
          <StatusPill status="attention">agressivo</StatusPill>
        )}
      </div>
      <div className="flex items-baseline gap-1.5 tnum mono">
        <span className="text-ink3">{cur}{unit}</span>
        <span className="text-ink4">→</span>
        <span className="font-semibold">{meta}{unit}</span>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-tag uppercase text-ink3">{label}</div>
      <div className="text-sm font-medium tnum mt-0.5">{value}</div>
    </div>
  );
}
