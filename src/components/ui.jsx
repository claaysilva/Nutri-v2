// Componentes utilitários reutilizáveis

export function Card({ title, action, children, dense = false, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-3 py-2 border-b border-lineSoft">
          <h3 className="text-tag uppercase text-ink3">{title}</h3>
          {action}
        </div>
      )}
      <div className={dense ? '' : 'p-3'}>{children}</div>
    </div>
  );
}

export function StatusDot({ status, size = 'sm' }) {
  const colors = {
    ok: 'bg-ok',
    attention: 'bg-warn',
    low: 'bg-bad',
    high: 'bg-bad',
  };
  const sizes = { sm: 'w-1.5 h-1.5', md: 'w-2 h-2' };
  return <span className={`inline-block rounded-full ${colors[status] || 'bg-ink3'} ${sizes[size]}`} />;
}

export function StatusPill({ status, children }) {
  const styles = {
    ok: 'bg-okBg text-ok',
    attention: 'bg-warnBg text-warn',
    low: 'bg-badBg text-bad',
    high: 'bg-badBg text-bad',
  };
  return (
    <span className={`text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded ${styles[status] || 'bg-surfaceAlt text-ink3'}`}>
      {children}
    </span>
  );
}

export function Spark({ values, height = 24, width = 60, color = '#0F0F0F', highlight = '#A1342A' }) {
  if (!values || values.length === 0) return null;
  const filtered = values.filter(v => v !== null && v !== undefined);
  if (filtered.length === 0) return null;
  const min = Math.min(...filtered);
  const max = Math.max(...filtered);
  const range = max - min || 1;
  const step = width / (filtered.length - 1 || 1);
  const points = filtered.map((v, i) => [i * step, height - ((v - min) / range) * (height - 4) - 2]);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const last = points[points.length - 1];
  return (
    <svg width={width} height={height} className="overflow-visible">
      <path d={path} fill="none" stroke={color} strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="2" fill={highlight} />
    </svg>
  );
}

export function MiniBar({ value, max, color = '#0F0F0F' }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full h-1 bg-lineSoft rounded">
      <div className="h-1 rounded" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export function RangeBar({ value, min, max, optimal, status = 'ok' }) {
  // Barra mostrando onde o valor está dentro de min-max, com indicador
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const colors = {
    ok: '#1E7A4D',
    attention: '#9C6A0E',
    low: '#A1342A',
    high: '#A1342A',
  };
  return (
    <div className="relative w-full">
      <div className="h-1 bg-lineSoft rounded relative">
        {optimal && (
          <div
            className="absolute top-0 h-1 bg-okBg rounded"
            style={{
              left: `${((optimal[0] - min) / (max - min)) * 100}%`,
              width: `${((optimal[1] - optimal[0]) / (max - min)) * 100}%`,
            }}
          />
        )}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-sm"
          style={{ left: `calc(${pct}% - 3px)`, background: colors[status] }}
        />
      </div>
    </div>
  );
}
