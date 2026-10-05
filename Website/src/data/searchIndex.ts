import { PROJECTS } from './projects';
import { LSCM_TOPICS, SOLVED_PYQS, SCM_FORMULAS, INTERACTIVE_CHAPTERS } from './lscmData';

export interface SearchResultItem {
  id: string;
  title: string;
  project: string;
  division: string;
  artifact: 'Project' | 'Master Notebook' | 'Faculty Notebook' | 'Interactive Book' | 'PYQ Bank' | 'Formula Book' | 'Revision';
  topic: string;
  excerpt: string;
  url: string;
  keywords: string[];
}

export function buildSearchIndex(): SearchResultItem[] {
  const items: SearchResultItem[] = [];

  // 1. Projects
  PROJECTS.forEach(p => {
    items.push({
      id: `proj-${p.slug}`,
      title: p.title,
      project: p.title,
      division: p.division,
      artifact: 'Project',
      topic: 'Project Hub',
      excerpt: p.description,
      url: `/${p.division}/${p.slug}/`,
      keywords: [...p.tags, p.slug, p.title],
    });
  });

  // 2. LSCM Topics (Master Notebook & Faculty Portfolios)
  LSCM_TOPICS.forEach(t => {
    items.push({
      id: `topic-${t.id}`,
      title: t.title,
      project: 'LSCM',
      division: 'operations',
      artifact: 'Master Notebook',
      topic: `Topic ${t.id} (${t.faculty})`,
      excerpt: `${t.summary} ${t.what}`,
      url: `/operations/lscm/notebook/#topic-${t.id}`,
      keywords: [t.title, t.faculty, t.category, 'topic', `session ${t.session}`],
    });
  });

  // 3. Interactive Book Chapters
  INTERACTIVE_CHAPTERS.forEach(ch => {
    items.push({
      id: `ch-${ch.id}`,
      title: `${ch.title}: ${ch.subtitle}`,
      project: 'LSCM',
      division: 'operations',
      artifact: 'Interactive Book',
      topic: `Chapter ${ch.number}`,
      excerpt: ch.concept,
      url: `/operations/lscm/book/${ch.slug}/`,
      keywords: [ch.title, ch.subtitle, ch.concept, 'interactive', 'simulation', 'stage'],
    });
  });

  // 4. PYQ Bank
  SOLVED_PYQS.forEach(pyq => {
    items.push({
      id: `pyq-${pyq.id}`,
      title: `PYQ ${pyq.year} ${pyq.questionNumber}: ${pyq.topicTitle}`,
      project: 'LSCM',
      division: 'operations',
      artifact: 'PYQ Bank',
      topic: `${pyq.year} Exam (${pyq.marks} Marks)`,
      excerpt: pyq.questionText.slice(0, 140) + '...',
      url: `/operations/lscm/pyq/#${pyq.id}`,
      keywords: [String(pyq.year), pyq.questionNumber, pyq.topicTitle, pyq.questionType, 'exam', 'pyq'],
    });
  });

  // 5. Formula Directory
  SCM_FORMULAS.forEach(f => {
    items.push({
      id: `form-${f.id}`,
      title: f.name,
      project: 'LSCM',
      division: 'operations',
      artifact: 'Formula Book',
      topic: `${f.category} Formulas`,
      excerpt: f.description,
      url: `/operations/lscm/formulas/#${f.id}`,
      keywords: [f.name, f.category, 'formula', 'math', 'derivation', 'calculation'],
    });
  });

  // 6. Revision Blitz
  items.push({
    id: 'lscm-revision',
    title: 'LSCM Last-Minute Exam Blitz & 20 Acronyms',
    project: 'LSCM',
    division: 'operations',
    artifact: 'Revision',
    topic: 'Exam Rapid Review',
    excerpt: 'High-impact memory triggers, 20 essential supply chain acronyms, and common exam traps.',
    url: `/operations/lscm/revision/`,
    keywords: ['revision', 'blitz', 'acronyms', 'last minute', 'cheat sheet', 'traps'],
  });

  // 7. ERP Artifacts
  items.push({
    id: 'erp-notebook',
    title: 'ERP Business Applications & Architecture',
    project: 'ERP',
    division: 'operations',
    artifact: 'Master Notebook',
    topic: 'Enterprise Systems Master Textbook',
    excerpt: 'Comprehensive 16-chapter guide to ERP implementation, SAP S/4HANA architecture, BPR, and exam questions.',
    url: `/operations/erp/`,
    keywords: ['erp', 'sap', 's4hana', 'bpr', 'supply', 'enterprise'],
  });

  return items;
}
