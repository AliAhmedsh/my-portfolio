import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Award, Braces, Check, Code2, ExternalLink, Github, Layers3, Mail, MapPin, Menu, Smartphone, X, Zap } from 'lucide-react'
import { portfolioProjects, projectAsset, type Project } from './data/projects'

const EMAIL = 'aliahmedsh05@gmail.com'
const GITHUB = 'https://github.com/AliAhmedsh'
const certificates = [
  { title: 'AdventureDart Game', date: 'February 2025', issuer: '724.ONE TECH', description: 'Recognition for successfully building and shipping a location-based real-world adventure game to iOS and Android, with team play, live leaderboards, and map-based gameplay.', code: 'CERT / AD / 2025' },
  { title: 'VEOR App', date: 'September 2024', issuer: '724.ONE TECH', description: 'Recognition for delivering a peer-to-peer emotional support product with real-time chat, anonymous listener matching, mood tracking, voice calls, and privacy-focused experiences.', code: 'CERT / VEOR / 2024' },
]
const capabilities = [
  { icon: Smartphone, label: 'Mobile', text: 'React Native apps that feel considered on both iOS and Android.' },
  { icon: Code2, label: 'Frontend', text: 'Responsive React interfaces with clean architecture and sharp interaction design.' },
  { icon: Layers3, label: 'Backend', text: 'APIs, auth, real-time data, payments, notifications, and integrations.' },
  { icon: Zap, label: 'AI systems', text: 'Useful AI features and automations built into real product workflows.' },
]

function navigate(path: string) { window.history.pushState({}, '', path); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo({ top: 0, behavior: 'smooth' }) }
function usePath() { const [path, setPath] = useState(window.location.pathname); useEffect(() => { const update = () => setPath(window.location.pathname); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, []); return path }
function AppLink({ to, children, className, onClick, ...props }: { to: string; children: React.ReactNode; className?: string; onClick?: () => void; 'aria-label'?: string }) { return <a href={to} className={className} {...props} onClick={(event) => { event.preventDefault(); onClick?.(); navigate(to) }}>{children}</a> }

function Shell({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false), [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  return <div className="site-shell">
    <header className={scrolled ? 'nav-wrap scrolled' : 'nav-wrap'}><nav className="nav container" aria-label="Main navigation">
      <AppLink to="/" className="brand" onClick={() => setMenu(false)}><span>ali</span><i>/dev</i></AppLink>
      <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X size={18} /> : <Menu size={18} />}</button>
      <div className={menu ? 'nav-links open' : 'nav-links'}><AppLink to="/projects" onClick={() => setMenu(false)}>Projects</AppLink><AppLink to="/about" onClick={() => setMenu(false)}>About</AppLink><a href={`mailto:${EMAIL}`}>Contact</a><a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer"><Github size={14} /> AliAhmedsh</a></div>
    </nav></header>
    <main>{children}</main>
    <footer><div className="container footer-inner"><AppLink to="/" className="brand"><span>ali</span><i>/dev</i></AppLink><p>Designed & built by Ali Ahmed.</p><div><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={`mailto:${EMAIL}`}><Mail size={16} /> Email</a></div><p>© {new Date().getFullYear()}</p></div></footer>
  </div>
}

function ProjectCard({ project, onQuickView }: { project: Project; onQuickView: (project: Project) => void }) {
  return <article className="project-card"><button className="project-visual" onClick={() => onQuickView(project)} aria-label={`Quick view ${project.title}`}><img src={projectAsset(project.coverImage || project.media[0]?.url)} alt={`${project.title} interface`} loading="lazy" /><span className="quick-view">Quick view <ArrowUpRight size={15} /></span></button><div className="project-copy"><p className="eyebrow">{project.category} · {project.role}</p><div className="project-title-row"><h3>{project.title.split(' — ')[0]}</h3><AppLink to={`/projects/${project.id}`} aria-label={`View ${project.title}`}><ArrowRight size={18} /></AppLink></div><p>{project.shortDescription}</p><ul>{project.tech.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul></div></article>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); document.body.style.overflow = 'hidden'; window.addEventListener('keydown', close); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) } }, [onClose])
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="modal-close" onClick={onClose} aria-label="Close modal"><X size={19} /></button><div className="modal-visual"><img src={projectAsset(project.coverImage || project.media[0]?.url)} alt="" /></div><div className="modal-body"><p className="kicker">{project.category} / Quick review</p><h2 id="project-modal-title">{project.title}</h2><p>{project.fullDescription.split('\n\n')[0]}</p><div className="modal-meta"><span><small>Role</small>{project.role}</span>{project.duration && <span><small>Duration</small>{project.duration}</span>}<span><small>Stack</small>{project.tech.slice(0, 3).join(' · ')}</span></div><div className="modal-actions"><AppLink to={`/projects/${project.id}`} className="button primary">Full case study <ArrowRight size={16} /></AppLink>{project.websiteUrl && <a className="button ghost" href={project.websiteUrl} target="_blank" rel="noreferrer">Live product <ExternalLink size={15} /></a>}</div></div></section></div>
}

