export function Tabs({ tabs, value, onChange }) {
  return (
    <div className="sticky top-0 z-40 bg-bg border-b border-line">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex min-w-full">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`flex-1 min-w-[80px] px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
                value === t.id
                  ? 'text-ink border-b-2 border-ink -mb-px'
                  : 'text-ink3 border-b-2 border-transparent'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
