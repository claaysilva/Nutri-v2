export function TopBar() {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  return (
    <div className="bg-surface border-b border-line px-4 py-3 flex items-center justify-between">
      <div>
        <div className="text-tag uppercase text-ink3">Painel clínico</div>
        <div className="text-sm font-semibold">Clayton Silva Soares</div>
      </div>
      <div className="text-right">
        <div className="text-tag uppercase text-ink3">Atualizado</div>
        <div className="text-xs font-medium tnum">{today}</div>
      </div>
    </div>
  );
}
