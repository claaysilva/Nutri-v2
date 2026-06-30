import { acoes } from '../data';
import { Card } from './ui';

export function ActionsTab() {
  return (
    <>
      <Card title="Esta semana · sob seu controle">
        <ul className="space-y-2">
          {acoes.semana.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs leading-snug">
              <span className="text-ink4 tnum mono text-[10px] w-5 shrink-0 pt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink2">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Levar para a Juliana">
        <ul className="space-y-2">
          {acoes.juliana.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs leading-snug">
              <span className="text-ink4 tnum mono text-[10px] w-5 shrink-0 pt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink2">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Conversar com Dr. Leo">
        <ul className="space-y-2">
          {acoes.drLeo.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs leading-snug">
              <span className="text-ink4 tnum mono text-[10px] w-5 shrink-0 pt-0.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-ink2">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Sinais de alerta — comunicar Dr. Leo">
        <ul className="space-y-1.5 text-[11px] text-ink2 leading-snug">
          <li className="flex gap-2"><span className="text-bad">•</span>Alterações visuais (Clomid)</li>
          <li className="flex gap-2"><span className="text-bad">•</span>Dor ou inchaço no testículo</li>
          <li className="flex gap-2"><span className="text-bad">•</span>Cansaço extremo, perda de libido</li>
          <li className="flex gap-2"><span className="text-bad">•</span>Dores de cabeça persistentes (Clomid)</li>
          <li className="flex gap-2"><span className="text-bad">•</span>Ganho rápido de peso real ({'>'}2 kg/sem)</li>
        </ul>
      </Card>

      <Card title="Cronograma de revisões">
        <table className="w-full text-xs">
          <tbody className="divide-y divide-lineSoft">
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold w-24">Semanal</td>
              <td className="py-2 text-ink2">Peso e medidas de fita</td>
            </tr>
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold">Quinzenal</td>
              <td className="py-2 text-ink2">Bioimpedância</td>
            </tr>
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold">30 dias</td>
              <td className="py-2 text-ink2">Consulta Juliana</td>
            </tr>
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold">60 dias</td>
              <td className="py-2 text-ink2">Revisão Dr. Leo</td>
            </tr>
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold">8–12 sem</td>
              <td className="py-2 text-ink2">Refazer testosterona, FSH, LH, selênio, zinco</td>
            </tr>
            <tr>
              <td className="py-2 text-[10px] uppercase text-ink3 font-semibold">a decidir</td>
              <td className="py-2 text-ink2">Espermograma (propor a Dr. Leo)</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}
