export interface Division {
  id: string;
  slug: string;
  title: string;
  description: string;
  count: number;
  featuredProjects: string[];
}

export const DIVISIONS: Division[] = [
  {
    id: 'operations',
    slug: 'operations',
    title: 'Operations & SCM',
    description: 'Supply chain network design, inventory mathematics, warehouse engineering, Theory of Constraints, and ERP architectures.',
    count: 4,
    featuredProjects: ['lscm', 'erp'],
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: 'Analytics & Modeling',
    description: 'Statistical inference, econometric forecasting, time series analysis, simulation models, and decision trees.',
    count: 3,
    featuredProjects: ['predictive-modeling'],
  },
  {
    id: 'ai',
    slug: 'ai',
    title: 'Artificial Intelligence',
    description: 'Transformer foundations, deep neural architectures, LLM reasoning dynamics, agent orchestration, and prompt protocols.',
    count: 3,
    featuredProjects: ['llm-architectures'],
  },
  {
    id: 'technology',
    slug: 'technology',
    title: 'Technology & Cloud',
    description: 'Distributed infrastructure, Docker containerization, cloud native topologies, FastAPI backends, and full-stack systems.',
    count: 2,
    featuredProjects: ['cloud-systems'],
  },
  {
    id: 'finance',
    slug: 'finance',
    title: 'Finance & Economics',
    description: 'Corporate financial mechanics, DCF valuation, options & derivatives pricing, working capital cycles, and macroeconomics.',
    count: 2,
    featuredProjects: ['corporate-valuation'],
  },
  {
    id: 'strategy',
    slug: 'strategy',
    title: 'Strategy & Leadership',
    description: 'Corporate competitive strategy, Porterian dynamics, platform ecosystem models, turnaround consulting, and M&A frameworks.',
    count: 2,
    featuredProjects: ['consulting-frameworks'],
  },
  {
    id: 'career',
    slug: 'career',
    title: 'Career & Interviews',
    description: 'Executive resume defense, consulting case repository, high-frequency technical questions, and behavioral frameworks.',
    count: 2,
    featuredProjects: ['placement-prep'],
  },
];
