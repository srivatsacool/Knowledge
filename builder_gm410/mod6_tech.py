# builder_gm410/mod6_tech.py
# Module 6: Technology for Business Strategy, Big Data, Analytics & Machine Learning

def get_mod6_html():
    return """
<section id="mod-6-tech-strategy" class="sheet">
  <div class="kick">Module 6 · Technology Strategy &amp; Business Analytics</div>
  <h2 class="mod-title">Technology for Business Strategy &amp; Applied Analytics</h2>

  <p>
    In digital business, technology is never an end in itself; it is a <strong>strategic enabler</strong> that reconfigures the firm's activity system, lowers transaction costs, and creates proprietary customer assets. Grounded in the curriculum lectures of Dr. Sangeetha Rajesh, this module details customer data as a strategic asset, the 5 Vs of Big Data, the Analytics Maturity Staircase, Machine Learning pipelines, Generative AI governance, the Nimbus Bank transformation case, and Design of Experiments (DOE).
  </p>

  <h3 class="sec-title" id="sec-data-asset">6.1 Customer Data as a Strategic Asset</h3>
  <p>
    When a customer orders a pizza online or streams a film, the enterprise captures an exhaust of behavioral telemetry: timestamps, geolocation, browsing dwell time, device characteristics, payment methods, and discount coupon sensitivity. Modern enterprises convert this raw data into defensible competitive advantage via a four-stage loop:
  </p>

  <div class="nb-callout">
    <span class="nb-callout__tag">The Data-to-Engagement Strategic Loop</span>
    <strong>Data &rarr; Behavioral Understanding &rarr; Hyper-Personalisation &rarr; Customer Engagement &amp; Retention</strong>
    <br>&bull; <strong>Netflix Personalisation:</strong> Netflix does not ask users what they want to watch; it analyzes implicit behavioral signals (rewinds, pause points, genre transitions, viewing time). By serving dynamically generated thumbnail artwork tailored to individual psychological profiles, Netflix maximizes user viewing hours and drives global churn below 2%.
    <br>&bull; <strong>Starbucks Predictive Repeat-Purchase:</strong> When a consumer buys a cappuccino on Monday, Wednesday, and Friday at 8:45 AM, the Starbucks app detects the temporal routine. If the customer has not ordered by 8:40 AM on Friday, it triggers a push discount, capturing repeat visits before competitors can intervene.
  </div>

  <h3 class="sec-title" id="sec-bigdata-5vs">6.2 Big Data &amp; The 5 Vs Architecture</h3>
  <p>
    Dr. Sangeetha Rajesh clarifies an essential MBA distinction: <strong>A file containing 10 million rows and 50 columns in Excel is NOT automatically Big Data.</strong> True Big Data is characterized by structural friction across the 5 Vs:
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>The V Dimension</th>
          <th>Engineering &amp; Analytical Characteristic</th>
          <th>Strategic Business Challenge</th>
          <th>Managerial Decision &amp; Value Unlock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Volume</strong></td>
          <td>Petabytes to exabytes of transaction logs, clickstreams, sensor feeds.</td>
          <td>Storage costs, distributed computing bottlenecks, query latency.</td>
          <td>Scalable cloud data lakes (AWS S3, Snowflake) enabling holistic enterprise analytics.</td>
        </tr>
        <tr>
          <td><strong>2. Velocity</strong></td>
          <td>Data arriving in real-time or micro-batch streams (sub-second feeds).</td>
          <td>Inability of batch legacy systems to process telemetry fast enough to act.</td>
          <td>Real-time streaming pipelines (Kafka, Flink) enabling instant credit-card fraud blocks.</td>
        </tr>
        <tr>
          <td><strong>3. Variety</strong></td>
          <td>Structured (SQL tables) mixed with unstructured text, voice, video, images, PDFs.</td>
          <td>Inability of relational databases to query human speech and raw images.</td>
          <td>Vector databases and transformer embeddings extracting signals from customer service audio.</td>
        </tr>
        <tr>
          <td><strong>4. Veracity</strong></td>
          <td>Data quality, trustworthiness, missing values, duplicates, fake reviews.</td>
          <td>"Garbage In, Garbage Out": biased or erroneous data corrupting ML models.</td>
          <td>Automated data governance, entity resolution, and algorithmic cleansing.</td>
        </tr>
        <tr>
          <td><strong>5. Value</strong></td>
          <td>The commercial ROI and economic margin generated from data assets.</td>
          <td>Data hoarding without aligned business decision-making.</td>
          <td>Dynamic algorithmic pricing, demand forecasting, and personalized recommendation flywheels.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Analytics Maturity Staircase SVG -->
  <div class="nb-diagram-card">
    <h3 class="sec-title" id="sec-analytics-staircase">6.3 The Analytics Maturity Staircase</h3>
    <p>
      Analytics maturity progresses across four progressive tiers. As analytical maturity rises, human effort shifts from retrospective auditing to automated proactive decision-making:
    </p>
    <svg class="nb-diagram" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
      <!-- Steps -->
      <!-- Step 1: Descriptive -->
      <rect x="60" y="240" width="160" height="90" rx="6" fill="#fcf8ee" stroke="#1d3c8c" stroke-width="2" />
      <text x="140" y="270" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d3c8c" text-anchor="middle">1. DESCRIPTIVE</text>
      <text x="140" y="292" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">"What happened?"</text>
      <text x="140" y="312" font-family="Source Sans 3, sans-serif" font-size="11" fill="#22252a" text-anchor="middle">MIS, Reports, BI Dashboards</text>

      <!-- Step 2: Diagnostic -->
      <rect x="235" y="180" width="160" height="150" rx="6" fill="#fcf8ee" stroke="#1d3c8c" stroke-width="2" />
      <text x="315" y="210" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d3c8c" text-anchor="middle">2. DIAGNOSTIC</text>
      <text x="315" y="232" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">"Why did it happen?"</text>
      <text x="315" y="252" font-family="Source Sans 3, sans-serif" font-size="11" fill="#22252a" text-anchor="middle">Drill-downs, Root Cause Analysis</text>

      <!-- Step 3: Predictive -->
      <rect x="410" y="120" width="160" height="210" rx="6" fill="#fcf8ee" stroke="#1d3c8c" stroke-width="2" />
      <text x="490" y="150" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#1d3c8c" text-anchor="middle">3. PREDICTIVE</text>
      <text x="490" y="172" font-family="Source Sans 3, sans-serif" font-size="12" fill="#525660" text-anchor="middle">"What will happen?"</text>
      <text x="490" y="192" font-family="Source Sans 3, sans-serif" font-size="11" fill="#22252a" text-anchor="middle">Statistical Forecasting, ML Models</text>

      <!-- Step 4: Prescriptive -->
      <rect x="585" y="60" width="160" height="270" rx="6" fill="#1d3c8c" stroke="#1d3c8c" stroke-width="2" />
      <text x="665" y="90" font-family="Source Sans 3, sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">4. PRESCRIPTIVE</text>
      <text x="665" y="112" font-family="Source Sans 3, sans-serif" font-size="12" fill="#d9ecff" text-anchor="middle">"What should we do?"</text>
      <text x="665" y="132" font-family="Source Sans 3, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle">Optimization, Autonomous AI</text>

      <!-- Upward Arrow -->
      <line x1="70" y1="210" x2="680" y2="40" stroke="#8b1e2f" stroke-width="3" stroke-dasharray="6,4" />
      <text x="380" y="50" font-family="Source Sans 3, sans-serif" font-size="14" font-weight="700" fill="#8b1e2f">Increasing Competitive Advantage &amp; Automation &rarr;</text>
    </svg>
    <p class="src">Figure 6.1: The Analytics Maturity Staircase (Gartner / Daulatkar / Rajesh).</p>
  </div>

  <div class="nb-card">
    <h4 class="nb-card__title">Case Link · 2025 PYQ 1(b): Resolving the Oilfield Asset Management Conflict</h4>
    <p>
      <em>The Conflict: Operations insists on shutting down drilling equipment every 3 months for preventative maintenance to guarantee safety. Finance violently resists due to crippling revenue losses from downtime. How does an integrative manager resolve this?</em>
    </p>
    <div class="nb-callout nb-callout--success">
      <span class="nb-callout__tag">Integrative Solution: Condition-Based Predictive Maintenance</span>
      Rather than relying on arbitrary time-based maintenance (3-month schedule) or waiting for failure (reactive breakdown), the company installs <strong>IoT sensors (vibration, heat, acoustic pressure)</strong> on all oilfield assets.
      <br>1. <strong>Criticality Stratification:</strong> High-risk tier assets (blowout preventers) remain on strict safety schedules.
      <br>2. <strong>Predictive ML Scoring:</strong> Medium- and low-risk pumps and compressors stream real-time telemetry to an ML model that calculates <em>failure probability distributions</em>. Maintenance is dispatched only when degradation curves cross a 95% threshold.
      <br>3. <strong>Economic Value:</strong> Eliminates 60% of unnecessary maintenance downtime (satisfying Finance) while identifying subsurface mechanical fatigue days before catastrophic failure (guaranteeing safety for Operations).
      <br><strong>Key Takeaway:</strong> <em>The economic value does not come from the sensor; it comes from the predictive managerial decision unlocked by the data!</em>
    </div>
  </div>

  <h3 class="sec-title" id="sec-ml-pipeline">6.4 Machine Learning Pipelines &amp; Generative AI Governance</h3>
  <p>
    Traditional software engineering versus Machine Learning represents an inverted programming paradigm:
  </p>
  <ul>
    <li><strong>Traditional Programming:</strong> Inputs: <code>Data + Rules</code> &rarr; Output: <code>Answers</code>.</li>
    <li><strong>Machine Learning:</strong> Inputs: <code>Data + Answers (Labels)</code> &rarr; Output: <code>Rules (Trained Model)</code>.</li>
  </ul>

  <div class="nb-card">
    <h4 class="nb-card__title">The 8-Stage Machine Learning Lifecycle Pipeline</h4>
    <ol>
      <li><strong>1. Data Ingestion:</strong> Continuous extraction from operational ERPs, CRMs, APIs, and logs.</li>
      <li><strong>2. Data Cleaning &amp; Wrangling:</strong> Deduplication, missing value imputation, outlier handling.</li>
      <li><strong>3. Feature Engineering:</strong> Creating predictive mathematical variables (e.g. debt-to-income ratio).</li>
      <li><strong>4. Model Training:</strong> Selecting algorithmic architecture (XGBoost, Random Forest, Neural Net) and optimizing weights.</li>
      <li><strong>5. Validation &amp; Backtesting:</strong> Splitting data into train/test sets to measure precision, recall, and AUC-ROC.</li>
      <li><strong>6. Hyperparameter Tuning:</strong> Cross-validation grid searches to maximize generalizability.</li>
      <li><strong>7. Model Deployment:</strong> Containerizing the model via Docker and exposing inference APIs.</li>
      <li><strong>8. Model Drift &amp; Fairness Monitoring:</strong> Auditing for concept drift, covariate shift, and fair-lending bias over time.</li>
    </ol>
  </div>

  <h3 class="sec-title" id="sec-nimbus-bank">6.5 Classroom Master Case: Nimbus Bank Transformation</h3>
  <div class="nb-case-card">
    <h4 class="nb-card__title">Nimbus Bank Strategic Decision Analysis (Dr. Sangeetha Rajesh Deck)</h4>
    <p>
      <strong>The Crisis:</strong> Nimbus Bank, an established commercial bank, is suffering severe competitive erosion from FinLeap (a digital-native neo-bank). Loan approval at Nimbus takes <strong>4.5 days</strong> (manual, rule-based underwriting) versus FinLeap's <strong>4 minutes</strong>. Customer attrition has escalated from 8% to 15% in two years, and the Cost-to-Income ratio has degraded to 56%. 98% of customer call center voice transcripts remain unanalyzed.
    </p>
    <p>
      The board establishes a strict capital expenditure envelope of <strong>Rs 22 Crore</strong>. The Executive Committee must decide among three competing proposals:
    </p>

    <div class="tblwrap">
      <table class="nb-table">
        <thead>
          <tr>
            <th>Proposal</th>
            <th>Required Capital</th>
            <th>Core Capability &amp; Architecture</th>
            <th>Strategic Role &amp; Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Proposal A: Customer 360 &amp; Unified Lake</strong></td>
            <td>Rs 12 Crore</td>
            <td>Breaks down legacy silos; unifies transaction, CRM, and call transcript data into a real-time data lake.</td>
            <td><strong>Enabling Foundation:</strong> Necessary infrastructure, but generates zero immediate revenue on its own. Low competitive differentiation.</td>
          </tr>
          <tr>
            <td><strong>Proposal B: Real-Time ML Credit Underwriting</strong></td>
            <td>Rs 18 Crore</td>
            <td>Automated ML risk scoring using banking data + alternative bureau data to approve SME loans in under 15 minutes.</td>
            <td><strong>Strategic Differentiator / Transformer:</strong> Directly neutralizes FinLeap's speed advantage; cuts underwriting cost by 70%; directly halts customer attrition.</td>
          </tr>
          <tr>
            <td><strong>Proposal C: GenAI Agent Copilot &amp; Helpdesk</strong></td>
            <td>Rs 8 Crore</td>
            <td>LLM-powered conversational agent handling customer queries, loan FAQs, and branch employee assistance.</td>
            <td><strong>Operational Parity / Efficiency:</strong> Low barrier to imitation; high risk of hallucination; does not fix the fundamental 4.5-day loan delay.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="nb-sticky nb-sticky--blue">
      <div class="nb-sticky__title">Executive Allocation Recommendation</div>
      <strong>Fund Proposal B in full (Rs 18 Crore) + Scoped Pilot of Proposal C (Rs 4 Crore) = Exactly Rs 22 Crore.</strong>
      <br>&bull; <em>Rationale:</em> Proposal B directly solves the existential loan bottleneck, restoring competitive viability. The remaining Rs 4 Crore funds a targeted internal-facing GenAI pilot for employee copilots (avoiding hallucination liability on customers). Proposal A is phased into operational IT opex.
      <br>&bull; <em>Risk Management:</em> Algorithmic bias in Proposal B must be audited to prevent discriminatory lending against protected demographic segments (fair-lending compliance).
    </div>
  </div>

  <h3 class="sec-title" id="sec-ab-testing">6.6 A/B Testing &amp; Design of Experiments (Fisher's 3 Principles · 2025 PYQ 1d)</h3>
  <p>
    <em>Exam Prompt: What is A/B testing? What are the three key principles of good Design of Experiments? (6 Marks)</em>
  </p>
  <p>
    <strong>A/B Testing</strong> is a randomized controlled experiment comparing two versions of a digital asset (e.g. web page, pricing model, algorithm) where Version A (Control) is compared against Version B (Variant) to establish causal impact on a conversion metric (CTR, checkout revenue, retention).
  </p>

  <div class="tblwrap">
    <table class="nb-table">
      <thead>
        <tr>
          <th>Fisher's Principle (1925/1935)</th>
          <th>Scientific Definition</th>
          <th>Application in Digital A/B Testing &amp; Algorithms</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Randomisation</strong></td>
          <td>Allocating experimental units to treatments purely by chance.</td>
          <td>Randomly assigning incoming web visitors to Variant A or B via cookie hashing to eliminate selection bias and balance unobserved confounders.</td>
        </tr>
        <tr>
          <td><strong>2. Replication</strong></td>
          <td>Repeating the experiment across a sufficiently large sample size.</td>
          <td>Running tests on tens of thousands of sessions over complete weekly business cycles to ensure statistical power and shrink standard errors.</td>
        </tr>
        <tr>
          <td><strong>3. Blocking (Local Control)</strong></td>
          <td>Grouping homogeneous units together into blocks and running the test within each block.</td>
          <td>Segmenting visitors by device type (iOS vs Android) or geography before randomizing, preventing device-level variance from skewing conversion data.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
"""
