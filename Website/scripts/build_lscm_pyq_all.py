import re
import os
import sys
import json
import markdown

sys.stdout.reconfigure(encoding='utf-8')

SOURCE_PATH = r"C:\Users\MSI\Downloads\LSCM_Top_PYQ_Exam_Answer_Bank.md"
MDX_DEST_PATH = r"domains\operations\logistics-supply-chain\notebooks\lscm-top-pyq-exam-answer-bank.mdx"
HTML_DEST_OPS = r"Operations\LSCM\LSCM_Top_PYQ_Exam_Answer_Bank_2.0.html"
HTML_DEST_PUB = r"Website\public\operations\lscm-archive\LSCM_Top_PYQ_Exam_Answer_Bank_2.0.html"
META_DEST_OPS = r"Operations\LSCM\LSCM_Top_PYQ_Exam_Answer_Bank_2.0.meta.json"
TEMPLATE_PATH = r"_templates\v2\notebook-template-2.html"

def clean_content(text):
    # 1. Multi-line # \[ ```{=tex} ... ``` \]
    text = re.sub(r'#\s*\\\[\s*```\{=tex\}\s*([\s\S]*?)\s*```\s*\\\]', r'$$\n\1\n$$', text)
    # 2. Block ```{=tex} ... ```
    text = re.sub(r'```\{=tex\}\s*([\s\S]*?)\s*```', r'$$\n\1\n$$', text)
    # 3. `...`{=tex}
    text = re.sub(r'`([^`]+)`\{=tex\}', r'\1', text)
    # 4. \[ ... \]
    text = re.sub(r'\\\[\s*([\s\S]*?)\s*\\\]', r'$$\n\1\n$$', text)
    # 5. Escaped special characters
    text = text.replace(r'\_', '_')
    text = text.replace(r'Q\^\*', 'Q^*')
    text = text.replace(r'\·', '·')
    text = text.replace(r'\–', '–')
    text = text.replace(r'\—', '—')
    text = text.replace(r'\(', '(')
    text = text.replace(r'\)', ')')
    # 6. Currency $50 -> ₹50 (to prevent math mode collision)
    text = re.sub(r'\$(\d+[\d,]*(?:\.\d+)?)', r'₹\1', text)
    # 7. Remove trailing backslashes at ends of lines
    text = re.sub(r'\\\s*$', '', text, flags=re.MULTILINE)
    # 8. Clean horizontal rules
    text = re.sub(r'-{10,}', '---', text)
    # 9. Clean table formatting dashes
    text = re.sub(r'^\s*--+\s*$', '', text, flags=re.MULTILINE)
    # 10. Clean broken math artifacts
    text = text.replace(r'\sigma_{DL}', r'\sigma_{DL}')
    text = text.replace(r'\sigma_d', r'\sigma_d')
    text = text.replace(r'\sigma_L', r'\sigma_L')
    return text

