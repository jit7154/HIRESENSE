import { Link } from "react-router";

const LandingPage = () => {

  const features = [
    { title: 'Match score', desc: 'A realistic 0–100 score showing exactly how well your profile fits the role before you even apply.', color: '#818cf8', bg: 'rgba(99,102,241,0.12)', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></> },
    { title: 'Technical questions', desc: 'Role-specific questions with the interviewer\'s intent and a suggested approach for each one.', color: '#34d399', bg: 'rgba(52,211,153,0.1)', icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></> },
    { title: 'Skill gap analysis', desc: "Know exactly what's missing, rated by severity so you know where to focus your preparation.", color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></> },
    { title: 'Day-by-day prep plan', desc: 'A structured schedule with topics, resources, and tasks for every day before your interview.', color: '#818cf8', bg: 'rgba(99,102,241,0.12)', icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
    { title: 'Resume PDF export', desc: 'A tailored, ATS-friendly resume generated from your profile and optimized for the target role.', color: '#f87171', bg: 'rgba(248,113,113,0.1)', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></> },
    { title: 'Behavioral questions', desc: 'Soft-skill questions with STAR-method guidance so you can tell your story convincingly.', color: '#34d399', bg: 'rgba(52,211,153,0.1)', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></> },
  ]

  const steps = [
    { n: '1', title: 'Upload your resume', desc: 'Upload your resume as a PDF. HireSense extracts your experience, projects, and skills automatically.' },
    { n: '2', title: 'Add the job description', desc: 'Paste the job description and write a short self-introduction. The AI cross-references your profile against the role.' },
    { n: '3', title: 'Get your full report', desc: 'Receive your match score, interview questions, skill gap analysis, prep plan, and a tailored resume PDF.' },
  ]

  return (
    <div style={{ background: '#0f1115', color: '#f3f4f6', fontFamily: "'Inter', system-ui, sans-serif", WebkitFontSmoothing: 'antialiased' }}>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '100px 32px 80px', textAlign: 'center' }}>

        {/* SVG background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="#0f1115"/>
            <g stroke="rgba(99,102,241,0.06)" strokeWidth="0.5">
              {[100,200,300,400,500].map(y => <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y}/>)}
              {[100,200,300,400,500,600,700,800,900,1000,1100].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600"/>)}
            </g>
            <ellipse cx="200" cy="180" rx="300" ry="300" fill="rgba(99,102,241,0.07)"/>
            <ellipse cx="1000" cy="420" rx="260" ry="260" fill="rgba(99,102,241,0.05)"/>
            <circle cx="150" cy="120" r="2" fill="rgba(99,102,241,0.5)"/>
            <circle cx="400" cy="80" r="1.5" fill="rgba(129,140,248,0.4)"/>
            <circle cx="900" cy="150" r="2" fill="rgba(99,102,241,0.5)"/>
            <circle cx="1050" cy="60" r="1.5" fill="rgba(129,140,248,0.3)"/>
            <circle cx="650" cy="500" r="2" fill="rgba(99,102,241,0.3)"/>
            <circle cx="80" cy="460" r="1.5" fill="rgba(129,140,248,0.2)"/>
            <line x1="0" y1="0" x2="300" y2="300" stroke="rgba(99,102,241,0.04)" strokeWidth="1"/>
            <line x1="1200" y1="0" x2="900" y2="300" stroke="rgba(99,102,241,0.04)" strokeWidth="1"/>
            <defs>
              <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f1115" stopOpacity="0"/>
                <stop offset="100%" stopColor="#0f1115" stopOpacity="1"/>
              </linearGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#heroFade)"/>
          </svg>
        </div>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(99,102,241,0.12)', border: '0.5px solid rgba(99,102,241,0.3)', color: '#a5b4fc', fontSize: '12px', fontWeight: 500, padding: '5px 14px', borderRadius: '999px', marginBottom: '28px', letterSpacing: '0.03em' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', display: 'inline-block' }}/>
            AI-powered interview preparation
          </div>
          <h1 style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.12, color: '#f3f4f6', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            Prepare smarter.<br/>Interview with <em style={{ fontStyle: 'normal', color: '#818cf8' }}>confidence.</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#9ca3af', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Upload your resume, paste the job description, and get a fully personalized interview report — questions, skill gaps, and a day-by-day prep plan — in seconds.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register">
              <button style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '13px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                Create account
              </button>
            </Link>
            <Link to="/login">
              <button style={{ background: 'transparent', color: '#f3f4f6', border: '0.5px solid rgba(243,244,246,0.18)', padding: '13px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ height: '0.5px', background: 'rgba(243,244,246,0.07)' }}/>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[['AI','GEMINI POWERED'],['< 3 min','REPORT GENERATION'],['100%','TAILORED TO YOU'],['PDF','RESUME EXPORT']].map(([n, l], i, arr) => (
          <div key={l} style={{ padding: '28px 44px', textAlign: 'center', borderRight: i < arr.length - 1 ? '0.5px solid rgba(243,244,246,0.07)' : 'none' }}>
            <div style={{ fontSize: '26px', fontWeight: 700, color: '#f3f4f6', letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontSize: '11px', color: '#4b5563', marginTop: '4px', letterSpacing: '0.06em' }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ height: '0.5px', background: 'rgba(243,244,246,0.07)' }}/>

      {/* ── MOCKUP ── */}
      <div style={{ padding: '48px 32px', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ background: '#13161e', border: '0.5px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
          {/* browser bar */}
          <div style={{ background: '#1a1e2a', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
            {['#ef4444','#f59e0b','#10b981'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }}/>)}
            <span style={{ fontSize: '11px', color: '#374151', marginLeft: '8px' }}>hiresense.app / dashboard / report</span>
          </div>
          {/* body */}
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '10px', color: '#374151', marginBottom: '12px', letterSpacing: '0.07em' }}>SENIOR FRONTEND ENGINEER — TECHFLOW SOLUTIONS</div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              {[['MATCH SCORE','74 / 100','#818cf8'],['SKILL GAPS','3 found','#fbbf24']].map(([l,v,c]) => (
                <div key={l} style={{ flex: 1, background: '#1a1e2a', borderRadius: '10px', padding: '14px 16px', border: '0.5px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '10px', color: '#4b5563', marginBottom: '6px', letterSpacing: '0.06em' }}>{l}</div>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: c }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {[['Redux toolkit — low','rgba(52,211,153,0.1)','#34d399'],['Core web vitals — medium','rgba(251,191,36,0.1)','#fbbf24'],['Jest testing — high','rgba(248,113,113,0.1)','#f87171']].map(([t,bg,c]) => (
                <span key={t} style={{ fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px', background: bg, color: c }}>{t}</span>
              ))}
            </div>
            {[['TECHNICAL QUESTION','Explain how React\'s virtual DOM diffing works and when you\'d use useMemo to prevent unnecessary re-renders.'],['DAY 1 PREP TASK','Review React hooks docs. Solve 3 useMemo vs useCallback problems. Study Core Web Vitals (LCP, FID).']].map(([l,t]) => (
              <div key={l} style={{ background: '#1a1e2a', borderRadius: '8px', padding: '12px 14px', marginBottom: '8px', border: '0.5px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '10px', color: '#374151', marginBottom: '5px', letterSpacing: '0.06em' }}>{l}</div>
                <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.55 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={{ padding: '72px 32px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 700, color: '#f3f4f6', marginBottom: '10px', letterSpacing: '-0.02em' }}>Everything in one report</div>
        <div style={{ textAlign: 'center', fontSize: '15px', color: '#6b7280', marginBottom: '48px' }}>One upload. A complete interview strategy.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#13161e', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
              {/* subtle glow in corner */}
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '80px', height: '80px', borderRadius: '50%', background: f.color, opacity: 0.08, pointerEvents: 'none' }}/>
              <div style={{ width: '38px', height: '38px', borderRadius: '9px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#f3f4f6', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: '#0c0e13', padding: '72px 32px', borderTop: '0.5px solid rgba(255,255,255,0.05)', borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 700, color: '#f3f4f6', marginBottom: '10px', letterSpacing: '-0.02em' }}>How it works</div>
          <div style={{ textAlign: 'center', fontSize: '15px', color: '#6b7280', marginBottom: '40px' }}>From resume to ready in three steps</div>
          {steps.map((step, i) => (
            <div key={step.n} style={{ display: 'flex', gap: '20px', padding: '24px 0', borderBottom: i < steps.length - 1 ? '0.5px solid rgba(255,255,255,0.05)' : 'none' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', border: '0.5px solid rgba(99,102,241,0.3)', color: '#818cf8', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>{step.n}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, color: '#f3f4f6', marginBottom: '5px' }}>{step.title}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="400" fill="#0f1115"/>
            <ellipse cx="600" cy="200" rx="400" ry="200" fill="rgba(99,102,241,0.05)"/>
            <ellipse cx="600" cy="200" rx="200" ry="100" fill="rgba(99,102,241,0.05)"/>
            <circle cx="600" cy="200" r="150" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="0.5"/>
            <circle cx="600" cy="200" r="250" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="0.5"/>
            <circle cx="600" cy="200" r="350" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="0.5"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '34px', fontWeight: 700, color: '#f3f4f6', marginBottom: '12px', letterSpacing: '-0.02em' }}>Ready to walk in prepared?</div>
          <div style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>Create an account and generate your first interview report in minutes.</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register">
              <button style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '13px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                Create account
              </button>
            </Link>
            <Link to="/login">
              <button style={{ background: 'transparent', color: '#f3f4f6', border: '0.5px solid rgba(243,244,246,0.18)', padding: '13px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ padding: '24px 32px', borderTop: '0.5px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#374151' }}>HireSense — built for serious candidates</p>
      </div>

    </div>
  )
}

export default LandingPage