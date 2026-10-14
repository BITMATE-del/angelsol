import Link from "next/link";
import { ArrowUpRight, ArrowRight, Layers3, Sparkles, Bot, Smartphone, Workflow, ShieldCheck, Check, MoveUpRight } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

const serviceCards=[
 {icon:<Layers3 size={25}/>,number:"01",name:"웹사이트 · 웹 플랫폼",desc:"비즈니스 목표를 선명하게 드러내는 사이트부터 복합 서비스까지.",className:"service-web"},
 {icon:<Smartphone size={25}/>,number:"02",name:"앱 · 모바일 서비스",desc:"매끄럽고 일관된 경험을 모바일 화면에서 구현합니다.",className:"service-mobile"},
 {icon:<Workflow size={25}/>,number:"03",name:"자동화 · 운영 시스템",desc:"반복되는 일은 줄이고 중요한 일에 집중할 수 있도록.",className:"service-automation"},
 {icon:<Bot size={25}/>,number:"04",name:"봇 · 맞춤형 프로그램",desc:"고객 응대부터 업무용 도구까지 필요한 기능을 정확하게.",className:"service-bot"}
];
export default function Home(){
 return <main>
  <section className="new-hero">
   <div className="shell hero-inner">
    <div className="hero-copy">
      <div className="hero-kicker"><span className="pulse-dot"/> ANGEL SOLUTION — DIGITAL CREATIVE PARTNER</div>
      <h1>상상하는 모든 것,<br/><em>가능한 현실</em>이 되도록.</h1>
      <p>아이디어가 아직 한 문장이어도 괜찮습니다.<br/>기획부터 디자인, 개발과 완성까지.<br/>당신의 비즈니스에 꼭 맞는 디지털 경험을 만듭니다.</p>
      <div className="hero-buttons"><Link className="button-primary" href="/request">프로젝트 시작하기 <ArrowUpRight size={18}/></Link><Link className="button-outline" href="/works">포트폴리오 둘러보기 <ArrowRight size={17}/></Link></div>
      <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>S</span><span>✳</span></div><span>IDEA → DESIGN → DEVELOPMENT<br/><strong>기획부터 구현까지 하나의 흐름으로</strong></span></div>
    </div>
    <div className="new-hero-visual" aria-label="엔젤 솔루션 디지털 제작 스튜디오 시각화">
      <div className="visual-glow"/>
      <div className="visual-ring ring-one"/><div className="visual-ring ring-two"/>
      <div className="float-spark float-spark-one">✳</div><div className="float-spark float-spark-two">✦</div>
      <div className="showcase-frame">
       <div className="frame-head"><div className="frame-dots"><i/><i/><i/></div><span>ANGEL / WORKSPACE</span><span>↗</span></div>
       <div className="frame-body"><div className="frame-side"><b>AS.</b><span>▦</span><span>◈</span><span>⌘</span><span>◇</span></div><div className="frame-main"><div className="frame-line"><span>Welcome back.</span><small>Overview · 2026</small></div><div className="frame-stats"><div><small>ACTIVE WORKFLOWS</small><strong>12<sup>↗</sup></strong></div><div><small>PROJECT STATUS</small><strong>84<sup>%</sup></strong></div><div><small>TEAM ACTIVITY</small><strong>28<sup>+</sup></strong></div></div><div className="frame-chart"><div className="chart-top">Project growth <span>● Live preview</span></div><svg viewBox="0 0 480 180" preserveAspectRatio="none" role="img" aria-label="컨셉 대시보드 성장 그래프"><defs><linearGradient id="rise" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d7b78c" stopOpacity=".36"/><stop offset="1" stopColor="#d7b78c" stopOpacity="0"/></linearGradient></defs><path d="M0 151 C45 145 60 118 99 132 S155 103 201 109 S255 80 291 93 S345 40 384 65 S437 12 480 24 L480 180 L0 180Z" fill="url(#rise)"/><path d="M0 151 C45 145 60 118 99 132 S155 103 201 109 S255 80 291 93 S345 40 384 65 S437 12 480 24" stroke="#bc9465" strokeWidth="3" fill="none"/></svg></div><div className="frame-bottom"><span>01 &nbsp; Analytics</span><span>02 &nbsp; Automation</span><span>03 &nbsp; Design System</span></div></div></div>
      </div>
      <div className="visual-note"><span className="note-icon">✦</span><div><strong>Made for your vision.</strong><small>Tailored digital experiences</small></div></div>
    </div>
   </div>
   <div className="hero-bottom shell"><span>CREATIVE THINKING. REAL SOLUTIONS.</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>
  <section className="trust-ribbon"><div className="shell"><span>WE DESIGN</span><i/> <span>WE DEVELOP</span><i/> <span>WE AUTOMATE</span><i/> <span>WE DELIVER</span></div></section>
  <section className="section portfolio-section"><div className="shell"><div className="section-head"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>아이디어가<br/><em>눈앞의 결과물</em>이 되는 순간.</h2></div><div><p className="section-note">복잡한 기능도 편안하고 명확한 경험으로. 디지털 솔루션의 다양한 가능성을 시안으로 살펴보세요.</p><Link className="text-link" href="/works">전체 프로젝트 보기 <ArrowUpRight size={18}/></Link></div></div><div className="project-grid">{projects.map((p,i)=><ProjectCard project={p} index={i} key={p.slug}/>)}</div><p className="portfolio-disclaimer">* 전시 중인 기본 프로젝트 이미지는 컨셉 쇼케이스입니다. 실제 납품 사례와 별도로 구분됩니다.</p></div></section>
  <section className="section section-alt offerings-section"><div className="shell"><div className="section-head"><div><span className="eyebrow">02 / WHAT WE DO</span><h2>필요한 만큼,<br/><em>정확하게 만듭니다.</em></h2></div><p className="section-note">정해진 틀에 맞추지 않습니다. 목적에 맞는 기능과 디자인을 함께 설계합니다.</p></div><div className="offer-grid">{serviceCards.map(s=><Link className={"offer-card "+s.className} href={"/request?service="+encodeURIComponent(s.name)} key={s.number}><div className="offer-top"><span className="offer-icon">{s.icon}</span><small>{s.number} / 04</small></div><div><h3>{s.name}</h3><p>{s.desc}</p></div><span className="offer-arrow"><MoveUpRight size={18}/></span></Link>)}</div></div></section>
  <section className="section philosophy-section"><div className="shell philosophy-grid"><div><span className="eyebrow">03 / OUR APPROACH</span><h2>보기 좋은 것을 넘어,<br/><em>제대로 작동하도록.</em></h2><p className="lead">디자인은 첫인상을 만들고, 좋은 기술은 그 경험을 완성합니다. ANGEL SOLUTION은 두 가지를 함께 고민합니다.</p><Link href="/process" className="text-link">우리의 제작 과정 알아보기 <ArrowUpRight size={18}/></Link></div><div className="philosophy-points">{[["01","목적을 먼저 이해합니다.","필요한 기능보다 해결할 문제를 먼저 정의합니다."],["02","과정을 투명하게 공유합니다.","기획부터 최종 검수까지 단계별로 확인합니다."],["03","완성 이후까지 생각합니다.","운영과 유지보수를 고려해 확장 가능한 구조로 만듭니다."]].map(s=><div className="approach-item" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><ArrowUpRight size={18}/></div>)}</div></div></section>
  <section className="section closing-section"><div className="shell"><div className="closing-card"><span className="eyebrow">YOUR NEXT IDEA STARTS HERE</span><span className="closing-star">✳</span><h2>좋은 아이디어는,<br/><em>대화 한 번에서 시작됩니다.</em></h2><p>아직 구체적인 기획이 없어도 괜찮습니다.<br/>떠올린 생각을 들려주세요. 함께 방법을 찾겠습니다.</p><Link className="button-primary" href="/request">무료 제작 상담 시작하기 <ArrowUpRight size={19}/></Link></div></div></section>
 </main>
}