def parse_source():
    with open(SOURCE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = {}
    
    # Priority Map & Format (up to PART A)
    m_intro = re.search(r'^(.*?)(?=\n# PART A)', content, re.DOTALL)
    parts['intro'] = clean_content(m_intro.group(1)) if m_intro else ""

    # Questions Q1 to Q24
    questions = {}
    for q_num in range(1, 25):
        pattern = rf'\n# Q{q_num}\.(.*?)(?=\n# Q{q_num+1}\.|\n# PART [B-Z]|\n# End|\Z)'
        m = re.search(pattern, content, re.DOTALL)
        if m:
            questions[q_num] = clean_content(m.group(1).strip())
        else:
            print(f"Warning: Q{q_num} not found with standard pattern")
    parts['questions'] = questions

    # Numericals 1 to 5
    numericals = {}
    for n_num in range(1, 6):
        pattern = rf'\n# Numerical {n_num} --- (.*?)(?=\n# Numerical {n_num+1} --- |\n# PART [F-Z]|\n# End|\Z)'
        m = re.search(pattern, content, re.DOTALL)
        if m:
            numericals[n_num] = clean_content(m.group(1).strip())
        else:
            print(f"Warning: Numerical {n_num} not found with standard pattern")
    parts['numericals'] = numericals

    # Other parts F through K
    other_parts = ['PART F', 'PART G', 'PART H', 'PART I', 'PART J', 'PART K', 'Final Exam Strategy']
    for p_name in other_parts:
        if p_name == 'Final Exam Strategy':
            pattern = rf'\n# {p_name}(.*?)(?=\n# End|\Z)'
        else:
            pattern = rf'\n# {p_name} --- (.*?)(?=\n# PART |\n# Final Exam Strategy|\n# End|\Z)'
        m = re.search(pattern, content, re.DOTALL)
        if m:
            parts[p_name] = clean_content(m.group(1).strip())
        else:
            print(f"Warning: {p_name} not found")

    return parts

def format_question_body(raw_text):
    lines = raw_text.split('\n')
    body_lines = []
    for l in lines:
        if re.match(r'^(#+\s*Q\d+|Q\d+\.)', l):
            continue
        body_lines.append(l)
    return '\n'.join(body_lines).strip()

def generate_mdx(parts):
    q_map = parts['questions']
    n_map = parts['numericals']

    mdx_lines = [
        "---",
        'title: "LSCM Top PYQ Exam Answer Bank: Master Examination Solutions (2023–2025)"',
        "slug: lscm-top-pyq-exam-answer-bank",
        "domain: operations",
        "subject: logistics-supply-chain",
        'course: "Logistics and SCM: Value Creation, Adaptability & Sustainability"',
        'professor: "Prof. Ajit Maurya, Prof. Manoj Dagaonkar, Prof. Praful More"',
        "description: >",
        "  Exhaustive 24-question solved examination answer bank and numerical master set for LSCM.",
        "  Covers 5M, 6M, and 10M formats, 5 solved numericals (EOQ, EPQ, Quantity Discount, Safety Stock, Newsvendor),",
        "  Incoterms 2020 matrix, and last-minute exam recall.",
        "status: published",
        "version: 2.0.0",
        'updated: "2026-10-07"',
        "tags:",
        "  - LSCM",
        "  - PYQ",
        "  - EOQ",
        "  - Safety-Stock",
        "  - Newsvendor",
        "  - Incoterms-2020",
        "  - Kraljic",
        "  - Warehousing",
        "  - SCOR",
        "  - Exam-Solutions",
        "featured: true",
        "interactive:",
        "  available: false",
        "pdf:",
        "  available: true",
        "---",
        "",
        "# 01 — START: Scope, Priority Map & Exam-Writing Architecture",
        "",
        '<StickyNote color="yellow" title="The Examination Writing Imperative">',
        '  "In postgraduate supply chain examinations, marks are not awarded for memorized text dumps. Scoring demands structural precision: Definition -> Architectural Blueprint -> Key Analytical Dimensions -> Concrete Enterprise Application -> Managerial Conclusion. For numericals, showing Formula -> Parameter Definition -> Step-by-Step Substitution -> Arithmetic Trace -> Boxed Answer -> Operational Interpretation is mandatory." — Prof. Ajit Maurya & Prof. Manoj Dagaonkar',
        '</StickyNote>',
        "",
        "* **Domain**: Operations & Supply Chain Management",
        "* **Course Identifier**: Logistics & Supply Chain Management (LSCM)",
        "* **Faculty Synthesis**: Prof. Ajit Maurya · Prof. Manoj Dagaonkar · Prof. Praful More",
        "* **Coverage**: 24 Solved Questions (5M, 6M, 10M) + 5 Complete Numerical Calculations + Incoterms 2020 Memory Grid",
        "* **Academic Benchmark**: End-Term University Examination Papers (2023, 2024, 2025)",
        "",
        "---",
        "",
        "### Examination Recurrence Priority Heatmap",
        "",
        "| Recurrence Priority | Core Syllabus Topic | Verified Exam Pattern | Target Question Weightage |",
        "| :--- | :--- | :--- | :--- |",
        "| 🔴 **Very High** | **EOQ & Inventory Lot Sizing** | 2023, 2024, 2025 (Every Paper) | **10 Marks + Numerical** |",
        "| 🔴 **Very High** | **Safety Stock & ROP under Uncertainty** | Repeated 2023, 2024, 2025 | **10 Marks + Numerical** |",
        "| 🔴 **Very High** | **Primary & Secondary Transportation** | Repeated 2024, 2025 | **6 / 10 Marks** |",
        "| 🔴 **Very High** | **Warehouse Process & Layout Flow** | Repeated 2023, 2024, 2025 | **5 / 6 / 10 Marks** |",
        "| 🔴 **Very High** | **Sustainability & ESG in SCM** | Repeated 2024, 2025 | **5 / 6 / 10 Marks** |",
        "| 🔴 **Very High** | **Strategic Sourcing & Supplier Risk** | Repeated 2023, 2024, 2025 | **6 / 10 Marks** |",
        "| 🔴 **Very High** | **INCOTERMS 2020 Comparison** | Heavy 2025 syllabus emphasis | **10 Marks** |",
        "| 🟠 **High** | **Demand Planning & Forecasting** | 2024, 2025 | **5 / 10 Marks** |",
        "| 🟠 **High** | **S&OP, S&OE & CPFR Integration** | Repeated 2023, 2024 | **5 / 10 Marks** |",
        "| 🟠 **High** | **Logistics Network Design (Central vs Dec)** | 2024, 2025 | **6 / 10 Marks** |",
        "| 🟠 **High** | **Smart Warehousing & Industry 4.0** | 2025 Emerging theme | **6 / 10 Marks** |",
        "| 🟠 **High** | **Kraljic Purchasing Portfolio Matrix** | 2023, 2024 | **6 Marks** |",
        "| 🟡 **Medium** | **SCOR Framework & Performance Metrics** | 2023 + Syllabus Core | **5 / 6 Marks** |",
        "| 🟡 **Medium** | **3PL vs 4PL & Reverse Logistics** | Syllabus + Short Notes | **5 / 6 Marks** |",
        "",
        "---",
        "",
        "### How to Structure High-Scoring Exam Answers",
        "",
        "#### 1. The 5-Mark Question Format (Target: 1.5 – 2 Pages)",
        "1. **Definition & Introduction** (0.5 – 1 Mark): Clear, authoritative opening sentence establishing the core concept.",
        "2. **Process Diagram / Framework** (1 Mark): Clean ASCII or SVG box diagram visualizing the operational relationship.",
        "3. **Structured Key Points** (2 – 2.5 Marks): 4 to 5 crisp, bulleted points explaining mechanics and trade-offs.",
        "4. **Real-World Business Example** (0.5 Mark): Concrete corporate reference (e.g., Maruti Suzuki, Dell, Amazon, Amul).",
        "5. **Managerial Conclusion** (0.5 Mark): One crisp summary sentence synthesizing strategic utility.",
        "",
        "#### 2. The 6-Mark Question Format (Target: 2 – 2.5 Pages)",
        "1. **Introduction & Context** (1 Mark): Define both concepts and state the operational problem.",
        "2. **Comparative Matrix / Diagram** (1 Mark): Visual comparison or 2x2 matrix separating the elements.",
        "3. **Detailed Comparison / Key Dimensions** (3 Marks): Minimum 5 distinct operational dimensions analyzed.",
        "4. **Industry Application** (0.5 Mark): Enterprise case study illustration.",
        "5. **Strategic Conclusion** (0.5 Mark): Summary of executive decision criteria.",
        "",
        "#### 3. The 10-Mark Master Question Format (Target: 3.5 – 4.5 Pages)",
        "1. **Foundational Definition & Thesis** (1 Mark): Authoritative conceptual framing.",
        "2. **System Architecture / Blueprint** (2 Marks): Full multi-tier diagram or cost trade-off curve.",
        "3. **In-Depth Theoretical Analysis** (4 Marks): Comprehensive exploration of drivers, assumptions, and governance.",
        "4. **Worked Numerical / Enterprise Case Application** (2 Marks): Mathematical trace or detailed case analysis.",
        "5. **Managerial Implication & Conclusion** (1 Mark): Executive summary of risk and decision criteria.",
        "",
        "---",
        "",
        "# 02 — FOUNDATIONS: High-Yield 5-Mark Theoretical Core (Q1–Q6)",
        "",
        "This division addresses the fundamental short-to-medium questions frequently appearing in Part A of university examinations. Each response follows the 5-point grading blueprint.",
        ""
    ]

    # Part A: Q1 - Q6
    part_a_meta = {
        1: ("Demand & Supply Management Balance", 5, "2025 Likely", "Demand management shapes and forecasts demand; supply management plans capacity, procurement, and logistics. Strategic alignment ensures cost-effective customer service."),
        2: ("Efficient vs Responsive Supply Chains (Fisher's Framework)", 5, "Repeated Core", "Functional products require physically efficient supply chains (low cost, high turns); innovative products require market-responsive supply chains (speed, flexibility)."),
        3: ("Warehouse Process Flow & Operational Types", 5, "Repeated Core", "Warehousing transforms inbound goods into outbound fulfillment via Receiving -> Putaway -> Storage -> Picking -> Packing -> Shipping."),
        4: ("Sustainability & ESG in Supply Chain Management", 5, "2024, 2025", "Environmental, Social, and Governance integration across carbon footprints, labor standards, circular flows, and ethical procurement."),
        5: ("CPFR & Bullwhip Effect Mitigation", 5, "Repeated Core", "Collaborative Planning, Forecasting, and Replenishment synchronizes demand visibility across trading partners to dampen demand distortion."),
        6: ("3PL vs 4PL Operational Differentiation", 5, "Syllabus Core", "3PL provides customized execution of logistics activities; 4PL acts as an overarching neutral integrator managing multiple 3PLs and technology systems.")
    }

    for q_num in range(1, 7):
        if q_num in q_map:
            topic, marks, freq, summary = part_a_meta[q_num]
            body = format_question_body(q_map[q_num])
            mdx_lines.extend([
                f"## Q{q_num}. {topic}",
                "",
                f'<PYQCard',
                f'  year="2025"',
                f'  number="{q_num}"',
                f'  marks={{{marks}}}',
                f'  type="theory"',
                f'  topic="{topic}"',
                f'  frequency="{freq}"',
                f'  question="Q{q_num}. {topic}"',
                f'  answerSummary="{summary}"',
                f'>',
                "",
                body,
                "",
                "</PYQCard>",
                "",
                "---",
                ""
            ])

    # Division 03: Part B (Q7 - Q11: 6-Mark Questions)
    mdx_lines.extend([
        "# 03 — CORE CONCEPTS: Strategic 6-Mark Architectural Trade-offs (Q7–Q11)",
        "",
        "This division addresses the 6-mark analytical and comparative questions requiring structured matrices, cost trade-off curves, and multi-variable evaluations.",
        ""
    ])

    part_b_meta = {
        7: ("Primary vs Secondary Transportation & Cost Trade-Off", 6, "Repeated Core", "Primary transport moves bulk shipments from plants to regional hubs (TL, economies of scale); secondary transport delivers consolidated small lots to retail points (LTL, higher cost per unit)."),
        8: ("Logistics Network Design & Centralisation vs Decentralisation", 6, "2024, 2025", "Centralization cuts facility and safety stock costs via risk pooling but increases outbound freight; decentralization improves local delivery speed but inflates inventory."),
        9: ("The Kraljic Purchasing Portfolio Matrix", 6, "2023, 2024", "Categorizes procurement into Routine, Leverage, Bottleneck, and Strategic quadrants based on Profit Impact and Supply Risk."),
        10: ("Architecture and Benefits of a Smart Warehouse", 6, "2025 Emerging", "Industry 4.0 warehousing combines WMS/WCS software, IoT sensors, robotics (ASRS/AGV), and predictive AI into a sense-decide-act cyber-physical loop."),
        11: ("The SCOR Framework & Supply Chain Performance Metrics", 6, "2023 + Syllabus", "Standardizes cross-industry processes into Plan, Source, Make, Deliver, Return, Enable across Reliability, Responsiveness, Agility, Cost, and Asset Management.")
    }

    for q_num in range(7, 12):
        if q_num in q_map:
            topic, marks, freq, summary = part_b_meta[q_num]
            body = format_question_body(q_map[q_num])
            mdx_lines.extend([
                f"## Q{q_num}. {topic}",
                "",
                f'<PYQCard',
                f'  year="2024"',
                f'  number="{q_num}"',
                f'  marks={{{marks}}}',
                f'  type="theory"',
                f'  topic="{topic}"',
                f'  frequency="{freq}"',
                f'  question="Q{q_num}. {topic}"',
                f'  answerSummary="{summary}"',
                f'>',
                "",
                body,
                "",
                "</PYQCard>",
                "",
                "---",
                ""
            ])

    # Division 04: Part C (Q12 - Q21: 10-Mark Questions)
    mdx_lines.extend([
        "# 04 — FRAMEWORKS & MODELS: Comprehensive 10-Mark Master Solutions (Q12–Q21)",
        "",
        "This division contains full-depth 10-mark master solutions combining theoretical rigor, mathematical modeling, multi-tier architectures, and managerial interpretation.",
        ""
    ])

    part_c_meta = {
        12: ("Classical EOQ Derivation and Working", 10, "Guaranteed 10M", "Calculates optimal purchase lot size balancing annual ordering cost and inventory holding cost under constant demand."),
        13: ("Safety Stock & ROP under Joint Uncertainty", 10, "Guaranteed 10M", "Quantifies buffer stock needed to absorb demand volatility and lead-time delays using joint standard deviation convolution."),
        14: ("Single-Period / Newsvendor Marginal Analysis", 10, "2024, 2025", "Balances cost of understocking against cost of overstocking via critical fractile ratio for perishable and seasonal products."),
        15: ("INCOTERMS 2020 Architectural Comparison", 10, "2025 High Emphasis", "Defines the precise point of risk transfer, freight cost obligation, and insurance liability across 11 international commercial terms."),
        16: ("Demand Planning, Forecasting & S&OP Integration", 10, "2024, 2025", "The monthly cross-functional consensus cadence synchronizing unconstrained sales demand with supply chain operational capacity."),
        17: ("Strategic Sourcing, Supplier Risk & Kraljic Governance", 10, "Repeated Core", "Comprehensive sourcing lifecycle: spend analysis, supplier qualification, category strategy, contract governance, and disruption risk hedging."),
        18: ("Logistics Network Design for E-Commerce / Omnichannel", 10, "2024, 2025", "Designing multi-tier fulfillment nodes (Mega-DCs, Regional Hubs, Micro-Fulfillment Dark Stores) for same-day delivery."),
        19: ("Smart Warehouse Implementation & Automation Roadmap", 10, "2025 Emerging", "Strategic technology adoption roadmap for autonomous mobile robots, automated storage and retrieval (ASRS), and computer vision."),
        20: ("Sustainability & Circular Supply Chain Integration", 10, "Repeated Core", "Integrating the 5 Rs (Reduce, Reuse, Recycle, Remanufacture, Repair) with closed-loop reverse supply chain mechanics."),
        21: ("Supply Chain Resilience & Global Disruption Management", 10, "2023, 2024, 2025", "Building resilience across the 5 lifecycle phases: Prepare -> Absorb -> Respond -> Recover -> Learn.")
    }

    for q_num in range(12, 22):
        if q_num in q_map:
            topic, marks, freq, summary = part_c_meta[q_num]
            body = format_question_body(q_map[q_num])
            mdx_lines.extend([
                f"## Q{q_num}. {topic}",
                "",
                f'<PYQCard',
                f'  year="2025"',
                f'  number="{q_num}"',
                f'  marks={{{marks}}}',
                f'  type="theory"',
                f'  topic="{topic}"',
                f'  frequency="{freq}"',
                f'  question="Q{q_num}. {topic}"',
                f'  answerSummary="{summary}"',
                f'>',
                "",
                body,
                "",
                "</PYQCard>",
                "",
                "---",
                ""
            ])

    # Division 05: Worked Examples (5 Full 12-Step Worked Examples)
    mdx_lines.extend([
        "# 05 — WORKED EXAMPLES: The 5-Part Numerical Master Set (12-Step Professor Standard)",
        "",
        "This division presents the five complete quantitative calculation templates required for end-term examinations, fully resolved using the 12-step master professor standard.",
        "",
        '<WorkedExample',
        '  problemNumber="1"',
        '  title="Classical Economic Order Quantity (EOQ)"',
        '  problem="A manufacturing facility requires annual demand D = 12,000 units. The fixed ordering cost is S = ₹50 per replenishment order, and the unit annual holding cost is H = ₹4 per unit per year. Operating calendar is 300 days/year, and supplier replenishment lead time is L = 5 days. Determine: (a) Economic Order Quantity (EOQ), (b) Optimal order frequency, (c) Annual ordering and holding costs, (d) Total annual variable inventory cost, and (e) Reorder Point (ROP)."',
        '  givenData={[',
        '    { label: "Annual Demand", symbol: "D", value: "12,000", unit: "units/year" },',
        '    { label: "Ordering Cost", symbol: "S", value: "₹50", unit: "per order" },',
        '    { label: "Holding Cost", symbol: "H", value: "₹4", unit: "per unit/year" },',
        '    { label: "Replenishment Lead Time", symbol: "L", value: "5", unit: "days" },',
        '    { label: "Operating Calendar", symbol: "WD", value: "300", unit: "days/year" }',
        '  ]}',
        '  required="Calculate EOQ (Q*), Order frequency (N*), Annual Ordering Cost, Annual Holding Cost, Total Cost (TC), and Reorder Point (ROP)."',
        '  formula="Q^* = \\\\sqrt{\\\\frac{2DS}{H}}; \\\\quad N^* = \\\\frac{D}{Q^*}; \\\\quad \\\\text{TC} = \\\\frac{D}{Q}S + \\\\frac{Q}{2}H; \\\\quad \\\\text{ROP} = d \\\\cdot L = \\\\left(\\\\frac{D}{WD}\\\\right) \\\\cdot L"',
        '  whyFormula="Harris EOQ balances the conflicting trade-offs of fixed batch ordering costs and continuous inventory carrying costs under deterministic stationary demand."',
        '  variables={[',
        '    { symbol: "D", meaning: "Annual Demand Rate", value: "12,000 units" },',
        '    { symbol: "S", meaning: "Fixed Order Cost", value: "₹50/order" },',
        '    { symbol: "H", meaning: "Unit Holding Cost", value: "₹4/unit/year" },',
        '    { symbol: "L", meaning: "Replenishment Lead Time", value: "5 days" },',
        '    { symbol: "d", meaning: "Daily Demand Rate (D/300)", value: "40 units/day" }',
        '  ]}',
        '  steps={[',
        '    {',
        '      stepNumber: 1,',
        '      action: "Calculate Optimal Order Quantity (EOQ)",',
        '      calculation: "Q^* = \\\\sqrt{\\\\frac{2 \\\\times 12{,}000 \\\\times 50}{4}} = \\\\sqrt{\\\\frac{1{,}200{,}000}{4}} = \\\\sqrt{300{,}000} \\\\approx 547.72 \\\\approx 548 \\\\text{ units}",',
        '      explanation: "Substitute annual demand, ordering cost, and holding cost into the classical Wilson-Harris lot sizing model."',
        '    },',
        '    {',
        '      stepNumber: 2,',
        '      action: "Determine Annual Order Frequency (N*)",',
        '      calculation: "N^* = \\\\frac{D}{Q^*} = \\\\frac{12{,}000}{547.72} \\\\approx 21.91 \\\\text{ orders / year}",',
        '      explanation: "The firm must issue approximately 22 replenishment purchase orders per calendar year."',
        '    },',
        '    {',
        '      stepNumber: 3,',
        '      action: "Compute Annual Ordering & Holding Costs",',
        '      calculation: "\\\\text{Ordering Cost} = 21.91 \\\\times 50 = ₹1{,}095.44; \\\\quad \\\\text{Holding Cost} = \\\\frac{547.72}{2} \\\\times 4 = ₹1{,}095.45",',
        '      explanation: "Notice that at exact EOQ, Annual Ordering Cost equals Annual Holding Cost (₹1,095.45 each)."',
        '    },',
        '    {',
        '      stepNumber: 4,',
        '      action: "Calculate Minimum Total Variable Inventory Cost (TC*)",',
        '      calculation: "\\\\text{TC}^* = 1{,}095.44 + 1{,}095.45 = ₹2{,}190.89 \\\\text{ / year}",',
        '      explanation: "Total variable inventory carrying and replenishment expenditure reaches its mathematical minimum."',
        '    },',
        '    {',
        '      stepNumber: 5,',
        '      action: "Calculate Reorder Point (ROP)",',
        '      calculation: "d = \\\\frac{12{,}000}{300} = 40 \\\\text{ units/day}; \\\\quad \\\\text{ROP} = d \\\\times L = 40 \\\\times 5 = 200 \\\\text{ units}",',
        '      explanation: "When inventory drops to 200 units, place a new purchase order for 548 units."',
        '    }',
        '  ]}',
        '  answer="Q^* = 548 \\\\text{ units}, \\\\quad \\\\text{ROP} = 200 \\\\text{ units}, \\\\quad \\\\text{TC}^* \\\\approx ₹2{,}191 \\\\text{/year}"',
        '  interpretation="Order 548 units every 13.7 working days (300 / 21.91). Total variable holding and procurement cost is ₹2,191/year. Ordering less increases transaction overhead; ordering more increases capital holding charges."',
        '  sanityCheck="At optimal lot size Q*, ordering cost equals holding cost within integer rounding."',
        '  commonMistake="Forgetting to convert annual demand into daily demand (D/300) when calculating lead-time demand for ROP, or confusing holding cost percentage I with absolute holding cost H."',
        '/>',
        "",
        "---",
        "",
        '<WorkedExample',
        '  problemNumber="2"',
        '  title="Economic Production Quantity (EPQ / Non-Instantaneous Replenishment)"',
        '  problem="An automotive filtration plant operates 250 days per year with annual demand D = 24,000 filters/year. The daily production rate when machine is active is p = 200 filters/day, and daily customer demand rate is d = 96 filters/day. Fixed production setup cost is S = ₹150 per run, and annual inventory carrying cost is H = ₹1.20 per filter per year. Calculate: (a) Economic Production Quantity (EPQ), (b) Maximum inventory level (I_max), (c) Length of production run (t_p), (d) Annual setup cost and holding cost, and (e) Total annual cost."',
        '  givenData={[',
        '    { label: "Annual Demand", symbol: "D", value: "24,000", unit: "filters/year" },',
        '    { label: "Daily Production Rate", symbol: "p", value: "200", unit: "filters/day" },',
        '    { label: "Daily Demand Rate", symbol: "d", value: "96", unit: "filters/day" },',
        '    { label: "Setup Cost", symbol: "S", value: "₹150", unit: "per run" },',
        '    { label: "Holding Cost", symbol: "H", value: "₹1.20", unit: "per filter/year" }',
        '  ]}',
        '  required="Compute EPQ (Q*), Maximum Inventory (I_max), Production Run Duration (t_p), Annual Setup Cost, Annual Holding Cost, and Total Variable Cost (TC*)."',
        '  formula="Q^* = \\\\sqrt{\\\\frac{2DS}{H\\\\left(1 - \\\\frac{d}{p}\\\\right)}}; \\\\quad I_{\\\\max} = Q^*\\\\left(1 - \\\\frac{d}{p}\\\\right); \\\\quad t_p = \\\\frac{Q^*}{p}; \\\\quad \\\\text{TC} = \\\\frac{D}{Q^*}S + \\\\frac{I_{\\\\max}}{2}H"',
        '  whyFormula="When units are produced and consumed concurrently, inventory builds at net rate (p - d) rather than instantaneously, reducing maximum inventory and permitting larger optimal batch runs."',
        '  variables={[',
        '    { symbol: "D", meaning: "Annual Demand Rate", value: "24,000 filters" },',
        '    { symbol: "p", meaning: "Daily Production Capacity", value: "200 filters/day" },',
        '    { symbol: "d", meaning: "Daily Consumption Rate", value: "96 filters/day" },',
        '    { symbol: "S", meaning: "Setup Cost per Production Run", value: "₹150" },',
        '    { symbol: "H", meaning: "Unit Annual Holding Cost", value: "₹1.20" }',
        '  ]}',
        '  steps={[',
        '    {',
        '      stepNumber: 1,',
        '      action: "Calculate Net Production Build Rate Factor",',
        '      calculation: "1 - \\\\frac{d}{p} = 1 - \\\\frac{96}{200} = 1 - 0.48 = 0.52",',
        '      explanation: "Only 52% of manufactured output accumulates in the warehouse during the production run; 48% is immediately shipped to customers."',
        '    },',
        '    {',
        '      stepNumber: 2,',
        '      action: "Calculate Economic Production Quantity (EPQ)",',
        '      calculation: "Q^* = \\\\sqrt{\\\\frac{2 \\\\times 24{,}000 \\\\times 150}{1.20 \\\\times 0.52}} = \\\\sqrt{\\\\frac{7{,}200{,}000}{0.624}} = \\\\sqrt{11{,}538{,}461.54} \\\\approx 3{,}396.83 \\\\approx 3{,}397 \\\\text{ filters}",',
        '      explanation: "Substitute given parameters into the Taft finite production rate formula."',
        '    },',
        '    {',
        '      stepNumber: 3,',
        '      action: "Determine Maximum Inventory Accumulation (I_max)",',
        '      calculation: "I_{\\\\max} = Q^* \\\\times \\\\left(1 - \\\\frac{d}{p}\\\\right) = 3{,}396.83 \\\\times 0.52 \\\\approx 1{,}766.35 \\\\approx 1{,}766 \\\\text{ filters}",',
        '      explanation: "Inventory reaches peak storage right at the moment the production run finishes."',
        '    },',
        '    {',
        '      stepNumber: 4,',
        '      action: "Calculate Duration of Production Run (t_p)",',
        '      calculation: "t_p = \\\\frac{Q^*}{p} = \\\\frac{3{,}396.83}{200} \\\\approx 16.98 \\\\approx 17 \\\\text{ operating days}",',
        '      explanation: "The production line runs actively for 17 days, followed by 18.4 days of machine downtime while accumulated stock depletes."',
        '    },',
        '    {',
        '      stepNumber: 5,',
        '      action: "Compute Total Annual Setup & Holding Costs",',
        '      calculation: "\\\\text{Setup} = \\\\frac{24{,}000}{3{,}397} \\\\times 150 \\\\approx ₹1{,}059.76; \\\\quad \\\\text{Holding} = \\\\frac{1{,}766.35}{2} \\\\times 1.20 \\\\approx ₹1{,}059.81; \\\\quad \\\\text{TC}^* \\\\approx ₹2{,}119.62",',
        '      explanation: "At optimality, annual setup expense exactly equals annual inventory holding expenditure."',
        '    }',
        '  ]}',
        '  answer="Q^* \\\\approx 3{,}397 \\\\text{ filters}, \\\\quad I_{\\\\max} \\\\approx 1{,}766 \\\\text{ filters}, \\\\quad t_p \\\\approx 17 \\\\text{ days}, \\\\quad \\\\text{TC}^* \\\\approx ₹2{,}119.62 \\\\text{/year}"',
        '  interpretation="Produce in batches of 3,397 filters over 17 operating days. Peak warehouse storage required is only 1,766 units (52% of batch size), saving storage space and holding cost compared to full batch delivery."',
        '  sanityCheck="Because (1 - d/p) = 0.52 < 1, EPQ (3,397) is strictly larger than classical EOQ (sqrt(2*24000*150/1.2) = 2,449 units), reflecting gradual replenishment."',
        '  commonMistake="Calculating annual holding cost as (Q/2)*H instead of (I_max / 2)*H = [Q*(1 - d/p)/2]*H."',
        '/>',
        "",
        "---",
        "",
        '<WorkedExample',
        '  problemNumber="3"',
        '  title="Quantity Discount Schedule Evaluation (All-Units Model)"',
        '  problem="A medical supply distributor stocks diagnostic kits with annual demand D = 5,000 boxes/year. Fixed ordering cost is S = ₹40 per order. Annual inventory holding cost is I = 20% of unit purchase price. The supplier quotes the following price schedule: Tier 1 (1–999 boxes): C1 = ₹10.00; Tier 2 (1,000–1,999 boxes): C2 = ₹9.50; Tier 3 (2,000+ boxes): C3 = ₹9.00. Determine the profit-maximizing order quantity Q*."',
        '  givenData={[',
        '    { label: "Annual Demand", symbol: "D", value: "5,000", unit: "boxes/year" },',
        '    { label: "Ordering Cost", symbol: "S", value: "₹40", unit: "per order" },',
        '    { label: "Carrying Cost Rate", symbol: "I", value: "20%", unit: "per year" },',
        '    { label: "Tier 1 (1–999)", symbol: "C_1", value: "₹10.00", unit: "per box" },',
        '    { label: "Tier 2 (1,000–1,999)", symbol: "C_2", value: "₹9.50", unit: "per box" },',
        '    { label: "Tier 3 (2,000+)", symbol: "C_3", value: "₹9.00", unit: "per box" }',
        '  ]}',
        '  required="Determine optimal batch size Q* and verify whether volume purchasing discounts outweigh inflated inventory carrying costs."',
        '  formula="\\\\text{TC}(Q) = D \\\\cdot C + \\\\frac{D}{Q}S + \\\\frac{Q}{2}(I \\\\cdot C); \\\\quad Q_k = \\\\sqrt{\\\\frac{2DS}{I \\\\cdot C_k}}"',
        '  whyFormula="With all-units discounts, purchase acquisition cost dominates total cost. The algorithm tests feasibility from lowest price upward and evaluates cost at feasible points and price-break thresholds."',
        '  variables={[',
        '    { symbol: "D", meaning: "Annual Demand Rate", value: "5,000 boxes" },',
        '    { symbol: "S", meaning: "Order Processing Fee", value: "₹40" },',
        '    { symbol: "I", meaning: "Inventory Holding Fraction", value: "0.20 (20%)" },',
        '    { symbol: "C_1, C_2, C_3", meaning: "Tier Unit Prices", value: "₹10.00, ₹9.50, ₹9.00" }',
        '  ]}',
        '  steps={[',
        '    {',
        '      stepNumber: 1,',
        '      action: "Evaluate Tier 3 (Price C3 = ₹9.00, H3 = 0.20 * 9 = ₹1.80)",',
        '      calculation: "EOQ_3 = \\\\sqrt{\\\\frac{2 \\\\times 5{,}000 \\\\times 40}{1.80}} = \\\\sqrt{222{,}222.22} \\\\approx 471.40 \\\\text{ boxes}",',
        '      explanation: "Since 471 is below the Tier 3 qualifying threshold of 2,000 units, EOQ3 is INFEASIBLE. Must evaluate total cost at the lower price-break boundary Q = 2,000."',
        '    },',
        '    {',
        '      stepNumber: 2,',
        '      action: "Evaluate Tier 2 (Price C2 = ₹9.50, H2 = 0.20 * 9.50 = ₹1.90)",',
        '      calculation: "EOQ_2 = \\\\sqrt{\\\\frac{2 \\\\times 5{,}000 \\\\times 40}{1.90}} = \\\\sqrt{210{,}526.32} \\\\approx 458.83 \\\\text{ boxes}",',
        '      explanation: "Since 458 is below the Tier 2 qualifying threshold of 1,000 units, EOQ2 is INFEASIBLE. Must evaluate total cost at the price-break boundary Q = 1,000."',
        '    },',
        '    {',
        '      stepNumber: 3,',
        '      action: "Evaluate Tier 1 (Price C1 = ₹10.00, H1 = 0.20 * 10 = ₹2.00)",',
        '      calculation: "EOQ_1 = \\\\sqrt{\\\\frac{2 \\\\times 5{,}000 \\\\times 40}{2.00}} = \\\\sqrt{200{,}000} \\\\approx 447.21 \\\\approx 447 \\\\text{ boxes}",',
        '      explanation: "Since 447 falls within [1, 999], EOQ1 = 447 is FEASIBLE."',
        '    },',
        '    {',
        '      stepNumber: 4,',
        '      action: "Compare Total Annual Costs Across Candidate Quantities",',
        '      calculation: "\\\\text{TC}(447) = 5{,}000(10) + \\\\frac{5000}{447}(40) + \\\\frac{447}{2}(2) = 50{,}000 + 447.43 + 447 = ₹50{,}894.43",',
        '      explanation: "Baseline cost at standard optimal order quantity without volume discounts."',
        '    },',
        '    {',
        '      stepNumber: 5,',
        '      action: "Compute Total Annual Cost at Tier 2 Break (Q = 1,000)",',
        '      calculation: "\\\\text{TC}(1{,}000) = 5{,}000(9.50) + \\\\frac{5000}{1000}(40) + \\\\frac{1000}{2}(1.90) = 47{,}500 + 200 + 950 = ₹48{,}650.00",',
        '      explanation: "Tier 2 achieves ₹2,244.43 annual savings compared to Tier 1."',
        '    },',
        '    {',
        '      stepNumber: 6,',
        '      action: "Compute Total Annual Cost at Tier 3 Break (Q = 2,000)",',
        '      calculation: "\\\\text{TC}(2{,}000) = 5{,}000(9.00) + \\\\frac{5000}{2000}(40) + \\\\frac{2000}{2}(1.80) = 45{,}000 + 100 + 1{,}800 = ₹46{,}900.00",',
        '      explanation: "Tier 3 delivers the absolute lowest total annual cost, saving ₹3,994.43 vs baseline."',
        '    }',
        '  ]}',
        '  answer="Q^* = 2{,}000 \\\\text{ boxes}, \\\\quad \\\\text{TC}^* = ₹46{,}900.00 \\\\text{/year} \\\\quad (\\\\text{Annual Savings} = ₹3{,}994.43)"',
        '  interpretation="Order 2,000 boxes per lot. Although annual holding cost rises from ₹447 to ₹1,800, material acquisition savings (₹5,000 savings on purchase cost) overwhelmingly offset carrying penalties, delivering ₹3,994/year in net profit improvement."',
        '  sanityCheck="Tier 3 saves ₹2,500 on purchase price relative to Tier 2, while holding cost increases by only ₹850, confirming Tier 3 is mathematically superior."',
        '  commonMistake="Stopping at feasible EOQ1 = 447 without evaluating Total Cost at the discount thresholds Q = 1,000 and Q = 2,000."',
        '/>',
        "",
        "---",
        "",
        '<WorkedExample',
        '  problemNumber="4"',
        '  title="Safety Stock & Reorder Point under Joint Demand and Lead-Time Uncertainty"',
        '  problem="A consumer durables manufacturer experiences stochastic customer demand with mean daily demand d = 120 units and standard deviation sigma_d = 30 units/day. Supplier replenishment lead time is also uncertain with mean L = 16 days and standard deviation sigma_L = 3 days. Demand and lead time are statistically independent. Target cycle service level is 95% (z = 1.645). Calculate: (a) Expected demand during lead time (DL), (b) Combined standard deviation of lead-time demand (sigma_DL), (c) Required safety stock buffer (SS), and (d) Reorder point (ROP)."',
        '  givenData={[',
        '    { label: "Daily Demand Rate", symbol: "d", value: "120", unit: "units/day" },',
        '    { label: "Demand Std Dev", symbol: "\\\\sigma_d", value: "30", unit: "units/day" },',
        '    { label: "Mean Lead Time", symbol: "L", value: "16", unit: "days" },',
        '    { label: "Lead Time Std Dev", symbol: "\\\\sigma_L", value: "3", unit: "days" },',
        '    { label: "Service Level (95%)", symbol: "z", value: "1.645", unit: "dimensionless" }',
        '  ]}',
        '  required="Calculate Expected Lead-Time Demand (DL), Combined Standard Deviation (sigma_DL), Safety Stock (SS), and Reorder Point (ROP)."',
        '  formula="\\\\text{DL} = d \\\\cdot L; \\\\quad \\\\sigma_{DL} = \\\\sqrt{L \\\\cdot \\\\sigma_d^2 + d^2 \\\\cdot \\\\sigma_L^2}; \\\\quad \\\\text{SS} = z \\\\cdot \\\\sigma_{DL}; \\\\quad \\\\text{ROP} = \\\\text{DL} + \\\\text{SS}"',
        '  whyFormula="When both demand and lead time vary, lead-time variance is amplified by squared average demand (d^2), which typically dominates demand volatility."',
        '  variables={[',
        '    { symbol: "d", meaning: "Mean Daily Demand", value: "120 units/day" },',
        '    { symbol: "\\\\sigma_d", meaning: "Standard Deviation of Daily Demand", value: "30 units/day" },',
        '    { symbol: "L", meaning: "Mean Replenishment Lead Time", value: "16 days" },',
        '    { symbol: "\\\\sigma_L", meaning: "Standard Deviation of Lead Time", value: "3 days" },',
        '    { symbol: "z", meaning: "Standard Normal Factor for 95% CSL", value: "1.645" }',
        '  ]}',
        '  steps={[',
        '    {',
        '      stepNumber: 1,',
        '      action: "Calculate Expected Demand During Lead Time (DL)",',
        '      calculation: "\\\\text{DL} = d \\\\times L = 120 \\\\times 16 = 1{,}920 \\\\text{ units}",',
        '      explanation: "Expected consumption during the average supplier fulfillment window of 16 days."',
        '    },',
        '    {',
        '      stepNumber: 2,',
        '      action: "Calculate Combined Lead-Time Demand Variance",',
        '      calculation: "\\\\text{Var}(DL) = L \\\\sigma_d^2 + d^2 \\\\sigma_L^2 = 16(30^2) + 120^2(3^2) = 16(900) + 14{,}400(9) = 14{,}400 + 129{,}600 = 144{,}000",',
        '      explanation: "Notice that lead-time uncertainty (129,600) contributes 90% of total variance, while demand volatility (14,400) contributes only 10%."',
        '    },',
        '    {',
        '      stepNumber: 3,',
        '      action: "Calculate Combined Standard Deviation (sigma_DL)",',
        '      calculation: "\\\\sigma_{DL} = \\\\sqrt{144{,}000} \\\\approx 379.47 \\\\text{ units}",',
        '      explanation: "Convolved standard deviation accounting for both demand spikes and delayed supplier deliveries."',
        '    },',
        '    {',
        '      stepNumber: 4,',
        '      action: "Calculate Required Safety Stock Buffer (SS)",',
        '      calculation: "\\\\text{SS} = z \\\\times \\\\sigma_{DL} = 1.645 \\\\times 379.47 \\\\approx 624.23 \\\\approx 625 \\\\text{ units}",',
        '      explanation: "Buffer required to ensure 95% probability of zero stockouts across any replenishment cycle."',
        '    },',
        '    {',
        '      stepNumber: 5,',
        '      action: "Calculate Reorder Point (ROP)",',
        '      calculation: "\\\\text{ROP} = \\\\text{DL} + \\\\text{SS} = 1{,}920 + 625 = 2{,}545 \\\\text{ units}",',
        '      explanation: "Place replenishment purchase order as soon as inventory position falls to 2,545 units."',
        '    }',
        '  ]}',
        '  answer="\\\\text{DL} = 1{,}920 \\\\text{ units}, \\\\quad \\\\sigma_{DL} \\\\approx 379.47, \\\\quad \\\\text{SS} \\\\approx 625 \\\\text{ units}, \\\\quad \\\\text{ROP} = 2{,}545 \\\\text{ units}"',
        '  interpretation="Place a replenishment order when inventory reaches 2,545 units. The 625-unit buffer guarantees 95% cycle service level. Note that lead-time variance contributes 90% of total uncertainty, demonstrating that stabilizing supplier delivery reliability is 9x more potent than demand forecasting."',
        '  sanityCheck="If lead time were deterministic (sigma_L = 0), SS would only be 1.645 * sqrt(16 * 900) = 197 units. Lead time uncertainty triples required safety stock from 197 to 625 units."',
        '  commonMistake="Adding standard deviations directly (sigma_DL != sqrt(L)*sigma_d + d*sigma_L) or forgetting the squared demand factor (d^2) multiplying lead-time variance."',
        '/>',
        "",
        "---",
        "",
        '<WorkedExample',
        '  problemNumber="5"',
        '  title="Single-Period Newsvendor Model & Critical Fractile Sizing"',
        '  problem="A high-fashion apparel retailer is ordering seasonal parkas for the winter retail season. Wholesale purchase cost is C = ₹150 per unit, retail selling price is P = ₹400 per unit, and unsold garments are liquidated through off-price channels at salvage value S = ₹50 per unit. Seasonal demand is normally distributed with mean mu = 1,200 units and standard deviation sigma = 250 units. Determine: (a) Cost of Understocking (C_u), (b) Cost of Overstocking (C_o), (c) Optimal Critical Fractile (CR), (d) Standard normal z-score, (e) Optimal order quantity (Q*), and (f) Expected stockout probability."',
        '  givenData={[',
        '    { label: "Retail Selling Price", symbol: "P", value: "₹400", unit: "per parka" },',
        '    { label: "Wholesale Cost", symbol: "C", value: "₹150", unit: "per parka" },',
        '    { label: "Salvage Value", symbol: "S", value: "₹50", unit: "per parka" },',
        '    { label: "Mean Seasonal Demand", symbol: "\\\\mu", value: "1,200", unit: "parkas" },',
        '    { label: "Demand Std Dev", symbol: "\\\\sigma", value: "250", unit: "parkas" }',
        '  ]}',
        '  required="Compute Underage Cost (C_u), Overage Cost (C_o), Critical Ratio (CR), Optimal Order Quantity (Q*), Safety Stock Buffer, and Stockout Probability."',
        '  formula="C_u = P - C; \\\\quad C_o = C - S; \\\\quad \\\\text{CR} = \\\\frac{C_u}{C_u + C_o}; \\\\quad Q^* = \\\\mu + z \\\\cdot \\\\sigma; \\\\quad P(\\\\text{Stockout}) = 1 - \\\\text{CR}"',
        '  whyFormula="Marginal economic analysis balances the marginal profit of selling one additional unit against the marginal loss of holding an unsold unit liquidated below cost."',
        '  variables={[',
        '    { symbol: "P", meaning: "Retail Selling Price", value: "₹400" },',
        '    { symbol: "C", meaning: "Wholesale Purchase Cost", value: "₹150" },',
        '    { symbol: "S", meaning: "Salvage Clearance Price", value: "₹50" },',
        '    { symbol: "C_u", meaning: "Cost of Underage (Lost Profit)", value: "₹250" },',
        '    { symbol: "C_o", meaning: "Cost of Overage (Disposal Loss)", value: "₹100" },',
        '    { symbol: "CR", meaning: "Critical Fractile Service Ratio", value: "0.7143" }',
        '  ]}',
        '  steps={[',
        '    {',
        '      stepNumber: 1,',
        '      action: "Calculate Cost of Understocking (Underage Cost C_u)",',
        '      calculation: "C_u = P - C = ₹400 - ₹150 = ₹250 \\\\text{ / unit}",',
        '      explanation: "Opportunity margin forfeited when demand exceeds stocking quantity by one unit."',
        '    },',
        '    {',
        '      stepNumber: 2,',
        '      action: "Calculate Cost of Overstocking (Overage Cost C_o)",',
        '      calculation: "C_o = C - S = ₹150 - ₹50 = ₹100 \\\\text{ / unit}",',
        '      explanation: "Capital loss sustained when an unsold garment is salvaged below acquisition cost."',
        '    },',
        '    {',
        '      stepNumber: 3,',
        '      action: "Determine Optimal Critical Fractile Ratio (CR)",',
        '      calculation: "\\\\text{CR} = \\\\frac{C_u}{C_u + C_o} = \\\\frac{250}{250 + 100} = \\\\frac{250}{350} = \\\\frac{5}{7} \\\\approx 0.7143 \\\\text{ (71.43%)}",',
        '      explanation: "The optimal cycle service level balancing expected marginal gain with marginal loss."',
        '    },',
        '    {',
        '      stepNumber: 4,',
        '      action: "Determine Standard Normal z-Score",',
        '      calculation: "\\\\Phi(z) = 0.7143 \\\\implies z \\\\approx 0.566",',
        '      explanation: "Standard normal lookup for cumulative probability 0.7143."',
        '    },',
        '    {',
        '      stepNumber: 5,',
        '      action: "Calculate Profit-Maximizing Order Quantity (Q*)",',
        '      calculation: "Q^* = \\\\mu + z \\\\times \\\\sigma = 1{,}200 + 0.566(250) = 1{,}200 + 141.5 \\\\approx 1{,}341.5 \\\\approx 1{,}342 \\\\text{ parkas}",',
        '      explanation: "Order 1,342 parkas, including a safety stock buffer of 142 units above mean demand."',
        '    },',
        '    {',
        '      stepNumber: 6,',
        '      action: "Compute Expected Stockout Probability",',
        '      calculation: "P(\\\\text{Stockout}) = 1 - \\\\text{CR} = 1 - 0.7143 = 0.2857 \\\\text{ (28.57%)}",',
        '      explanation: "The company accepts a 28.57% risk of selling out early to protect against holding unsold dead stock."',
        '    }',
        '  ]}',
        '  answer="Q^* \\\\approx 1{,}342 \\\\text{ units}, \\\\quad \\\\text{Safety Buffer} = 142 \\\\text{ units}, \\\\quad P(\\\\text{Stockout}) = 28.57\\\\%"',
        '  interpretation="Order 1,342 parkas. Because unit profit margin (₹250) is 2.5 times larger than overstock disposal penalty (₹100), the firm strategically over-orders beyond expected demand (1,200) by 142 units to maximize expected net operating profit."',
        '  sanityCheck="Since C_u > C_o, CR = 0.7143 > 0.50, which logically dictates ordering strictly above the mean demand (1,200). If margin equaled salvage loss, CR would be 0.50 and Q* would equal 1,200."',
        '  commonMistake="Defining salvage value S as negative cost or subtracting salvage from retail price instead of wholesale purchase cost: C_o is C - S, not P - S."',
        '/>',
        "",
        "---",
        ""
    ])

    # Division 06: Part F (Case Study Answer Framework)
    mdx_lines.extend([
        "# 06 — CASES & APPLICATIONS: Enterprise Case Study Analysis & Strategic Problem-Solving",
        "",
        '<StickyNote color="blue" title="Case Study Scoring Methodology">',
        '  "When tackling a 10-mark or 15-mark case study in LSCM, examiners look for the 4-step consulting framework: 1. Core Operational Problem Identification; 2. Diagnostic Root-Cause Analysis using Course Frameworks (Fisher, SCOR, Kraljic); 3. Strategic Decision Options & Trade-Off Evaluation; 4. Phased Implementation Roadmap with Risk Mitigation." — Prof. Praful More',
        '</StickyNote>',
        "",
        parts.get('PART F', ''),
        "",
        "---",
        ""
    ])

    # Division 07: Part D (Additional High-Yield Questions Q22-Q24)
    mdx_lines.extend([
        "# 07 — PYQs: Additional High-Yield Questions (Q22–Q24) & Exam Recurrence Matrix",
        "",
        "This division addresses targeted high-probability short-answer topics and specific conceptual definitions from recent examination papers.",
        ""
    ])

    part_d_meta = {
        22: ("Reverse Logistics & Closed-Loop Supply Systems", 5, "Repeated Core", "Manages the backward flow of products, materials, and packaging from consumer to point of origin for value reclamation or proper disposal."),
        23: ("The Total Logistics Cost Concept & Trade-Off Balance", 6, "Repeated Core", "Optimizing logistics requires minimizing the sum of Transport + Warehousing + Inventory Carrying + Order Processing + Lost Sales costs simultaneously."),
        24: ("SCOR / Supply Chain Drivers & Strategic Fit", 6, "2023, 2024", "Achieving strategic fit requires aligning the 6 core supply chain drivers (Facilities, Inventory, Transportation, Information, Sourcing, Pricing) with corporate competitive strategy.")
    }

    for q_num in range(22, 25):
        if q_num in q_map:
            topic, marks, freq, summary = part_d_meta[q_num]
            body = format_question_body(q_map[q_num])
            mdx_lines.extend([
                f"## Q{q_num}. {topic}",
                "",
                f'<PYQCard',
                f'  year="2024"',
                f'  number="{q_num}"',
                f'  marks={{{marks}}}',
                f'  type="theory"',
                f'  topic="{topic}"',
                f'  frequency="{freq}"',
                f'  question="Q{q_num}. {topic}"',
                f'  answerSummary="{summary}"',
                f'>',
                "",
                body,
                "",
                "</PYQCard>",
                "",
                "---",
                ""
            ])

    # Division 08: QUIZ & REVISION (Parts G, H, I, J, K)
    mdx_lines.extend([
        "# 08 — QUIZ & REVISION: Incoterms Memory Matrix, Master Formula Sheet & Rapid Recall",
        "",
        "### Part G: Last-Minute Quantitative Formula Sheet",
        "",
        parts.get('PART G', ''),
        "",
        "---",
        "",
        "### Part H: Transportation & Network Design Formulation",
        "",
        parts.get('PART H', ''),
        "",
        "---",
        "",
        "### Part I: INCOTERMS 2020 Complete Examination Memory Table",
        "",
        parts.get('PART I', ''),
        "",
        "---",
        "",
        "### Part J: Top 12 Questions to Memorise Before Entering the Exam Hall",
        "",
        parts.get('PART J', ''),
        "",
        "---",
        "",
        "### Part K: 30-Second Exam Recall Memory Hooks",
        "",
        parts.get('PART K', ''),
        "",
        "---",
        ""
    ])

    # Division 09: APPENDIX
    mdx_lines.extend([
        "# 09 — APPENDIX: Faculty Provenance, Cross-Topic Nomenclature & Final Exam Strategy",
        "",
        "### Final Examination Hall Strategy & Scoring Blueprint",
        "",
        parts.get('Final Exam Strategy', ''),
        "",
        "---",
        "",
        "### Canonical References & Faculty Provenance",
        "",
        "1. **Chopra, S., and Meindl, P.** (2016). *Supply Chain Management: Strategy, Planning, and Operation* (6th Edition). Pearson.",
        "2. **Bowersox, D. J., Closs, D. J., and Cooper, M. B.** (2013). *Supply Chain Logistics Management* (4th Edition). McGraw-Hill Education.",
        "3. **Fisher, M. L.** (1997). 'What Is the Right Supply Chain for Your Product?' *Harvard Business Review*, 75(2), pp. 105–116.",
        "4. **Kraljic, P.** (1983). 'Purchasing Must Become Supply Management.' *Harvard Business Review*, 61(5), pp. 109–117.",
        "5. **Lee, H. L., Padmanabhan, V., and Whang, S.** (1997). 'The Bullwhip Effect in Supply Chains.' *Sloan Management Review*, 38(3), pp. 93–102.",
        "6. **International Chamber of Commerce (ICC)**. (2020). *Incoterms 2020: ICC Rules for the Use of Domestic and International Trade Terms*. ICC Services.",
        "7. **Supply Chain Operations Reference (SCOR)** Model, Version 12.0. Association for Supply Chain Management (ASCM / APICS).",
        "8. **WeSchool LSCM Course Architecture**: Prof. Ajit Maurya, Prof. Manoj Dagaonkar, Prof. Praful More (Trimester IV Examination Papers 2023, 2024, 2025)."
    ])

    return '\n'.join(mdx_lines)

def md_to_html(md_text):
    return markdown.markdown(md_text, extensions=['tables', 'fenced_code'])

def generate_html(parts):
    with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
        tmpl = f.read()

    # Add KaTeX CDN in head
    katex_cdn = '''
  <!-- KaTeX Math Engine (Auto-Render) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body, {delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}]});"></script>
'''
    tmpl = tmpl.replace('</head>', f'{katex_cdn}\n</head>')

    # Basic replacements
    tmpl = tmpl.replace('{{TITLE}}', 'LSCM Top PYQ Exam Answer Bank: Master Examination Solutions (2023–2025)')
    tmpl = tmpl.replace('{{DESCRIPTION}}', 'Exhaustive 24-question solved examination answer bank and numerical master set for LSCM (2023–2025).')
    tmpl = tmpl.replace('{{KEYWORDS}}', 'LSCM, PYQ, Supply Chain, Logistics, EOQ, EPQ, Incoterms 2020, Kraljic, WeSchool')
    tmpl = tmpl.replace('{{SUBJECT}}', 'Logistics & Supply Chain Management')
    tmpl = tmpl.replace('{{ARCHETYPE_LABEL}}', 'PAPER NOTEBOOK 2.0')
    tmpl = tmpl.replace('{{SUBTITLE}}', 'Master Examination Solutions & Quantitative Problem-Solving Blueprint · Prof. Ajit Maurya, Prof. Manoj Dagaonkar, Prof. Praful More')

    # Sidebar navigation
    sidebar_html = '''
        <div class="nb-sidebar__grp">FOUNDATIONS</div>
        <a href="#sec-01" class="nb-nav-link" data-target="sec-01"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">01. Priority Map & Format</span></a>
        <a href="#sec-02" class="nb-nav-link" data-target="sec-02"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">02. Part A: Theory Core (Q1–Q6) [5M]</span></a>
        <div class="nb-sidebar__grp">CORE & FRAMEWORKS</div>
        <a href="#sec-03" class="nb-nav-link" data-target="sec-03"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">03. Part B: Trade-Offs (Q7–Q11) [6M]</span></a>
        <a href="#sec-04" class="nb-nav-link" data-target="sec-04"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">04. Part C: Master Solutions (Q12–Q21) [10M]</span></a>
        <div class="nb-sidebar__grp">QUANTITATIVE MASTER SET</div>
        <a href="#sec-05" class="nb-nav-link" data-target="sec-05"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">05. Part E: Numericals 1–5 (12-Step)</span></a>
        <div class="nb-sidebar__grp">APPLICATIONS & EXAM SUITE</div>
        <a href="#sec-06" class="nb-nav-link" data-target="sec-06"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">06. Part F: Case Study Framework</span></a>
        <a href="#sec-07" class="nb-nav-link" data-target="sec-07"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">07. Part D: Questions (Q22–Q24)</span></a>
        <a href="#sec-08" class="nb-nav-link" data-target="sec-08"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">08. Parts G–K: Formulas & Incoterms</span></a>
        <a href="#sec-09" class="nb-nav-link" data-target="sec-09"><span class="nb-sidebar__ck">□</span><span class="nb-sidebar__label">09. Appendix & Hall Strategy</span></a>
'''
    tmpl = tmpl.replace('{{SIDEBAR_GROUPS}}', sidebar_html)

    # Build Module Content sections
    q_map = parts['questions']
    sections = []

    # Section 01: Priority Map & Intro
    sec1_md = f"""
<div class="nb-sticky nb-sticky--pin">
  <div class="nb-sticky__title">📌 The Examination Writing Imperative</div>
  <p>"In postgraduate supply chain examinations, marks are not awarded for memorized text dumps. Scoring demands structural precision: Definition &rarr; Architectural Blueprint &rarr; Key Analytical Dimensions &rarr; Concrete Enterprise Application &rarr; Managerial Conclusion. For numericals, showing Formula &rarr; Parameter Definition &rarr; Step-by-Step Substitution &rarr; Arithmetic Trace &rarr; Boxed Answer &rarr; Operational Interpretation is mandatory." &mdash; <em>Prof. Ajit Maurya &amp; Prof. Manoj Dagaonkar</em></p>
</div>

{parts['intro']}
"""
    sections.append(f'''
<section class="nb-section" id="sec-01" data-title="01. Priority Map & Format">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--blue">Division 01</span>
    <span class="nb-stamp nb-stamp--green">Exam Blueprint</span>
  </div>
  <h2 class="nb-sec-title">01 — Scope, Priority Map &amp; Exam-Writing Architecture</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-01"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {md_to_html(sec1_md)}
  </div>
</section>
''')

    # Helper for rendering Q cards in HTML
    def render_html_q_card(q_num, marks, yr, content_text):
        lines = content_text.split('\n')
        first_line = lines[0] if lines else f"Q{q_num}"
        body_text = '\n'.join(lines[1:]).strip() if len(lines) > 1 else ""
        return f'''
<div class="nb-card" id="q{q_num}">
  <div class="nb-tape"></div>
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
    <h3 style="margin: 0; font-family: var(--font-hand); font-size: 1.4rem; color: var(--ink);">Q{q_num}. {first_line}</h3>
    <div class="nb-stamps" style="margin: 0;">
      <span class="nb-stamp nb-stamp--amber">{marks} Marks</span>
      <span class="nb-stamp nb-stamp--blue">{yr} Paper</span>
    </div>
  </div>
  <div class="nb-card__body">
    {md_to_html(body_text)}
  </div>
</div>
'''

    # Section 02: Part A (Q1 - Q6)
    sec2_content = []
    for q_num in range(1, 7):
        if q_num in q_map:
            sec2_content.append(render_html_q_card(q_num, 5, "2025 Likely", q_map[q_num]))
    sections.append(f'''
<section class="nb-section" id="sec-02" data-title="02. Part A: Theory Core (Q1–Q6)">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--green">Division 02</span>
    <span class="nb-stamp nb-stamp--amber">5-Mark Blueprint</span>
  </div>
  <h2 class="nb-sec-title">02 — FOUNDATIONS: High-Yield 5-Mark Theoretical Core (Q1–Q6)</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-02"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {"".join(sec2_content)}
  </div>
</section>
''')

    # Section 03: Part B (Q7 - Q11)
    sec3_content = []
    for q_num in range(7, 12):
        if q_num in q_map:
            sec3_content.append(render_html_q_card(q_num, 6, "2024 Core", q_map[q_num]))
    sections.append(f'''
<section class="nb-section" id="sec-03" data-title="03. Part B: Trade-Offs (Q7–Q11)">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--blue">Division 03</span>
    <span class="nb-stamp nb-stamp--amber">6-Mark Analytical</span>
  </div>
  <h2 class="nb-sec-title">03 — CORE CONCEPTS: Strategic 6-Mark Architectural Trade-offs (Q7–Q11)</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-03"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {"".join(sec3_content)}
  </div>
</section>
''')

    # Section 04: Part C (Q12 - Q21)
    sec4_content = []
    for q_num in range(12, 22):
        if q_num in q_map:
            sec4_content.append(render_html_q_card(q_num, 10, "2023–2025 Core", q_map[q_num]))
    sections.append(f'''
<section class="nb-section" id="sec-04" data-title="04. Part C: Master Solutions (Q12–Q21)">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--red">Division 04</span>
    <span class="nb-stamp nb-stamp--blue">10-Mark Master Solutions</span>
  </div>
  <h2 class="nb-sec-title">04 — FRAMEWORKS &amp; MODELS: Comprehensive 10-Mark Master Solutions (Q12–Q21)</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-04"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {"".join(sec4_content)}
  </div>
</section>
''')

    # Section 05: Numericals 1 to 5
    num_html_list = []
    num_details = [
        ("Numerical 1: Classical Economic Order Quantity (EOQ)",
         "Annual demand D = 12,000 units, S = ₹50/order, H = ₹4/unit/yr, L = 5 days, 300 days/yr.",
         r"$$EOQ = \sqrt{\frac{2DS}{H}} = \sqrt{\frac{2(12,000)(50)}{4}} = \sqrt{300,000} \approx 548\text{ units}$$",
         "Q* = 548 units; Orders/year = 21.9; Total Cost = ₹2,189.78; ROP = 200 units"),
        ("Numerical 2: Economic Production Quantity (EPQ)",
         "Annual demand D = 24,000 filters/yr, p = 200 filters/day, d = 96 filters/day, S = ₹150, H = ₹1.20.",
         r"$$EPQ = \sqrt{\frac{2DS}{H(1 - d/p)}} = \sqrt{\frac{2(24,000)(150)}{1.20(0.52)}} = \sqrt{11,538,461.54} \approx 3,397\text{ filters}$$",
         "EPQ = 3,397 filters; I_max = 1,766 units; Run duration = 17 days; Total Cost = ₹2,119.62/yr"),
        ("Numerical 3: Quantity Discount Schedule (All-Units)",
         "D = 5,000 boxes/yr, S = ₹40, I = 20%. Tier 1: 0–999 @ ₹10; Tier 2: 1,000–1,999 @ ₹9.50; Tier 3: 2,000+ @ ₹9.00.",
         r"$$TC(Q) = D \cdot C + \frac{D}{Q}S + \frac{Q}{2}H$$",
         "Optimal Q* = 2,000 boxes (Total Cost = ₹46,900.00 vs ₹50,894.43 at Tier 1, saving ₹3,994.43/year)"),
        ("Numerical 4: Safety Stock with Joint Demand & Lead-Time Uncertainty",
         "d = 120 units/day, sigma_d = 30, L = 16 days, sigma_L = 3 days, z = 1.645 (95% CSL).",
         r"$$\sigma_{DL} = \sqrt{L\sigma_d^2 + d^2\sigma_L^2} = \sqrt{16(30^2) + 120^2(3^2)} = \sqrt{144,000} \approx 379.47$$",
         "DL = 1,920 units; Safety Stock SS = 1.645(379.47) ≈ 625 units; Reorder Point ROP = 2,545 units"),
        ("Numerical 5: Single-Period Newsvendor Model",
         "Wholesale C = ₹150, Retail P = ₹400, Salvage S = ₹50, Demand ~ Normal(mean = 1,200, SD = 250).",
         r"$$CR = \frac{C_u}{C_u + C_o} = \frac{400 - 150}{(400 - 150) + (150 - 50)} = \frac{250}{350} \approx 0.7143$$",
         "z = 0.566; Optimal Order Q* = 1,200 + 0.566(250) ≈ 1,342 parkas; Stockout Risk = 28.57%")
    ]

    for idx, (ntitle, nprob, nform, nres) in enumerate(num_details, 1):
        raw_body = parts['numericals'].get(idx, "")
        num_html_list.append(f'''
<div class="nb-fbox" id="num-{idx}">
  <div class="nb-fbox__header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
    <span class="nb-fbox__label" style="font-weight: 700; font-size: 1.25rem; color: var(--ink);">{ntitle}</span>
    <span class="nb-stamp nb-stamp--green">12-Step Professor Standard</span>
  </div>
  <p><strong>Problem:</strong> {nprob}</p>
  <div class="nb-fbox__math">{nform}</div>
  <div style="background: var(--paper); border: 1.5px solid var(--line); border-radius: 6px; padding: 14px; margin: 12px 0;">
    <h4 style="margin: 0 0 6px; color: var(--ink);">Step-by-Step Mathematical Derivation</h4>
    {md_to_html(raw_body)}
  </div>
  <div style="padding: 10px 14px; background: rgba(29, 122, 69, 0.12); border-left: 4px solid var(--green); border-radius: 4px; font-weight: 600;">
    <strong>Boxed Final Solution:</strong> {nres}
  </div>
</div>
''')

    sections.append(f'''
<section class="nb-section" id="sec-05" data-title="05. Part E: Numericals 1–5">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--amber">Division 05</span>
    <span class="nb-stamp nb-stamp--green">Master Quantitative Set</span>
  </div>
  <h2 class="nb-sec-title">05 — WORKED EXAMPLES: The 5-Part Numerical Master Set (12-Step Professor Standard)</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-05"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {"".join(num_html_list)}
  </div>
</section>
''')

    # Section 06: Part F (Case Study Answer Framework)
    sections.append(f'''
<section class="nb-section" id="sec-06" data-title="06. Part F: Case Framework">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--blue">Division 06</span>
    <span class="nb-stamp nb-stamp--green">Consulting Method</span>
  </div>
  <h2 class="nb-sec-title">06 — CASES &amp; APPLICATIONS: Enterprise Case Study Analysis &amp; Strategic Problem-Solving</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-06"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    <div class="nb-sticky nb-sticky--blue">
      <div class="nb-sticky__title">📋 Case Study Scoring Methodology</div>
      <p>"When tackling a 10-mark or 15-mark case study in LSCM, examiners look for the 4-step consulting framework: 1. Core Operational Problem Identification; 2. Diagnostic Root-Cause Analysis using Course Frameworks (Fisher, SCOR, Kraljic); 3. Strategic Decision Options &amp; Trade-Off Evaluation; 4. Phased Implementation Roadmap with Risk Mitigation." &mdash; <em>Prof. Praful More</em></p>
    </div>
    {md_to_html(parts.get('PART F', ''))}
  </div>
</section>
''')

    # Section 07: Part D (Questions Q22-Q24)
    sec7_content = []
    for q_num in range(22, 25):
        if q_num in q_map:
            sec7_content.append(render_html_q_card(q_num, 6, "2024 Exam", q_map[q_num]))
    sections.append(f'''
<section class="nb-section" id="sec-07" data-title="07. Part D: Questions (Q22–Q24)">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--green">Division 07</span>
    <span class="nb-stamp nb-stamp--blue">High-Yield Short Notes</span>
  </div>
  <h2 class="nb-sec-title">07 — PYQs: Additional High-Yield Questions (Q22–Q24) &amp; Exam Recurrence Matrix</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-07"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {"".join(sec7_content)}
  </div>
</section>
''')

    # Section 08: Parts G, H, I, J, K
    sec8_md = f"""
### Part G: Last-Minute Quantitative Formula Sheet
{parts.get('PART G', '')}

---

### Part H: Transportation & Network Design Formulation
{parts.get('PART H', '')}

---

### Part I: INCOTERMS 2020 Complete Examination Memory Table
{parts.get('PART I', '')}

---

### Part J: Top 12 Questions to Memorise Before Entering the Exam Hall
{parts.get('PART J', '')}

---

### Part K: 30-Second Exam Recall Memory Hooks
{parts.get('PART K', '')}
"""
    sections.append(f'''
<section class="nb-section" id="sec-08" data-title="08. Parts G–K: Formula & Incoterms">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--red">Division 08</span>
    <span class="nb-stamp nb-stamp--amber">Rapid Memory Grid</span>
  </div>
  <h2 class="nb-sec-title">08 — QUIZ &amp; REVISION: Incoterms Memory Matrix, Master Formula Sheet &amp; Rapid Recall</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-08"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {md_to_html(sec8_md)}
  </div>
</section>
''')

    # Section 09: Appendix & Final Exam Strategy
    sec9_md = f"""
### Final Examination Hall Strategy & Scoring Blueprint
{parts.get('Final Exam Strategy', '')}

---

### Canonical Academic References & Faculty Provenance
1. **Chopra, S., and Meindl, P.** (2016). *Supply Chain Management: Strategy, Planning, and Operation* (6th Edition). Pearson.
2. **Bowersox, D. J., Closs, D. J., and Cooper, M. B.** (2013). *Supply Chain Logistics Management* (4th Edition). McGraw-Hill Education.
3. **Fisher, M. L.** (1997). 'What Is the Right Supply Chain for Your Product?' *Harvard Business Review*, 75(2), pp. 105–116.
4. **Kraljic, P.** (1983). 'Purchasing Must Become Supply Management.' *Harvard Business Review*, 61(5), pp. 109–117.
5. **Lee, H. L., Padmanabhan, V., and Whang, S.** (1997). 'The Bullwhip Effect in Supply Chains.' *Sloan Management Review*, 38(3), pp. 93–102.
6. **International Chamber of Commerce (ICC)**. (2020). *Incoterms 2020: ICC Rules for the Use of Domestic and International Trade Terms*. ICC Services.
7. **Supply Chain Operations Reference (SCOR)** Model, Version 12.0. Association for Supply Chain Management (ASCM / APICS).
8. **WeSchool LSCM Course Architecture**: Prof. Ajit Maurya, Prof. Manoj Dagaonkar, Prof. Praful More (Trimester IV Examination Papers 2023, 2024, 2025).
"""
    sections.append(f'''
<section class="nb-section" id="sec-09" data-title="09. Appendix & Hall Strategy">
  <div class="nb-stamps">
    <span class="nb-stamp nb-stamp--blue">Division 09</span>
    <span class="nb-stamp nb-stamp--green">Faculty Provenance</span>
  </div>
  <h2 class="nb-sec-title">09 — APPENDIX: Faculty Provenance, Cross-Topic Nomenclature &amp; Final Exam Strategy</h2>
  <div class="nb-mod-status" data-status="not_started">
    <span class="nb-mod-status__prompt">Status:</span>
    <button class="nb-mod-status__btn" data-target="sec-09"><span class="nb-mod-status__icon">□</span> <span class="nb-mod-status__text">Not started</span></button>
  </div>
  <div class="nb-section__content">
    {md_to_html(sec9_md)}
  </div>
</section>
''')

    tmpl = tmpl.replace('{{MODULE_CONTENT}}', '\n'.join(sections))
    tmpl = tmpl.replace('{{MCQ_ASSESSMENT}}', '')
    tmpl = tmpl.replace('{{SOURCE_CITATIONS}}', '')

    return tmpl

def main():
    print("1. Parsing source Markdown...")
    parts = parse_source()
    print(f"Parsed {len(parts['questions'])} questions, {len(parts['numericals'])} numericals, intro + extra parts.")

    print("2. Generating MDX canonical notebook...")
    mdx_content = generate_mdx(parts)
    os.makedirs(os.path.dirname(MDX_DEST_PATH), exist_ok=True)
    with open(MDX_DEST_PATH, 'w', encoding='utf-8') as f:
        f.write(mdx_content)
    print(f"Saved canonical MDX to: {MDX_DEST_PATH} ({len(mdx_content)} chars)")

    print("3. Generating standalone Template 2.0 HTML notebooks...")
    html_content = generate_html(parts)
    os.makedirs(os.path.dirname(HTML_DEST_OPS), exist_ok=True)
    with open(HTML_DEST_OPS, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Saved standalone HTML to: {HTML_DEST_OPS} ({len(html_content)} chars)")

    os.makedirs(os.path.dirname(HTML_DEST_PUB), exist_ok=True)
    with open(HTML_DEST_PUB, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Saved public HTML to: {HTML_DEST_PUB} ({len(html_content)} chars)")

    # Metadata file for Operations archive
    meta = {
        "title": "LSCM Top PYQ Exam Answer Bank: Master Examination Solutions (2023–2025)",
        "slug": "lscm-top-pyq-exam-answer-bank",
        "domain": "operations",
        "subject": "logistics-supply-chain",
        "template": "template-2.0",
        "questions_count": 24,
        "numericals_count": 5,
        "divisions": 9,
        "updated": "2026-10-07"
    }
    with open(META_DEST_OPS, 'w', encoding='utf-8') as f:
        json.dump(meta, f, indent=2)
    print(f"Saved metadata to: {META_DEST_OPS}")

if __name__ == '__main__':
    main()
