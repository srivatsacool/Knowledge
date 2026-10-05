import katex from 'katex';

/**
 * Normalizes TeX string by collapsing double backslashes before common TeX macros
 * which frequently occur in MDX / JSX string attributes.
 */
export function normalizeTeX(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input.replace(/\\\\(frac|sqrt|times|cdot|approx|sum|int|partial|alpha|beta|gamma|delta|sigma|mu|pm|le|ge|neq|equiv|to|text|left|right|quad)/g, '\\$1');
}

/**
 * Pre-compiles any math expression or text with $...$ / $$...$$ delimiters 
 * to HTML + MathML strings on the server during Astro static build time.
 */
export function renderMath(text: string | null | undefined): string {
  if (!text || typeof text !== 'string') return '';

  const normalized = normalizeTeX(text);

  // 0. If text contains TeX macros without $ delimiters, pre-compile directly
  if (!normalized.includes('$') && /\\(frac|sqrt|times|cdot|approx|sum|int|partial|alpha|beta|gamma|delta|sigma|mu|pm|le|ge|neq|equiv|to|text|left|right|quad)\b/.test(normalized)) {
    try {
      return katex.renderToString(normalized.trim(), {
        displayMode: false,
        throwOnError: false,
        strict: 'ignore',
        output: 'htmlAndMathml',
      });
    } catch (e) {
      // fallback to delimiter replacement
    }
  }

  // 1. Replace $$...$$ (display math)
  let result = normalized.replace(/\$\$([\s\S]+?)\$\$/g, (_, eq) => {
    try {
      return katex.renderToString(eq.trim(), {
        displayMode: true,
        throwOnError: false,
        strict: 'ignore',
        output: 'htmlAndMathml',
      });
    } catch (e) {
      return eq;
    }
  });

  // 2. Replace $...$ (inline math)
  result = result.replace(/\$([^\$]+?)\$/g, (_, eq) => {
    try {
      return katex.renderToString(eq.trim(), {
        displayMode: false,
        throwOnError: false,
        strict: 'ignore',
        output: 'htmlAndMathml',
      });
    } catch (e) {
      return eq;
    }
  });

  return result;
}

/**
 * Renders a standalone display formula (which may or may not have $$ delimiters).
 */
export function renderDisplayFormula(formula: string | null | undefined): string {
  if (!formula || typeof formula !== 'string') return '';
  const clean = normalizeTeX(formula.replace(/^\$\$|\$\$$/g, '').trim());
  try {
    return katex.renderToString(clean, {
      displayMode: true,
      throwOnError: false,
      strict: 'ignore',
      output: 'htmlAndMathml',
    });
  } catch (e) {
    return `<div class="katex-error">${clean}</div>`;
  }
}

/**
 * Renders an inline formula (which may or may not have $ delimiters).
 */
export function renderInlineFormula(formula: string | null | undefined): string {
  if (!formula || typeof formula !== 'string') return '';
  const clean = normalizeTeX(formula.replace(/^\$|\$$/g, '').trim());
  try {
    return katex.renderToString(clean, {
      displayMode: false,
      throwOnError: false,
      strict: 'ignore',
      output: 'htmlAndMathml',
    });
  } catch (e) {
    return `<span class="katex-error">${clean}</span>`;
  }
}
