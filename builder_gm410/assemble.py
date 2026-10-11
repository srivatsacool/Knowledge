# builder_gm410/assemble.py
# Master Assembler for GM 410 Strategy & Analytics Notebook 2.0

import os
import sys

# Ensure current folder is in path
sys.path.insert(0, os.path.dirname(__file__))

from styles import STYLES_CSS
from scripts import SCRIPTS_JS
from mod0_orientation import get_mod0_html
from mod1_strategy import get_mod1_html
from mod2_external import get_mod2_html
from mod3_internal import get_mod3_html
from mod4_portfolio import get_mod4_html
from mod5_blueocean import get_mod5_html
from mod6_tech import get_mod6_html
from mod7_esg import get_mod7_html
from mod8_cases import get_mod8_cases_html
from mod9_pyqs import get_mod9_pyqs_html

def assemble_notebook():
    output_path = r"D:\Brain\05_Knowledge\Management\GM410_Strategy_and_Analytics_Notebook_2.0.html"

    sidebar_toc = """
    <nav class="side" role="navigation" aria-label="Course Curriculum Navigation">
      <h2>Curriculum Modules</h2>
      <a href="#mod-0-orientation"><span class="dot st-done"></span>Mod 0: Orientation &amp; Exam Strategy</a>
      <a href="#mod-1-strategic-intent"><span class="dot st-done"></span>Mod 1: Strategic Intent &amp; Goals</a>
      <a href="#mod-2-external-analysis"><span class="dot st-done"></span>Mod 2: External Industry Analysis</a>
      <a href="#mod-3-internal-capabilities"><span class="dot st-done"></span>Mod 3: Capabilities &amp; Execution</a>
      <a href="#mod-4-portfolio-management"><span class="dot st-done"></span>Mod 4: Corporate Portfolio (BCG)</a>
      <a href="#mod-5-blue-ocean"><span class="dot st-done"></span>Mod 5: Blue Ocean Strategy</a>
      <a href="#mod-6-tech-strategy"><span class="dot st-done"></span>Mod 6: Technology Strategy &amp; AI</a>
      <a href="#mod-7-sustainability-ethics"><span class="dot st-done"></span>Mod 7: Sustainability, ESG &amp; Forensics</a>
      
      <h2>Master Case Studies</h2>
      <a href="#case-nvidia-blue-ocean"><span class="dot st-prog"></span>Case A: NVIDIA Blue Ocean (Polls Q1-15)</a>
      <a href="#case-microsoft-bigdata"><span class="dot st-prog"></span>Case B: Microsoft Big Data (2025 PYQ)</a>
      <a href="#case-amazon-bigdata"><span class="dot st-prog"></span>Case C: Amazon Big Data (2024 PYQ)</a>
      <a href="#case-coca-cola-sustainability"><span class="dot st-prog"></span>Case D: Coca-Cola CSR (2023 PYQ)</a>

      <h2>Revision &amp; Question Bank</h2>
      <a href="#mod-9-exam-bank"><span class="dot"></span>2025 End Term Exam Answers</a>
      <a href="#mod-9-exam-bank"><span class="dot"></span>2024 End Term Exam Answers</a>
      <a href="#mod-9-exam-bank"><span class="dot"></span>2023 End Term Exam Answers</a>
      <a href="#sec-flashcards"><span class="dot"></span>Active Recall Flashcards</a>
    </nav>
    """

    hero_html = """
    <header class="sheet" style="border-bottom: 3px solid var(--ink); margin-bottom: 28px;">
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
        <span class="nb-stamp nb-stamp--green">Welingkar WeSchool</span>
        <span class="nb-stamp nb-stamp--blue">PGDM R&amp;BA Core</span>
        <span class="nb-stamp">Edition 2.0</span>
        <span class="nb-stamp nb-stamp--amber">GM 410</span>
      </div>
      <h1 class="hero-title">Integrative Manager for Analytics</h1>
      <p style="font-size:1.25rem; font-family:var(--serif); color:var(--ink); margin-bottom:14px; font-weight:600;">
        Master MBA Strategy, Applied Analytics, Case Compendium &amp; Complete Examination Blueprint
      </p>
      <p style="font-size:15.5px; color:var(--pencil); line-height:1.6; max-width:960px;">
        Academic curriculum lead: <strong>Dr. Sonal Daulatkar</strong> (Strategic Management &amp; Case Lead) and <strong>Dr. Sangeetha Rajesh</strong> (Technology for Business Strategy). Comprehensive syllabus coverage, 15 INSEAD NVIDIA poll solutions, 4 master case study dossiers, and 100% authentic model answers with rubrics for 2023, 2024, and 2025 university examinations.
      </p>
      <div style="display:flex; flex-wrap:wrap; gap:16px; margin-top:18px; font-size:13px; font-family:var(--ui); color:var(--pencil);">
        <div>📚 <strong>10 Comprehensive Modules</strong></div>
        <div>🎯 <strong>23 Past Exam Questions</strong></div>
        <div>💡 <strong>15 INSEAD Case Polls Analyzed</strong></div>
        <div>⏱ <strong>120 Mins Study Horizon</strong></div>
      </div>
    </header>
    """

    html = f"""<!DOCTYPE html>
<html lang="en" data-theme="light" data-ruling="on">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>GM 410: Integrative Manager for Analytics · Master MBA Compendium (Edition 2.0)</title>
  <meta name="description" content="Comprehensive postgraduate MBA study guide and interactive examination blueprint for GM 410 (Integrative Manager for Analytics) at Welingkar Institute (WeSchool). Complete syllabus, cases, and PYQs.">
  <meta name="keywords" content="Strategy, Analytics, MBA, GM410, WeSchool, Welingkar, Blue Ocean, NVIDIA, Big Data, CSR, PYQ, Revision, Porter, BCG">
  <meta name="author" content="Brain Knowledge Hub / Welingkar WeSchool Curriculum">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%93%3C/text%3E%3C/svg%3E">

  <!-- Academic & Editorial Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Patrick+Hand&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=STIX+Two+Text:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

  <style>
{STYLES_CSS}
  </style>
</head>
<body>
  <a href="#mod-0-orientation" class="skip">Skip to main content</a>

  <!-- Topbar -->
  <header class="topbar" role="banner">
    <button id="hamb" class="btn sm" aria-label="Toggle navigation drawer" aria-expanded="false">☰</button>
    <a href="../index.html" class="brand">
      <span>📖 Brain Hub</span>
    </a>
    <span class="badge-inst">WeSchool · GM 410</span>
    <span class="ttl">Strategic Management &amp; Analytics 2.0</span>
    <span class="sp"></span>

    <div class="search">
      <input type="search" id="searchInput" placeholder="Search (Press '/' or Ctrl+K)" aria-label="Search notebook contents">
      <div id="searchResults" role="region" aria-live="polite"></div>
    </div>

    <button id="rulingToggle" class="btn sm" title="Toggle Single-Line Ruled Paper Effect" aria-pressed="false">📏 Ruling</button>
    <button id="timerToggle" class="btn sm" title="Toggle Exam Countdown Timer" aria-expanded="false">⏱ Timer</button>
    <button id="focusToggle" class="btn sm" title="Toggle Distraction-Free Focus Mode" aria-pressed="false">🎯 Focus</button>
    <button id="themeToggle" class="btn sm" title="Toggle Light / Dark Mode" aria-pressed="false">🌓 Theme</button>

    <div class="progressWrap"><div id="progressBar"></div></div>
  </header>

  <!-- Timer Overlay Panel -->
  <div id="timerPanel" class="timerPanel">
    <div id="timerClock" class="clock">15:00</div>
    <div class="row">
      <button id="timerStart" class="btn sm" style="background:var(--green); color:#fff;">Start</button>
      <button id="timerPause" class="btn sm">Pause</button>
      <button id="timerReset15" class="btn sm">15m Exam</button>
      <button id="timerReset45" class="btn sm">45m Case</button>
    </div>
  </div>

  <!-- Main Shell -->
  <div class="shell">
    {sidebar_toc}

    <main class="main" role="main">
      {hero_html}
      {get_mod0_html()}
      {get_mod1_html()}
      {get_mod2_html()}
      {get_mod3_html()}
      {get_mod4_html()}
      {get_mod5_html()}
      {get_mod6_html()}
      {get_mod7_html()}
      {get_mod8_cases_html()}
      {get_mod9_pyqs_html()}

      <footer class="sheet" style="text-align:center; padding:24px; font-size:14px; color:var(--pencil);">
        <p><strong>GM 410: Integrative Manager for Analytics · Notebook 2.0</strong></p>
        <p>Prin. L. N. Welingkar Institute of Management Development and Research (WeSchool) · PGDM Research &amp; Business Analytics</p>
        <p>Academic sources verified from faculty course packs, INSEAD case materials, HBR readings, and 2023–2025 university examinations.</p>
      </footer>
    </main>
  </div>

  <script>
{SCRIPTS_JS}
  </script>
</body>
</html>
"""

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    
    print(f"SUCCESS: Assembled GM 410 Notebook 2.0 at {output_path}")
    print(f"File size: {len(html)} bytes ({len(html)/1024:.1f} KB)")

if __name__ == "__main__":
    assemble_notebook()