function CertificateModal({ index, onClose }: { index: number; onClose: () => void }) {
  const cert = certificates[index]
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); document.body.style.overflow = 'hidden'; window.addEventListener('keydown', close); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) } }, [onClose])
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><section className="modal certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title"><button className="modal-close dark" onClick={onClose} aria-label="Close certificate"><X size={19} /></button><div className="certificate-paper"><div className="cert-seal"><Award size={34} /></div><p>Certificate of Appreciation</p><h2 id="certificate-title">{cert.title}</h2><span>Presented to</span><h3>Ali Ahmed</h3><p>{cert.description}</p><div><strong>{cert.issuer}</strong><small>{cert.date} · {cert.code}</small></div></div></section></div>
}

function Home() {
  const [project, setProject] = useState<Project | null>(null), [certificate, setCertificate] = useState<number | null>(null)
  return <>
    <section className="hero compact-hero"><div className="hero-grid" /><div className="ambient ambient-one" /><div className="container hero-inner"><p className="hero-code"><span>~/portfolio</span> 01 / FULL-STACK DEVELOPER · LAHORE, PK</p><h1>Design-minded<br />developer for <em>real products.</em></h1><div className="hero-bottom"><p>I’m <strong>Ali Ahmed.</strong> I turn complex ideas into focused mobile apps, web experiences, and dependable systems—from first build to production.</p><div className="hero-actions"><AppLink className="button primary" to="/projects">Explore all work <ArrowRight size={16} /></AppLink><a className="button ghost" href={`mailto:${EMAIL}`}>Start a conversation</a></div></div><div className="signal-row"><span><MapPin size={14} /> Lahore · Remote worldwide</span><span><Braces size={14} /> React Native · React · Node</span><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={14} /> github.com/AliAhmedsh</a></div></div></section>
    <section className="capabilities section-pad"><div className="container section-intro"><p className="kicker">What I do / 02</p><h2>Product engineering,<br /><span>end to end.</span></h2><p>I work across the stack while keeping the interface, user journey, and product goal in view.</p></div><div className="container capability-grid">{capabilities.map(({icon: Icon, label, text}, i) => <article key={label}><div><span>0{i + 1}</span><Icon size={20} /></div><h3>{label}</h3><p>{text}</p></article>)}</div></section>
    <section className="work section-pad"><div className="container section-head"><div><p className="kicker">Selected work / 03</p><h2>Products I’ve helped<br /><span>bring to life.</span></h2></div><AppLink to="/projects">View all 8 projects <ArrowRight size={16} /></AppLink></div><div className="container projects-grid">{portfolioProjects.slice(0, 6).map(p => <ProjectCard key={p.id} project={p} onQuickView={setProject} />)}</div></section>
    <section className="recognition section-pad"><div className="container split-heading"><p className="kicker">Recognition / 04</p><div><h2>Work that earned<br /><span>recognition.</span></h2><div className="cert-grid">{certificates.map((cert, i) => <button key={cert.title} onClick={() => setCertificate(i)}><Award size={20} /><div><p>{cert.date}</p><h3>{cert.title}</h3><span>{cert.issuer}</span></div><ArrowUpRight size={17} /></button>)}</div></div></div></section>
    <section className="contact section-pad"><div className="ambient ambient-three" /><div className="container contact-inner"><p className="kicker">Open to building / 05</p><h2>Have something<br /><em>worth shipping?</em></h2><p>Let’s talk about the product, the hard parts, and what a strong first version looks like.</p><a className="button primary large" href={`mailto:${EMAIL}`}>{EMAIL} <Mail size={17} /></a></div></section>
    {project && <ProjectModal project={project} onClose={() => setProject(null)} />}{certificate !== null && <CertificateModal index={certificate} onClose={() => setCertificate(null)} />}
  </>
}

