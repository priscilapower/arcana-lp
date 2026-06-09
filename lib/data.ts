export type AccentKey = 'cyan' | 'purple' | 'violet' | 'emerald';

export interface AccentConfig {
  a: string; ad: string; ab: string; h: string;
  a2: string; a2d: string; h2: string;
}

export interface Accent {
  label: string;
  swatch: [string, string];
  dark: AccentConfig;
  light: AccentConfig;
}

export const ACCENTS: Record<AccentKey, Accent> = {
  cyan: {
    label: 'Cyan + Amber',
    swatch: ['oklch(72% 0.14 198)', 'oklch(80% 0.15 78)'],
    dark:  { a:'oklch(72% 0.14 198)', ad:'oklch(60% 0.14 198)', ab:'oklch(82% 0.12 198)', h:'72% 0.14 198', a2:'oklch(80% 0.15 78)', a2d:'oklch(68% 0.15 78)', h2:'80% 0.15 78' },
    light: { a:'oklch(52% 0.13 205)', ad:'oklch(44% 0.13 205)', ab:'oklch(46% 0.13 205)', h:'52% 0.13 205', a2:'oklch(60% 0.14 66)', a2d:'oklch(52% 0.14 66)', h2:'60% 0.14 66' },
  },
  purple: {
    label: 'Purple + Orange',
    swatch: ['oklch(66% 0.19 290)', 'oklch(72% 0.18 50)'],
    dark:  { a:'oklch(66% 0.19 290)', ad:'oklch(56% 0.19 290)', ab:'oklch(78% 0.16 290)', h:'66% 0.19 290', a2:'oklch(73% 0.18 50)', a2d:'oklch(63% 0.18 50)', h2:'73% 0.18 50' },
    light: { a:'oklch(48% 0.20 290)', ad:'oklch(40% 0.20 290)', ab:'oklch(44% 0.20 290)', h:'48% 0.20 290', a2:'oklch(58% 0.18 48)', a2d:'oklch(50% 0.18 48)', h2:'58% 0.18 48' },
  },
  violet: {
    label: 'Violet + Gold',
    swatch: ['oklch(66% 0.19 290)', 'oklch(80% 0.15 80)'],
    dark:  { a:'oklch(66% 0.19 290)', ad:'oklch(56% 0.19 290)', ab:'oklch(78% 0.16 290)', h:'66% 0.19 290', a2:'oklch(80% 0.15 80)', a2d:'oklch(67% 0.16 80)', h2:'80% 0.15 80' },
    light: { a:'oklch(48% 0.20 290)', ad:'oklch(40% 0.20 290)', ab:'oklch(44% 0.20 290)', h:'48% 0.20 290', a2:'oklch(58% 0.15 72)', a2d:'oklch(50% 0.15 72)', h2:'58% 0.15 72' },
  },
  emerald: {
    label: 'Emerald + Amber',
    swatch: ['oklch(70% 0.15 158)', 'oklch(80% 0.15 78)'],
    dark:  { a:'oklch(72% 0.15 158)', ad:'oklch(60% 0.15 158)', ab:'oklch(82% 0.13 158)', h:'72% 0.15 158', a2:'oklch(80% 0.15 78)', a2d:'oklch(68% 0.15 78)', h2:'80% 0.15 78' },
    light: { a:'oklch(50% 0.14 160)', ad:'oklch(42% 0.14 160)', ab:'oklch(46% 0.14 160)', h:'50% 0.14 160', a2:'oklch(58% 0.14 66)', a2d:'oklch(50% 0.14 66)', h2:'58% 0.14 66' },
  },
};

export interface SpreadCard {
  n: string; name: string; agent: string; arch: string; temp: string;
}

export const SPREAD: SpreadCard[] = [
  { n: 'IX',  name: 'The Hermit',     agent: 'sage',   arch: 'Researcher', temp: '0.35' },
  { n: 'III', name: 'The Empress',    agent: 'writer', arch: 'Creator',    temp: '0.85' },
  { n: 'II',  name: 'High Priestess', agent: 'oracle', arch: 'Archivist',  temp: '0.40' },
  { n: 'XXI', name: 'The World',      agent: 'world',  arch: 'Meta-Agent', temp: '0.50' },
];

export interface ArcanaCard {
  n: string; name: string; arch: string; temp: number; c: string; world?: boolean;
}

