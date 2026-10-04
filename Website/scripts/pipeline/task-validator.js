/**
 * Brain Knowledge Hub — Pre-Generation Task Schema Validator
 * Validates task contract JSON payloads prior to filesystem operations.
 */
const { CANONICAL_SUBJECTS, SUBJECT_ALIASES } = require('./resolver');

class TaskValidationError extends Error {
  constructor(errorCode, message, details = {}) {
    super(message);
    this.name = 'TaskValidationError';
    this.errorCode = errorCode;
    this.details = details;
  }
}

const ALLOWED_OPERATIONS = ['create_notebook', 'validate_notebook', 'promote_notebook'];
const ALLOWED_ACADEMIC_LEVELS = ['foundational', 'undergraduate', 'graduate', 'executive', 'research'];
const ALLOWED_DEPTHS = ['summary', 'modular', 'comprehensive', 'exhaustive'];
const ALLOWED_RESEARCH_PROVIDERS = ['openresearch', 'local_corpus'];
const ALLOWED_STATUSES = ['draft', 'published'];

/**
 * Validates task object against canonical schema
 * @param {Object} task 
 * @returns {Object} { valid: boolean, errors: string[], warnings: string[] }
 */
function validateTaskContract(task) {
  const errors = [];
  const warnings = [];

  if (!task || typeof task !== 'object' || Array.isArray(task)) {
    throw new TaskValidationError(
      'SCHEMA_VALIDATION_FAILED',
      'Task payload must be a non-null JSON object.',
      { received: typeof task }
    );
  }

  // 1. Task ID
  if (!task.task_id) {
    errors.push({ code: 'MISSING_REQUIRED_FIELD', field: 'task_id', message: 'Field "task_id" is required.' });
  } else if (typeof task.task_id !== 'string' || !/^[a-zA-Z0-9_-]+$/.test(task.task_id)) {
    errors.push({ code: 'SCHEMA_VALIDATION_FAILED', field: 'task_id', message: 'Field "task_id" must be alphanumeric string with underscores or hyphens.' });
  }

  // 2. Operation
  const op = task.operation || 'create_notebook';
  if (!ALLOWED_OPERATIONS.includes(op)) {
    errors.push({
      code: 'SCHEMA_VALIDATION_FAILED',
      field: 'operation',
      message: `Invalid operation "${op}". Must be one of: ${ALLOWED_OPERATIONS.join(', ')}`
    });
  }

  // 3. Topic
  if (!task.topic) {
    errors.push({ code: 'MISSING_REQUIRED_FIELD', field: 'topic', message: 'Field "topic" is required.' });
  } else if (typeof task.topic !== 'string' || task.topic.trim().length < 3) {
    errors.push({ code: 'SCHEMA_VALIDATION_FAILED', field: 'topic', message: 'Field "topic" must be a string of at least 3 characters.' });
  }

  // 4. Subject
  if (!task.subject) {
    errors.push({ code: 'MISSING_REQUIRED_FIELD', field: 'subject', message: 'Field "subject" is required.' });
  } else if (typeof task.subject !== 'string') {
    errors.push({ code: 'SCHEMA_VALIDATION_FAILED', field: 'subject', message: 'Field "subject" must be a string.' });
  } else {
    const rawSubject = task.subject.trim().toLowerCase();
    const mappedSubject = SUBJECT_ALIASES[rawSubject] || rawSubject;
    if (!CANONICAL_SUBJECTS[mappedSubject]) {
      const allowedNames = Object.values(CANONICAL_SUBJECTS).map(s => s.name).filter((v, i, a) => a.indexOf(v) === i);
      errors.push({
        code: 'SUBJECT_NOT_CANONICAL',
        field: 'subject',
        message: `Invalid subject "${task.subject}". Must be one of canonical 9 subjects: ${allowedNames.join(', ')}`,
        allowed_subjects: allowedNames
      });
    }
  }

  // 5. Slug validation (if explicitly provided)
  if (task.slug !== undefined && task.slug !== null) {
    if (typeof task.slug !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(task.slug)) {
      errors.push({
        code: 'SLUG_INVALID_FORMAT',
        field: 'slug',
        message: `Invalid slug "${task.slug}". Slugs must be strictly lowercase alphanumeric with single hyphens.`
      });
    }
  }

  // 6. Publication Status
  if (task.publication_status !== undefined && task.publication_status !== null) {
    if (!ALLOWED_STATUSES.includes(task.publication_status)) {
      errors.push({
        code: 'SCHEMA_VALIDATION_FAILED',
        field: 'publication_status',
        message: `Invalid publication_status "${task.publication_status}". Must be 'draft' or 'published'.`
      });
    } else if (task.publication_status === 'published') {
      warnings.push('Task requests initial publication_status="published". Agent workflows should default to "draft".');
    }
  }

  // 7. Research Provider Alignment
  if (task.research_enabled === true) {
    if (!task.research_provider) {
      errors.push({
        code: 'MISSING_RESEARCH_PROVIDER',
        field: 'research_provider',
        message: 'research_enabled is true, but research_provider is null or unspecified. Must specify a valid provider (e.g. "openresearch").'
      });
    } else if (!ALLOWED_RESEARCH_PROVIDERS.includes(task.research_provider)) {
      errors.push({
        code: 'SCHEMA_VALIDATION_FAILED',
        field: 'research_provider',
        message: `Invalid research_provider "${task.research_provider}". Allowed providers: ${ALLOWED_RESEARCH_PROVIDERS.join(', ')}`
      });
    }
  }

  // 8. Academic Level (if provided)
  if (task.academic_level && !ALLOWED_ACADEMIC_LEVELS.includes(task.academic_level)) {
    warnings.push(`Non-standard academic_level "${task.academic_level}". Expected: ${ALLOWED_ACADEMIC_LEVELS.join(', ')}`);
  }

  // 9. Depth (if provided)
  if (task.depth && !ALLOWED_DEPTHS.includes(task.depth)) {
    warnings.push(`Non-standard depth "${task.depth}". Expected: ${ALLOWED_DEPTHS.join(', ')}`);
  }

  if (errors.length > 0) {
    const primary = errors[0];
    throw new TaskValidationError(primary.code, primary.message, { errors, warnings });
  }

  return {
    valid: true,
    errors: [],
    warnings
  };
}

module.exports = {
  validateTaskContract,
  TaskValidationError,
  ALLOWED_OPERATIONS,
  ALLOWED_ACADEMIC_LEVELS,
  ALLOWED_DEPTHS,
  ALLOWED_RESEARCH_PROVIDERS,
  ALLOWED_STATUSES
};