function ProjectsPage() {
  const [project, setProject] = useState<Project | null>(null), [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(portfolioProjects.map(item => item.category))]
  const visible = filter === 'All' ? portfolioProjects : portfolioProjects.filter(item => item.category === filter)
  return <><section className="page-hero"><div className="container"><p className="kicker">Project archive / 01—08</p><h1>Selected work.<br /><span>Full context.</span></h1><p>Eight products across mobile, web, health, education, marketplaces, communication, AI, and blockchain.</p><div className="filter-row">{categories.map(item => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div></section><section className="project-archive"><div className="container projects-grid">{visible.map(p => <ProjectCard key={p.id} project={p} onQuickView={setProject} />)}</div></section>{project && <ProjectModal project={project} onClose={() => setProject(null)} />}</>
}

function ProjectPage({ project }: { project: Project }) {
  const images = project.media.filter(item => item.type === 'image')
  const next = portfolioProjects[(portfolioProjects.indexOf(project) + 1) % portfolioProjects.length]
  return <><section className="case-hero"><div className="container"><AppLink to="/projects" className="back-link"><ArrowLeft size={15} /> All projects</AppLink><p className="kicker">{project.category} / Case study</p><h1>{project.title}</h1><p>{project.shortDescription}</p><div className="case-meta"><span><small>Role</small>{project.role}</span><span><small>Stack</small>{project.tech.slice(0, 4).join(' · ')}</span>{project.duration && <span><small>Duration</small>{project.duration}</span>}</div></div></section><section className="case-cover"><div className="container"><img src={projectAsset(project.coverImage || project.media[0]?.url)} alt={`${project.title} interface`} /></div></section><section className="case-content section-pad"><div className="container case-layout"><aside><p className="kicker">The product</p>{project.websiteUrl && <a href={project.websiteUrl} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={14} /></a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View release <ArrowUpRight size={14} /></a>}{project.appStoreUrl && <a href={project.appStoreUrl} target="_blank" rel="noreferrer">App Store <ArrowUpRight size={14} /></a>}</aside><div className="case-copy">{project.fullDescription.split('\n\n').map(p => <p key={p.slice(0, 24)}>{p}</p>)}<h2>What I delivered</h2><ul className="highlight-list">{project.highlights.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><h2>Technology</h2><div className="tech-list">{project.tech.map(item => <span key={item}>{item}</span>)}</div></div></div></section>{images.length > 1 && <section className="gallery section-pad"><div className="container"><p className="kicker">Product gallery</p><div>{images.map(image => <figure key={image.url}><img src={projectAsset(image.url)} alt={image.caption || project.title} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</div></div></section>}<section className="next-project"><div className="container"><p>Next project</p><AppLink to={`/projects/${next.id}`}>{next.title}<ArrowRight size={25} /></AppLink></div></section></>
}

function AboutPage() {
  const [certificate, setCertificate] = useState<number | null>(null)
  return <><section className="page-hero about-hero"><div className="container"><p className="kicker">About / Ali Ahmed</p><h1>Developer by craft.<br /><span>Product thinker by nature.</span></h1><p>I’m a full-stack developer based in Lahore, Pakistan. My strongest work lives where product thinking, interface craft, and dependable engineering meet.</p></div></section><section className="about-content section-pad"><div className="container split-heading"><p className="kicker">Experience / Timeline</p><div><div className="timeline"><article><p>2022 — Present</p><div><h3>Senior React Native Developer</h3><span>724.ONE TECH</span><p>Leading mobile product development from architecture to production release across iOS and Android.</p></div></article><article><p>2021 — 2022</p><div><h3>Content Writer</h3><span>MindBridge</span><p>Created technical content, product copy, and documentation—experience that still shapes how I design understandable software.</p></div></article></div><div className="toolkit"><p className="eyebrow">Working toolkit</p><div>{['React Native','React','TypeScript','Node.js','Firebase','Supabase','Stripe','OpenAI','REST APIs','Git'].map(t => <span key={t}>{t}</span>)}</div></div></div></div></section><section className="recognition section-pad"><div className="container split-heading"><p className="kicker">Certificates / Recognition</p><div><h2>Selected recognition.</h2><div className="cert-grid">{certificates.map((cert, i) => <button key={cert.title} onClick={() => setCertificate(i)}><Award size={20} /><div><p>{cert.date}</p><h3>{cert.title}</h3><span>Open certificate</span></div><ArrowUpRight size={17} /></button>)}</div></div></div></section>{certificate !== null && <CertificateModal index={certificate} onClose={() => setCertificate(null)} />}</>
}

function App() {
  const path = usePath(), project = useMemo(() => path.startsWith('/projects/') ? portfolioProjects.find(item => item.id === path.split('/')[2]) : undefined, [path])
  let page: React.ReactNode = <Home />
  if (project) page = <ProjectPage project={project} />; else if (path === '/projects') page = <ProjectsPage />; else if (path === '/about') page = <AboutPage />
  return <Shell>{page}</Shell>
}
export default App
