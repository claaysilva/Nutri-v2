// Dados clínicos consolidados do Clayton

export const profile = {
  name: 'Clayton Silva Soares',
  age: 27,
  height: 175, // cm
  location: 'Pirapora, MG',
  context: 'Orquiectomia (1 testículo) • Histórico de tirzepatida (1 mês)',
  goals: ['Redução de % de gordura com preservação de massa magra', 'Otimização da saúde reprodutiva'],
  team: {
    endo: { name: 'Dr. Leonardo Gobbi', crm: 'CRM-MG 45049' },
    nutri: { name: 'Juliana Santos', crn: 'CRN9 7889' },
  },
};

// Bioimpedâncias — 6 pontos no tempo
export const bia = [
  { date: '2026-01-03', label: '03/jan', phase: 'tirzepatida',
    peso: 87.7, musc: 37.2, gordura: 23.0, pgc: 26.2, proteica: null, agua: 47.4,
    imc: 28.6, tmb: 1767, visceral: null, whr: 0.97, sub: null, score: null },
  { date: '2026-04-11', label: '11/abr', phase: 'tirzepatida',
    peso: 81.2, musc: 34.8, gordura: 20.4, pgc: 25.1, proteica: null, agua: 44.6,
    imc: 26.5, tmb: 1684, visceral: null, whr: 0.95, sub: null, score: null },
  { date: '2026-05-11', label: '11/mai', phase: 'restricao',
    peso: 80.2, musc: 33.9, gordura: 20.4, pgc: 25.4, proteica: 12.0, agua: 43.9,
    imc: 26.2, tmb: 1661, visceral: 8, whr: 0.92, sub: null, score: 72 },
  { date: '2026-05-18', label: '18/mai', phase: 'restricao',
    peso: 79.3, musc: 33.5, gordura: 20.1, pgc: 25.3, proteica: 11.8, agua: 43.4,
    imc: 25.9, tmb: 1648, visceral: 7, whr: 0.91, sub: 18.1, score: 72 },
  { date: '2026-06-08', label: '08/jun', phase: 'plano',
    peso: 81.9, musc: 35.2, gordura: 20.1, pgc: 24.5, proteica: 12.4, agua: 45.4,
    imc: 26.7, tmb: 1706, visceral: 7, whr: 0.92, sub: 17.5, score: 75 },
  { date: '2026-06-29', label: '29/jun', phase: 'plano',
    peso: 82.0, musc: 34.9, gordura: 20.5, pgc: 25.0, proteica: 12.3, agua: 45.1,
    imc: 26.8, tmb: 1698, visceral: 8, whr: 0.93, sub: 17.9, score: 74 },
];

// Medidas de fita
export const fita = [
  { date: '2026-05-25', label: '25/mai', peitoral: 103, braco: 38, cintura: 88 },
  { date: '2026-06-08', label: '08/jun', peitoral: 105, braco: 39, cintura: 90 },
  { date: '2026-06-29', label: '29/jun', peitoral: 106, braco: 39.75, cintura: 89 },
];

// Metas próximas (Juliana)
export const metas = {
  visceral: { atual: 8, meta: 7, unit: '', tipo: 'menor' },
  subcutanea: { atual: 17.9, meta: 16, unit: '%', tipo: 'menor' },
  pgc: { atual: 25.0, meta: 23.5, unit: '%', tipo: 'menor' },
  cintura: { atual: 89, meta: 87, unit: ' cm', tipo: 'menor' },
};

