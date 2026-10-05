# Brain Content Layer Specification

## 1. Architectural Hierarchy

Knowledge in Brain is strictly organized across four discrete tiers:

```text
DOMAIN (Broad Knowledge Field, e.g. Operations, Analytics, Finance)
  ↓
SUBJECT (Specific Course or Discipline, e.g. Enterprise Resource Planning)
  ↓
NOTEBOOK (Canonical MDX Document, e.g. ERP Foundations)
  ↓
CONCEPT / SECTION (Numbered 12-point anatomy chapters)
```

---

## 2. Astro Content Collections Configuration (`content.config.ts`)

Brain leverages the Astro 5+ Content Layer with glob loaders:

### Collection: `domains`
* **Path**: `domains/<domain>/domain.md`
* **Schema**:
  ```ts
  {
    id: string;
    title: string;
    slug: string;
    description: string;
    subjects: string[];
  }
  ```

### Collection: `subjects`
* **Path**: `domains/<domain>/<subject>/subject.md`
* **Schema**:
  ```ts
  {
    id: string;
    title: string;
    slug: string;
    domain: string;
    courseName?: string;
    professor?: string;
    description: string;
    notebooks: string[];
  }
  ```

### Collection: `notebooks`
* **Path**: `domains/<domain>/<subject>/notebooks/*.{md,mdx}`
* **Schema**:
  ```ts
  {
    title: string;
    slug: string;
    domain: string;
    subject: string;
    course?: string;
    professor?: string;
    description: string;
    status: 'draft' | 'published';
    version: string;
    updated: string;
    tags: string[];
    readingTimeMinutes?: number;
    featured: boolean;
    interactive?: {
      available: boolean;
      slug?: string;
      title?: string;
    };
    pdf?: {
      available: boolean;
    };
  }
  ```

---

## 3. Strict Prohibited Word Rule

To protect personal ownership and privacy, canonical content files and public website metadata must NEVER include:
* University or institute names (`WeSchool`, `Welingkar`).
* Program acronyms or institutional degrees (`MBA`, `PGDM`).
* Institutional references (`B-school`, `business school`).

All topics must be framed from an academic, research, and technical perspective.
