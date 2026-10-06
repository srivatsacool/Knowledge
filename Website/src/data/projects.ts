export interface ProjectStats {
  topics: number;
  notebooks: number;
  pyqYears: number;
  chapters: number;
}

export interface ProjectMetadata {
  title: string;
  slug: string;
  division: string;
  description: string;
  type: 'exam-course' | 'research-monograph' | 'technical-guide';
  status: 'active' | 'in-progress' | 'archived';
  featured: boolean;
  created: string;
  updated: string;
  stats: ProjectStats;
  artifacts: Array<'notebook' | 'interactive-book' | 'pyq' | 'formulas' | 'revision' | 'case-studies'>;
  tags: string[];
  faculty?: string[];
  syllabusSessions?: number;
  recentUpdates?: string[];
  relatedProjects?: string[];
}

export const PROJECTS: ProjectMetadata[] = [
  {
    title: 'Logistics & Supply Chain Management',
    slug: 'lscm',
    division: 'operations',
    description: 'Value creation, adaptability, and sustainability across multi-echelon networks. Covers Fisher strategic fit, deterministic EOQ/EPQ, stochastic safety stocks, warehouse workflows, and 2023–2025 solved examinations.',
    type: 'exam-course',
    status: 'active',
    featured: true,
    created: '2026-10-04',
    updated: '2026-10-05',
    stats: {
      topics: 15,
      notebooks: 4,
      pyqYears: 3,
      chapters: 6,
    },
    artifacts: ['notebook', 'interactive-book', 'pyq', 'formulas', 'revision'],
    tags: [
      'Supply Chain Architecture',
      'Strategic Fit',
      'Inventory Optimization',
      'Warehouse Design',
      'Transportation Economics',
      'INCOTERMS 2020',
      'S&OP',
    ],
    faculty: ['Prof. Ajit Maurya', 'Prof. Manoj', 'Prof. Praful More'],
    syllabusSessions: 15,
    recentUpdates: [
      'Built Papermorph 1600×900 interactive visual chapters with live parameter sliders',
      'Mapped 100% verbatim past-year questions from 2023, 2024, and 2025 university exams',
      'Integrated KaTeX formula cards with explicit step-by-step arithmetic proofs',
      'Published unified Academic Paper Edition Master Notebook and faculty-specific portfolios',
    ],
    relatedProjects: ['erp', 'inventory-optimization'],
  },
  {
    title: 'Enterprise Resource Planning & Architecture',
    slug: 'erp',
    division: 'operations',
    description: 'Enterprise systems architecture, business process re-engineering (BPR), SAP S/4HANA module integration (MM, SD, PP, FI/CO), two-tier cloud topologies, and legacy migration risks.',
    type: 'exam-course',
    status: 'active',
    featured: true,
    created: '2026-10-01',
    updated: '2026-10-04',
    stats: {
      topics: 16,
      notebooks: 1,
      pyqYears: 3,
      chapters: 16,
    },
    artifacts: ['notebook', 'revision'],
    tags: ['ERP Architecture', 'SAP S/4HANA', 'BPR', 'Supply Integration', 'Cloud Topologies'],
    faculty: ['Prof. Operations'],
    syllabusSessions: 16,
    recentUpdates: [
      '16-chapter cohesive master textbook rebuild complete',
      'Academic Paper palette alignment and mobile responsive optimization',
    ],
    relatedProjects: ['lscm'],
  },
  {
    title: 'Operations in Services',
    slug: 'ois',
    division: 'operations',
    description: 'Service operations management, SERVQUAL 5-gap model, David Maister 8 waiting principles, Lean & TPS in services, Activity Value Analysis (AVA), and 2023–2025 solved university examinations.',
    type: 'exam-course',
    status: 'active',
    featured: true,
    created: '2026-10-06',
    updated: '2026-10-06',
    stats: {
      topics: 8,
      notebooks: 1,
      pyqYears: 3,
      chapters: 8,
    },
    artifacts: ['notebook', 'case-studies'],
    tags: [
      'Service Operations',
      'SERVQUAL',
      'Waiting Line Management',
      'David Maister',
      'Lean Services',
      'Activity Value Analysis',
      'Continual Service Improvement',
      'Benchmarking',
    ],
    faculty: ['Prof. Vartika Sethi'],
    syllabusSessions: 8,
    recentUpdates: [
      'Authored comprehensive 8-topic MBA field notebook with 19 pedagogical dimensions',
      'Integrated 16 bespoke inline SVG process and framework diagrams',
      'Mapped 100% verbatim 3-year university exam papers (2023, 2024, 2025)',
      'Solved Brew & Grind AVA case study and CAT Coaching Startup operational architecture',
    ],
    relatedProjects: ['lscm', 'erp'],
  },
];
