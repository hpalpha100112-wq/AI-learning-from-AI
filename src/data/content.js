export const dailyStats = [
  { label: 'Important updates', value: 12, tone: 'blue' },
  { label: 'Tools worth a look', value: 8, tone: 'violet' },
  { label: 'Research signals', value: 4, tone: 'mint' },
  { label: 'Build prompts', value: 6, tone: 'amber' },
];

export const news = [
  {
    id: 1,
    tag: 'MODELS',
    title: 'The model layer keeps moving — focus on capabilities, cost and access.',
    summary: 'Track new releases through three lenses: what changed, who can use it, and where the practical advantage actually shows up.',
    source: 'Daily intelligence desk',
    age: 'Today',
    accent: 'blue',
  },
  {
    id: 2,
    tag: 'AGENTS',
    title: 'Agents are shifting from demos toward repeatable workflows.',
    summary: 'The useful question is no longer “can it act?” but “can the workflow stay reliable when the task changes?”',
    source: 'Pulse analysis',
    age: 'Today',
    accent: 'violet',
  },
  {
    id: 3,
    tag: 'RESEARCH',
    title: 'Small changes in prompting, evaluation and datasets still matter.',
    summary: 'Learning the evaluation mindset helps you separate a genuinely better system from a benchmark-shaped story.',
    source: 'Research radar',
    age: 'Yesterday',
    accent: 'mint',
  },
  {
    id: 4,
    tag: 'OPEN SOURCE',
    title: 'Open models keep widening the surface area for experimentation.',
    summary: 'Use open-source releases to learn the stack: model, tokenizer, inference, evals, deployment and community tooling.',
    source: 'Open-source radar',
    age: 'Yesterday',
    accent: 'amber',
  },
];

export const tools = [
  { id: 1, name: 'Agent Builder', category: 'Agents', use: 'Prototype repeatable agent workflows', signal: 'Build', color: 'violet' },
  { id: 2, name: 'Prompt Lab', category: 'Prompting', use: 'Compare prompt strategies side-by-side', signal: 'Learn', color: 'blue' },
  { id: 3, name: 'Model Arena', category: 'Models', use: 'Frame model choice around the actual task', signal: 'Decide', color: 'mint' },
  { id: 4, name: 'Vision Canvas', category: 'Multimodal', use: 'Explore image + text workflows', signal: 'Create', color: 'amber' },
  { id: 5, name: 'Eval Kit', category: 'Evals', use: 'Turn intuition into a lightweight test set', signal: 'Measure', color: 'blue' },
  { id: 6, name: 'Automation Studio', category: 'Automation', use: 'Connect prompts to practical work', signal: 'Ship', color: 'violet' },
];

export const learningTracks = [
  { id: 'foundations', level: '01', title: 'AI Foundations', meta: 'Start here', description: 'Models, tokens, context, prompting and evaluation — without the buzzword fog.', progress: 68, lessons: 14, accent: 'blue' },
  { id: 'generative', level: '02', title: 'Generative AI', meta: 'Build fluency', description: 'Text, image, video and multimodal systems through practical mini-builds.', progress: 36, lessons: 18, accent: 'violet' },
  { id: 'agents', level: '03', title: 'AI Agents', meta: 'Move from chat to systems', description: 'Tool use, context engineering, memory, orchestration and reliable workflows.', progress: 18, lessons: 16, accent: 'mint' },
  { id: 'open', level: '04', title: 'Open-Source AI', meta: 'Go under the hood', description: 'Models, datasets, inference, fine-tuning, evaluation and deployment.', progress: 8, lessons: 20, accent: 'amber' },
  { id: 'build', level: '05', title: 'Build with AI', meta: 'Ship something real', description: 'Turn a concept into a working product with AI in the loop.', progress: 0, lessons: 12, accent: 'blue' },
  { id: 'games', level: '06', title: 'AI for Games', meta: 'Experimental track', description: 'A future track for your game layer — ready for the rules you will add next.', progress: 0, lessons: 10, accent: 'violet' },
];

export const playbookSteps = [
  { time: '05 min', title: 'What changed?', text: 'Scan the 3 signals that are most likely to alter how you build or learn this week.', icon: '◎' },
  { time: '10 min', title: 'Understand it', text: 'Read one short explanation and connect the update to a concept you already know.', icon: '↗' },
  { time: '20 min', title: 'Use it', text: 'Open a tool, reproduce a small workflow, and write down one thing that surprised you.', icon: '◈' },
  { time: '15 min', title: 'Prove it', text: 'Complete a micro-challenge and save the artifact. Learning compounds when you ship evidence.', icon: '✦' },
];

export const sources = [
  { name: 'The Rundown AI', role: 'Product + daily implementation model', url: 'https://www.therundown.ai/' },
  { name: 'AInformed', role: 'Daily digest + topic taxonomy', url: 'https://www.ainformed.dev/' },
  { name: 'Hugging Face Learn', role: 'Modular AI curriculum architecture', url: 'https://huggingface.co/learn' },
  { name: 'Krea', role: 'Minimal creative interface + visual language', url: 'https://www.krea.ai/' },
  { name: 'Codrops Creative Hub', role: '3D interaction + experimental web motion', url: 'https://tympanus.net/codrops/hub/' },
];

export const challenges = [
  { id: 1, prompt: 'Which change would most improve the reliability of an AI workflow: better wording alone, or a small test set plus evaluation criteria?', answer: 'The test set + evaluation criteria approach makes reliability measurable.' },
  { id: 2, prompt: 'You have an AI agent that calls two tools. What should you define before adding a third?', answer: 'Clear tool contracts, success criteria and failure handling.' },
  { id: 3, prompt: 'A benchmark score rises while the real task gets harder. What should you inspect next?', answer: 'The evaluation design and whether it matches the real task distribution.' },
];