// Exames laboratoriais (13/05/2026)
export const exames = {
  hormonal: {
    title: 'Hormônios sexuais',
    note: 'Eixo reprodutivo • Com 1 testículo, valores leem diferente',
    items: [
      { name: 'Testosterona total', value: '405', unit: 'ng/dL', ref: '300–1000', status: 'attention', note: 'Terço inferior; aceitável com 1 testículo' },
      { name: 'Testosterona livre', value: '9,52', unit: 'ng/dL', ref: '3,03–14,80', status: 'ok' },
      { name: 'SHBG', value: '25,4', unit: 'nmol/L', ref: '14,6–94,6', status: 'ok', note: 'Baixo-normal favorece test. livre' },
      { name: 'FSH', value: '9,64', unit: 'mUI/mL', ref: '0,95–11,95', status: 'attention', note: 'Esperado com 1 testículo' },
      { name: 'LH', value: '3,19', unit: 'mUI/mL', ref: '0,57–12,07', status: 'ok' },
      { name: 'DHT', value: '278', unit: 'pg/mL', ref: '143–842', status: 'ok' },
      { name: 'Prolactina', value: '10,5', unit: 'ng/mL', ref: '2,1–17,7', status: 'ok', note: 'Caiu de 19 em 2021' },
      { name: 'Estradiol', value: '27', unit: 'pg/mL', ref: 'até 44', status: 'ok' },
    ],
  },
  tireoide: {
    title: 'Tireoide',
    note: 'Funcionando perfeitamente',
    items: [
      { name: 'TSH', value: '0,77', unit: 'µUI/mL', ref: '0,48–5,60', status: 'ok' },
      { name: 'T4 livre', value: '1,38', unit: 'ng/dL', ref: '0,89–1,61', status: 'ok' },
      { name: 'T3 livre', value: '3,33', unit: 'pg/mL', ref: '2,30–4,20', status: 'ok' },
    ],
  },
  glicose: {
    title: 'Glicose e insulina',
    note: 'Metabolismo de açúcar muito bem controlado',
    items: [
      { name: 'Glicose', value: '94', unit: 'mg/dL', ref: '<100', status: 'ok' },
      { name: 'Hemoglobina glicada', value: '4,8', unit: '%', ref: '<5,7%', status: 'ok' },
      { name: 'Insulina', value: '10,1', unit: 'µUI/mL', ref: '3,0–25,0', status: 'ok' },
      { name: 'HOMA-IR', value: '2,34', unit: '', ref: 'até 2,71', status: 'attention', note: 'Sem resistência, mas próximo do teto' },
    ],
  },
  lipid: {
    title: 'Lipidograma',
    note: 'Risco cardiovascular baixo',
    items: [
      { name: 'Colesterol total', value: '143', unit: 'mg/dL', ref: '<190', status: 'ok' },
      { name: 'HDL', value: '40', unit: 'mg/dL', ref: '>40', status: 'attention', note: 'No limite — exercício e ômega 3 ajudam' },
      { name: 'LDL', value: '89', unit: 'mg/dL', ref: '<115', status: 'ok' },
      { name: 'Triglicérides', value: '72', unit: 'mg/dL', ref: '<150', status: 'ok' },
      { name: 'Lipoproteína (a)', value: '15,8', unit: 'mg/dL', ref: '<30', status: 'ok' },
      { name: 'Homocisteína', value: '7,34', unit: 'µmol/L', ref: '5,46–16,20', status: 'ok' },
    ],
  },
  micro: {
    title: 'Minerais e vitaminas',
    note: 'Selênio abaixo • Vitamina D acima',
    items: [
      { name: 'Selênio sérico', value: '43,3', unit: 'µg/L', ref: '46–143', status: 'low', note: 'ABAIXO da referência — castanha do Pará' },
      { name: 'Zinco', value: '75', unit: 'µg/dL', ref: '70–120', status: 'attention', note: 'Parte baixa — otimizar via alimentação' },
      { name: 'Magnésio', value: '2,0', unit: 'mg/dL', ref: '1,7–2,4', status: 'ok' },
      { name: 'Cobre', value: '84,6', unit: 'µg/dL', ref: '70–150', status: 'ok' },
      { name: 'Vitamina D', value: '85,4', unit: 'ng/mL', ref: '30–60 (ideal)', status: 'high', note: 'Acima do ideal — conversar com Dr. Leo' },
      { name: 'Vitamina B12', value: '628', unit: 'pg/mL', ref: '187–883', status: 'ok' },
      { name: 'Ácido fólico', value: '6,74', unit: 'ng/mL', ref: '>3,37', status: 'ok' },
    ],
  },
  ferro: {
    title: 'Hemograma e ferro',
    note: 'Sem anemia, estoques bons',
    items: [
      { name: 'Hemoglobina', value: '14,0', unit: 'g/dL', ref: '13,5–17,5', status: 'ok' },
      { name: 'Ferritina', value: '193', unit: 'ng/mL', ref: '66–561', status: 'ok' },
      { name: 'Ferro sérico', value: '81', unit: 'µg/dL', ref: '65–175', status: 'ok' },
      { name: 'Sat. transferrina', value: '29', unit: '%', ref: '20–50%', status: 'ok' },
    ],
  },
  outros: {
    title: 'Fígado, rins, inflamação',
    note: 'Tudo dentro da faixa',
    items: [
      { name: 'TGO/AST', value: '27', unit: 'U/L', ref: 'até 40', status: 'ok' },
      { name: 'TGP/ALT', value: '34', unit: 'U/L', ref: '10–40', status: 'ok' },
      { name: 'GGT', value: '16', unit: 'U/L', ref: '8–61', status: 'ok' },
      { name: 'Bilirrubinas', value: '0,5', unit: 'mg/dL', ref: '0,3–1,2', status: 'ok' },
      { name: 'Creatinina', value: '1,20', unit: 'mg/dL', ref: '0,76–1,24', status: 'attention', note: 'Elevada pelo uso de creatina' },
      { name: 'TFG', value: '85', unit: 'mL/min', ref: '>90', status: 'attention', note: 'Cálculo distorcido pelo uso de creatina' },
      { name: 'Uréia', value: '19', unit: 'mg/dL', ref: '17–50', status: 'ok' },
      { name: 'Ácido úrico', value: '4,6', unit: 'mg/dL', ref: '3,6–7,7', status: 'ok' },
      { name: 'PCR ultrassensível', value: '0,04', unit: 'mg/dL', ref: '<0,10', status: 'ok' },
      { name: 'Cortisol matinal', value: '9,2', unit: 'µg/dL', ref: '5,3–22,5', status: 'ok' },
    ],
  },
};

