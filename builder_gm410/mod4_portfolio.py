# builder_gm410/mod4_portfolio.py
# Module 4: Corporate Portfolio Management & Strategic Allocation

def get_mod4_html():
    return """
<section id="mod-4-portfolio-management" class="sheet">
  <div class="kick">Module 4 · Portfolio Strategy &amp; Capital Allocation</div>
  <h2 class="mod-title">Corporate Portfolio Management &amp; SBU Dynamics</h2>

  <p>
    Multi-business corporations cannot manage all Strategic Business Units (SBUs) or product lines with a uniform strategic mandate. Different businesses operate across distinct stages of market maturity, demand different capital intensities, and generate varying free cash flows. A corporate executive must balance today's cash generators with tomorrow's growth engines. This module details the Boston Consulting Group (BCG) Growth-Share Matrix, the GE-McKinsey 9-Box Matrix, and the Blue Ocean Pioneer-Migrator-Settler (PMS) portfolio architecture.
  </p>

  <h3 class="sec-title" id="sec-bcg-matrix">4.1 The BCG Growth-Share Matrix (Henderson, 1970)</h3>
  <p>
    Developed by Bruce Henderson, founder of the Boston Consulting Group, the <strong>Growth-Share Matrix</strong> evaluates SBUs along two explicit financial dimensions:
  </p>
  <ul>
    <li><strong>Horizontal Axis: Relative Market Share (RMS):</strong> The ratio of the SBU's market share to that of its <em>largest competitor</em> in the market (plotted on a logarithmic scale). An RMS &gt; 1.0 indicates market leadership, which drives cost advantages via the <em>Experience Curve</em> (cumulative production doubling reduces unit costs by 20–30%).</li>
    <li><strong>Vertical Axis: Market Growth Rate (MGR):</strong> The annual percentage growth rate of the target industry (typically benchmarked against a 10% hurdle rate or GDP growth). High-growth markets require heavy continuous capital reinvestment (working capital, R&amp;D, factory capacity) to defend share.</li>
  </ul>

  <!-- BCG 4-Quadrant Matrix SVG -->
  <div class="nb-diagram-card">
    <h4 class="nb-card__title">The BCG Growth-Share Matrix Architecture</h4>
    <svg class="nb-diagram" viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer Frame -->
      <rect x="120" y="50" width="560" height="340" fill="#fffdf7" stroke="#c8bfa8" stroke-width="2" rx="8" />
      <line x1="400" y1="50" x2="400" y2="390" stroke="#1d3c8c" stroke-width="2" stroke-dasharray="4,4" />
      <line x1="120" y1="220" x2="680" y2="220" stroke="#1d3c8c" stroke-width="2" stroke-dasharray="4,4" />

      <!-- Axis Labels -->
      <text x="400" y="30" font-family="Source Sans 3, sans-serif" font-size="16" font-weight="700" fill="#1d3c8c" text-anchor="middle">RELATIVE MARKET SHARE (RMS)</text>
      <text x="260" y="45" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="600" fill="#525660" text-anchor="middle">High (&gt; 1.0x)</text>
      <text x="540" y="45" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="600" fill="#525660" text-anchor="middle">Low (&lt; 1.0x)</text>

      <text x="35" y="220" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d3c8c" transform="rotate(-90 35 220)" text-anchor="middle">MARKET GROWTH RATE</text>
      <text x="80" y="135" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="600" fill="#525660" text-anchor="middle">High (&gt; 10%)</text>
      <text x="80" y="305" font-family="Source Sans 3, sans-serif" font-size="13" font-weight="600" fill="#525660" text-anchor="middle">Low (&lt; 10%)</text>

      <!-- Quadrant 1: Stars -->
      <rect x="135" y="65" width="250" height="140" fill="rgba(120, 228, 156, 0.15)" rx="6" />
      <text x="260" y="105" font-family="Source Sans 3, sans-serif" font-size="20" font-weight="700" fill="#1d7a45" text-anchor="middle">⭐ STARS</text>
      <text x="260" y="130" font-family="Source Sans 3, sans-serif" font-size="13" fill="#22252a" text-anchor="middle">High Growth · High Share</text>
      <text x="260" y="152" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Net Cash Flow: Neutral / Modest</text>
      <text x="260" y="174" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#1d3c8c" text-anchor="middle">Action: Invest aggressively to maintain lead</text>

      <!-- Quadrant 2: Question Marks -->
      <rect x="415" y="65" width="250" height="140" fill="rgba(255, 224, 61, 0.15)" rx="6" />
      <text x="540" y="105" font-family="Source Sans 3, sans-serif" font-size="20" font-weight="700" fill="#b86e00" text-anchor="middle">❓ QUESTION MARKS</text>
      <text x="540" y="130" font-family="Source Sans 3, sans-serif" font-size="13" fill="#22252a" text-anchor="middle">High Growth · Low Share</text>
      <text x="540" y="152" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Net Cash Flow: Highly Negative</text>
      <text x="540" y="174" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#8b1e2f" text-anchor="middle">Action: Selectively invest or divest</text>

      <!-- Quadrant 3: Cash Cows -->
      <rect x="135" y="235" width="250" height="140" fill="rgba(110, 196, 255, 0.15)" rx="6" />
      <text x="260" y="275" font-family="Source Sans 3, sans-serif" font-size="20" font-weight="700" fill="#1d3c8c" text-anchor="middle">🐄 CASH COWS</text>
      <text x="260" y="300" font-family="Source Sans 3, sans-serif" font-size="13" fill="#22252a" text-anchor="middle">Low Growth · High Share</text>
      <text x="260" y="322" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Net Cash Flow: Highly Positive (Surplus)</text>
      <text x="260" y="344" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#1d7a45" text-anchor="middle">Action: Harvest cash to fund Stars &amp; ?s</text>

      <!-- Quadrant 4: Dogs -->
      <rect x="415" y="235" width="250" height="140" fill="rgba(255, 138, 188, 0.15)" rx="6" />
      <text x="540" y="275" font-family="Source Sans 3, sans-serif" font-size="20" font-weight="700" fill="#8b1e2f" text-anchor="middle">🐕 DOGS</text>
      <text x="540" y="300" font-family="Source Sans 3, sans-serif" font-size="13" fill="#22252a" text-anchor="middle">Low Growth · Low Share</text>
      <text x="540" y="322" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">Net Cash Flow: Modest Positive or Cash Trap</text>
      <text x="540" y="344" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#8b1e2f" text-anchor="middle">Action: Reposition, harvest, or liquidate</text>
    </svg>
    <p class="src">Figure 4.1: The BCG Growth-Share Matrix and Capital Redistribution Dynamics.</p>
  </div>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Quadrant</th>
          <th>Cash Generation</th>
          <th>Cash Consumption</th>
          <th>Net Cash Flow</th>
          <th>Optimal Strategic Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>⭐ Stars</strong></td>
          <td>High (dominant share)</td>
          <td>High (rapid market growth requires heavy reinvestment)</td>
          <td>Approximately Zero / Neutral</td>
          <td><strong>Hold &amp; Invest:</strong> Maintain market leadership. When market growth slows, the Star naturally transitions into a Cash Cow.</td>
        </tr>
        <tr>
          <td><strong>🐄 Cash Cows</strong></td>
          <td>Very High (economies of scale, market leader)</td>
          <td>Low (mature market, minimal new capacity needed)</td>
          <td><strong>Massive Positive Surplus</strong></td>
          <td><strong>Harvest / Milk:</strong> Minimize capex; extract cash to pay dividends, service corporate debt, and fund R&amp;D for Question Marks.</td>
        </tr>
        <tr>
          <td><strong>❓ Question Marks</strong></td>
          <td>Low (weak market share, lacks scale)</td>
          <td>High (must invest heavily to capture market share in high-growth market)</td>
          <td><strong>Severely Negative</strong></td>
          <td><strong>Selective Choice:</strong> Either inject massive capital from Cash Cows to convert into a Star, or divest early before cash is burned.</td>
        </tr>
        <tr>
          <td><strong>🐕 Dogs</strong></td>
          <td>Low (small market share)</td>
          <td>Low (mature industry, no growth)</td>
          <td>Modest / Cash Trap</td>
          <td><strong>Divest / Liquidate:</strong> Sell off assets, harvest residual cash, or reposition into an uncrowded niche. Do not pour turnaround capital into Dogs.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="nb-callout nb-callout--warn">
    <span class="nb-callout__tag">Critical Analytical Distinction</span>
    <strong>Do NOT confuse product/SBU portfolio analysis with whole industry analysis!</strong> BCG evaluates distinct business units <em>within</em> a corporation relative to their specific product markets. A company in a "declining" industry can still own a dominant Cash Cow generating enormous free cash flow, while a company in an "exciting" high-tech industry can bleed cash to death as an uncompetitive Question Mark.
  </div>

  <h3 class="sec-title" id="sec-ge-mckinsey">4.2 The GE-McKinsey 9-Box Matrix</h3>
  <p>
    General Electric (GE) found the BCG matrix too simplistic (reducing competitive dynamics to market share alone, and market opportunity to growth rate alone). Working with McKinsey &amp; Co. in the 1970s, GE developed the <strong>9-Box Matrix</strong>, which replaces single metrics with composite multi-factorial indices:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Factors Included in Composite Score</th>
          <th>Scoring Methodology</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Industry Attractiveness (Vertical Axis)</strong></td>
          <td>Long-term market growth rate, industry profitability (Five Forces), entry barriers, pricing trends, regulatory environment, cyclicality.</td>
          <td>Weighted score (1.0 to 5.0) categorizing the industry as <strong>High, Medium, or Low</strong> attractiveness.</td>
        </tr>
        <tr>
          <td><strong>Business Unit Competitive Strength (Horizontal Axis)</strong></td>
          <td>Market share, brand reputation, profit margin relative to rivals, patent moats, R&amp;D capabilities, manufacturing cost efficiency, distribution control.</td>
          <td>Weighted score (1.0 to 5.0) categorizing the SBU as <strong>Strong, Average, or Weak</strong>.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="nb-card">
    <h4 class="nb-card__title">The 9-Box Decision Rules</h4>
    <div class="tblwrap">
      <table class="nb-table">
        <thead>
          <tr>
            <th>Industry Attractiveness</th>
            <th>Strong SBU Strength</th>
            <th>Average SBU Strength</th>
            <th>Weak SBU Strength</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>High Attractiveness</strong></td>
            <td><span class="nb-stamp nb-stamp--green">Grow / Invest</span> Priority capital allocation; seek market dominance.</td>
            <td><span class="nb-stamp nb-stamp--green">Invest / Grow</span> Segment selectively; reinforce strengths.</td>
            <td><span class="nb-stamp nb-stamp--amber">Select / Pivot</span> Niche or seek joint venture; divest if turnaround unviable.</td>
          </tr>
          <tr>
            <td><strong>Medium Attractiveness</strong></td>
            <td><span class="nb-stamp nb-stamp--green">Invest / Defend</span> Protect core position; harvest secondary segments.</td>
            <td><span class="nb-stamp nb-stamp--amber">Selective Hold</span> Guard earnings; reinvest only to maintain share.</td>
            <td><span class="nb-stamp nb-stamp--red">Harvest / Divest</span> Minimize risk; manage for immediate cash.</td>
          </tr>
          <tr>
            <td><strong>Low Attractiveness</strong></td>
            <td><span class="nb-stamp nb-stamp--amber">Harvest / Hold</span> Protect cash flow; minimize new capex.</td>
            <td><span class="nb-stamp nb-stamp--red">Harvest / Divest</span> Aggressively prune product lines; prepare sale.</td>
            <td><span class="nb-stamp nb-stamp--red">Divest / Liquidate</span> Sell off inventory; write off assets.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h3 class="sec-title" id="sec-pms-map">4.3 The Pioneer–Migrator–Settler (PMS) Map (Blue Ocean Portfolio)</h3>
  <p>
    W. Chan Kim and Renée Mauborgne (INSEAD) introduced the <strong>Pioneer–Migrator–Settler (PMS) Map</strong> to evaluate a corporate portfolio based on <em>value innovation</em> rather than market share. The PMS map bridges traditional portfolio management and Blue Ocean Strategy:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Value Innovation Quotient</th>
          <th>Growth Trajectory</th>
          <th>Role in Corporate Longevity</th>
          <th>NVIDIA Case Mapping (INSEAD Poll Q8–Q10)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Pioneers</strong></td>
          <td><strong>Unprecedented Value Innovation:</strong> Massively shifts buyer value curves; creates new noncustomer demand.</td>
          <td>Exponential, massive future revenue and profit potential.</td>
          <td>The growth engines of the future; without Pioneers, the corporation will eventually decay.</td>
          <td><strong>AI Data Center Acceleration (DGX / Hopper / Blackwell):</strong> Created a brand-new $100B+ data center accelerated computing category (Teaching Note Poll Q9).</td>
        </tr>
        <tr>
          <td><strong>Migrators</strong></td>
          <td><strong>Value Improvement:</strong> Better than most existing competitors; incremental improvements along known industry parameters.</td>
          <td>Moderate, steady industry-level growth.</td>
          <td>Generates substantial current revenue and cash flow, but vulnerable to value innovation disruption.</td>
          <td><strong>GeForce PC Gaming GPUs:</strong> Highly profitable, market-leading graphics cards with loyal gaming following, but an established mature category (Teaching Note Poll Q8).</td>
        </tr>
        <tr>
          <td><strong>Settlers</strong></td>
          <td><strong>Me-Too / Parity:</strong> Conforms to industry standards; competes primarily on price and minor feature parity.</td>
          <td>Low, stagnant growth.</td>
          <td>Cash cows of today, but zero long-term growth potential.</td>
          <td>Legacy low-end embedded graphics chipsets and commodity OEM graphics cards.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="nb-sticky nb-sticky--blue">
    <div class="nb-sticky__title">Portfolio Health Diagnostic (Poll Q11)</div>
    A corporate portfolio filled solely with Pioneers will suffer from severe cash burn and volatile execution risks. A portfolio filled solely with Settlers and Migrators is trapped in Red Oceans and will inevitably decline. A healthy corporate portfolio (like NVIDIA's) is <strong>balanced</strong>: Settlers and Migrators supply massive steady cash flow today, which is channeled into funding elite Pioneers that unlock explosive future profit pools.
  </div>
</section>
"""
