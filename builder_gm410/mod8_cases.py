# builder_gm410/mod8_cases.py
# Module 8: Master Integrated Case Study Library (NVIDIA A-Z with Polls Q1-Q15, Microsoft, Amazon, Coca-Cola)

def get_mod8_cases_html():
    return """
<section id="mod-8-case-library" class="sheet">
  <div class="kick">Module 8 · Applied Master Case Study Dossiers</div>
  <h2 class="mod-title">Master Case Study Library &amp; Empirical Applications</h2>

  <p>
    Strategy and analytics are perfected in the crucible of real corporate dilemmas. This module provides four exhaustive master case dossiers directly reflecting the syllabus and examination materials: <strong>Case A: NVIDIA (INSEAD Blue Ocean Case &amp; Complete Poll Key Q1–Q15)</strong>, <strong>Case B: Microsoft and the Big Data Era (2025 Compulsory Paper)</strong>, <strong>Case C: Amazon and Big Data (2024 Compulsory Paper)</strong>, and <strong>Case D: The Coca-Cola Company (2023 Compulsory Paper)</strong>, accompanied by supplementary benchmarks (Booking.com, IndiGo, Nimbus Bank, and Mining).
  </p>

  <!-- CASE A: NVIDIA -->
  <article id="case-nvidia-blue-ocean" class="nb-case-card">
    <div class="nb-stamp nb-stamp--green">INSEAD Case IN2027 · Teaching Note IN2028</div>
    <h3 class="nb-card__title">Case A: NVIDIA — Can It Sustain Its Blue Ocean?</h3>
    <p>
      <em>Authors: Zunaira Munir, W. Chan Kim, Renée Mauborgne (INSEAD Blue Ocean Strategy Institute, 2025). Course Lead: Dr. Sonal Daulatkar, Welingkar Institute.</em>
    </p>

    <div class="nb-callout">
      <span class="nb-callout__tag">Executive Case Synopsis</span>
      On November 30, 2022, OpenAI released ChatGPT, triggering an unprecedented global explosion in artificial intelligence. Tech giants, enterprises, and sovereign governments rushed to acquire AI computing infrastructure, only to discover a stark market reality: <strong>NVIDIA's graphics processing units (GPUs) were virtually the sole hardware on earth capable of training and running advanced frontier Large Language Models (LLMs)</strong>. NVIDIA's market capitalization skyrocketed from ~$360B to over $3 Trillion, making it the most valuable corporation on the planet. Its quarterly revenues exploded past $26B with gross margins approaching 78%.
    </div>

    <h4 class="sub-title">1. The Architectural Physics: The "Embarrassingly Parallel" Problem</h4>
    <p>
      Why did a company founded in 1993 to make 3D video game graphics chips become the absolute king of artificial intelligence? In computer science, deep neural network training is an <strong>"embarrassingly parallel" workload</strong>:
    </p>
    <ul>
      <li><strong>Traditional Central Processing Units (CPUs, e.g. Intel, AMD):</strong> Designed with a few powerful, low-latency processing cores optimized for complex, sequential tasks (branch prediction, running operating systems). They process calculations one by one with high speed.</li>
      <li><strong>Graphics Processing Units (GPUs, NVIDIA):</strong> Designed with <em>thousands of smaller, simpler arithmetic cores</em> operating simultaneously. To render millions of pixels on a screen 60 times a second, GPUs perform massive matrix floating-point multiplications in parallel.</li>
      <li><strong>The AI Epiphany (2012):</strong> In 2012, researchers Alex Krizhevsky and Geoffrey Hinton won the ImageNet computer vision competition using NVIDIA GPUs (AlexNet). They proved that training artificial neural networks is mathematically identical to rendering 3D graphics: massive parallel matrix multiplication!</li>
    </ul>

    <h4 class="sub-title">2. The Strategic Moat: CUDA &amp; The "Walled Garden"</h4>
    <p>
      Hardware alone does not explain NVIDIA's 80%+ data center monopoly. In 2006, CEO Jensen Huang made a billion-dollar bet that Wall Street criticized: he created <strong>CUDA (Compute Unified Device Architecture)</strong>.
    </p>
    <ul>
      <li><strong>Software Moat:</strong> CUDA allowed developers to program NVIDIA's parallel GPU cores directly using standard programming languages (C, C++, Python) rather than obscure graphics shader code.</li>
      <li><strong>18-Year Ecosystem Lock-in:</strong> NVIDIA seeded CUDA freely across global universities and research labs. Every modern AI framework (PyTorch, TensorFlow) was written and optimized natively on CUDA. Over 5 million AI developers worldwide program exclusively in CUDA. Switching to a rival chip (AMD or Intel) requires rewriting complex software libraries, creating immense cognitive and financial switching costs.</li>
      <li><strong>Full-Stack Co-Design:</strong> NVIDIA acquired Mellanox in 2020 for $6.9B, integrating high-speed InfiniBand networking into its GPU racks (DGX SuperPOD). NVIDIA no longer sells individual silicon chips; it sells integrated AI computing factories.</li>
    </ul>

    <h4 class="sub-title">3. Critical Strategic Vulnerabilities &amp; Competitor Landscape</h4>
    <p>
      Can NVIDIA sustain its Blue Ocean, or will it be pulled into a hyper-competitive Red Ocean?
    </p>
    <ul>
      <li><strong>Hyperscaler In-House Silicon (40% Revenue Concentration):</strong> Microsoft, Google, Amazon, and Meta account for ~40% of NVIDIA's revenue. Every single one is designing proprietary AI ASICs (Google TPU, AWS Trainium/Inferentia, Microsoft Maia, Meta MTIA) to slash their dependency on NVIDIA's 75%+ margins.</li>
      <li><strong>Algorithmic Inference Efficiency (DeepSeek Shock):</strong> If AI research shifts from brute-force scale to ultra-efficient inference distillation (e.g. DeepSeek-R1), enterprise compute demand could peak, reducing future GPU capex.</li>
      <li><strong>Supply Chain Chokepoint:</strong> NVIDIA is fabless. It depends 100% on TSMC (Taiwan) for advanced wafer fabrication and CoWoS packaging, exposing it to catastrophic geopolitical disruption.</li>
      <li><strong>Export Controls:</strong> U.S. government sanctions restrict NVIDIA from selling cutting-edge chips to China, cutting off 20–25% of its historical market.</li>
    </ul>

    <h4 class="sub-title" style="color:var(--forest);">4. Complete INSEAD Teaching Note Poll Question Analysis (Q1 &ndash; Q15)</h4>
    <p>
      Below is the definitive analysis of all 15 classroom poll questions from the INSEAD Teaching Note (IN2028), prepared for Dr. Sonal Daulatkar's MBA cohort:
    </p>

    <!-- Poll Q1 -->
    <div id="nvidia-poll-q1" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 1 · Investment Nature</strong>
        <span class="nb-exam-pill">Concept: Market Creation</span>
      </div>
      <p><em>NVIDIA's investments in building specialized AI chips for data centers can be viewed as:</em></p>
      <div class="nb-poll-opt">A. Competitive moves to protect its gaming market share.</div>
      <div class="nb-poll-opt">B. Speculative bets on unproven future technology.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. A market-creating strategy to generate new demand for AI acceleration.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>C</strong>. NVIDIA was not defending its gaming PC graphics business (A), nor was it taking an unguided speculative gamble (B). By recognizing that computing workloads were shifting to parallel matrix processing, NVIDIA proactively built a market-creating strategy that unlocked a brand-new, uncontested multi-billion-dollar data center category.</p>
    </div>

    <!-- Poll Q2 -->
    <div id="nvidia-poll-q2" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 2 · CUDA Platform Role</strong>
        <span class="nb-exam-pill">Concept: Value Innovation</span>
      </div>
      <p><em>NVIDIA's CUDA software platform represents:</em></p>
      <div class="nb-poll-opt">A. An expensive add-on to boost hardware prices.</div>
      <div class="nb-poll-opt">B. An open-source hobbyist experiment.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Value innovation providing immense buyer value at low marginal cost to NVIDIA.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>C</strong>. CUDA is the textbook realization of Value Innovation. By distributing the software freely to researchers, NVIDIA drastically lowered programming friction (raising buyer value), while incurring minimal incremental distribution cost, creating an unbreachable ecosystem lock-in.</p>
    </div>

    <!-- Poll Q3 -->
    <div id="nvidia-poll-q3" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 3 · Why AI Chips are a Blue Ocean</strong>
        <span class="nb-exam-pill">Concept: Blue Ocean Genesis</span>
      </div>
      <p><em>Why do NVIDIA's Data Center AI chips represent a Blue Ocean?</em></p>
      <div class="nb-poll-opt">A. Because NVIDIA stole 90% of Intel's CPU market share in PCs.</div>
      <div class="nb-poll-opt">B. Because the chips were sold at the lowest price in the industry.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Because it created a brand-new market category of AI accelerated data centers.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>C</strong>. Blue Ocean strategy is defined by expanding market boundaries and creating new demand. NVIDIA did not win by discounting PC chips; it established accelerated computing data centers where none existed before.</p>
    </div>

    <!-- Poll Q4 -->
    <div id="nvidia-poll-q4" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 4 · Buyer Value Proposition Drivers</strong>
        <span class="nb-exam-pill">Concept: Value Proposition</span>
      </div>
      <p><em>What attracts customers to buy NVIDIA's Data Center AI chips?</em></p>
      <div class="nb-poll-opt nb-poll-opt--correct">A. Software resources (CUDA, cuDNN) that simplify and expedite AI programming.</div>
      <div class="nb-poll-opt">B. Cost efficiency in general sequential computing tasks.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Supercomputer-like AI performance at a fraction of data center cluster cost.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">D. Energy efficiency per computational token.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct choices are <strong>A, C, and D</strong>. Choice B is incorrect because GPUs are inefficient for general sequential computing tasks (which CPUs handle). Customers buy NVIDIA because of the software toolkits (A), extreme training throughput (C), and energy efficiency per FLOPS (D).</p>
    </div>

    <!-- Poll Q5 -->
    <div id="nvidia-poll-q5" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 5 · Profit Proposition Enablers</strong>
        <span class="nb-exam-pill">Concept: Profit Proposition</span>
      </div>
      <p><em>What enables NVIDIA's exceptionally profitable business model?</em></p>
      <div class="nb-poll-opt">A. Undercutting competitor chip prices.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">B. Premium pricing power yielding 75&ndash;78% gross margins.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Fabless manufacturing model outsourcing capex to TSMC.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">D. Deep collaboration with the global AI research community.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct choices are <strong>B, C, and D</strong>. Choice A is completely false—NVIDIA charges astronomical premiums ($30,000–$40,000 per H100 chip). Its profit proposition is driven by premium pricing (B), extreme capital efficiency via the fabless model (C), and university researchers writing software for free (D).</p>
    </div>

    <!-- Poll Q6 -->
    <div id="nvidia-poll-q6" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 6 · People Proposition Foundation</strong>
        <span class="nb-exam-pill">Concept: People Proposition</span>
      </div>
      <p><em>How does NVIDIA inspire and align its employees and developer ecosystem?</em></p>
      <div class="nb-poll-opt nb-poll-opt--correct">A. Technical excellence and a culture of audacious engineering challenges.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">B. Leading hardware integrated with software that empowers developers to solve grand challenges.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Strong community support, hackathons, and developer evangelism.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct choices are <strong>A, B, and C</strong> (all marked in bold in the Teaching Note). NVIDIA's people proposition motivates both internal talent and millions of external developers by providing elite tools that solve previously intractable computational problems.</p>
    </div>

    <!-- Poll Q7 -->
    <div id="nvidia-poll-q7" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 7 · Strategic Proposition Alignment</strong>
        <span class="nb-exam-pill">Concept: Alignment Moat</span>
      </div>
      <p><em>How do NVIDIA's Value, Profit, and People propositions interact?</em></p>
      <div class="nb-poll-opt">A. They operate independently in separate business units.</div>
      <div class="nb-poll-opt">B. The Profit proposition conflicts with the Value proposition.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">D. All three propositions mutually reinforce one another, creating an unbreachable barrier to imitation.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>D</strong>. Alignment creates a powerful virtuous cycle: developer enthusiasm (People) drives CUDA adoption (Value), which commands enterprise pricing and high margins (Profit), which funds multi-billion R&D to widen the technical lead.</p>
    </div>

    <!-- Poll Q8 -->
    <div id="nvidia-poll-q8" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 8 · Classifying Gaming GPU Business (PMS Map)</strong>
        <span class="nb-exam-pill">Concept: PMS Portfolio</span>
      </div>
      <p><em>How would you classify NVIDIA's GeForce Gaming GPU business on the Pioneer–Migrator–Settler map?</em></p>
      <div class="nb-poll-opt">A. Pioneer (unprecedented value innovation).</div>
      <div class="nb-poll-opt nb-poll-opt--correct">B. Migrator (better than rivals, established market, steady cash flow).</div>
      <div class="nb-poll-opt">C. Settler (me-too commodity product).</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>B</strong>. GeForce GPUs offer industry-leading performance and command high loyalty, but gaming graphics is a mature, competitive market. It represents value improvement (Migrator), not radical market creation.</p>
    </div>

    <!-- Poll Q9 -->
    <div id="nvidia-poll-q9" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 9 · Classifying AI Data Center Business (PMS Map)</strong>
        <span class="nb-exam-pill">Concept: PMS Portfolio</span>
      </div>
      <p><em>How would you classify NVIDIA's Data Center AI chip business on the PMS map?</em></p>
      <div class="nb-poll-opt nb-poll-opt--correct">A. Pioneer (breakthrough value innovation creating explosive new demand).</div>
      <div class="nb-poll-opt">B. Migrator.</div>
      <div class="nb-poll-opt">C. Settler.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>A</strong>. Data Center AI solutions delivered unprecedented computing throughput and created an entirely new market space, making it a pure Pioneer.</p>
    </div>

    <!-- Poll Q10 -->
    <div id="nvidia-poll-q10" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 10 · Classifying AI Foundry Business (PMS Map)</strong>
        <span class="nb-exam-pill">Concept: Emerging Pioneer</span>
      </div>
      <p><em>How would you classify NVIDIA's emerging AI Foundry business?</em></p>
      <div class="nb-poll-opt nb-poll-opt--correct">D. An emerging Pioneer with innovative value proposition, though scale is not yet fully proven.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>D</strong>. AI Foundry offers bespoke software models and services to enterprises. It represents radical value innovation, but is currently in the early adoption stage.</p>
    </div>

    <!-- Poll Q11 -->
    <div id="nvidia-poll-q11" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 11 · Health of NVIDIA's Portfolio</strong>
        <span class="nb-exam-pill">Concept: Portfolio Balance</span>
      </div>
      <p><em>How healthy is NVIDIA's corporate portfolio balance?</em></p>
      <div class="nb-poll-opt">A. Highly vulnerable due to lack of cash cows.</div>
      <div class="nb-poll-opt">B. Trapped in stagnant red oceans.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">C. Balanced: defending cash-generating core businesses while aggressively seeding Pioneers.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>C</strong>. NVIDIA maintains exceptional portfolio health: cash flow from Gaming GPUs (Migrators) and legacy graphics funds relentless R&D into AI Data Centers (Pioneers) and software services.</p>
    </div>

    <!-- Poll Q12 -->
    <div id="nvidia-poll-q12" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 12 · Revenue Explosion Driver</strong>
        <span class="nb-exam-pill">Concept: Demand Creation</span>
      </div>
      <p><em>What was the primary driver of NVIDIA's historic revenue explosion from 2022 to 2025?</em></p>
      <div class="nb-poll-opt">A. Aggressive price discounts in PC gaming.</div>
      <div class="nb-poll-opt nb-poll-opt--correct">B. Creation of brand-new demand for AI accelerated computing across all industries.</div>
      <div class="nb-poll-opt">C. Decline of smartphone sales.</div>
      <p><strong>Teaching Note Rationale:</strong> Correct answer is <strong>B</strong>. Growth was unlocked not by cannibalizing gaming rivals, but by generating entirely new enterprise and cloud demand for generative AI training and inference.</p>
    </div>

    <!-- Poll Q13 -->
    <div id="nvidia-poll-q13" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 13 · Biggest Future Challenge (Open-Ended)</strong>
        <span class="nb-exam-pill">Concept: Threat Diagnosis</span>
      </div>
      <p><em>What is the biggest strategic challenge facing NVIDIA's Data Center business?</em></p>
      <p><strong>Teaching Note Answer Key &amp; Pedagogical Defense:</strong> The best argued answer is <strong>D: Big Tech customers designing in-house silicon</strong> (Microsoft Maia, AWS Trainium, Google TPU, Meta MTIA). Because four hyperscalers account for ~40% of NVIDIA's revenue, customer backward integration directly threatens its revenue base. The sharpest emerging technical threat is <strong>inference distillation (DeepSeek)</strong>, which reduces the sheer volume of compute needed to run frontier reasoning models.</p>
    </div>

    <!-- Poll Q14 -->
    <div id="nvidia-poll-q14" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 14 · Best Response to In-House Silicon (Open-Ended)</strong>
        <span class="nb-exam-pill">Concept: Strategic Response</span>
      </div>
      <p><em>How should NVIDIA respond to hyperscalers building in-house chips?</em></p>
      <p><strong>Teaching Note Answer Key:</strong> The strongest strategic mix is <strong>E (fortify the software and developer ecosystem)</strong>, <strong>D (license custom design IP and co-design architectures)</strong>, and <strong>C (broaden the customer base to enterprise AI Foundry and sovereign nation states)</strong>. NVIDIA must avoid anti-competitive exclusive dealing contracts (Option A), as that would invite severe antitrust intervention.</p>
    </div>

    <!-- Poll Q15 -->
    <div id="nvidia-poll-q15" class="nb-poll-card">
      <div class="nb-poll-card__header">
        <strong>Poll Question 15 · Critical Drivers of Future Success (Open-Ended)</strong>
        <span class="nb-exam-pill">Concept: Strategic Renewal</span>
      </div>
      <p><em>What critical factors will determine NVIDIA's success over the next decade?</em></p>
      <p><strong>Teaching Note Answer Key:</strong> Primary factors include <strong>A (sustaining hardware architectural lead)</strong>, <strong>D (spotting irreversible technological trends in inference, edge AI, and physical robotics)</strong>, <strong>E (expanding recurring software subscription ARR through NIMs)</strong>, and <strong>F (maintaining a balanced Pioneer–Migrator–Settler portfolio)</strong>.</p>
    </div>
  </article>

  <!-- CASE B: MICROSOFT -->
  <article id="case-microsoft-bigdata" class="nb-case-card">
    <div class="nb-stamp nb-stamp--blue">2025 End Term Exam · Compulsory Q2 (30 Marks)</div>
    <h3 class="nb-card__title">Case B: Microsoft and the Big Data Era</h3>
    <p>
      <em>Core Focus: Enterprise installed-base lock-in, cloud transformation, spatial sensor telemetry, and big data monetization.</em>
    </p>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(a) [10 Marks] · Strategic Positioning Post-Mobile</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: How did Microsoft position itself as a key player in the Big Data era despite losing ground in mobile?</em></p>
      <div class="nb-exam-scaffold">
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">1. The Strategic Dilemma &amp; The Mobile Defeat</span>
          Microsoft lost the smartphone operating system war to Apple iOS and Google Android (writing off the $7.6B Nokia acquisition). Lacking mobile consumer endpoints, Microsoft pivoted under Satya Nadella to a <strong>"Cloud-First, Mobile-First, Enterprise-Centric"</strong> positioning strategy.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">2. Azure Infrastructure &amp; Data Fabric</span>
          Instead of capturing consumer handset data, Microsoft captured <em>enterprise compute and transactional data</em>. It built Microsoft Azure into a global hyperscale cloud platform, providing scalable data lakes (Azure Data Lake, HDInsight, Cosmos DB) that enterprise clients used to store and process their Big Data.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">3. Enterprise Software Footprint as Data Ingestion Engine</span>
          Microsoft converted its installed enterprise base into SaaS pipelines: Office 365, Teams, and Dynamics 365. Through the <em>Microsoft Graph</em>, it unified communications, emails, spreadsheets, and organizational workflows into a structured data asset that enterprises could mine for operational productivity.
        </div>
      </div>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(b) [10 Marks] · The Strategic Role of the Kinect Sensor</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: What role did Kinect play in expanding Microsoft's data strategy?</em></p>
      <div class="nb-exam-scaffold">
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">1. Transition from Gaming Peripheral to Spatial Telemetry</span>
          Launched in 2010 for Xbox 360, Kinect was widely perceived as a consumer gaming device. Strategically, however, it served as <strong>Microsoft's premier testbed for real-time computer vision and multimodal sensor telemetry</strong>.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">2. Capturing Unstructured Spatial &amp; Behavioral Data</span>
          Kinect utilized RGB cameras, infrared depth sensors, and multi-array microphones. It captured millions of terabytes of unstructured real-world data: skeletal motion tracking, facial expression recognition, and voice acoustics.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">3. Foundation for Commercial AI &amp; Industrial Azure IoT</span>
          The machine learning algorithms trained on Kinect telemetry became the foundational IP for Microsoft's enterprise AI: <strong>HoloLens mixed reality</strong>, <strong>Azure Cognitive Services (Face API, Speech-to-Text)</strong>, and <strong>Azure Kinect Developer Kit</strong> deployed across hospital patient monitoring, retail foot-traffic heatmaps, and industrial robotic automation.
        </div>
      </div>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(c) [10 Marks] · Leveraging Enterprise Heritage to Deliver Big Data Solutions</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: Explain how Microsoft leveraged its enterprise background to deliver Big Data solutions.</em></p>
      <div class="nb-exam-scaffold">
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">1. Established Trust &amp; Hybrid Cloud Credibility</span>
          Unlike pure consumer platforms, Microsoft possessed decades of deep institutional relationships with Fortune 500 CIOs. Recognizing that conservative enterprises (banks, healthcare) could not immediately move all data to the public cloud, Microsoft dominated the <strong>Hybrid Cloud</strong> architecture via <em>Azure Stack</em> and Windows Server integration.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">2. Packaging Complex Big Data into Familiar Business Tools</span>
          While competitors required specialized Linux command-line tooling, Microsoft democratized analytics by integrating Big Data directly into <strong>Excel and Power BI</strong>. Business analysts could query petabytes of Hadoop and SQL Server data using drag-and-drop DAX formulas without writing low-level code.
        </div>
        <div class="nb-exam-step">
          <span class="nb-exam-step__badge">3. Enterprise Security, Governance &amp; Single Sign-On (SSO)</span>
          Microsoft leveraged Active Directory (Entra ID) to deliver centralized data governance, role-based access control, and GDPR/HIPAA compliance, making its Big Data stack the easiest for IT departments to approve.
        </div>
      </div>
    </div>
  </article>

  <!-- CASE C: AMAZON -->
  <article id="case-amazon-bigdata" class="nb-case-card">
    <div class="nb-stamp nb-stamp--amber">2024 End Term Exam · Compulsory Q2 (30 Marks)</div>
    <h3 class="nb-card__title">Case C: Amazon and Big Data</h3>
    <p>
      <em>Core Focus: Data flywheel across retail and cloud, cashierless computer vision (Amazon Go), predictive logistics (Anticipatory Shipping), and comparative SWOT.</em>
    </p>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(a) [10 Marks] · Big Data Across Business Units &amp; Global Scaling Challenges</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: Explain the role of Big Data across Amazon's business units, its integration into strategy, and challenges in scaling globally.</em></p>
      <ul>
        <li><strong>E-Commerce Marketplace:</strong> Dynamic algorithmic pricing re-evaluating millions of SKUs every 15 minutes; recommendation engine driving ~35% of total sales.</li>
        <li><strong>Fulfillment &amp; Logistics (Kiva Robotics):</strong> Optimizing inventory placement across fulfillment centers to ensure same-day Prime delivery.</li>
        <li><strong>Amazon Web Services (AWS):</strong> Monetizing its proprietary data infrastructure by selling scalable cloud databases (DynamoDB, Redshift) to global enterprises.</li>
        <li><strong>Global Scaling Challenges:</strong> Data sovereignty laws (GDPR in Europe, DPDP in India) mandating local data residency; cross-border data transfer restrictions; and algorithmic bias in automated marketplace seller suspensions.</li>
      </ul>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(b) [5 Marks] · Amazon Go Business Model &amp; Physical Retail Transformation</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: What is the business model of Amazon Go, and how will real-time data reshape physical stores?</em></p>
      <p>
        <strong>Business Model:</strong> Eliminates checkout lines via <strong>"Just Walk Out" technology</strong>. Shoppers scan a QR code upon entry, pick items from shelves, and simply exit. The business model reduces in-store labor overhead, accelerates shopper throughput by 300%, and monetizes the technology by licensing it to third-party airports and stadium concessionaires.
        <br><strong>Data Reshaping Retail:</strong> Ceiling-mounted camera arrays and weight sensors on shelves capture micro-behavioral data previously invisible in physical retail: which items shoppers pick up, inspect, and put back. This enables real-time heatmapping of shelf placement and automated stock replenishment.
      </p>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(c) [8 Marks] · Predictive Analytics &amp; Anticipatory Shipping</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <p><em>Exam Prompt: Explain the role of predictive analytics in supply chain optimisation, anticipatory shipping, and associated operational risks.</em></p>
      <p>
        In 2013, Amazon patented <strong>Anticipatory Shipping</strong>: an algorithm that ships products toward regional distribution hubs <em>before the customer has even clicked 'Buy'</em>.
        <br>&bull; <strong>Predictive Inputs:</strong> Prior purchase history, search queries, wish lists, shopping cart dwell time, and seasonal geographic demand.
        <br>&bull; <strong>Supply Chain Optimization:</strong> Drastically slashes final-mile delivery times, making 2-hour delivery feasible without holding duplicate inventory.
        <br>&bull; <strong>Operational Risks:</strong> Incorrect algorithmic predictions lead to inventory misallocation, unnecessary reverse logistics costs, and stockouts in unanticipated regions.
      </p>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2(d) [7 Marks] · E-Commerce vs AWS Cloud Comparative SWOT</strong>
        <span class="nb-exam-pill nb-exam-pill--compulsory">Compulsory</span>
      </div>
      <div class="tblwrap">
        <table class="nb-table">
          <thead>
            <tr>
              <th>SWOT Dimension</th>
              <th>Amazon E-Commerce Marketplace</th>
              <th>Amazon Web Services (AWS Cloud)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Strengths</strong></td>
              <td>Unrivaled logistics moat, Prime subscriber loyalty, massive SKU selection.</td>
              <td>Dominant cloud market share, high operating margin (~28–30%), sticky enterprise lock-in.</td>
            </tr>
            <tr>
              <td><strong>Weaknesses</strong></td>
              <td>Razor-thin operating margins (~1–3%), high labor and shipping capex.</td>
              <td>Complex pricing, heavy capital expenditure for continuous data center buildouts.</td>
            </tr>
            <tr>
              <td><strong>Opportunities</strong></td>
              <td>Third-party merchant ads, grocery expansion, rural market penetration.</td>
              <td>Generative AI hosting (Bedrock), sovereign cloud infrastructure, enterprise ML migration.</td>
            </tr>
            <tr>
              <td><strong>Threats</strong></td>
              <td>Low-cost Chinese cross-border apps (Temu, Shein), antitrust investigations into merchant self-preferencing.</td>
              <td>Fierce competition from Microsoft Azure and Google Cloud; enterprise cloud cost optimization.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Growth Verdict:</strong> AWS drives the vast majority of Amazon's corporate operating income, subsidizing e-commerce logistics investments. AWS will continue to drive higher margin expansion through AI services, while e-commerce drives cash flow volume.</p>
    </div>
  </article>

  <!-- CASE D: COCA-COLA -->
  <article id="case-coca-cola-sustainability" class="nb-case-card">
    <div class="nb-stamp nb-stamp--red">2023 End Term Exam · Compulsory Case (60 Marks Total)</div>
    <h3 class="nb-card__title">Case D: The Coca-Cola Company: Sustainability, CSR &amp; TBL</h3>
    <p>
      <em>Core Focus: Triple Bottom Line transition, Carroll's CSR Pyramid, ESG investor scrutiny, Indian beverage industry rivalry, and Dunphy's Phase Model.</em>
    </p>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 1(a) [5M] · Traditional vs Triple Bottom Line Move</strong>
      </div>
      <p>
        The traditional bottom line (Milton Friedman shareholder primacy) evaluates corporations solely on net accounting profit. The move to the <strong>Triple Bottom Line (John Elkington, 1994)</strong> recognizes that a beverage manufacturer cannot generate long-term profits if it depletes local agricultural watersheds (Planet) or harms public health through high-sugar consumption (People). TBL embeds systemic social and ecological costs into performance auditing.
      </p>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 1(b) [5M] · Technology Enablement for TBL Metrics</strong>
      </div>
      <p>
        Coca-Cola technology-enables TBL compliance through:
        <br>1. <strong>IoT Water Flow Telemetry:</strong> Digital meters monitoring water replenishment in local Indian aquifers, calculating the exact water use ratio (liters of water per liter of beverage).
        <br>2. <strong>World Without Waste Tracking:</strong> RFID and digital supply chain barcoding tracking collected post-consumer PET bottles toward a 100% recycling target.
        <br>3. <strong>Plant Energy Monitoring:</strong> Automated sensors optimizing boiler temperatures and rooftop solar integration in bottling plants.
      </p>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 2 [10M] · Fulfilling Carroll's CSR Pyramid Responsibilities</strong>
      </div>
      <ul>
        <li><strong>1. Economic Responsibilities (Base):</strong> Profitable global operations ($9.77B net profit in 2021) generating employment, paying taxes, and delivering returns to shareholders.</li>
        <li><strong>2. Legal Responsibilities:</strong> Strict adherence to food safety standards (FSSAI in India), labor laws, and environmental wastewater discharge limits.</li>
        <li><strong>3. Ethical Responsibilities:</strong> Voluntary reduction of sugar content across beverage portfolios, introducing stevia-sweetened options, and refraining from marketing sodas to children under 12.</li>
        <li><strong>4. Philanthropic Responsibilities:</strong> The Coca-Cola Foundation funding clean drinking water access in drought-prone rural Indian villages and disaster relief.</li>
      </ul>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 3 [10M] · Would an ESG-Sensitive Investor Buy Stakes in Coca-Cola?</strong>
      </div>
      <div class="nb-callout nb-callout--warn">
        <span class="nb-callout__tag">Critical Analytical Verdict: Balanced / Cautious Hold</span>
        An ESG-sensitive investor must weigh Coca-Cola's ambitious public commitments against severe ongoing environmental liabilities:
        <br>&bull; <strong>The Bull Case (ESG Strengths):</strong> Documented 100%+ water replenishment claims across global plants; development of 100% plant-based packaging (PlantBottle); robust diversity, equity, and inclusion (DEI) metrics on its board.
        <br>&bull; <strong>The Bear Case (ESG Risks &amp; Greenwashing):</strong> Coca-Cola is repeatedly ranked by environmental audits as the world's #1 single-use plastic polluter. In India (e.g. Plachimada controversy), local farming communities faced severe groundwater table depletion. High-sugar beverage sales contribute to global obesity and diabetes epidemics.
        <br>&bull; <strong>Conclusion:</strong> An ESG-focused fund would likely demand tied green-bond covenants or maintain an underweight/neutral position until circular bottle returns achieve verified 100% audit status.
      </div>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 4 [10M] · Industry Analysis Among Top 5 Competitors in India</strong>
      </div>
      <div class="tblwrap">
        <table class="nb-table">
          <thead>
            <tr>
              <th>Competitor</th>
              <th>Market Focus &amp; Core Portfolio</th>
              <th>Competitive Dynamics vs Coca-Cola India</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>The Coca-Cola Company</strong></td>
              <td>Thums Up, Coca-Cola, Sprite, Maaza, Kinley.</td>
              <td>Dominates carbonated fizzy drinks (Thums Up is #1 in India) and packaged mango pulp (Maaza).</td>
            </tr>
            <tr>
              <td><strong>PepsiCo India</strong></td>
              <td>Pepsi, Mountain Dew, 7UP, Mirinda, Tropicana, Lay's.</td>
              <td>Direct global rival; strong snack-food synergy via Lay's and Kurkure cross-merchandising.</td>
            </tr>
            <tr>
              <td><strong>Parle Agro</strong></td>
              <td>Frooti, Appy Fizz, BFizz.</td>
              <td>Fierce rival in fruit-based drinks; pioneered fizzy apple juice segment with Appy Fizz.</td>
            </tr>
            <tr>
              <td><strong>Dabur India</strong></td>
              <td>Real Fruit Juice, Active.</td>
              <td>Commands the health and wellness 100% juice segment; strong natural/ayurvedic brand trust.</td>
            </tr>
            <tr>
              <td><strong>Tata Consumer Products</strong></td>
              <td>Himalayan Natural Mineral Water, Tata Gluco Plus.</td>
              <td>Rapidly scaling in affordable glucose energy drinks and premium natural water; high institutional trust.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="nb-exam-card">
      <div class="nb-exam-card__header">
        <strong>Question 5 [10M] · Dunphy, Griffiths &amp; Benn Phase Model Evaluation</strong>
      </div>
      <p>
        Evaluating Coca-Cola across the 3 Waves and 6 Steps of the Dunphy Phase Model (misprinted as "Phrase model" in the exam):
      </p>
      <ul>
        <li><strong>Wave 1 (Rejection &amp; Non-Responsiveness):</strong> Coke has completely evolved beyond these stages; it is fully engaged in corporate environmental reporting.</li>
        <li><strong>Wave 2 (Compliance &amp; Efficiency):</strong> <strong>Fully Achieved.</strong> Coke maintains comprehensive legal wastewater treatment plants and continuously drives energy/water efficiency per liter produced.</li>
        <li><strong>Wave 2, Step 5 (Strategic Proactivity):</strong> <strong>Partially Achieved.</strong> Developing recyclable packaging and zero-sugar lines. However, because ~60% of corporate revenues still originate from high-sugar beverages in plastic bottles, sustainability does not yet provide an absolute competitive moat.</li>
        <li><strong>Wave 3, Step 6 (The Sustaining Corporation):</strong> <strong>In Progress.</strong> Coca-Cola partners with WWF and BSR to restore international river basins, but cannot claim full status as a sustaining corporation until single-use plastic waste is eradicated.</li>
      </ul>
    </div>
  </article>
</section>
"""
