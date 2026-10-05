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

  // 7. Canonical MDX Notebooks across all Domains
  const CANONICAL_NOTEBOOKS = [
    {
      id: 'nb-erp-foundations',
      title: 'ERP Foundations & Strategic Architecture',
      domain: 'operations',
      subject: 'enterprise-resource-planning',
      slug: 'erp-foundations',
      excerpt: 'Siloed legacy evolution, 3-tier client-server architecture, Five Pillars of ERP, and OLTP vs OLAP.',
      keywords: ['erp', 'architecture', '3-tier', 'value matrix', 'oltp', 'olap', 'foundations', 'pillars'],
    },
    {
      id: 'nb-mrp-planning',
      title: 'Material Requirements Planning & Manufacturing Execution',
      domain: 'operations',
      subject: 'enterprise-resource-planning',
      slug: 'mrp-planning',
      excerpt: 'Plossl manufacturing flow, Bill of Materials (BOM) explosion, deterministic MRP matrix calculations, and closed-loop MRP.',
      keywords: ['mrp', 'bom', 'mps', 'lead time', 'gross requirements', 'planned order release', 'plossl'],
    },
    {
      id: 'nb-sap-architecture',
      title: 'Core Functional Integration & SAP Modules',
      domain: 'operations',
      subject: 'enterprise-resource-planning',
      slug: 'sap-architecture',
      excerpt: 'SD, MM, PP, and FI/CO integration touchpoints; Order-to-Cash (O2C) and Procure-to-Pay (P2P) 3-way match.',
      keywords: ['sap', 'sd', 'mm', 'pp', 'fico', 'o2c', 'p2p', '3-way match', 'gr/ir', 'atp'],
    },
    {
      id: 'nb-erp-implementation',
      title: 'ERP Implementation, BPR, and Change Management',
      domain: 'operations',
      subject: 'enterprise-resource-planning',
      slug: 'erp-implementation-lifecycle',
      excerpt: 'ASAP methodology, Big Bang vs Phased rollout, BPR vs customization, TCO iceberg, and change management.',
      keywords: ['implementation', 'asap', 'bpr', 'big bang', 'phased', 'tco', 'wricef', 'change management'],
    },
    {
      id: 'nb-master-data-gov',
      title: 'Master Data Governance & Modern Enterprise Paradigms',
      domain: 'operations',
      subject: 'enterprise-resource-planning',
      slug: 'master-data-governance',
      excerpt: 'Single source of truth, golden record pipeline, Subway franchise case study, cloud ERP, and AI autonomous systems.',
      keywords: ['master data', 'governance', 'mdm', 'subway', 'cloud erp', 'saas', 'golden record'],
    },
    {
      id: 'nb-scm-strategic-fit',
      title: 'Supply Chain Architecture & Strategic Fit',
      domain: 'operations',
      subject: 'logistics-supply-chain',
      slug: 'scm-architecture-drivers',
      excerpt: 'Marshall Fisher strategic fit framework, functional vs innovative products, 6 drivers, and the Bullwhip effect.',
      keywords: ['scm', 'strategic fit', 'fisher', 'bullwhip effect', 'drivers', 'beer game', 'responsiveness', 'efficiency'],
    },
    {
      id: 'nb-inventory-opt',
      title: 'Deterministic Lot Sizing & Stochastic Inventory Optimization',
      domain: 'operations',
      subject: 'logistics-supply-chain',
      slug: 'inventory-optimization',
      excerpt: 'EOQ derivation, EPQ batch sizing, quantity discounts, safety stock (Z * sigma_LTD), and the Newsvendor model.',
      keywords: ['inventory', 'eoq', 'epq', 'safety stock', 'newsvendor', 'reorder point', 'stochastic demand', 'holding cost'],
    },
    {
      id: 'nb-warehousing-exim',
      title: 'Warehouse Engineering, Network Design & Global EXIM Trade',
      domain: 'operations',
      subject: 'logistics-supply-chain',
      slug: 'warehousing-exim',
      excerpt: 'U-shaped warehouse flow, cross-docking, Center of Gravity network modeling, and INCOTERMS 2020 (EXW, FOB, CIF, DDP).',
      keywords: ['warehousing', 'cross docking', 'center of gravity', 'incoterms 2020', 'fob', 'cif', 'ddp', 'exw', 'bill of lading'],
    },
    {
      id: 'nb-lscm-master-blueprint',
      title: 'LSCM Master Synthesis & Comprehensive Exam Blueprint',
      domain: 'operations',
      subject: 'logistics-supply-chain',
      slug: 'lscm-master-blueprint',
      excerpt: 'Comprehensive 15-session synthesis, 2023-2025 past exam questions with step-by-step arithmetic solutions and formula bank.',
      keywords: ['lscm', 'pyq', 'exam blueprint', 'formula bank', 'model answers', 'past papers'],
    },
    {
      id: 'nb-predictive-modeling',
      title: 'Predictive Modeling & Supervised Machine Learning Foundations',
      domain: 'analytics',
      subject: 'predictive-modeling',
      slug: 'regression-classification-foundations',
      excerpt: 'Ordinary least squares regression, Ridge & Lasso regularization, bias-variance tradeoff, and validation.',
      keywords: ['analytics', 'regression', 'lasso', 'ridge', 'bias variance', 'machine learning', 'predictive'],
    },
    {
      id: 'nb-dcf-valuation',
      title: 'Discounted Cash Flow (DCF) & WACC Corporate Valuation',
      domain: 'finance',
      subject: 'corporate-valuation',
      slug: 'dcf-wacc-modeling',
      excerpt: 'FCFF unlevered cash flows, WACC hurdle rate, CAPM cost of equity, and Gordon growth terminal value.',
      keywords: ['finance', 'dcf', 'wacc', 'valuation', 'fcff', 'capm', 'cash flow'],
    },
    {
      id: 'nb-contingency-org',
      title: 'Contingency Structural Frameworks & Organizational Design',
      domain: 'management',
      subject: 'organizational-design',
      slug: 'contingency-structural-frameworks',
      excerpt: 'Mintzberg five configurations, Lawrence & Lorsch contingency theory, and matrix governance structures.',
      keywords: ['management', 'organizational design', 'mintzberg', 'contingency', 'matrix structure'],
    },
    {
      id: 'nb-porter-rbv',
      title: "Porter's Five Forces, Value Chain & The Resource-Based View",
      domain: 'business',
      subject: 'competitive-strategy',
      slug: 'porter-five-forces-resource-view',
      excerpt: 'Porter five forces, Jay Barney VRIO resource-based view, and competitive advantage sustainability.',
      keywords: ['strategy', 'porter', 'five forces', 'vrio', 'rbv', 'value chain', 'competitive advantage'],
    },
    {
      id: 'nb-attention-transformer',
      title: 'Scaled Dot-Product Attention & Transformer Architectures',
      domain: 'ai',
      subject: 'deep-learning-transformers',
      slug: 'attention-transformer-mechanisms',
      excerpt: 'Scaled dot-product attention mechanics, multi-head attention, positional encodings, and transformer encoders.',
      keywords: ['ai', 'transformers', 'attention', 'multi head', 'self attention', 'deep learning'],
    },
    {
      id: 'nb-cap-consensus',
      title: 'CAP Theorem, PACELC & Distributed Consensus Mechanics',
      domain: 'technology',
      subject: 'distributed-systems',
      slug: 'cap-theorem-consensus',
      excerpt: 'Brewer CAP theorem, Abadi PACELC tradeoff, Raft leader election and log replication consensus.',
      keywords: ['technology', 'distributed systems', 'cap theorem', 'pacelc', 'raft', 'consensus'],
    },
  ];

  CANONICAL_NOTEBOOKS.forEach(nb => {
    items.push({
      id: nb.id,
      title: nb.title,
      project: nb.subject,
      division: nb.domain,
      artifact: 'Master Notebook',
      topic: `${nb.domain.toUpperCase()} // ${nb.subject}`,
      excerpt: nb.excerpt,
      url: `/${nb.domain}/${nb.subject}/notebooks/${nb.slug}/`,
      keywords: [...nb.keywords, nb.title, nb.slug, nb.domain, nb.subject],
    });
  });

  return items;
}