export const ARCANA: ArcanaCard[] = [
  { n: '0',    name: 'The Fool',         arch: 'Explorer',      temp: 0.95, c: 'oklch(78% 0.18 75)' },
  { n: 'I',    name: 'The Magician',     arch: 'Executor',      temp: 0.50, c: 'oklch(65% 0.18 28)' },
  { n: 'II',   name: 'High Priestess',   arch: 'Archivist',     temp: 0.40, c: 'oklch(62% 0.17 225)' },
  { n: 'III',  name: 'The Empress',      arch: 'Creator',       temp: 0.85, c: 'oklch(68% 0.18 340)' },
  { n: 'IV',   name: 'The Emperor',      arch: 'Orchestrator',  temp: 0.30, c: 'oklch(58% 0.18 12)' },
  { n: 'V',    name: 'The Hierophant',   arch: 'Domain Expert', temp: 0.30, c: 'oklch(60% 0.17 148)' },
  { n: 'VI',   name: 'The Lovers',       arch: 'Collaborator',  temp: 0.70, c: 'oklch(72% 0.17 355)' },
  { n: 'VII',  name: 'The Chariot',      arch: 'Driver',        temp: 0.40, c: 'oklch(65% 0.14 215)' },
  { n: 'VIII', name: 'Strength',         arch: 'Coach',         temp: 0.60, c: 'oklch(74% 0.16 55)' },
  { n: 'IX',   name: 'The Hermit',       arch: 'Researcher',    temp: 0.35, c: 'oklch(60% 0.10 265)' },
  { n: 'X',    name: 'Wheel of Fortune', arch: 'Scheduler',     temp: 0.65, c: 'oklch(74% 0.18 65)' },
  { n: 'XI',   name: 'Justice',          arch: 'Auditor',       temp: 0.20, c: 'oklch(63% 0.15 220)' },
  { n: 'XII',  name: 'The Hanged Man',   arch: 'Reframer',      temp: 0.80, c: 'oklch(67% 0.16 185)' },
  { n: 'XIII', name: 'Death',            arch: 'Transformer',   temp: 0.40, c: 'oklch(62% 0.10 270)' },
  { n: 'XIV',  name: 'Temperance',       arch: 'Integrator',    temp: 0.55, c: 'oklch(70% 0.14 198)' },
  { n: 'XV',   name: 'The Devil',        arch: 'Shadow',        temp: 0.75, c: 'oklch(58% 0.18 22)' },
  { n: 'XVI',  name: 'The Tower',        arch: 'Disruptor',     temp: 0.85, c: 'oklch(72% 0.18 40)' },
  { n: 'XVII', name: 'The Star',         arch: 'Companion',     temp: 0.70, c: 'oklch(74% 0.15 190)' },
  { n: 'XVIII',name: 'The Moon',         arch: 'Interpreter',   temp: 0.80, c: 'oklch(67% 0.18 285)' },
  { n: 'XIX',  name: 'The Sun',          arch: 'Amplifier',     temp: 0.75, c: 'oklch(82% 0.17 82)' },
  { n: 'XX',   name: 'Judgement',        arch: 'Reviewer',      temp: 0.45, c: 'oklch(66% 0.17 310)' },
  { n: 'XXI',  name: 'The World',        arch: 'Meta-Agent',    temp: 0.50, c: 'var(--accent)', world: true },
];

export interface ArcanaFull extends ArcanaCard {
  bestFor: string[];
  synergies: string[];
  tensions: string[];
}

