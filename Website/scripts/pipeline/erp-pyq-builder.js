/**
 * Brain Knowledge Hub — Previous-Year Questions (PYQ) HTML Builder
 * Renders Part 26 Previous-Year Questions section for ERP Business Applications Notebook
 */
const { erpPyqPapers } = require('./erp-pyq-data');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function markdownToHtml(md) {
  if (!md) return '';
  let h = md.trim();
  // Headers
  h = h.replace(/^#### (.*$)/gim, '<h4 style="color: var(--ink); margin: 1.2em 0 0.4em; font-family: var(--font-hand); font-size: 1.35rem;">$1</h4>');
  h = h.replace(/^### (.*$)/gim, '<h3 style="color: var(--ink); margin: 1.4em 0 0.5em; font-family: var(--font-hand); font-size: 1.55rem;">$1</h3>');
  // Bold and Italics
  h = h.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Tables
  h = h.replace(/\|(.+)\|\n\|(?:\s*:?-+:?\s*\|)+\n((?:\|.+\|\n?)+)/g, (match, headerLine, bodyLines) => {
    const headers = headerLine.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = bodyLines.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<div class="nb-table-wrap"><table class="nb-table"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
  });
  // Lists
  h = h.replace(/^\s*\*\s+(.*$)/gim, '<li style="margin-bottom: 4px;">$1</li>');
  h = h.replace(/^\s*\d+\.\s+(.*$)/gim, '<li style="margin-bottom: 4px;">$1</li>');
  // Wrap list items
  h = h.replace(/(<li style="margin-bottom: 4px;">[\s\S]*?<\/li>(\n|$))+/g, '<ul style="margin: 0.5em 0 0.8em 1.2em; padding-left: 10px;">$&</ul>');
  // Paragraphs
  h = h.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<div') || p.startsWith('<ul') || p.startsWith('<table')) return p;
    return `<p style="margin: 0.5em 0;">${p}</p>`;
  }).join('\n');
  return h;
}

