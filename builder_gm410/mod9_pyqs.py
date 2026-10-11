# builder_gm410/mod9_pyqs.py
# Module 9: Master Past Examination Question Bank (2023-2025) & Interactive Revision Suite

def get_mod9_pyqs_html():
    return """
<section id="mod-9-exam-bank" class="sheet">
  <div class="kick">Module 9 · Master Past Examination Question Bank</div>
  <h2 class="mod-title">University Examination Question Bank (2023 &ndash; 2025)</h2>

  <p>
    This question bank contains <strong>100% authentic, reconciled examination questions</strong> from the 2023, 2024, and 2025 Welingkar PGDM Research &amp; Business Analytics End-Term papers. Each question includes its exact marks, compulsory or optional status, recommended structural scaffold, word-count target, detailed model answer, and common examiner pitfalls.
  </p>

  <!-- Interactive Filter Controls -->
  <div class="nb-card" style="background:var(--paper) !important;">
    <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
      <div>
        <label for="pyqYearFilter" style="font-weight:700; font-size:13px; font-family:var(--ui); display:block; margin-bottom:4px;">Filter by Year:</label>
        <select id="pyqYearFilter" class="btn sm">
          <option value="all">All Exam Years (2023&ndash;2025)</option>
          <option value="2025">2025 End Term (Paper 1)</option>
          <option value="2024">2024 End Term (Paper 2)</option>
          <option value="2023">2023 End Term (Paper 3)</option>
        </select>
      </div>

      <div>
        <label for="pyqMarksFilter" style="font-weight:700; font-size:13px; font-family:var(--ui); display:block; margin-bottom:4px;">Filter by Marks:</label>
        <select id="pyqMarksFilter" class="btn sm">
          <option value="all">All Mark Values</option>
          <option value="5">5 Marks</option>
          <option value="6">6 Marks</option>
          <option value="7">7 Marks</option>
          <option value="8">8 Marks</option>
          <option value="10">10 Marks</option>
          <option value="30">30 Marks (Compulsory Cases)</option>
        </select>
      </div>

      <div style="margin-left:auto; display:flex; gap:8px; align-self:flex-end;">
        <button id="expandAllAnswers" class="btn sm">Expand All Answers</button>
        <button id="collapseAllAnswers" class="btn sm">Collapse All</button>
      </div>
    </div>
  </div>

  <div id="pyqContainer">
    <!-- ==========================================
         2025 END TERM PAPER QUESTIONS
         ========================================== -->
    <div class="pyq-item" data-year="2025" data-module="mod-1" data-marks="6" id="pyq-2025-1a">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(a) · Core Values in Performance Management</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>How can core values be integrated into Performance Management? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Conceptual Meaning (1.5M):</strong> Core values are the non-negotiable principles guiding organizational conduct. Integrating them into Performance Management means shifting from evaluating only <em>what</em> an employee delivered (sales volume, revenue) to auditing <em>how</em> those outcomes were achieved (ethical behavior, teamwork, customer honesty).</p>
            <p><strong>Step 2: Four Operational Integration Pillars (3M):</strong></p>
            <ul>
              <li><strong>1. Behavioral Competency Scoring:</strong> Translate abstract values into observable rubrics. For example, the value of <em>Integrity</em> is evaluated via "zero misleading claims in sales demos" and "prompt disclosure of accounting errors."</li>
              <li><strong>2. Balanced Evaluation Weightage (50/50 Split):</strong> Allocate 50% of annual appraisal score to quantitative KPIs and 50% to values compliance.</li>
              <li><strong>3. 360-Degree Peer Auditing:</strong> Subordinates, cross-functional peers, and clients submit ratings to prevent "toxic high-performers" (employees who hit revenue numbers while bullying colleagues) from gaming the system.</li>
              <li><strong>4. Values-Gated Compensation &amp; Promotion:</strong> Executive bonuses and leadership promotions are gated behind values thresholds. A manager scoring 100% on sales but failing values is disqualified from bonuses.</li>
            </ul>
            <p><strong>Step 3: Common Pitfall to Avoid (1.5M):</strong> Never treat values as an informal footnote. Without formal compensation gating and hiring filters, values become cynical poster slogans.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-6" data-marks="6" id="pyq-2025-1b">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(b) · Oilfield Asset Management: Ops vs Finance Conflict</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Oilfield asset management: Operations wants maintenance every 3 months, Finance resists due to cost. How do you solve this and still ensure safety? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Diagnosis of the Trade-off (1.5M):</strong> This conflict reflects a classic non-integrative dilemma: Operations pursues extreme safety via rigid calendar-based shutdowns (3-month schedule), while Finance sees crippling downtime revenue loss. An integrative manager reconciles both via <strong>IoT-enabled Condition-Based Predictive Maintenance</strong>.</p>
            <p><strong>Step 2: The Three-Tier Solution (3M):</strong></p>
            <ul>
              <li><strong>Asset Criticality Stratification:</strong> Divide oilfield assets into tiers: Tier 1 (safety-critical blowout preventers) maintain mandatory calendar inspections. Tier 2 and Tier 3 (auxiliary pumps) transition to sensor monitoring.</li>
              <li><strong>IoT Sensor Telemetry:</strong> Install industrial sensors measuring real-time vibration anomalies, oil viscosity, temperature differentials, and acoustic pressure.</li>
              <li><strong>Predictive ML Degradation Curves:</strong> Machine learning models predict component failure probabilities. Maintenance is dispatched dynamically just before fatigue failure occurs, extending uptime from 3 months to 8–10 months safely.</li>
            </ul>
            <p><strong>Step 3: Managerial Resolution (1.5M):</strong> Finance gains $10M+ in preserved drilling revenue; Operations guarantees zero safety failures. The value originates from the data-driven decision, not the physical sensor.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-1" data-marks="6" id="pyq-2025-1c">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(c) · Balanced Scorecard: Leading vs Lagging Indicators</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Explain the Balanced Scorecard (BSC) with reference to business strategy. Discuss two leading and two lagging indicators. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Definition &amp; 4 Perspectives (2M):</strong> Formulated by Kaplan &amp; Norton (1992), the Balanced Scorecard translates strategy into operational metrics across four perspectives: 1) Financial (shareholder view), 2) Customer (market view), 3) Internal Business Processes (operational excellence), and 4) Learning &amp; Growth (talent and culture).</p>
            <p><strong>Step 2: Lagging Indicators (Show Past Results) [2M]:</strong></p>
            <ul>
              <li><em>1. Net Profit Margin / ROI:</em> Measures past accounting profitability; cannot be altered today.</li>
              <li><em>2. Customer Churn Rate:</em> Measures customers who already left during the prior quarter.</li>
            </ul>
            <p><strong>Step 3: Leading Indicators (Predict Future Performance) [2M]:</strong></p>
            <ul>
              <li><em>1. Employee Training Hours on AI Tooling:</em> Predicts future process efficiency and product innovation 6–12 months out.</li>
              <li><em>2. Qualified Inbound Sales Pipeline Velocity:</em> Accurately forecasts next quarter's revenue growth before deals close.</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-6" data-marks="6" id="pyq-2025-1d">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(d) · A/B Testing &amp; Fisher's 3 Principles of DOE</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>What is AB testing? What are the 3 key principles of good Design of Experiments? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Definition of A/B Testing (1.5M):</strong> A/B testing is a randomized controlled experiment comparing a baseline Control (A) against an experimental Variant (B) to determine the causal effect of a specific modification on a target business metric (conversion rate, retention, revenue per visit).</p>
            <p><strong>Step 2: Fisher's Three Principles of Design of Experiments (3M):</strong></p>
            <ul>
              <li><strong>1. Randomisation:</strong> Experimental units (web visitors) are allocated to A or B purely by chance (e.g. cookie hashing). Eliminates selection bias and balances unobserved confounders.</li>
              <li><strong>2. Replication:</strong> The experiment is repeated on thousands of users across complete weekly seasonal cycles. Reduces standard error and ensures statistical power.</li>
              <li><strong>3. Blocking (Local Control):</strong> Grouping homogeneous units together (e.g. blocking by iOS vs Android, or new vs returning visitors) and testing within each block to prevent confounding variance from distorting the test result.</li>
            </ul>
            <p><strong>Step 3: Common Pitfall (1.5M):</strong> "Peeking" at results early and stopping the test before reaching statistical significance (yielding false positive Type I errors).</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-7" data-marks="6" id="pyq-2025-1e">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(e) · Retail Behavioral Data Collection &amp; Ethics</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>A retail app collects purchases, browsing, location and device data for targeted ads and predictive analytics. What ethical considerations must be addressed? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Regulatory &amp; Ethical Landscape (1.5M):</strong> While behavioral telemetry powers personalized recommendation engines, invasive tracking breaches fundamental consumer autonomy and violates modern data protection mandates (India DPDP Act 2023, GDPR).</p>
            <p><strong>Step 2: Six Ethical Imperatives (3M):</strong></p>
            <ul>
              <li><strong>1. Explicit, Granular Consent:</strong> No pre-ticked opt-in checkboxes; consumers must actively choose whether location telemetry is shared.</li>
              <li><strong>2. Purpose Limitation:</strong> Telemetry collected for order fulfillment (delivery address) must never be secretly repurposed for third-party ad retargeting.</li>
              <li><strong>3. Data Minimization:</strong> Collect only the minimum data required. Do not capture background location 24/7 if the app only needs it at checkout.</li>
              <li><strong>4. Non-Discrimination &amp; Algorithmic Fairness:</strong> Forbid dynamic price gouging (e.g. charging iPhone users more based on battery level or location).</li>
              <li><strong>5. Secure Storage &amp; De-Identification:</strong> Mask and tokenize personally identifiable information (PII) before feeding data into ML training pipelines.</li>
              <li><strong>6. Right to Erasure:</strong> Provide simple in-app buttons allowing users to delete their behavioral history completely.</li>
            </ul>
            <p><strong>Step 3: Business Risk (1.5M):</strong> Regulatory fines (up to Rs 250 Cr under DPDP Act) and brand boycott following data leaks.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-2" data-marks="6" id="pyq-2025-1f">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(f) · PESTEL for Wearable Fitness Device &amp; Tariff Shocks</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Formulate a PESTEL analysis for a new wearable fitness device, and explain how to handle tariff impacts. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: PESTEL Matrix Breakdown (3M):</strong> See detailed 6-factor matrix in Module 2 covering Political (tariffs, China+1), Economic (inflation, price elasticity), Social (preventive health, aging demographics), Technological (PPG sensor miniaturization, on-device ML), Environmental (e-waste recycling, circular packaging), and Legal (biometric privacy, medical certification).</p>
            <p><strong>Step 2: Strategic Playbook for Tariff Shocks (3M):</strong></p>
            <ul>
              <li><strong>Assembly Localization:</strong> Shift from importing CBU (Completely Built Units, 25% duty) to SKD (Semi-Knocked Down kits, 5–10% duty) assembled domestically.</li>
              <li><strong>Supply Chain Redirection:</strong> Diversify sourcing to tariff-exempt trade partners (Vietnam, India).</li>
              <li><strong>Software Subscription Decoupling:</strong> Lower hardware price point and monetize recurring fitness analytics subscriptions (software carries zero border tariffs).</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2025" data-module="mod-6" data-marks="6" id="pyq-2025-1g">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--blue">2025 End Term</span>
            <strong>Question 1(g) · Two Key Challenges During Technology Transformation</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Discuss two key challenges during technology transformation in an enterprise. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Challenge 1: Cultural Inertia &amp; Skills Gap (The People Friction) [3M]:</strong> Employees fear automation, distrust algorithmic black-box outputs, and resist adopting new software that disrupts decades of established routine. Legacy staff lack data literacy (prompt engineering, statistical evaluation), leading to expensive tools sitting idle. <em>Mitigation:</em> Leadership sponsorship, transparent retraining programs, and linking new tool adoption to performance incentives.</p>
            <p><strong>Challenge 2: Legacy Technical Debt &amp; Data Silos (The Systems Friction) [3M]:</strong> Enterprise data is trapped in isolated, on-premise relational databases (SAP, mainframe core banking) that cannot communicate via modern real-time APIs. Data quality is fragmented, full of duplicates and missing fields (poor Veracity). <em>Mitigation:</em> Phased cloud migration using middle-tier API adapters (MuleSoft, Kafka) rather than high-risk "big bang" core replacements.</p>
          </div>
        </details>
      </div>
    </div>

    <!-- ==========================================
         2024 END TERM PAPER QUESTIONS
         ========================================== -->
    <div class="pyq-item" data-year="2024" data-module="mod-7" data-marks="6" id="pyq-2024-1a">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(a) · Importance of Business Ethics for Sustainability</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Why is business ethics important for an organisation to prosper and sustain itself? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Core Scaffolding:</strong> 1) Preservation of stakeholder trust capital; 2) Lower cost of debt and equity capital; 3) Talent retention and ethical alignment; 4) Preemption of punitive regulatory intervention. See full analysis in Module 7.1.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-7" data-marks="6" id="pyq-2024-1b">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(b) · Deploying Triple Bottom Line across Strategic Intent</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>How does a company deploy the Triple Bottom Line (TBL) so that Vision, Mission, Values, Goals and Objectives are ethical and socially responsible? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Core Scaffolding:</strong> Translating John Elkington's Profit, People, Planet triad into the formal strategic intent hierarchy (Vision &rarr; Mission &rarr; Objectives &rarr; KPIs). See complete breakdown in Module 7.2.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-6" data-marks="6" id="pyq-2024-1c">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(c) · Role of FinTech in a Growing Economy (India)</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Discuss the role of FinTech in a growing economy like India. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: The India Stack Foundation (1.5M):</strong> India's FinTech revolution is powered by digital public infrastructure: Aadhaar (identity), UPI (instant payments rail), and Account Aggregator (consented financial data sharing).</p>
            <p><strong>Step 2: Four Economic Growth Catalysts (3M):</strong></p>
            <ul>
              <li><strong>1. Radical Financial Inclusion:</strong> Jan Dhan accounts enabled over 500 million unbanked citizens to enter formal digital commerce with zero account maintenance friction.</li>
              <li><strong>2. Credit Democratization for MSMEs:</strong> Replacing collateral-based underwriting with transaction cash-flow lending (analyzing GST filings and UPI QR payment streams to approve nano-loans in minutes).</li>
              <li><strong>3. Slashing Economic Transaction Friction:</strong> Instant QR-code retail payments eliminate physical cash handling costs, counterfeit currency losses, and bank clearing delays.</li>
              <li><strong>4. Wealthtech &amp; Micro-Insurance Penetration:</strong> Platforms (Zerodha, Groww) allow retail savers to invest as little as Rs 100 via SIPs, channeling domestic household savings directly into capital markets.</li>
            </ul>
            <p><strong>Step 3: Strategic Risks (1.5M):</strong> Digital lending predatory scams, algorithmic debt traps, and systemic cybersecurity concentration.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-3" data-marks="6" id="pyq-2024-1d">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(d) · IndiGo Operational Cost Reduction Strategies</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>How has IndiGo optimised operational strategies to reduce costs? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Step 1: Low-Cost Carrier (LCC) Alignment (1.5M):</strong> IndiGo dominates over 60% of Indian domestic aviation by executing Michael Porter's Cost Leadership generic strategy through an activity system of reinforcing choices.</p>
            <p><strong>Step 2: Five Operational Levers (3M):</strong></p>
            <ul>
              <li><strong>1. Fleet Homogeneity:</strong> Flies almost exclusively Airbus A320/A321 aircraft. Standardized cockpits mean pilots, cabin crew, and ground mechanics require only one certification, slashing training and spare-parts inventory overhead.</li>
              <li><strong>2. Ultra-Fast Aircraft Turnaround (20–25 Minutes):</strong> Dual-door boarding and disciplined ground crews minimize tarmac time. High aircraft utilization (12+ hours/day) spreads high fixed leasing costs over more revenue-generating passenger flights.</li>
              <li><strong>3. Sale-and-Leaseback Financial Engineering:</strong> Buys aircraft in bulk from Airbus at massive volume discounts, sells them immediately to leasing companies, and leases them back, generating instant upfront liquidity and keeping the fleet average age under 4 years (slashing fuel burn).</li>
              <li><strong>4. Single Cabin Class &amp; Ancillary Unbundling:</strong> Maximum seat density (no business class); baggage, seat selection, and food are unbundled as high-margin add-ons.</li>
              <li><strong>5. Direct Channel Booking:</strong> Minimizes GDS third-party distribution commissions via app incentives.</li>
            </ul>
            <p><strong>Step 3: Conclusion (1.5M):</strong> A textbook realization of Porter's First- and Second-Order strategic activity fit.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-6" data-marks="6" id="pyq-2024-1e">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(e) · Autonomous AI Agents in Human Resources (HR)</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>Identify two HR applications where AI agents can be deployed effectively. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Application 1: Automated Talent Acquisition &amp; Semantic Candidate Screening [3M]:</strong> An autonomous agent drafts optimized job descriptions, scans thousands of incoming PDF resumes, and performs semantic parsing against required competencies (beyond basic keyword matching). The agent engages candidates via conversational chat, coordinates interview calendar slots across multiple hiring managers, and performs preliminary technical coding evaluations, reducing Time-to-Hire by 65%.</p>
            <p><strong>Application 2: 24/7 Employee Onboarding &amp; Policy Copilot [3M]:</strong> New hires spend weeks asking routine questions about leave policies, payroll deductions, and medical benefits. A Retrieval-Augmented Generation (RAG) agent answers queries grounded strictly in internal policy handbooks, walks employees through insurance enrollment, and automates equipment provisioning, freeing HR business partners for high-value talent development.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-7" data-marks="6" id="pyq-2024-1f">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(f) · Beneish M-Score &amp; Altman Z-Score Bankruptcy Forensics</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>How do the Beneish M-Score and Altman Z-Score help predict bankruptcy status? (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Core Scaffolding:</strong> Altman Z-Score evaluates financial solvency, leverage, and liquidity distress across 5 balance-sheet ratios (&lt;1.81 Distress Zone). Beneish M-Score evaluates accounting fraud and earnings manipulation across 8 income-statement indices (&gt;-1.78 Manipulation Zone). Combined use: Beneish checks whether numbers can be trusted; Altman uses verified numbers to calculate failure probability. See complete mathematical formulation in Module 7.4.</p>
          </div>
        </details>
      </div>
    </div>

    <div class="pyq-item" data-year="2024" data-module="mod-2" data-marks="6" id="pyq-2024-1g">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--green">2024 End Term</span>
            <strong>Question 1(g) · PESTLE Opportunity Scan for Electric 2-Wheeler</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--marks">6 Marks</span>
            <span class="nb-exam-pill">Optional (Attempt 5 of 7)</span>
          </div>
        </div>
        <p><strong>Exact Question:</strong> <em>How can a company use PESTLE to spot opportunities in an industry? Examples for a new product launch. (6 Marks)</em></p>
        <details class="rv">
          <summary>View Complete Model Answer &amp; Rubric Scaffold (Target: 220–250 Words)</summary>
          <div class="rv-content">
            <p><strong>Core Scaffolding:</strong> PESTLE environmental scanning identifying external shifts that create unmet customer demand. Worked example of launching an Electric Two-Wheeler (E2W) in India analyzing subsidies, fuel operating cost disparity, urban air quality, and battery localization. See complete walkthrough in Module 2.2.</p>
          </div>
        </details>
      </div>
    </div>

    <!-- ==========================================
         2023 END TERM PAPER QUESTIONS (COCA-COLA)
         ========================================== -->
    <div class="pyq-item" data-year="2023" data-module="mod-8" data-marks="10" id="pyq-2023-compulsory">
      <div class="nb-exam-card">
        <div class="nb-exam-card__header">
          <div>
            <span class="nb-stamp nb-stamp--red">2023 End Term</span>
            <strong>Paper 3 Master Case · The Coca-Cola Company (60 Marks Total)</strong>
          </div>
          <div>
            <span class="nb-exam-pill nb-exam-pill--compulsory">All Questions Compulsory</span>
          </div>
        </div>
        <p>
          The 2023 examination is a comprehensive integrated case paper evaluating The Coca-Cola Company across six interconnected questions. All model answers, marking checklists, and case evidence are detailed in <strong>Module 8 (Case D)</strong>:
        </p>
        <ul>
          <li><strong>Q1(a) [5M]:</strong> Single bottom line vs Triple Bottom Line transition (shareholder primacy vs stakeholder stewardship).</li>
          <li><strong>Q1(b) [5M]:</strong> Technology enablement for TBL metrics (water replenishment IoT, World Without Waste supply tracking).</li>
          <li><strong>Q2 [10M]:</strong> Carroll's CSR Pyramid evaluation across Economic ($9.7B profit), Legal, Ethical, and Philanthropic responsibilities.</li>
          <li><strong>Q3 [10M]:</strong> ESG-sensitive investor evaluation: Water neutrality claims vs Indian groundwater table controversies and plastic pledges.</li>
          <li><strong>Q4 [10M]:</strong> Competitive benchmarking among top 5 Indian players: Coca-Cola, PepsiCo, Parle Agro, Dabur, and Tata Consumer Products.</li>
          <li><strong>Q5 [10M]:</strong> Dunphy, Griffiths &amp; Benn Phase Model evaluation (Wave 1 Rejection/Non-responsiveness &rarr; Wave 2 Compliance/Efficiency/Proactivity &rarr; Wave 3 Sustaining Corporation).</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Interactive Flashcard Deck -->
  <h3 class="sec-title" id="sec-flashcards">Active Recall Flashcard Deck (12 Core Concepts)</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin:20px 0;">
    <div class="nb-card" style="border-top:4px solid var(--ink);">
      <h4 style="font-size:1rem; color:var(--ink);">Graham Kenny 3 Steps</h4>
      <p style="font-size:14px;"><strong>Q:</strong> What is the core mistake of flipchart brainstorming?</p>
      <details class="rv"><summary>Flip to Reveal</summary><div class="rv-content">It creates an arbitrary, unfocused wishlist. Kenny starts with 1) Desired stakeholder behavioral outcome, converts to 2) Organization objective, and derives 3) Measurable KPIs.</div></details>
    </div>

    <div class="nb-card" style="border-top:4px solid var(--forest);">
      <h4 style="font-size:1rem; color:var(--forest);">Value Innovation</h4>
      <p style="font-size:14px;"><strong>Q:</strong> How does Blue Ocean break Porter's generic trade-off?</p>
      <details class="rv"><summary>Flip to Reveal</summary><div class="rv-content">Pursues differentiation AND low cost simultaneously by eliminating/reducing costly industry factors while raising/creating unprecedented buyer utility.</div></details>
    </div>

    <div class="nb-card" style="border-top:4px solid var(--burgundy);">
      <h4 style="font-size:1rem; color:var(--burgundy);">Altman Z vs Beneish M</h4>
      <p style="font-size:14px;"><strong>Q:</strong> Which model do you run first in forensic analysis?</p>
      <details class="rv"><summary>Flip to Reveal</summary><div class="rv-content">Run Beneish M-Score first! Beneish checks if reported accounts are manipulated (&gt;-1.78). If manipulated, Altman Z-Score calculations are untrustworthy.</div></details>
    </div>

    <div class="nb-card" style="border-top:4px solid var(--amber);">
      <h4 style="font-size:1rem; color:var(--amber);">NVIDIA Moat (Poll Q7)</h4>
      <p style="font-size:14px;"><strong>Q:</strong> Why can't AMD or Intel easily copy NVIDIA?</p>
      <details class="rv"><summary>Flip to Reveal</summary><div class="rv-content">All three propositions reinforce each other: 5M+ developers locked into CUDA (People &rarr; Value) ensure enterprise sales at 78% margins (Profit), funding $10B+ R&amp;D.</div></details>
    </div>
  </div>
</section>
"""
