# builder_gm410/mod3_internal.py
# Module 3: Internal Capabilities, Competitive Positioning & Strategy Implementation

def get_mod3_html():
    return """
<section id="mod-3-internal-capabilities" class="sheet">
  <div class="kick">Module 3 · Capabilities &amp; Strategic Execution</div>
  <h2 class="mod-title">Internal Capabilities, Positioning &amp; Implementation</h2>

  <p>
    External analysis reveals where profit pools exist; internal capability analysis determines whether a specific firm has the unique resources, competencies, and organizational alignment to capture that profit. A defensible strategic position requires a clear choice between cost leadership and differentiation, backed by resources that satisfy the VRIO criteria. This module examines Porter's generic strategies, the Resource-Based View, TOWS formulation, the McKinsey 7S alignment model, and Roger Martin's integrative thinking doctrine.
  </p>

  <h3 class="sec-title" id="sec-generic-strategies">3.1 Porter's Generic Competitive Strategies</h3>
  <p>
    Michael Porter (1980, 1985) proved that a firm with average cost and average differentiation cannot earn superior returns. To achieve sustainable competitive advantage, a firm must make an unambiguous choice along two strategic dimensions: <strong>Strategic Scope</strong> (Broad Market vs Narrow Niche) and <strong>Source of Competitive Advantage</strong> (Low Cost vs Differentiation).
  </p>

  <!-- Porter Generic 2x2 SVG -->
  <div class="nb-diagram-card">
    <h4 class="nb-card__title">Porter's Generic Strategies Matrix</h4>
    <svg class="nb-diagram" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg">
      <!-- Axis Labels -->
      <text x="450" y="30" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#1d3c8c" text-anchor="middle">SOURCE OF COMPETITIVE ADVANTAGE</text>
      <text x="260" y="60" font-family="Source Sans 3, sans-serif" font-size="14" font-weight="700" fill="#525660" text-anchor="middle">Low Cost</text>
      <text x="590" y="60" font-family="Source Sans 3, sans-serif" font-size="14" font-weight="700" fill="#525660" text-anchor="middle">Differentiation (Uniqueness)</text>

      <text x="40" y="220" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d3c8c" transform="rotate(-90 40 220)" text-anchor="middle">STRATEGIC SCOPE</text>
      <text x="90" y="150" font-family="Source Sans 3, sans-serif" font-size="14" font-weight="700" fill="#525660" text-anchor="middle">Broad Target</text>
      <text x="90" y="310" font-family="Source Sans 3, sans-serif" font-size="14" font-weight="700" fill="#525660" text-anchor="middle">Narrow Target</text>

      <!-- Quadrant 1: Cost Leadership -->
      <rect x="140" y="80" width="240" height="150" rx="6" fill="#fffdf7" stroke="#1d3c8c" stroke-width="2" />
      <text x="260" y="125" font-family="Source Sans 3, sans-serif" font-size="18" font-weight="700" fill="#1d3c8c" text-anchor="middle">COST LEADERSHIP</text>
      <text x="260" y="155" font-family="Source Sans 3, sans-serif" font-size="13" fill="#525660" text-anchor="middle">Lowest producer cost across industry</text>
      <text x="260" y="180" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="600" fill="#1d7a45" text-anchor="middle">Example: IndiGo, Walmart, IKEA</text>

      <!-- Quadrant 2: Differentiation -->
      <rect x="420" y="80" width="240" height="150" rx="6" fill="#fffdf7" stroke="#1d3c8c" stroke-width="2" />
      <text x="540" y="125" font-family="Source Sans 3, sans-serif" font-size="18" font-weight="700" fill="#1d3c8c" text-anchor="middle">DIFFERENTIATION</text>
      <text x="540" y="155" font-family="Source Sans 3, sans-serif" font-size="13" fill="#525660" text-anchor="middle">Unique value buyers pay a premium for</text>
      <text x="540" y="180" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="600" fill="#1d7a45" text-anchor="middle">Example: Apple, BMW, NVIDIA</text>

      <!-- Quadrant 3: Cost Focus -->
      <rect x="140" y="245" width="240" height="150" rx="6" fill="#fffdf7" stroke="#1d3c8c" stroke-width="2" />
      <text x="260" y="290" font-family="Source Sans 3, sans-serif" font-size="18" font-weight="700" fill="#1d3c8c" text-anchor="middle">COST FOCUS</text>
      <text x="260" y="320" font-family="Source Sans 3, sans-serif" font-size="13" fill="#525660" text-anchor="middle">Low-cost producer in a niche segment</text>
      <text x="260" y="345" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="600" fill="#1d7a45" text-anchor="middle">Example: Air Arabia, Aldi (regional)</text>

      <!-- Quadrant 4: Differentiation Focus -->
      <rect x="420" y="245" width="240" height="150" rx="6" fill="#fffdf7" stroke="#1d3c8c" stroke-width="2" />
      <text x="540" y="290" font-family="Source Sans 3, sans-serif" font-size="18" font-weight="700" fill="#1d3c8c" text-anchor="middle">DIFFERENTIATION FOCUS</text>
      <text x="540" y="320" font-family="Source Sans 3, sans-serif" font-size="13" fill="#525660" text-anchor="middle">Bespoke uniqueness for elite niche</text>
      <text x="540" y="345" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="600" fill="#1d7a45" text-anchor="middle">Example: Ferrari, Bang &amp; Olufsen</text>
    </svg>
    <p class="src">Figure 3.1: Porter's Generic Strategies. Attempting both without innovation leads to 'Stuck in the Middle'.</p>
  </div>

  <div class="nb-callout nb-callout--danger">
    <span class="nb-callout__tag">The 'Stuck in the Middle' Strategic Trap</span>
    Porter warns that firms attempting to pursue cost leadership and differentiation simultaneously without a structural breakthrough get <em>stuck in the middle</em>. They incur the higher overhead of differentiation (R&amp;D, marketing) but lack the customer loyalty to charge a premium, while simultaneously lacking the massive volume to achieve the cost structure of true cost leaders. Examples include Sears, Jet Airways, and traditional department stores. (Note: Blue Ocean Strategy challenges this dogma through <em>Value Innovation</em>, as taught in Module 5).
  </div>

  <h3 class="sec-title" id="sec-vrio-framework">3.2 Resource-Based View (RBV) &amp; The VRIO Framework</h3>
  <p>
    The Resource-Based View (Wernerfelt, 1984; Barney, 1991) posits that competitive advantage originates inside the firm in its unique bundle of physical, financial, human, and intellectual assets. Jay Barney established the <strong>VRIO Framework</strong> to evaluate whether a specific resource can generate sustained economic rents.
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>VRIO Dimension</th>
          <th>Core Evaluation Criterion</th>
          <th>If 'NO' &rarr; Competitive Status</th>
          <th>If 'YES' &rarr; Next Hurdle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Valuable (V)</strong></td>
          <td>Does the resource enable the firm to exploit an external opportunity or neutralize an external threat?</td>
          <td><strong>Competitive Disadvantage:</strong> The firm earns below-average returns and burns capital.</td>
          <td>Proceed to Rarity (R).</td>
        </tr>
        <tr>
          <td><strong>2. Rare (R)</strong></td>
          <td>Is the resource controlled by only a small number of competing firms in the industry?</td>
          <td><strong>Competitive Parity:</strong> Necessary for industry survival, but earns only normal economic returns.</td>
          <td>Proceed to Inimitability (I).</td>
        </tr>
        <tr>
          <td><strong>3. Inimitable (I)</strong></td>
          <td>Do firms without the resource face a severe cost or time disadvantage in acquiring or developing it? (Causal ambiguity, path dependency, social complexity).</td>
          <td><strong>Temporary Competitive Advantage:</strong> Yields superior returns until rivals replicate or bypass the asset.</td>
          <td>Proceed to Organization (O).</td>
        </tr>
        <tr>
          <td><strong>4. Organized (O)</strong></td>
          <td>Is the firm structured with aligned management systems, reporting lines, and incentives to capture value from the asset?</td>
          <td><strong>Unrealized Competitive Advantage:</strong> The firm possesses an elite asset but fails to monetize it (e.g., Xerox PARC inventing the graphical UI).</td>
          <td><strong>SUSTAINED COMPETITIVE ADVANTAGE</strong> (Supernormal ROIC).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="nb-card">
    <h4 class="nb-card__title">Applied VRIO Audit: NVIDIA's CUDA Software Ecosystem</h4>
    <ul>
      <li><strong>Valuable (V)? YES:</strong> Allows millions of developers to program massively parallel GPU cores using standard C/C++ libraries, making NVIDIA chips the default AI runtime.</li>
      <li><strong>Rare (R)? YES:</strong> No competing semiconductor manufacturer has a developer ecosystem with 5+ million specialized AI engineers.</li>
      <li><strong>Inimitable (I)? YES:</strong> 18+ years of accumulated academic code, optimized deep learning libraries (cuDNN, TensorRT), and path-dependent software workflows create severe causal ambiguity and developer switching costs.</li>
      <li><strong>Organized (O)? YES:</strong> NVIDIA distributes CUDA free of charge to researchers, co-designs chips directly with software teams, and packages hardware-software bundles (DGX SuperPOD).</li>
      <li><strong>Conclusion:</strong> <strong>Sustained Competitive Advantage</strong> resulting in 80%+ market share and ~78% gross margins in data centers.</li>
    </ul>
  </div>

  <h3 class="sec-title" id="sec-tows-matrix">3.3 The TOWS Formulation Matrix</h3>
  <p>
    Heinz Weihrich (1982) demonstrated that a static SWOT analysis is useless unless it is converted into actionable strategic pairings. The <strong>TOWS Matrix</strong> pairs internal Strengths (S) and Weaknesses (W) with external Opportunities (O) and Threats (T) to generate four distinct strategic postures:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>TOWS Dimension</th>
          <th>Internal Strengths (S)</th>
          <th>Internal Weaknesses (W)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>External Opportunities (O)</strong></td>
          <td><strong>SO Strategies (Maxi-Maxi):</strong> Use internal strengths to aggressively capitalize on external opportunities (e.g. NVIDIA using its CUDA developer base to capture sovereign AI government investments).</td>
          <td><strong>WO Strategies (Mini-Maxi):</strong> Overcome internal weaknesses by seizing external market opportunities (e.g. Nimbus Bank deploying a pre-built vendor ML underwriting model to fix slow loan turnaround times).</td>
        </tr>
        <tr>
          <td><strong>External Threats (T)</strong></td>
          <td><strong>ST Strategies (Maxi-Mini):</strong> Use internal strengths to neutralize or minimize external industry threats (e.g. Amazon utilizing AWS cloud cash flow to absorb e-commerce tariff shocks).</td>
          <td><strong>WT Strategies (Mini-Mini):</strong> Defensive strategies aimed at minimizing internal weaknesses and avoiding external threats (e.g. joint ventures, asset divestiture, or retreating from unviable product lines).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sec-title" id="sec-mckinsey-7s">3.4 The McKinsey 7S Organizational Alignment Framework</h3>
  <p>
    Formulated by Robert Waterman, Tom Peters, and Julien Phillips (1980), the <strong>McKinsey 7S Framework</strong> demonstrates that strategy execution fails when executives focus solely on structure without aligning culture, skills, and systems. The 7 elements are divided into "Hard" Ss (tangible, easy to define) and "Soft" Ss (intangible, cultural), with <strong>Shared Values</strong> at the center:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Classification</th>
          <th>Executive Definition &amp; Diagnostic Question</th>
          <th>Application in Technology Transformation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Strategy</strong></td>
          <td>Hard S</td>
          <td>The plan devised to build competitive advantage. <em>"How do we create value?"</em></td>
          <td>Pivoting from manual rule-based decisioning to real-time predictive analytics.</td>
        </tr>
        <tr>
          <td><strong>Structure</strong></td>
          <td>Hard S</td>
          <td>Organizational hierarchy, reporting lines, and division of labor.</td>
          <td>Breaking down functional siloes between business unit credit officers and data scientists.</td>
        </tr>
        <tr>
          <td><strong>Systems</strong></td>
          <td>Hard S</td>
          <td>Daily procedures, IT infrastructure, workflows, and resource allocation.</td>
          <td>Replacing batch core banking systems with real-time API event streams and MLOps monitoring.</td>
        </tr>
        <tr>
          <td><strong>Shared Values</strong></td>
          <td>Core S</td>
          <td>The central beliefs, mission, and collective norms uniting the workforce.</td>
          <td>Cultivating an experimental data-driven culture that celebrates fast failure over bureaucratic consensus.</td>
        </tr>
        <tr>
          <td><strong>Style</strong></td>
          <td>Soft S</td>
          <td>The leadership behavior, executive tone, and organizational culture.</td>
          <td>Transformational leadership modeling continuous learning and transparent algorithmic accountability.</td>
        </tr>
        <tr>
          <td><strong>Staff</strong></td>
          <td>Soft S</td>
          <td>The employee base, demographics, recruitment, and talent management.</td>
          <td>Hiring ML engineers and retraining domain underwriters as AI copilots.</td>
        </tr>
        <tr>
          <td><strong>Skills</strong></td>
          <td>Soft S</td>
          <td>The distinctive institutional capabilities and competencies of the firm.</td>
          <td>Upgrading from basic SQL reporting to statistical modeling, A/B testing, and prompt engineering.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sec-title" id="sec-integrative-thinking">3.5 Roger Martin's Integrative Thinking Doctrine</h3>
  <p>
    In <em>"The Art of Integrative Thinking"</em> (Roger Martin &amp; Hilary Austen, 1999), the authors examine how world-class business leaders resolve painful strategic trade-offs. Rather than settling for a mediocre compromise (choosing <em>either</em> low cost <em>or</em> high quality), integrative thinkers hold two opposing models in tension to generate a superior third model.
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Stage of Decision</th>
          <th>Integrative Thinker Mindset</th>
          <th>Non-Integrative (Conventional) Thinker Mindset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Salience</strong></td>
          <td>Includes multifaceted, complex variables (even messy cultural and ethical factors) until the "salience threshold" is reached. Uses sensitivity to detect nuances.</td>
          <td>Arbitrarily discards difficult variables to simplify the problem (e.g. an operations manager ignoring community environmental backlash).</td>
        </tr>
        <tr>
          <td><strong>2. Causality</strong></td>
          <td>Constructs multidirectional, non-linear causal loops. Acknowledges feedback delays and keeps multiple competing hypotheses alive.</td>
          <td>Assumes simplistic, one-way linear causation (e.g. "cutting maintenance spend automatically raises net profit").</td>
        </tr>
        <tr>
          <td><strong>3. Sequencing / Architecture</strong></td>
          <td>Holistically envisions the entire system while choosing the optimal architectural entry point. Revisits earlier assumptions as data unfolds.</td>
          <td>Splits the challenge into isolated sub-problems and solves them piecemeal (causing departmental warfare between Finance and Operations).</td>
        </tr>
        <tr>
          <td><strong>4. Resolution</strong></td>
          <td>Treats trade-offs as creative tensions to be synthesized into breakthrough innovations (e.g., Value Innovation).</td>
          <td>Accepts trade-offs as painful zero-sum binds and settles for sub-optimal political compromises.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
"""