function buildPyqSectionHtml() {
  let html = `
        <!-- SECTION: PREVIOUS-YEAR QUESTIONS (Part 26) -->
        <section class="nb-section nb-pyq-section" id="sec-pyq" data-title="📜 Previous-Year Questions (PYQ) Master Archive">
          <h2 class="nb-sec-title"><span class="nb-stamp nb-stamp--blue">EXAM ARCHIVE</span> 📜 Previous-Year Questions (PYQ) Master Vault (2023–2025)</h2>
          
          <div class="nb-sticky nb-sticky--blue">
            <div class="nb-sticky__title">🏛️ WeSchool Trimester IV Official Exam Question Papers</div>
            <p>
              This section contains the <strong>complete, authentic, word-for-word examination papers</strong> for <em>ERP Business Applications (OPN 419)</em> set by <strong>Dr. Rahul V. Altekar</strong> (Director Digital Supply Chain Solutions, SAP SE; Visiting Professor, WeSchool).
            </p>
            <p style="margin-bottom: 0;">
              Zero hallucination: original exam dates, marks, internal choices, question wording, Bloom's Taxonomy levels, and Course Outcomes (COs) are preserved verbatim. Each authentic question is paired with an <strong>AI-synthesized MBA Model Answer Framework</strong> and a <strong>Target Evaluation Rubric</strong>.
            </p>
          </div>

          <!-- High-Yield Recurrence Matrix (The Altekar Trinity) -->
          <div class="nb-card" style="border-left: 4px solid var(--ink);">
            <div class="nb-tape"></div>
            <div class="nb-card__title">🔥 HIGH-YIELD RECURRENCE MATRIX ("THE ALTEKAR TRINITY")</div>
            <p style="font-family: var(--font-hand2); font-size: 1.15rem; color: var(--pencil);">
              Analysis of all available WeSchool End-Term papers reveals a highly predictable, repeatable examination pattern:
            </p>

            <div class="nb-table-wrap">
              <table class="nb-table">
                <thead>
                  <tr>
                    <th>Recurrence Pillar</th>
                    <th>2023 End-Term</th>
                    <th>2024 End-Term</th>
                    <th>2025 End-Term</th>
                    <th>Exam Weight &amp; Weightage Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Pillar 1: Compulsory Strategic Case Charter</strong></td>
                    <td><strong>Q1 (10m)</strong>: Ms. Deepika, Pharma Co ERP Head (Business Strategy vs IT)</td>
                    <td><strong>Q1 (20m)</strong>: Ms. Aishwarya, Prabha Auto CIO (Customer-Centric ERP Report)</td>
                    <td><strong>Q1 (20m)</strong>: Ms. Vijaya Loki, LPU Ltd Chemical CDO (Growth Strategy vs IT Intervention)</td>
                    <td><span class="nb-stamp nb-stamp--amber">100% RECURRENCE</span><br>Carries <strong>33% to 67%</strong> of total paper marks. Must apply Altekar 5 Cs &amp; Panchanga.</td>
                  </tr>
                  <tr>
                    <td><strong>Pillar 2: Conceptual Model &amp; Architecture</strong></td>
                    <td><strong>Q3 (10m)</strong>: Conceptual Model &amp; 3-Tier Architecture</td>
                    <td><strong>Q3 (10m)</strong>: Conceptual Model &amp; 3-Tier Architecture</td>
                    <td><strong>Integrated in Q1</strong>: Technical Architect transformation</td>
                    <td><span class="nb-stamp nb-stamp--blue">HIGH YIELD</span><br>Always draw the 5 Pillars Temple and 3-Tier Client-Server layout.</td>
                  </tr>
                  <tr>
                    <td><strong>Pillar 3: Manufacturing Modules &amp; Item Control</strong></td>
                    <td><strong>Q2 (10m)</strong>: Modules &amp; Item Control<br><strong>Q4 (10m)</strong>: Automobile MPS</td>
                    <td><strong>Q2 (10m)</strong>: Manufacturing Module &amp; Phantom Item</td>
                    <td><strong>Q2 (10m)</strong>: ERP Value in ATO &amp; MTO Scenarios</td>
                    <td><span class="nb-stamp nb-stamp--green">HIGH YIELD</span><br>CODP positioning, Phantom BOMs, ATP calculations, and Plossl's lead-time rules.</td>
                  </tr>
                  <tr>
                    <td><strong>Pillar 4: Best Practices, BPR &amp; S&amp;OP</strong></td>
                    <td>Integrated in Modules &amp; MPS</td>
                    <td><strong>Q4 (10m)</strong>: ERP Best Practices with Examples</td>
                    <td><strong>Q3 (10m)</strong>: BPR &amp; ERP Chicken/Egg Paradox<br><strong>Q4 (10m)</strong>: SNOP &amp; ABC Concepts</td>
                    <td><span class="nb-stamp nb-stamp--blue">CONCEPTUAL RIGOR</span><br>Contrast vanilla ERP with custom BPR; explain unconstrained vs constrained S&amp;OP.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 75-Minute Time Budget Guide -->
          <div class="nb-card" style="background: rgba(217, 236, 255, 0.4); border-color: var(--ink2);">
            <div class="nb-tape nb-tape--right"></div>
            <div class="nb-card__title">⏱️ 75-MINUTE EXAM TIME BUDGET &amp; STRATEGY GUIDE</div>
            <p style="font-family: var(--font-hand2); font-size: 1.15rem;">
              The WeSchool ERP End-Term paper allows exactly <strong>1 hour 15 minutes (75 minutes)</strong> for <strong>30 marks</strong>.
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 12px;">
              <div style="background: var(--card); padding: 12px; border-radius: 6px; border-left: 3px solid var(--amber);">
                <div style="font-family: var(--font-hand); font-size: 1.3rem; color: var(--amber); font-weight: 700;">Phase 1: 5 Mins</div>
                <div style="font-size: 0.95rem;"><strong>Question Selection:</strong> Read Q1 thoroughly; scan Q2, Q3, Q4 to choose the highest-scoring elective.</div>
              </div>
              <div style="background: var(--card); padding: 12px; border-radius: 6px; border-left: 3px solid var(--red);">
                <div style="font-family: var(--font-hand); font-size: 1.3rem; color: var(--red); font-weight: 700;">Phase 2: 40 Mins</div>
                <div style="font-size: 0.95rem;"><strong>Compulsory Q1 (20 Marks):</strong> Structure Executive Report, draw Value Matrix/Panchanga diagram, articulate 5 Cs.</div>
              </div>
              <div style="background: var(--card); padding: 12px; border-radius: 6px; border-left: 3px solid var(--green);">
                <div style="font-family: var(--font-hand); font-size: 1.3rem; color: var(--green); font-weight: 700;">Phase 3: 25 Mins</div>
                <div style="font-size: 0.95rem;"><strong>Chosen Elective (10 Marks):</strong> Focus on clear definitions, comparative matrix tables, and real-world industrial examples.</div>
              </div>
              <div style="background: var(--card); padding: 12px; border-radius: 6px; border-left: 3px solid var(--ink);">
                <div style="font-family: var(--font-hand); font-size: 1.3rem; color: var(--ink); font-weight: 700;">Phase 4: 5 Mins</div>
                <div style="font-size: 0.95rem;"><strong>Review &amp; Highlighting:</strong> Underline key terms (CODP, Plossl, 5 Cs, ACID, Vanilla Core) and verify diagram labels.</div>
              </div>
            </div>
          </div>

          <!-- PYQ Year Selection Tabs -->
          <div style="margin: 28px 0 16px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center;" id="pyqYearTabs">
            <span style="font-family: var(--font-hand); font-weight: 700; font-size: 1.35rem; color: var(--ink); margin-right: 6px;">Select Examination Year:</span>
            <button class="nb-tbtn is-active pyq-year-tab-btn" data-target-year="2025" type="button">2025 Paper (Current)</button>
            <button class="nb-tbtn pyq-year-tab-btn" data-target-year="2024" type="button">2024 Paper</button>
            <button class="nb-tbtn pyq-year-tab-btn" data-target-year="2023" type="button">2023 Paper</button>
          </div>
`;

  // Render each exam paper
  erpPyqPapers.forEach((paper, pIdx) => {
    const isFirst = pIdx === 0;
    html += `
          <!-- Examination Paper ${paper.year} -->
          <div class="nb-pyq-paper ${isFirst ? 'is-active' : ''}" id="pyq-paper-${paper.year}" style="${isFirst ? 'display: block;' : 'display: none;'} margin-top: 16px;">
            <div class="nb-card" style="border: 2px solid var(--ink); background: var(--card);">
              <div class="nb-tape"></div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; border-bottom: 1.5px dashed var(--line); padding-bottom: 10px; margin-bottom: 12px;">
                <div>
                  <span class="nb-stamp nb-stamp--blue">WESCHOOL END-TERM EXAMINATION</span>
                  <h3 style="margin: 6px 0 2px; font-family: var(--font-hand); font-size: 1.8rem; color: var(--ink);">
                    ${paper.year} Examination Paper · ${escapeHtml(paper.courseName)}
                  </h3>
                  <div style="font-size: 0.95rem; color: var(--pencil);">
                    <strong>Course Code:</strong> ${paper.courseCode || 'OPN 419'} &nbsp;|&nbsp; 
                    <strong>Batch:</strong> ${paper.batch} &nbsp;|&nbsp; 
                    <strong>Date:</strong> ${paper.date} ${paper.time ? `(${paper.time})` : ''} &nbsp;|&nbsp;
                    <strong>Max Marks:</strong> ${paper.maxMarks} &nbsp;|&nbsp;
                    <strong>Duration:</strong> ${paper.duration}
                  </div>
                </div>
                <div style="text-align: right; font-family: var(--font-hand2); font-size: 1.05rem;">
                  <span class="nb-stamp nb-stamp--green">${paper.trimester || 'Trimester IV'}</span>
                </div>
              </div>

              <!-- Paper Instructions -->
              <div style="background: rgba(0, 0, 0, 0.03); padding: 10px 14px; border-radius: 6px; font-size: 0.92rem; margin-bottom: 14px;">
                <strong>Official Examination Instructions:</strong>
                <ul style="margin: 4px 0 0 16px; padding: 0;">
                  ${paper.instructions.map(inst => `<li>${escapeHtml(inst)}</li>`).join('')}
                </ul>
                ${paper.bloomKey ? `<div style="margin-top: 4px; font-size: 0.82rem; color: var(--pencil);">${escapeHtml(paper.bloomKey)}</div>` : ''}
              </div>

              <!-- Questions in this paper -->
              <div class="nb-pyq-questions-list">
`;

    paper.questions.forEach((q, qIdx) => {
      const qGlobalId = `${paper.year}-${q.qNum.toLowerCase()}`;
      html += `
                <!-- Question Item: ${q.qNum} (${paper.year}) -->
                <div class="nb-pyq-item" id="pyq-q-${qGlobalId}" style="border: 1px solid var(--line); border-radius: 8px; padding: 18px 20px; margin-bottom: 24px; background: var(--paper);">
                  
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                      <span class="nb-stamp ${q.isCompulsory ? 'nb-stamp--red' : 'nb-stamp--blue'}" style="font-weight: 800; font-size: 0.85rem;">
                        ${q.qNum} · ${q.marks} MARKS ${q.isCompulsory ? '· COMPULSORY' : '· ELECTIVE'}
                      </span>
                      ${q.bl ? `<span class="nb-stamp nb-stamp--amber" style="font-size: 0.75rem;">Bloom Level ${q.bl} (${q.blLabel || 'Applying'})</span>` : ''}
                      ${q.cos ? `<span class="nb-stamp nb-stamp--green" style="font-size: 0.75rem;">${escapeHtml(q.cos)}</span>` : ''}
                    </div>

                    <!-- Interactive Practice Checkbox & Timer Button -->
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <button class="nb-tbtn pyq-timer-btn" data-time="${q.marks >= 20 ? 40 : 25}" data-q-title="${escapeHtml(q.qNum + ' (' + paper.year + '): ' + q.text.substring(0, 45) + '...')}" type="button" title="Start timed exam practice in Pomodoro widget">
                        ⏱️ ${q.marks >= 20 ? '40m' : '25m'} Timer
                      </button>
                      <button class="nb-tbtn pyq-practice-toggle" data-pyq-id="${qGlobalId}" type="button" aria-pressed="false">
                        <span class="pyq-check-icon">□</span> <span class="pyq-check-label">Mark Practiced</span>
                      </button>
                    </div>
                  </div>

                  <!-- Authentic Question Text -->
                  <div style="margin: 12px 0 16px; padding: 14px 18px; background: var(--card); border-left: 4px solid var(--ink); border-radius: 4px; box-shadow: var(--shadow-card);">
                    <div style="font-size: 0.82rem; font-weight: 700; color: var(--pencil); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">
                      [ORIGINAL QUESTION TEXT — VERBATIM]
                    </div>
                    <div style="font-size: 1.18rem; font-family: var(--font-body); font-weight: 600; line-height: 1.5; color: var(--ink);">
                      ${escapeHtml(q.text)}
                    </div>
                    ${q.syllabusLink ? `
                    <div style="margin-top: 8px; font-size: 0.88rem; color: var(--pencil); font-family: var(--font-hand2);">
                      📍 <strong>Curriculum Mapping:</strong> ${escapeHtml(q.syllabusLink)} &nbsp;|&nbsp; 
                      ⏳ <strong>Suggested Time:</strong> ${q.suggestedTime || '25 mins'} &nbsp;|&nbsp;
                      📝 <strong>Target Length:</strong> ${q.suggestedLength || '500 words'}
                    </div>` : ''}
                  </div>

                  <!-- Target Evaluation Rubric -->
                  ${q.rubric && q.rubric.length ? `
                  <div style="margin: 12px 0; background: rgba(255, 242, 161, 0.45); border-radius: 6px; padding: 12px 16px;">
                    <strong style="display: block; font-family: var(--font-hand); font-size: 1.25rem; color: var(--ink); margin-bottom: 4px;">
                      🎯 Faculty Evaluation Rubric (What Examiners Look For):
                    </strong>
                    <ul style="margin: 0 0 0 14px; padding: 0; font-size: 0.95rem;">
                      ${q.rubric.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
                    </ul>
                  </div>` : ''}

                  <!-- Model Answer Framework Accordion -->
                  <details style="margin-top: 14px; border: 1.5px dashed var(--ink2); border-radius: 6px; padding: 12px 16px; background: rgba(255, 255, 255, 0.65);" open>
                    <summary style="font-family: var(--font-hand); font-size: 1.45rem; font-weight: 700; color: var(--ink2); cursor: pointer; user-select: none;">
                      ✨ AI MODEL ANSWER FRAMEWORK &amp; SOLUTION STRATEGY ▾
                    </summary>
                    <div style="margin-top: 12px; font-family: var(--font-body); font-size: 1.05rem; line-height: 1.6; color: var(--text);">
                      <div class="nb-stamp nb-stamp--green" style="margin-bottom: 12px; display: inline-block;">
                        [AI MODEL ANSWER FRAMEWORK — COMPREHENSIVE STUDY BLUEPRINT]
                      </div>
                      ${markdownToHtml(q.modelAnswerFramework)}
                    </div>
                  </details>

                </div>
`;
    });

    html += `
              </div>
            </div>
          </div>
`;
  });

  html += `
        </section>
`;

  return html;
}

module.exports = {
  buildPyqSectionHtml
};
