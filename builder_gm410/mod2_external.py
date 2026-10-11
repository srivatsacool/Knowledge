# builder_gm410/mod2_external.py
# Module 2: External Analysis, Industry Forces & Competitive Environment

def get_mod2_html():
    return """
<section id="mod-2-external-analysis" class="sheet">
  <div class="kick">Module 2 · External Environmental Scanning</div>
  <h2 class="mod-title">External Analysis &amp; Competitive Environment</h2>

  <p>
    No firm operates in a vacuum. Industry structure and macroeconomic forces dictate the distribution of economic value between producers, buyers, suppliers, new entrants, and substitutes. An integrative manager must diagnose external environmental volatility to identify profit pools, forecast competitor behavior, and protect long-term margins. This module teaches Michael Porter's Five Forces of industry structure, PESTEL macroeconomic scanning, and applied tariff shock management.
  </p>

  <h3 class="sec-title" id="sec-five-forces">2.1 Michael Porter's Five Forces of Industry Attractiveness</h3>
  <p>
    Michael Porter (1979, 2008) established that industry profitability is not determined by whether an industry is high-tech or low-tech, rapidly growing or mature, but by its <strong>underlying economic structure</strong>. The five forces collectively govern the intensity of price competition and the average return on invested capital (ROIC) across the industry.
  </p>

  <!-- Porter's Five Forces SVG Diagram -->
  <div class="nb-diagram-card">
    <h4 class="nb-card__title">Porter's Five Forces Structural Architecture</h4>
    <svg class="nb-diagram" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#1d3c8c" />
        </marker>
      </defs>
      <!-- Center: Rivalry -->
      <rect x="280" y="180" width="240" height="120" rx="8" fill="#1d3c8c" />
      <text x="400" y="225" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">RIVALRY AMONG</text>
      <text x="400" y="248" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">EXISTING COMPETITORS</text>
      <text x="400" y="275" font-family="Source Sans 3, sans-serif" font-size="12" fill="#d9ecff" text-anchor="middle">Number of rivals, industry growth, exit barriers</text>

      <!-- Top: New Entrants -->
      <rect x="280" y="20" width="240" height="90" rx="8" fill="#fffdf7" stroke="#8b1e2f" stroke-width="2" />
      <text x="400" y="55" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#8b1e2f" text-anchor="middle">THREAT OF NEW ENTRANTS</text>
      <text x="400" y="78" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Capital scale, economies of scale, patents, switching costs</text>
      <line x1="400" y1="110" x2="400" y2="175" stroke="#1d3c8c" stroke-width="2" marker-end="url(#arr)" />

      <!-- Bottom: Substitutes -->
      <rect x="280" y="370" width="240" height="90" rx="8" fill="#fffdf7" stroke="#8b1e2f" stroke-width="2" />
      <text x="400" y="405" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#8b1e2f" text-anchor="middle">THREAT OF SUBSTITUTES</text>
      <text x="400" y="428" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Relative price-performance, switching costs, buyer propensity</text>
      <line x1="400" y1="370" x2="400" y2="305" stroke="#1d3c8c" stroke-width="2" marker-end="url(#arr)" />

      <!-- Left: Supplier Power -->
      <rect x="20" y="180" width="210" height="120" rx="8" fill="#fffdf7" stroke="#1d7a45" stroke-width="2" />
      <text x="125" y="225" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d7a45" text-anchor="middle">BARGAINING POWER</text>
      <text x="125" y="248" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d7a45" text-anchor="middle">OF SUPPLIERS</text>
      <text x="125" y="275" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Supplier concentration, inputs</text>
      <line x1="230" y1="240" x2="275" y2="240" stroke="#1d3c8c" stroke-width="2" marker-end="url(#arr)" />

      <!-- Right: Buyer Power -->
      <rect x="570" y="180" width="210" height="120" rx="8" fill="#fffdf7" stroke="#1d7a45" stroke-width="2" />
      <text x="675" y="225" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d7a45" text-anchor="middle">BARGAINING POWER</text>
      <text x="675" y="248" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d7a45" text-anchor="middle">OF BUYERS</text>
      <text x="675" y="275" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Buyer volume, price sensitivity</text>
      <line x1="570" y1="240" x2="525" y2="240" stroke="#1d3c8c" stroke-width="2" marker-end="url(#arr)" />
    </svg>
    <p class="src">Figure 2.1: Porter's Structural Industry Model. Profitability is squeezed when forces are strong.</p>
  </div>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Competitive Force</th>
          <th>Structural Economic Drivers</th>
          <th>Managerial Implications for Profitability</th>
          <th>Case Context Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Threat of New Entrants</strong></td>
          <td>Supply-side economies of scale, capital intensity, brand equity, proprietary tech, distribution lock-in, regulatory licenses.</td>
          <td>High barriers keep out copycats, allowing incumbents to earn supernormal economic profits.</td>
          <td><strong>Semiconductor Fabs:</strong> TSMC's $20B+ fab cost and extreme EUV lithography create an almost insurmountable barrier to entry.</td>
        </tr>
        <tr>
          <td><strong>2. Bargaining Power of Suppliers</strong></td>
          <td>High supplier concentration, high switching costs for the buyer, proprietary or differentiated input, lack of viable substitutes.</td>
          <td>Powerful suppliers capture industry profit by raising input prices or rationing critical supply throughput.</td>
          <td><strong>ASML to Chipmakers:</strong> ASML holds an absolute global monopoly on EUV lithography equipment, exercising immense pricing power.</td>
        </tr>
        <tr>
          <td><strong>3. Bargaining Power of Buyers</strong></td>
          <td>Buyer concentration (few large customers), standardized products, low buyer switching costs, credible threat of backward integration.</td>
          <td>Powerful buyers squeeze producer margins by demanding discounts, customized SLAs, or threatening in-house production.</td>
          <td><strong>Hyperscalers to NVIDIA:</strong> Microsoft, Google, AWS, and Meta represent ~40% of NVIDIA's revenue and are actively designing in-house chips (Maia, TPU, Trainium).</td>
        </tr>
        <tr>
          <td><strong>4. Threat of Substitute Products</strong></td>
          <td>Attractive relative price-performance trade-off offered by outside industries, buyer propensity to substitute, low switching barrier.</td>
          <td>Substitutes place a hard ceiling on the maximum price an industry can charge before demand flees.</td>
          <td><strong>Rail &amp; Teleconferencing vs Air Travel:</strong> Zoom/Teams video conferencing serves as a structural substitute for business travel, permanently eroding airline business-class demand.</td>
        </tr>
        <tr>
          <td><strong>5. Rivalry Among Existing Competitors</strong></td>
          <td>Numerous or equally balanced competitors, slow industry growth, high fixed costs/storage costs, low differentiation, high exit barriers.</td>
          <td>Intense rivalry triggers destructive price cutting, heavy advertising battles, and compressed returns on capital.</td>
          <td><strong>Indian Telecom:</strong> Intense price wars following Reliance Jio's entry drove average revenue per user (ARPU) to historic lows and forced consolidation.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sec-title" id="sec-pestel-framework">2.2 PESTEL Macro-Environmental Analysis</h3>
  <p>
    While Porter's Five Forces analyzes the immediate task environment, the <strong>PESTEL Framework</strong> (Aguilar, 1967; Johnson et al., 2008) audits the macro-environment. Macroeconomic forces alter customer demand, disrupt input costs, and create unexpected regulatory shocks.
  </p>

  <div class="nb-card">
    <h4 class="nb-card__title">Worked Exam Application · 2025 PYQ 1(f): PESTEL for a Wearable Fitness Device &amp; Tariff Shocks</h4>
    <p>
      <em>Exam Prompt: Formulate a PESTEL analysis for a company launching a new wearable fitness device. How should the firm handle tariff impacts? (6 Marks)</em>
    </p>

    <div class="tblwrap">
      <table class="nb-table">
        <thead>
          <tr>
            <th>PESTEL Factor</th>
            <th>Key Environmental Drivers &amp; Industry Issues</th>
            <th>Operational Mitigation &amp; Strategic Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Political (P)</strong></td>
            <td>Trade protectionism, import tariffs on electronics, geopolitical tensions impacting component supply from East Asia.</td>
            <td><strong>Tariff Shock Strategy:</strong> Adopt a "China+1" or local CKD (Completely Knocked Down) assembly strategy in India/Vietnam to bypass finished-goods import levies.</td>
          </tr>
          <tr>
            <td><strong>Economic (E)</strong></td>
            <td>Discretionary consumer spending, inflation eroding disposable income, currency depreciation increasing imported BOM costs.</td>
            <td>Introduce tiered pricing: premium hardware alongside an accessible subscription-bundled entry model.</td>
          </tr>
          <tr>
            <td><strong>Social (S)</strong></td>
            <td>Post-pandemic health consciousness, preventive wellness trends, aging demographics tracking heart rate and sleep metrics.</td>
            <td>Tailor product features to wellness monitoring, gamified fitness social challenges, and senior heart telemetry.</td>
          </tr>
          <tr>
            <td><strong>Technological (T)</strong></td>
            <td>Miniaturization of photoplethysmography (PPG) sensors, battery life extensions, edge AI algorithms analyzing real-time ECG.</td>
            <td>Invest in proprietary on-device ML filtering to deliver clinical-grade accuracy with ultra-low battery drain.</td>
          </tr>
          <tr>
            <td><strong>Environmental (E)</strong></td>
            <td>E-waste regulations (WEEE), consumer demand for sustainable packaging, cobalt and lithium extraction scrutiny.</td>
            <td>Design for circularity: 100% recycled aluminum casing, modular battery replacement, and trade-in recycling discounts.</td>
          </tr>
          <tr>
            <td><strong>Legal (L)</strong></td>
            <td>Health data privacy regulations (GDPR, India DPDP Act 2023), medical device compliance certifications (FDA/CDSCO).</td>
            <td>Store biometric telemetry locally on-device with zero unconsented cloud uploading; obtain certified medical compliance.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="nb-sticky nb-sticky--green">
      <div class="nb-sticky__title">Executive Playbook: Mitigating 25% Tariff Increases</div>
      If import tariffs surge by 25%:
      <br>1. <strong>Value Engineering:</strong> Re-engineer BOM to replace imported sub-assemblies with domestically sourced alternatives.
      <br>2. <strong>Assembly Localization:</strong> Shift from importing CBU (Completely Built Units, 25% duty) to SKD (Semi-Knocked Down, 5–10% duty) assembled in local domestic tariff zones.
      <br>3. <strong>Software Monetization:</strong> Lower hardware margin and recoup profits via a monthly AI analytics premium tier (software is not subject to physical border customs tariffs).
    </div>
  </div>

  <div class="nb-card">
    <h4 class="nb-card__title">Worked Exam Application · 2024 PYQ 1(g): Using PESTLE to Spot Industry Opportunities (Electric Two-Wheeler)</h4>
    <p>
      <em>Exam Prompt: How can a company use PESTLE to spot opportunities in an industry? Give examples for a new product launch. (6 Marks)</em>
    </p>
    <p>
      Opportunities arise when macro shifts create an <strong>unmet customer need</strong> or remove historical cost barriers. For an affordable Electric Two-Wheeler (E2W) in India:
    </p>
    <ul>
      <li><strong>Political/Legal Opportunity:</strong> Government subsidies (FAME II / PM E-Drive) and state EV incentives reduce consumer sticker price by 15–20%. Zero tailpipe emission mandates in municipal commercial fleets force delivery aggregators (Zomato, Swiggy) to electrify 100% of their fleets.</li>
      <li><strong>Economic Opportunity:</strong> Petrol prices remaining elevated (&gt;Rs 100/litre) creates massive operating cost disparity: running an EV costs ~Rs 0.30/km vs Rs 2.50/km for internal combustion engines (ICE). For a commercial delivery rider doing 100 km/day, this saves Rs 6,000+ monthly—exceeding the EV financing EMI!</li>
      <li><strong>Sociocultural Opportunity:</strong> Rising urban air quality awareness and youth enthusiasm for tech-enabled smart dashboards (GPS navigation, digital key sharing).</li>
      <li><strong>Technological Opportunity:</strong> Domestic battery pack assembly and LFP (Lithium Iron Phosphate) chemistry improving thermal stability in tropical Indian climates, eliminating fire risk fears.</li>
    </ul>
  </div>
</section>
"""