export const ARCANA_FULL: ArcanaFull[] = [
  { n:'0',    name:'The Fool',         arch:'Explorer',      temp:0.95, c:'oklch(78% 0.18 75)',
    bestFor:['Creative experiments','Open-ended research','First drafts'],
    synergies:['Magician','Star'], tensions:['Hermit','Emperor'] },
  { n:'I',    name:'The Magician',     arch:'Executor',      temp:0.50, c:'oklch(65% 0.18 28)',
    bestFor:['Automation agents','Coding agents','Workflow executors'],
    synergies:['Chariot','Hermit'], tensions:['High Priestess'] },
  { n:'II',   name:'High Priestess',   arch:'Archivist',     temp:0.40, c:'oklch(62% 0.17 225)',
    bestFor:['Personal assistant','Journal agent','Relationship tracker'],
    synergies:['Hermit','The World'], tensions:['Fool','Chariot'] },
  { n:'III',  name:'The Empress',      arch:'Creator',       temp:0.85, c:'oklch(68% 0.18 340)',
    bestFor:['Writing agent','Content creation','Brand voice','Storytelling'],
    synergies:['Star','Fool'], tensions:['Emperor','Hermit'] },
  { n:'IV',   name:'The Emperor',      arch:'Orchestrator',  temp:0.30, c:'oklch(58% 0.18 12)',
    bestFor:['Orchestrator agent','Project manager','Multi-agent coordinator'],
    synergies:['Magician','Hierophant'], tensions:['Fool','Empress'] },
  { n:'V',    name:'The Hierophant',   arch:'Domain Expert', temp:0.30, c:'oklch(60% 0.17 148)',
    bestFor:['Legal agent','Medical reference','Financial advisor'],
    synergies:['Hermit','Justice'], tensions:['Fool','Empress'] },
  { n:'VI',   name:'The Lovers',       arch:'Collaborator',  temp:0.70, c:'oklch(72% 0.17 355)',
    bestFor:['Email agent','Relationship CRM','Decision support'],
    synergies:['Star','High Priestess'], tensions:['Emperor','Chariot'] },
  { n:'VII',  name:'The Chariot',      arch:'Driver',        temp:0.40, c:'oklch(65% 0.14 215)',
    bestFor:['Project completion','Deadline-focused agent','Sprint manager'],
    synergies:['Magician','Emperor'], tensions:['Hermit','Fool'] },
  { n:'VIII', name:'Strength',         arch:'Coach',         temp:0.60, c:'oklch(74% 0.16 55)',
    bestFor:['Health & habit agent','Mental wellness','Learning coach'],
    synergies:['Star','Hermit'], tensions:['Chariot','Tower'] },
  { n:'IX',   name:'The Hermit',       arch:'Researcher',    temp:0.35, c:'oklch(60% 0.10 265)',
    bestFor:['Research agent','Fact-checking','Due diligence'],
    synergies:['Hierophant','High Priestess'], tensions:['Fool','Chariot'] },
  { n:'X',    name:'Wheel of Fortune', arch:'Scheduler',     temp:0.65, c:'oklch(74% 0.18 65)',
    bestFor:['Scheduling agent','Market-watching','Workflow triggers'],
    synergies:['Chariot','The World'], tensions:['Hermit','Emperor'] },
  { n:'XI',   name:'Justice',          arch:'Auditor',       temp:0.20, c:'oklch(63% 0.15 220)',
    bestFor:['Code review','Content QA','Compliance agent'],
    synergies:['Hierophant','Hermit'], tensions:['Empress','Lovers'] },
  { n:'XII',  name:'The Hanged Man',   arch:'Reframer',      temp:0.80, c:'oklch(67% 0.16 185)',
    bestFor:['Strategy agent',"Devil's advocate",'Brainstorming partner'],
    synergies:['Fool','Hermit'], tensions:['Chariot','Emperor'] },
  { n:'XIII', name:'Death',            arch:'Transformer',   temp:0.40, c:'oklch(62% 0.10 270)',
    bestFor:['Codebase refactor','Content editor','Process improvement'],
    synergies:['Tower','Justice'], tensions:['Empress','Strength'] },
  { n:'XIV',  name:'Temperance',       arch:'Integrator',    temp:0.55, c:'oklch(70% 0.14 198)',
    bestFor:['Summary agent','Multi-source synthesis','Report generator'],
    synergies:['The World','High Priestess'], tensions:['Tower','Death'] },
  { n:'XV',   name:'The Devil',        arch:'Shadow',        temp:0.75, c:'oklch(58% 0.18 22)',
    bestFor:['Red team agent','Security audit','Stress-tester'],
    synergies:['Justice','Tower'], tensions:['Empress','Strength'] },
  { n:'XVI',  name:'The Tower',        arch:'Disruptor',     temp:0.85, c:'oklch(72% 0.18 40)',
    bestFor:['First-principles analysis','Legacy critique','Pivot decisions'],
    synergies:['Death','Devil'], tensions:['Temperance','Emperor'] },
  { n:'XVII', name:'The Star',         arch:'Companion',     temp:0.70, c:'oklch(74% 0.15 190)',
    bestFor:['Journaling companion','Mental wellness agent','Personal coach'],
    synergies:['Strength','Lovers'], tensions:['Devil','Tower'] },
  { n:'XVIII',name:'The Moon',         arch:'Interpreter',   temp:0.80, c:'oklch(67% 0.18 285)',
    bestFor:['Brief interpreter','Creative director agent','UX research'],
    synergies:['High Priestess','Hanged Man'], tensions:['Justice','Emperor'] },
  { n:'XIX',  name:'The Sun',          arch:'Amplifier',     temp:0.75, c:'oklch(82% 0.17 82)',
    bestFor:['Presentation agent','Final-draft editor','Pitch polisher'],
    synergies:['Empress','Magician'], tensions:['Hermit','Moon'] },
  { n:'XX',   name:'Judgement',        arch:'Reviewer',      temp:0.45, c:'oklch(66% 0.17 310)',
    bestFor:['Weekly review','Post-mortem facilitator','Learning log'],
    synergies:['Justice','High Priestess'], tensions:['Chariot','Fool'] },
  { n:'XXI',  name:'The World',        arch:'Meta-Agent',    temp:0.50, c:'var(--accent)', world:true,
    bestFor:['The OS itself — always present'],
    synergies:[], tensions:[] },
];

export interface Plan {
  name: string; tag: string; amt: string; per: string;
  feats: string[]; cta: string; kind: 'copy' | 'p' | 's'; feat?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: 'Open Source', tag: 'Self-hosted, local-first', amt: '$0', per: 'free forever',
    feats: ['arcana-core + CLI + local server', 'All 22 cards & memory federation', 'Local models via Ollama', 'Your keys, your machine', 'MIT licensed'],
    cta: 'pip install arcana-os', kind: 'copy',
  },
  {
    name: 'Cloud Solo', tag: 'Hosted for one', amt: '$12', per: 'per month',
    feats: ['Everything in Open Source', 'Sync across all your devices', 'Encrypted cloud backup', 'Managed models included', 'Always-on automations'],
    cta: 'Start free trial', kind: 'p', feat: true,
  },
  {
    name: 'Cloud Team', tag: 'Shared workspaces', amt: '$30', per: 'per seat / month',
    feats: ['Everything in Solo', 'Shared agents & memory pools', 'Team workspaces & roles', 'Pooled usage & billing', 'Priority support'],
    cta: 'Start a team', kind: 's',
  },
];