// Suplementação
export const suplementos = [
  { name: 'Shot funcional', when: 'Ao acordar', dose: '150ml + ervas', notes: 'Limão, gengibre, cúrcuma, pimenta' },
  { name: 'Glutamina', when: 'Ao acordar', dose: '5g', notes: 'No shot' },
  { name: 'Creatina', when: 'Ao acordar + café', dose: '3g + 5g', notes: 'Creapure Growth' },
  { name: 'Whey protein', when: 'Café (shake)', dose: '30g', notes: 'Concentrado' },
  { name: 'Ômega 3 + CoQ10', when: 'Pós-almoço', dose: '1 dose', notes: 'Vitafor Omegafor Plus' },
  { name: 'Magnésio Bio Trimag', when: '22h', dose: '1 dose', notes: 'Puravida' },
  { name: 'Chá verde + hibisco', when: 'Pós-treino', dose: '1 xícara', notes: 'Antioxidante' },
];

// Protocolo hormonal
export const hormonal = [
  { name: 'Ovidrel (hCG)', status: 'Em uso', dose: 'Conforme Dr. Leo', goal: 'Estimular testosterona e espermatogênese' },
  { name: 'Clomifeno (Clomid)', status: 'Em uso', dose: 'Dias alternados', goal: 'Aumentar FSH/LH naturalmente' },
];

// Plano nutricional (resumido)
export const planoAtual = {
  shot: ['150ml água morna', 'Suco ½ limão', 'Gengibre 2g', 'Cúrcuma 1g + pimenta', 'Glutamina 5g', 'Creatina 3g'],
  cafe: {
    horario: '10h',
    opcoes: [
      'Opção 1: iogurte proteinado Verde Campo + farelo aveia + 5g creatina',
      'Opção 2 (shake): 100g frutas vermelhas + 30g whey + canela + creatina',
      'Opção 3: jejum (2x/sem, dias sem treino)',
    ],
  },
  almoco: {
    horario: '14h',
    composicao: '150g folhosos + 90g carbo (batata/inhame/abóbora/arroz) + 150g frango/peixe ou 120g carne + 1 fruta + ômega 3 + CoQ10',
  },
  jantar: {
    horario: '19h',
    opcoes: [
      'Opção 1: 40g cuscuz + 2 ovos + 50g frango desfiado',
      'Opção 2: 130g proteína + 150g vegetais + 80g carbo',
      'Opção 3: caldo mandioca ou frango 350ml',
    ],
  },
  noite: '22h: 1 dose de magnésio',
};

// Trilha de fases
export const fases = [
  { id: 'tirzepatida', label: 'Tirzepatida', period: 'jan–abr', description: '1 mês de agonista GLP-1. Peso caiu rápido, mas com perda muscular significativa.', verdict: 'Eficaz para peso, custoso em músculo.' },
  { id: 'restricao', label: 'Restrição', period: 'abr–mai', description: 'Sem tirzepatida, comendo pouco, treino fraco. Pior fase para composição.', verdict: 'Perda quase exclusivamente muscular.' },
  { id: 'plano', label: 'Plano estruturado', period: 'mai–jun', description: 'Dieta da Juliana (adesão parcial) + treino seg-sex + suplementação completa.', verdict: 'Virada: hipertrofia real, gordura caindo.' },
];

// Próximas ações
export const acoes = {
  semana: [
    'Seguir dieta com adesão alta (80%+)',
    'Manter treino seg-sex sem falhas',
    'Castanha do Pará 1-2/dia (selênio)',
    'Carne vermelha 1-2x/semana (zinco)',
    'Dormir 7-8h por noite',
    'Hidratar 2,5-3 L de água/dia',
  ],
  juliana: [
    'Levar bioimpedância de hoje + medidas de fita',
    'Discutir realismo das metas de 7 dias',
    'Pedir inclusão oficial de castanha do Pará no plano',
    'Avaliar se já vale subir calorias gradualmente',
  ],
  drLeo: [
    'Confirmar protocolo exato de Ovidrel + Clomid',
    'Discutir pausa da vitamina D (85,4 alto)',
    'Propor espermograma',
    'Avisar sobre uso de creatina (afeta filtração)',
    'Reavaliar testosterona em 8-12 semanas',
  ],
};
