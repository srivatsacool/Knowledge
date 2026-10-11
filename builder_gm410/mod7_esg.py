# builder_gm410/mod7_esg.py
# Module 7: Sustainability, Ethics, ESG, Governance & Financial Forensics

def get_mod7_html():
    return """
<section id="mod-7-sustainability-ethics" class="sheet">
  <div class="kick">Module 7 · Governance, Ethics &amp; Forensics</div>
  <h2 class="mod-title">Sustainability, Ethics, ESG &amp; Financial Forensics</h2>

  <p>
    Modern corporate strategy must integrate societal and environmental externalities into executive decision-making. Investors, regulators, and consumers increasingly scrutinize the authenticity of corporate behavior. This module covers business ethics, John Elkington's Triple Bottom Line, Archie Carroll's CSR Pyramid, Dunphy's Corporate Sustainability Phase Model, ESG investor scrutiny, and forensic accounting models (Altman Z-Score and Beneish M-Score).
  </p>

  <h3 class="sec-title" id="sec-business-ethics">7.1 Business Ethics &amp; Enterprise Longevity (2024 PYQ 1a)</h3>
  <p>
    <em>Exam Prompt: Why is business ethics important for an organisation to prosper and sustain itself? (6 Marks)</em>
  </p>
  <p>
    Business ethics is not an optional philanthropic gesture; it is a foundational risk management mechanism that preserves <strong>reputational capital and economic legitimacy</strong>:
  </p>
  <ul>
    <li><strong>1. Preservation of Trust &amp; Customer Lifetime Value:</strong> Opportunistic or deceitful practices (e.g. hidden charges, counterfeit quality) create short-term revenue spikes but trigger permanent customer churn. Trust creates brand loyalty and price insensitivity.</li>
    <li><strong>2. Lower Cost of Capital &amp; Credit Ratings:</strong> Ethical corporations enjoy lower bond yields and higher credit ratings because banks and institutional investors price in lower legal, regulatory, and fraud risks.</li>
    <li><strong>3. Talent Attraction &amp; Employee Retention:</strong> High-performing professionals refuse to work for toxic or unethical leadership. Ethical corporate cultures reduce voluntary employee turnover and boost productivity.</li>
    <li><strong>4. Insulation Against Regulatory Intervention:</strong> Companies that proactively uphold high ethical standards preempt punitive antitrust, environmental, and labor regulations that destroy corporate value.</li>
  </ul>

  <!-- TBL & Carroll's Pyramid Diagrams -->
  <div class="nb-diagram-card">
    <h3 class="sec-title" id="sec-tbl-carroll">7.2 Triple Bottom Line &amp; Carroll's CSR Pyramid</h3>
    <svg class="nb-diagram" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
      <!-- Left: TBL Venn -->
      <g transform="translate(60, 40)">
        <text x="140" y="20" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#1d3c8c" text-anchor="middle">TRIPLE BOTTOM LINE (TBL)</text>
        <circle cx="140" cy="120" r="70" fill="rgba(29, 60, 140, 0.35)" />
        <circle cx="95" cy="190" r="70" fill="rgba(29, 122, 69, 0.35)" />
        <circle cx="185" cy="190" r="70" fill="rgba(184, 110, 0, 0.35)" />
        <text x="140" y="100" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="700" fill="#1d3c8c" text-anchor="middle">PROFIT</text>
        <text x="80" y="210" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="700" fill="#1d7a45" text-anchor="middle">PLANET</text>
        <text x="200" y="210" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="700" fill="#b86e00" text-anchor="middle">PEOPLE</text>
        <text x="140" y="170" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="800" fill="#7a1526" text-anchor="middle">SUSTAINABLE</text>
        <text x="140" y="285" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">John Elkington (1994)</text>
      </g>

      <!-- Right: Carroll's Pyramid -->
      <g transform="translate(420, 40)">
        <text x="180" y="20" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#8b1e2f" text-anchor="middle">CARROLL'S CSR PYRAMID</text>
        <!-- Philanthropic -->
        <polygon points="180,50 110,105 250,105" fill="#fef2f2" stroke="#8b1e2f" stroke-width="2" />
        <text x="180" y="85" font-family="Source Sans 3, sans-serif" font-size="11" font-weight="700" fill="#8b1e2f" text-anchor="middle">PHILANTHROPIC (Desired)</text>
        <!-- Ethical -->
        <polygon points="110,105 70,165 290,165 250,105" fill="#fffbeb" stroke="#b86e00" stroke-width="2" />
        <text x="180" y="140" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#b86e00" text-anchor="middle">ETHICAL (Expected)</text>
        <!-- Legal -->
        <polygon points="70,165 30,225 330,225 290,165" fill="#f0fdf4" stroke="#1d7a45" stroke-width="2" />
        <text x="180" y="200" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#1d7a45" text-anchor="middle">LEGAL (Required)</text>
        <!-- Economic -->
        <polygon points="30,225 0,285 360,285 330,225" fill="#eff6ff" stroke="#1d3c8c" stroke-width="2" />
        <text x="180" y="260" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="700" fill="#1d3c8c" text-anchor="middle">ECONOMIC BASE (Required / Profitable)</text>
        <text x="180" y="315" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Archie Carroll (1979, 1991)</text>
      </g>
    </svg>
    <p class="src">Figure 7.1: Comparative Architecture of TBL (Elkington) and Carroll's Pyramid of Corporate Social Responsibility.</p>
  </div>

  <div class="nb-card">
    <h4 class="nb-card__title">Deploying TBL across Strategic Intent (2024 PYQ 1b)</h4>
    <p>
      <em>How does an enterprise operationalize the Triple Bottom Line across its Vision, Mission, and Objectives?</em>
    </p>
    <ul>
      <li><strong>Profit Dimension:</strong> Anchors the Economic baseline. Explicitly defined in financial terms: ROIC &gt; WACC, sustainable free cash flow, reinvestment in innovation.</li>
      <li><strong>People Dimension:</strong> Anchors Social Equity. Integrated into HR and community goals: fair living wages across the supply chain, occupational safety zero-harm targets, non-discriminatory hiring, and community welfare programs.</li>
      <li><strong>Planet Dimension:</strong> Anchors Environmental Stewardship. Quantified via measurable science-based targets: carbon neutrality deadlines, 100% water replenishment in bottling plants, circular packaging, and zero landfill waste.</li>
    </ul>
  </div>

  <h3 class="sec-title" id="sec-dunphy-model">7.3 Dunphy, Griffiths &amp; Benn Phase Model (3 Waves &amp; 6 Steps · 2023 PYQ 5)</h3>
  <p>
    Dexter Dunphy, Andrew Griffiths, and Suzanne Benn (2003, 2007) formulated the seminal <strong>Corporate Sustainability Phase Model</strong>. It traces the corporate maturity progression across three evolutionary waves and six discrete stages:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Evolutionary Wave</th>
          <th>Phase Stage</th>
          <th>Strategic Philosophy &amp; Mindset</th>
          <th>Corporate Behavior &amp; Case Evidence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"><strong>Wave 1: Opposition &amp; Ignorance</strong></td>
          <td><strong>1. Rejection</strong></td>
          <td>Hostile to sustainability; views environmental laws as an infringement on property rights. Exploits resources and labor.</td>
          <td>Illegal dumping, sweatshop labor, active political lobbying against safety mandates.</td>
        </tr>
        <tr>
          <td><strong>2. Non-Responsiveness</strong></td>
          <td>Ignorant of sustainability; business-as-usual mindset. Unaware of ecological threats.</td>
          <td>Fails to track carbon or water footprints; views community fallout as someone else's problem.</td>
        </tr>
        <tr>
          <td rowspan="3"><strong>Wave 2: Compliance &amp; Operational Efficiency</strong></td>
          <td><strong>3. Compliance</strong></td>
          <td>Reactive legal adherence. Acts as a "decent corporate citizen" solely to avoid fines and litigation.</td>
          <td>Installs basic wastewater filtration plants; follows food safety standards (Coca-Cola India).</td>
        </tr>
        <tr>
          <td><strong>4. Efficiency</strong></td>
          <td>Realizes eco-efficiency cuts operating costs. "Doing well by doing good" via energy/water conservation.</td>
          <td>Lightweighting PET bottles, rooftop solar panels on bottling plants, reducing waste in transit.</td>
        </tr>
        <tr>
          <td><strong>5. Strategic Proactivity</strong></td>
          <td>Integrates sustainability directly into core competitive strategy to capture market differentiation.</td>
          <td>Developing bio-based PlantBottle packaging; introducing zero-sugar beverage product lines.</td>
        </tr>
        <tr>
          <td><strong>Wave 3: Transformation</strong></td>
          <td><strong>6. The Sustaining Corporation</strong></td>
          <td>Holistic ecological balance and social justice embedded into the fundamental corporate mission.</td>
          <td>Works actively with NGOs, governments, and rivals to regenerate global watersheds and restore ecosystems.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sec-title" id="sec-forensics">7.4 Financial Forensics: Altman Z-Score &amp; Beneish M-Score (2024 PYQ 1f)</h3>
  <p>
    <em>Exam Prompt: How do the Beneish M-Score and Altman Z-Score help predict bankruptcy status? (6 Marks)</em>
  </p>
  <p>
    While both are quantitative models based on financial statements, they solve two entirely different forensic problems:
  </p>

  <div class="nb-fbox">
    <span class="nb-fbox__label">Altman Z-Score Model (Edward Altman, 1968) · Solvency &amp; Distress Risk</span>
    <div class="nb-fbox__math">
      Z = 1.2(X₁) + 1.4(X₂) + 3.3(X₃) + 0.6(X₄) + 1.0(X₅)
    </div>
    <dl class="nb-fbox__dict">
      <dt>X₁ (Working Capital / Total Assets):</dt>
      <dd>Measures short-term balance sheet liquidity.</dd>
      <dt>X₂ (Retained Earnings / Total Assets):</dt>
      <dd>Measures cumulative profitability and corporate age/resilience.</dd>
      <dt>X₃ (EBIT / Total Assets):</dt>
      <dd>Measures operational asset productivity (heaviest weighting: 3.3x).</dd>
      <dt>X₄ (Market Value of Equity / Total Liabilities):</dt>
      <dd>Measures leverage and financial solvency buffer.</dd>
      <dt>X₅ (Sales / Total Assets):</dt>
      <dd>Measures asset turnover and sales efficiency.</dd>
    </dl>
    <p style="margin-top:10px; font-weight:700;">
      <strong>Decision Thresholds:</strong><br>
      &bull; <strong>Z &gt; 2.99:</strong> <span class="nb-stamp nb-stamp--green">Safe Zone</span> (Negligible risk of insolvency).<br>
      &bull; <strong>1.81 &le; Z &le; 2.99:</strong> <span class="nb-stamp nb-stamp--amber">Grey Zone</span> (Caution; elevated financial vulnerability).<br>
      &bull; <strong>Z &lt; 1.81:</strong> <span class="nb-stamp nb-stamp--red">Distress Zone</span> (High statistical probability of bankruptcy within 2 years).
    </p>
  </div>

  <div class="nb-fbox">
    <span class="nb-fbox__label">Beneish M-Score Model (Messod Beneish, 1999) · Earnings Manipulation Detection</span>
    <p>
      The Beneish M-Score detects whether a company is <strong>artificially cooking its books</strong> using 8 financial statement indices:
    </p>
    <ul>
      <li><strong>DSRI (Days Sales in Receivables Index):</strong> Checks if receivables are growing faster than revenues (accelerating unearned revenue).</li>
      <li><strong>GMI (Gross Margin Index):</strong> Checks if profit margins are deteriorating, creating executive pressure to manipulate.</li>
      <li><strong>AQI (Asset Quality Index):</strong> Checks if non-current intangible assets are inflating (capitalizing normal expenses).</li>
      <li><strong>SGI (Sales Growth Index):</strong> Checks if rapid growth is slowing, tempting revenue inflation.</li>
      <li><strong>DEPI (Depreciation Index):</strong> Checks if depreciation schedules are being extended to lower expense.</li>
      <li><strong>SGAI (SG&amp;A Expense Index):</strong> Checks if overhead efficiency is deteriorating.</li>
      <li><strong>LVGI (Leverage Index):</strong> Checks if debt levels are increasing, raising loan covenant risks.</li>
      <li><strong>TATA (Total Accruals to Total Assets):</strong> Measures discretionary accounting accruals relative to hard cash flow.</li>
    </ul>
    <p style="font-weight:700;">
      <strong>Decision Threshold:</strong> If <strong>M-Score &gt; -1.78</strong> (i.e. less negative), there is a high probability that the firm is <strong>manipulating its financial earnings</strong> (as demonstrated prior to the collapses of Enron and Wirecard).
    </p>
  </div>

  <div class="nb-callout">
    <span class="nb-callout__tag">Forensic Synthesis for Investors &amp; Lenders</span>
    <strong>Beneish checks whether the reported financial statements can be trusted; Altman uses the financial statements to determine if the firm will survive.</strong> An executive or private equity analyst always calculates the Beneish M-Score first. If the M-Score indicates manipulation, the reported Altman Z-Score is untrustworthy and likely hides imminent bankruptcy.
  </div>
</section>
"""
