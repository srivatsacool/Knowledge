# builder_gm410/mod5_blueocean.py
# Module 5: Blue Ocean Strategy, Value Innovation & Strategic Differentiation

def get_mod5_html():
    return """
<section id="mod-5-blue-ocean" class="sheet">
  <div class="kick">Module 5 · Strategic Innovation &amp; Blue Oceans</div>
  <h2 class="mod-title">Blue Ocean Strategy &amp; Value Innovation</h2>

  <p>
    Traditional competitive strategy, rooted in military doctrine and industrial organization economics, focuses on fighting rivals for market share in existing industries. W. Chan Kim and Renée Mauborgne (INSEAD, 2005) introduced <strong>Blue Ocean Strategy</strong>, proving that the most profitable corporations create uncontested market space, making the competition irrelevant. This module teaches the mechanics of Value Innovation, the Strategy Canvas, the ERRC grid, the Three Strategy Propositions, and noncustomer conversion.
  </p>

  <h3 class="sec-title" id="sec-red-vs-blue">5.1 Red Oceans vs Blue Oceans</h3>
  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Strategic Dimension</th>
          <th>Red Ocean Strategy (Traditional Competition)</th>
          <th>Blue Ocean Strategy (Value Innovation)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Market Boundaries</strong></td>
          <td>Compete in existing market space with accepted rules.</td>
          <td>Create uncontested market space outside established boundaries.</td>
        </tr>
        <tr>
          <td><strong>Competitive Focus</strong></td>
          <td>Beat the competition; capture share from rivals.</td>
          <td>Make the competition irrelevant by rendering their metrics obsolete.</td>
        </tr>
        <tr>
          <td><strong>Demand Dynamic</strong></td>
          <td>Exploit existing demand; fight over a finite pie.</td>
          <td>Create and capture new demand; unlock noncustomers.</td>
        </tr>
        <tr>
          <td><strong>Value-Cost Trade-Off</strong></td>
          <td><strong>Accept the trade-off:</strong> Choose <em>either</em> high buyer value at high cost, <em>or</em> reasonable value at low cost.</td>
          <td><strong>Break the trade-off:</strong> Pursue <strong>differentiation AND low cost simultaneously</strong> (Value Innovation).</td>
        </tr>
        <tr>
          <td><strong>Strategic Alignment</strong></td>
          <td>Align whole activity system with low cost <em>or</em> differentiation.</td>
          <td>Align value, profit, and people propositions to lower costs and elevate buyer utility.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sec-title" id="sec-value-innovation">5.2 The Value Innovation Dynamic &amp; The Three Tiers of Noncustomers</h3>
  <p>
    Value innovation occurs only when a company aligns innovation with utility, price, and cost structure. It is not technological breakthrough for its own sake (which often produces commercial failure), but unlocking unprecedented utility while eliminating costly industry features.
  </p>

  <div class="nb-card">
    <h4 class="nb-card__title">The Three Tiers of Noncustomers</h4>
    <p>
      Instead of fighting over current customers who are already shopping in the industry, Blue Ocean creators look to <strong>noncustomers</strong> to unlock immense new demand:
    </p>
    <ul>
      <li><strong>Tier 1: "Soon-to-be" Noncustomers:</strong> Buyers sitting on the edge of the market who use the industry's offering out of necessity, but are eagerly searching for a better alternative. As soon as a viable substitute appears, they defect.</li>
      <li><strong>Tier 2: "Refusing" Noncustomers:</strong> Buyers who consciously evaluated the industry's products or services and rejected them because the offering is too complex, unaffordable, or misaligned with their needs.</li>
      <li><strong>Tier 3: "Unexplored" Noncustomers:</strong> Customers in distant or completely unrelated markets who never considered the industry's offerings as an option for them (e.g., enterprise research labs before NVIDIA turned GPUs into AI supercomputers).</li>
    </ul>
  </div>

  <h3 class="sec-title" id="sec-strategy-canvas">5.3 The Strategy Canvas &amp; Value Curves</h3>
  <p>
    The <strong>Strategy Canvas</strong> is the central diagnostic and action framework of Blue Ocean Strategy:
  </p>
  <ul>
    <li><strong>Horizontal Axis:</strong> Captures the range of factors that the industry currently competes on and invests in.</li>
    <li><strong>Vertical Axis:</strong> Captures the offering level that buyers receive across each competing factor (from Low to High).</li>
    <li><strong>The Value Curve:</strong> The graphic depiction of a firm's relative performance across industry factors. A strong Blue Ocean value curve demonstrates three distinct qualities: <strong>Focus, Divergence, and a Compelling Tagline</strong>.</li>
  </ul>

  <!-- Strategy Canvas SVG -->
  <div class="nb-diagram-card">
    <h4 class="nb-card__title">Strategy Canvas: Traditional PC Chipmakers vs NVIDIA AI Accelerated Computing</h4>
    <svg class="nb-diagram" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid Lines -->
      <line x1="80" y1="60" x2="740" y2="60" stroke="#d8e2ed" stroke-width="1" />
      <line x1="80" y1="120" x2="740" y2="120" stroke="#d8e2ed" stroke-width="1" />
      <line x1="80" y1="180" x2="740" y2="180" stroke="#d8e2ed" stroke-width="1" />
      <line x1="80" y1="240" x2="740" y2="240" stroke="#d8e2ed" stroke-width="1" />
      <line x1="80" y1="300" x2="740" y2="300" stroke="#1d3c8c" stroke-width="2" />

      <!-- Y Axis Labels -->
      <text x="65" y="65" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="end">High</text>
      <text x="65" y="185" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="end">Med</text>
      <text x="65" y="305" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="end">Low</text>

      <!-- Factors (X Axis) -->
      <text x="120" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">CPU Focus</text>
      <text x="210" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">PC Gaming</text>
      <text x="300" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">Hardware Only</text>
      <text x="400" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">Matrix Parallel</text>
      <text x="500" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">Software Moat</text>
      <text x="610" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">Full-Stack Data Center</text>
      <text x="710" y="325" font-family="Source Sans 3, sans-serif" font-size="11.5" font-weight="600" fill="#22252a" text-anchor="middle">Developer Lock-in</text>

      <!-- Curve 1: Traditional Chipmakers (Red Ocean) -->
      <polyline points="120,80 210,140 300,90 400,270 500,280 610,270 710,260" fill="none" stroke="#8b1e2f" stroke-width="3" stroke-dasharray="6,4" />
      <circle cx="120" cy="80" r="4" fill="#8b1e2f" />
      <circle cx="210" cy="140" r="4" fill="#8b1e2f" />
      <circle cx="300" cy="90" r="4" fill="#8b1e2f" />
      <circle cx="400" cy="270" r="4" fill="#8b1e2f" />
      <circle cx="500" cy="280" r="4" fill="#8b1e2f" />
      <circle cx="610" cy="270" r="4" fill="#8b1e2f" />
      <circle cx="710" cy="260" r="4" fill="#8b1e2f" />

      <!-- Curve 2: NVIDIA Blue Ocean Value Curve -->
      <polyline points="120,280 210,130 300,280 400,70 500,65 610,60 710,60" fill="none" stroke="#1d7a45" stroke-width="4" />
      <circle cx="120" cy="280" r="5" fill="#1d7a45" />
      <circle cx="210" cy="130" r="5" fill="#1d7a45" />
      <circle cx="300" cy="280" r="5" fill="#1d7a45" />
      <circle cx="400" cy="70" r="5" fill="#1d7a45" />
      <circle cx="500" cy="65" r="5" fill="#1d7a45" />
      <circle cx="610" cy="60" r="5" fill="#1d7a45" />
      <circle cx="710" cy="60" r="5" fill="#1d7a45" />

      <!-- Legend -->
      <rect x="220" y="348" width="16" height="4" fill="#8b1e2f" />
      <text x="245" y="353" font-family="Source Sans 3, sans-serif" font-size="12" fill="#8b1e2f">Traditional Chipmakers (Red Ocean)</text>
      <rect x="470" y="348" width="16" height="4" fill="#1d7a45" />
      <text x="495" y="353" font-family="Source Sans 3, sans-serif" font-size="12" font-weight="700" fill="#1d7a45">NVIDIA Value Innovation Curve</text>
    </svg>
    <p class="src">Figure 5.1: Divergent Strategy Canvas showing NVIDIA's break away from PC commodity silicon into AI accelerated systems.</p>
  </div>

  <h3 class="sec-title" id="sec-errc-grid">5.4 The ERRC Four Actions Grid</h3>
  <p>
    To reconstruct buyer value elements and craft an alternative value curve that breaks the value-cost trade-off, managers apply the <strong>Eliminate–Reduce–Raise–Create (ERRC)</strong> Grid:
  </p>

  <div class="nb-card">
    <h4 class="nb-card__title">The ERRC Grid Architecture</h4>
    <div class="tblwrap">
      <table class="nb-table">
        <thead>
          <tr>
            <th style="width:50%; background:rgba(254,242,242,0.6); color:var(--red);">ELIMINATE (Costs &darr;)</th>
            <th style="width:50%; background:rgba(254,242,242,0.6); color:var(--red);">REDUCE (Costs &darr;)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <em>Which factors that the industry has long competed on should be eliminated entirely?</em><br>
              <strong>NVIDIA:</strong> Eliminated dependency on general-purpose CPU architecture for AI; eliminated custom hardware configurations by delivering standardized DGX racks.
            </td>
            <td>
              <em>Which factors should be reduced well below the industry standard?</em><br>
              <strong>NVIDIA:</strong> Reduced power consumption per training token; reduced time-to-first-token in LLM training; reduced programming complexity for researchers.
            </td>
          </tr>
          <tr style="background:rgba(240,252,244,0.6);">
            <th style="color:var(--green);">RAISE (Buyer Value &uarr;)</th>
            <th style="color:var(--green);">CREATE (Buyer Value &uarr;)</th>
          </tr>
          <tr>
            <td>
              <em>Which factors should be raised well above the industry standard?</em><br>
              <strong>NVIDIA:</strong> Massively raised matrix floating-point throughput (FLOPS); raised inter-GPU interconnect bandwidth (NVLink); raised developer software libraries.
            </td>
            <td>
              <em>Which factors should be created that the industry has never offered?</em><br>
              <strong>NVIDIA:</strong> Created <strong>CUDA</strong> (parallel computing platform); created full-stack AI supercomputer architecture (DGX SuperPOD); created <strong>AI Foundry</strong> for custom enterprise LLMs.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h3 class="sec-title" id="sec-three-propositions">5.5 The Three Strategy Propositions &amp; Alignment (Teaching Note Poll Q4–Q7)</h3>
  <p>
    A Blue Ocean strategy is only sustainable if the company achieves <strong>strategic alignment across three propositions</strong> (Kim &amp; Mauborgne):
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Proposition</th>
          <th>Target Stakeholder</th>
          <th>Strategic Purpose</th>
          <th>NVIDIA Applied Alignment (INSEAD Poll Answers)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Value Proposition</strong></td>
          <td>Buyers &amp; Customers</td>
          <td>Delivers unprecedented utility that makes noncustomers switch.</td>
          <td><strong>Poll Q4 (Correct: A, C, D):</strong> Comprehensive CUDA software resources that expedite AI development, supercomputer performance at a fraction of data center cluster cost, and unprecedented energy efficiency per computation.</td>
        </tr>
        <tr>
          <td><strong>2. Profit Proposition</strong></td>
          <td>The Firm &amp; Shareholders</td>
          <td>Generates robust gross margins and sustainable free cash flow.</td>
          <td><strong>Poll Q5 (Correct: B, C, D):</strong> Premium pricing yielding 75–78% gross margins, capital-efficient fabless semiconductor business model (partnering with TSMC), and deep collaboration with the global academic research community.</td>
        </tr>
        <tr>
          <td><strong>3. People Proposition</strong></td>
          <td>Employees &amp; Ecosystem Partners</td>
          <td>Motivates, inspires, and retains elite talent and developers.</td>
          <td><strong>Poll Q6 (Correct: A, B, C):</strong> Technical excellence and engineering audacity, leading hardware integrated with software that empowers developers, and community support fostering a global developer network.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="nb-sticky nb-sticky--green">
    <div class="nb-sticky__title">Why Alignment Creates an Insurmountable Moat (Poll Q7)</div>
    As established in Teaching Note Poll Q7 (Correct: D), <strong>all three propositions mutually reinforce one another</strong>. Elite hardware attracts researchers to code in CUDA; millions of CUDA developers ensure enterprises only buy NVIDIA chips; high enterprise profits fund massive R&amp;D ($10B+ annually) to widen the hardware lead. This virtuous cycle creates a profound barrier to imitation that competitors like AMD, Intel, and hyperscalers struggle to breach.
  </div>
</section>
"""
