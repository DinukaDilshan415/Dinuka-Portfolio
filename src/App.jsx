import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check,
  Code2, Cpu, ExternalLink, Github, Linkedin, Mail, Menu, MoveUpRight,
  Send, Sparkles, X, MapPin, Terminal, Globe, Layers3, Moon, Sun
} from 'lucide-react'
import { profile, projects, skillGroups, education, certifications } from './data'

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ number, children }) {
  return (
    <div className="section-label [display:flex] [align-items:center] [gap:13px] [color:#c4cbbf] [font:9px_var(--mono)] [letter-spacing:.14em]">
      <span className="section-number [color:var(--acid)]">{number}</span>
      <span>{children}</span>
      <span className="label-line [height:1px] [width:58px] [background:rgba(89,184,255,.45)] [margin-left:4px]" />
    </div>
  )
}

function Header({ active, setActive, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'],
    ['Journey', '#journey'], ['Contact', '#contact']
  ]

  useEffect(() => {
    const onScroll = () => {
      const ids = links.map(([, href]) => href.slice(1))
      const current = ids.findLast?.(id => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top <= 150
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [setActive])

  return (
    <header className="topbar [height:76px] [position:sticky] [top:0] [z-index:70] [display:flex] [align-items:center] [justify-content:space-between] [padding:0_max(6vw,_calc((100vw_-_1240px)_/_2))] [border-bottom:1px_solid_var(--line)] [background:rgba(7,18,31,.88)] [backdrop-filter:blur(18px)] max-[900px]:[padding-inline:6%] max-[680px]:[height:66px] max-[680px]:[padding-inline:6%]">
      <a href="#home" className="brand [display:inline-flex] [align-items:center] [gap:12px] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" aria-label="Dinuka home">
        <span className="brand-mark [display:grid] [place-items:center] [width:34px] [height:34px] [border:1px_solid_rgba(89,184,255,.6)] [color:var(--acid)] [font-size:20px] [font-weight:800] [letter-spacing:-2px]">D<span className="[color:var(--text)]">.</span></span>
        <span className="brand-name [font-family:var(--mono)] [font-size:10px] [letter-spacing:.11em] [font-weight:500] max-[680px]:[font-size:9px]">DINUKA<span className="[color:var(--muted)]"> / ENGINEER</span></span>
      </a>
      <nav className={open ? 'nav-links nav-open [display:flex] [align-items:center] [gap:clamp(18px,_2.6vw,_36px)] max-[680px]:[display:none] max-[680px]:absolute max-[680px]:[top:65px] max-[680px]:[left:0] max-[680px]:[right:0] max-[680px]:[padding:18px_6%_23px] max-[680px]:[background:var(--bg)] max-[680px]:[border-bottom:1px_solid_var(--line)] max-[680px]:[flex-direction:column] max-[680px]:[align-items:stretch] max-[680px]:[gap:0]' : 'nav-links [display:flex] [align-items:center] [gap:clamp(18px,_2.6vw,_36px)] max-[680px]:[display:none] max-[680px]:absolute max-[680px]:[top:65px] max-[680px]:[left:0] max-[680px]:[right:0] max-[680px]:[padding:18px_6%_23px] max-[680px]:[background:var(--bg)] max-[680px]:[border-bottom:1px_solid_var(--line)] max-[680px]:[flex-direction:column] max-[680px]:[align-items:stretch] max-[680px]:[gap:0]'} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} className={active === href.slice(1) ? 'nav-link active [color:#a5aca2] text-[11px] [transition:color_.2s] max-[680px]:[padding:14px_0] max-[680px]:[border-bottom:1px_solid_rgba(221,235,219,.07)] max-[680px]:[font-size:12px]' : 'nav-link [color:#a5aca2] text-[11px] [transition:color_.2s] max-[680px]:[padding:14px_0] max-[680px]:[border-bottom:1px_solid_rgba(221,235,219,.07)] max-[680px]:[font-size:12px]'}
            href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="theme-toggle [display:inline-flex] [align-items:center] [justify-content:center] [gap:7px] [padding:9px_10px] [color:var(--text)] [background:transparent] [border:1px_solid_var(--line)] [font-size:10px] [cursor:pointer] [transition:border-color_.2s,_color_.2s,_background_.2s] max-[680px]:[justify-content:flex-start] max-[680px]:[margin-top:15px] max-[680px]:[padding:12px] [-webkit-tap-highlight-color:transparent] [font:inherit]" type="button" onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          aria-pressed={theme === 'light'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
        </button>
        <a className="nav-cta [display:inline-flex] [align-items:center] [gap:8px] [padding:10px_14px] [color:var(--acid)] [border:1px_solid_rgba(89,184,255,.4)] text-[11px] [transition:background_.2s,_color_.2s] max-[680px]:[justify-content:space-between] max-[680px]:[margin-top:15px] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href="#contact" onClick={() => setOpen(false)}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button className="menu-toggle [display:none] [background:transparent] [color:var(--text)] [border:0] [padding:8px] max-[680px]:[display:inline-flex] max-[680px]:[align-items:center] max-[680px]:[justify-content:center] [-webkit-tap-highlight-color:transparent] [font:inherit]" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}

function ProjectVisual({ type }) {
  if (type === 'shop') return (
    <div className="project-art art-shop [height:245px] [position:relative] [overflow:hidden] [background:#151d15] max-[680px]:[height:225px] [background:radial-gradient(ellipse_at_70%_35%,_#32452b,_#172017_55%,_#101510)]">
      <div className="mock-browser absolute [top:29px] [left:7%] [right:7%] [height:27px] [border:1px_solid_#71826655] [display:flex] [align-items:center] [gap:5px] [padding:0_9px] [background:#10150f99]"><span  className="[width:4px] [height:4px] [background:#829676] [border-radius:50%]"/><span  className="[width:4px] [height:4px] [background:#829676] [border-radius:50%]"/><span  className="[width:4px] [height:4px] [background:#829676] [border-radius:50%]"/><i className="[font:8px_var(--mono)] [color:#a2b19a] [margin-left:12px] [font-style:normal]">techmart / products</i></div>
      <div className="shop-layout absolute [top:66px] [bottom:35px] [left:7%] [right:7%] [display:flex] [border:1px_solid_#71826655] [background:#0f140f]">
        <div className="shop-side [width:28%] [border-right:1px_solid_#71826633] [padding:15px_10px] [display:flex] [flex-direction:column] [gap:12px]"><b className="[font:8px_var(--mono)] [color:var(--acid)] [margin-bottom:9px]">TECHMART</b><span  className="[height:4px] [width:75%] [background:#65775a55]"/><span  className="[height:4px] [width:75%] [background:#65775a55]"/><span  className="[height:4px] [width:75%] [background:#65775a55]"/><span  className="[height:4px] [width:75%] [background:#65775a55]"/></div>
        <div className="shop-products [display:grid] [grid-template-columns:repeat(3,1fr)] [gap:7px] [padding:12px_9px] [flex:1]">
          <div className="product-tile [background:#1a2218] [border:1px_solid_#63785838] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:8px]"><div className="product-device laptop [position:relative] [border:1px_solid_#b7d39b] [box-shadow:0_0_18px_#a3e06b14] [width:37px] [height:24px] [border-radius:3px]" /><small className="[font:7px_var(--mono)] [color:#9aa791]">Laptop</small><b className="[font:8px_var(--mono)] [color:var(--acid)]">01</b></div>
          <div className="product-tile [background:#1a2218] [border:1px_solid_#63785838] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:8px]"><div className="product-device phone [position:relative] [border:1px_solid_#b7d39b] [box-shadow:0_0_18px_#a3e06b14] [width:17px] [height:31px] [border-radius:4px]" /><small className="[font:7px_var(--mono)] [color:#9aa791]">Smartphone</small><b className="[font:8px_var(--mono)] [color:var(--acid)]">02</b></div>
          <div className="product-tile [background:#1a2218] [border:1px_solid_#63785838] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:8px]"><div className="product-device headset [position:relative] [border:1px_solid_#b7d39b] [box-shadow:0_0_18px_#a3e06b14] [width:27px] [height:26px] [border-radius:15px_15px_6px_6px] [border-bottom:0]" /><small className="[font:7px_var(--mono)] [color:#9aa791]">Audio</small><b className="[font:8px_var(--mono)] [color:var(--acid)]">03</b></div>
        </div>
      </div>
      <div className="art-caption absolute [bottom:12px] [left:15px] [right:15px] [display:flex] [justify-content:space-between] [font:8px_var(--mono)] [letter-spacing:.12em] [color:#8b9a81]">ONLINE STORE <span className="[color:#62705b]">01 / 03</span></div>
    </div>
  )
  if (type === 'security') return (
    <div className="project-art art-security [height:245px] [position:relative] [overflow:hidden] [background:#151d15] max-[680px]:[height:225px] [background:radial-gradient(circle_at_30%_50%,_#263329,_#111712_65%)]">
      <div className="terminal-window absolute [width:64%] [left:7%] [top:15%] [border:1px_solid_#82927b55] [background:#0d120fdd] [box-shadow:15px_15px_0_#080b09aa] max-[900px]:[width:70%]">
        <div className="terminal-head [height:27px] [border-bottom:1px_solid_#82927b33] [display:flex] [align-items:center] [gap:5px] [padding:0_9px]"><span  className="[width:5px] [height:5px] [border-radius:50%] [background:#7e8f74]"/><span  className="[width:5px] [height:5px] [border-radius:50%] [background:#7e8f74]"/><span  className="[width:5px] [height:5px] [border-radius:50%] [background:#7e8f74]"/><small className="[font:7px_var(--mono)] [color:#84927c] [margin-left:9px]">security-config.java</small></div>
        <div className="terminal-code [padding:15px_10px]">
          <p className="[font:8px_var(--mono)] [color:#b6c5ae] [margin:0_0_12px] [white-space:nowrap]"><i className="[font-style:normal] [color:#566650] [padding-right:7px]">01</i> <b className="[color:var(--acid)]">@</b>ApplicationScoped</p>
          <p className="[font:8px_var(--mono)] [color:#b6c5ae] [margin:0_0_12px] [white-space:nowrap]"><i className="[font-style:normal] [color:#566650] [padding-right:7px]">02</i> <em className="[color:#b7d68e] [font-style:normal]">public class</em> AuthService {'{'}</p>
          <p className="[font:8px_var(--mono)] [color:#b6c5ae] [margin:0_0_12px] [white-space:nowrap]"><i className="[font-style:normal] [color:#566650] [padding-right:7px]">03</i> &nbsp; <strong className="[color:#d4b985] [font-weight:400]">validateIdentity</strong>();</p>
          <p className="[font:8px_var(--mono)] [color:#b6c5ae] [margin:0_0_12px] [white-space:nowrap]"><i className="[font-style:normal] [color:#566650] [padding-right:7px]">04</i> &nbsp; authorize(request);</p>
          <p className="[font:8px_var(--mono)] [color:#b6c5ae] [margin:0_0_12px] [white-space:nowrap]"><i className="[font-style:normal] [color:#566650] [padding-right:7px]">05</i> {'}'}</p>
        </div>
      </div>
      <div className="security-orbit absolute [right:7%] [top:28%] [width:110px] [height:110px] [border:1px_solid_#59b8ff30] [border-radius:50%] [display:grid] [place-items:center] max-[900px]:[transform:scale(.8)] max-[900px]:[right:2%]"><div className="[width:62px] [height:62px] [display:grid] [place-items:center] [border:1px_solid_#59b8ff60] [border-radius:50%] [color:var(--acid)] [background:#59b8ff12]"><Braces size={32}/></div><span  className="absolute [width:6px] [height:6px] [background:var(--acid)] [border-radius:50%] [top:9px] [right:15px] [box-shadow:0_0_13px_var(--acid)]"/><span  className="absolute [width:6px] [height:6px] [background:var(--acid)] [border-radius:50%] [top:9px] [right:15px] [box-shadow:0_0_13px_var(--acid)]"/></div>
      <div className="art-caption absolute [bottom:12px] [left:15px] [right:15px] [display:flex] [justify-content:space-between] [font:8px_var(--mono)] [letter-spacing:.12em] [color:#8b9a81]">SECURE BY DESIGN <span className="[color:#62705b]">02 / 03</span></div>
    </div>
  )
  return (
    <div className="project-art art-signal [height:245px] [position:relative] [overflow:hidden] [background:#151d15] max-[680px]:[height:225px] [background:radial-gradient(circle_at_center,_#243525,_#111712_70%)]">
      <div className="signal-grid absolute [inset:0] [opacity:.25] [background-image:linear-gradient(#7d9b6c22_1px,_transparent_1px),_linear-gradient(90deg,#7d9b6c22_1px,_transparent_1px)] [background-size:25px_25px]" />
      <div className="signal-center absolute z-2 [left:calc(50%_-_28px)] [top:calc(50%_-_28px)] [width:56px] [height:56px] [display:grid] [place-items:center] [background:var(--acid)] [color:var(--on-accent)] [border-radius:50%] [box-shadow:0_0_35px_#59b8ff40]"><Send size={34}/></div>
      <div className="signal-node node-a absolute z-2 [display:flex] [align-items:center] [gap:6px] [font:8px_var(--mono)] [color:#c4d4b9] [top:23%] [left:14%]"><span  className="[width:7px] [height:7px] [background:var(--green)] [border-radius:50%] [box-shadow:0_0_10px_#58dda590]"/><b>JMS</b></div>
      <div className="signal-node node-b absolute z-2 [display:flex] [align-items:center] [gap:6px] [font:8px_var(--mono)] [color:#c4d4b9] [top:23%] [right:14%]"><span  className="[width:7px] [height:7px] [background:var(--green)] [border-radius:50%] [box-shadow:0_0_10px_#58dda590]"/><b>EVENT</b></div>
      <div className="signal-node node-c absolute z-2 [display:flex] [align-items:center] [gap:6px] [font:8px_var(--mono)] [color:#c4d4b9] [bottom:20%] [left:calc(50%_-_27px)]"><span  className="[width:7px] [height:7px] [background:var(--green)] [border-radius:50%] [box-shadow:0_0_10px_#58dda590]"/><b>CLIENT</b></div>
      <svg className="signal-lines absolute [inset:0] [width:100%] [height:100%]" viewBox="0 0 500 250" aria-hidden="true">
        <path d="M250 125 L125 72 M250 125 L375 72 M250 125 L250 205"  className="[fill:none] [stroke:#59b8ff70] [stroke-width:1] [stroke-dasharray:4_4]"/>
      </svg>
      <div className="art-caption absolute [bottom:12px] [left:15px] [right:15px] [display:flex] [justify-content:space-between] [font:8px_var(--mono)] [letter-spacing:.12em] [color:#8b9a81]">EVENT-DRIVEN FLOW <span className="[color:#62705b]">03 / 03</span></div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal className={`project-card project-${index + 1} [background:var(--panel)] [border:1px_solid_var(--line)] [min-width:0] [overflow:hidden] [transition:border-color_.25s,_transform_.25s]`} delay={index * 0.08}>
      <ProjectVisual type={project.visual} />
      <div className="project-content [padding:23px] max-[900px]:[padding:19px] max-[680px]:[padding:20px]">
        <div className="project-meta [display:flex] [align-items:center] [justify-content:space-between] [gap:10px] [color:#7f8a78] [font:8px_var(--mono)] [letter-spacing:.08em] max-[390px]:[align-items:flex-start] max-[390px]:[flex-direction:column]"><span>{project.number} / SELECTED WORK</span><span className="project-status [display:inline-flex] [align-items:center] [gap:6px] [color:#a0ad95] [letter-spacing:0]"><i  className="[width:5px] [height:5px] [background:var(--acid)] [border-radius:50%]"/>{project.status}</span></div>
        <div className="project-title-row [display:flex] [justify-content:space-between] [align-items:center] [gap:12px] [margin-top:24px] max-[680px]:[margin-top:21px]">
          <div><p className="eyebrow [font-size:8px] [margin-bottom:7px] [color:#8a9b7e] [font:10px_var(--mono)] [color:var(--acid)] [letter-spacing:.14em] [margin:0_0_15px]">{project.category}</p><h3 className="max-[680px]:[font-size:20px] max-[900px]:[font-size:18px] [margin:0] [font-size:20px] [letter-spacing:-.045em]"  >{project.name}</h3></div>
          <a className="circle-link [display:grid] [place-items:center] [width:36px] [height:36px] [border:1px_solid_var(--line)] [color:var(--acid)] [flex-shrink:0] [transition:background_.2s,_color_.2s] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ArrowUpRight size={19}/></a>
        </div>
        <p className="project-description text-[#949e90] text-[11px] leading-[1.9] m-[16px_0]">{project.description}</p>
        <div className="tag-list [margin:18px_0_22px] [display:flex] [flex-wrap:wrap] [gap:7px]">{project.stack.map(tag => <span key={tag} className="[font:8px_var(--mono)] [color:#a6b19f] [background:#1a2119] [border:1px_solid_#dce9d214] [padding:6px_8px]">{tag}</span>)}</div>
        <div className="project-links [display:flex] [align-items:center] [gap:15px] [flex-wrap:wrap] [border-top:1px_solid_var(--line)] [padding-top:15px]">
          <a href={project.github} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:6px] [font-size:9px] [color:#d3dccd] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  ><Github size={15}/> Source code <ArrowUpRight size={14}/></a>
          {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:6px] [font-size:9px] [color:#d3dccd] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  >Live preview <ExternalLink size={14}/></a> : <span className="link-pending [font-size:9px] [color:#697464]">Add demo link when available</span>}
        </div>
      </div>
    </Reveal>
  )
}

function App() {
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })
  const [roleIndex, setRoleIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formError, setFormError] = useState('')
  const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver']

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(v => (v + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#07121f' : '#f3f8fc'
    )
  }, [theme])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const submitContact = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError('Please complete all three fields.')
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFormError('Your email app should open with the message ready to send.')
  }

  return (
    <>
      <div className="scroll-progress [position:fixed] [z-index:80] [left:0] [top:0] [height:2px] [width:100%] [transform-origin:left] [background:var(--acid)] [animation:scroll-progress_linear] [animation-timeline:scroll()]" />
      <Header active={active} setActive={setActive} theme={theme}
        onToggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <section className="hero section-wrap [min-height:min(800px,_calc(100vh_-_76px))] [min-height:max(690px,_calc(100svh_-_76px))] [position:relative] [display:grid] [grid-template-columns:1.12fr_.88fr] [align-items:center] [padding-top:70px] [padding-bottom:100px] [overflow:hidden] min-[1400px]:[min-height:800px] max-[900px]:[grid-template-columns:1fr_.78fr] max-[900px]:[gap:20px] max-[900px]:[min-height:690px] max-[680px]:[display:flex] max-[680px]:[flex-direction:column] max-[680px]:[align-items:stretch] max-[680px]:[padding-top:53px] max-[680px]:[padding-bottom:105px] max-[680px]:[min-height:0] max-[680px]:[gap:48px] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%]" id="home">
          <div className="hero-grid absolute [inset:0_-10vw] [pointer-events:none] [opacity:.19] [background-image:linear-gradient(rgba(151,190,220,.08)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(151,190,220,.08)_1px,_transparent_1px)] [background-size:62px_62px] [mask-image:linear-gradient(to_bottom,_transparent,_black_20%,_black_75%,_transparent)]" />
          <div className="hero-copy [position:relative] z-2 [padding-top:10px] max-[680px]:[padding-top:0]">
            <Reveal>
              <div className="availability [display:inline-flex] [align-items:center] [gap:9px] [font:9px_var(--mono)] [letter-spacing:.12em] [color:#c1c8bc] [border:1px_solid_var(--line)] [padding:10px_12px] [margin-bottom:48px] max-[680px]:[margin-bottom:31px] max-[680px]:[font-size:8px] max-[390px]:[letter-spacing:.04em] max-[390px]:[gap:7px]"><span className="pulse-dot [display:inline-block] [width:6px] [height:6px] [border-radius:50%] [background:var(--green)] [box-shadow:0_0_0_4px_rgba(88,221,165,.12)] [animation:pulse_2s_infinite]" /> OPEN TO OPPORTUNITIES <span className="availability-divider [color:#4d5948]">/</span> SRI LANKA</div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="hero-pretitle [font:10px_var(--mono)] [color:var(--acid)] [letter-spacing:.14em] [margin:0_0_15px]">HELLO, I'M</p>
              <h1 className="max-[680px]:[font-size:clamp(45px,_12vw,_68px)] max-[900px]:[font-size:clamp(43px,_6.5vw,_65px)] [font-size:clamp(43px,_6.1vw,_80px)] [line-height:1.02] [letter-spacing:-.075em] [font-weight:700] [margin:0]"  >Dinuka Dilshan<br/><span className="name-accent [color:var(--acid)]">Athapaththu<span className="name-period [color:#f1f2ec]">.</span></span></h1>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="role-line [display:flex] [align-items:center] [gap:10px] [margin-top:24px] [font:12px_var(--mono)] [color:#d6dfd1] [min-height:20px]"><span className="role-bracket [color:var(--acid)]">[</span><motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>{roles[roleIndex]}</motion.span><span className="role-bracket [color:var(--acid)]">]</span></div>
              <p className="hero-description [max-width:470px] [color:#9ca59a] [font-size:13px] [line-height:1.95] [margin:20px_0_28px] max-[680px]:[font-size:12px] max-[680px]:[max-width:100%]">{profile.intro} I build across the stack, combining solid engineering with a focus on the people using what I make.</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="hero-actions [display:flex] [align-items:center] [gap:13px] [flex-wrap:wrap] max-[390px]:[align-items:stretch] max-[390px]:[flex-direction:column]">
                <a className="button button-primary [display:inline-flex] [justify-content:center] [align-items:center] [gap:20px] [padding:14px_17px] text-[11px] [font-weight:700] [border:1px_solid_transparent] [transition:transform_.2s,_background_.2s,_border-color_.2s] [cursor:pointer] max-[390px]:[justify-content:space-between] [background:var(--acid)] [color:var(--on-accent)] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href="#projects">Explore my work <ArrowDownRight size={17}/></a>
                <a className="button button-quiet [display:inline-flex] [justify-content:center] [align-items:center] [gap:20px] [padding:14px_17px] text-[11px] [font-weight:700] [border:1px_solid_transparent] [transition:transform_.2s,_background_.2s,_border-color_.2s] [cursor:pointer] max-[390px]:[justify-content:space-between] [color:var(--text)] [border-color:var(--line)] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
              </div>
              <div className="hero-socials [display:flex] [align-items:center] [gap:20px] [margin-top:42px] [flex-wrap:wrap] max-[680px]:[margin-top:30px] max-[680px]:[gap:15px]">
                <a href={profile.github} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:7px] [font-size:10px] [color:#a8b0a5] [transition:color_.2s] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  ><Github size={16}/> GitHub <ArrowUpRight size={12}/></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:7px] [font-size:10px] [color:#a8b0a5] [transition:color_.2s] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  ><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a>
                <span className="social-separator [height:17px] [width:1px] [background:var(--line)]" />
                <span className="hero-location [display:inline-flex] [align-items:center] [gap:6px] [color:#828b7f] [font:9px_var(--mono)]"><MapPin size={14}/> Sri Lanka</span>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-visual [z-index:1] [position:relative] [justify-self:end] [width:min(100%,_440px)] [padding:30px_0_0_22px] max-[900px]:[width:100%] max-[900px]:[padding-left:8px] max-[680px]:[width:82%] max-[680px]:[max-width:380px] max-[680px]:[align-self:center] max-[680px]:[padding:0_0_0_9px] max-[390px]:[width:90%]" delay={0.2}>
            <div className="visual-index [margin:0_0_13px_6px] [display:flex] [justify-content:space-between] [color:#737e6f] [font:9px_var(--mono)] [letter-spacing:.13em]">PORTFOLIO / 2026</div>
            <div className="portrait-frame [height:445px] [position:relative] [overflow:hidden] [border:1px_solid_rgba(89,184,255,.3)] [background:linear-gradient(145deg,_#122d43,_#0d1b2b_50%,_#102b2d)] max-[900px]:[height:390px] max-[680px]:[height:350px]">
              <div className="portrait-orbit orbit-one absolute [border:1px_solid_rgba(89,184,255,.22)] [border-radius:50%] [left:50%] [top:45%] [transform:translate(-50%,-50%)_rotate(-20deg)] [width:330px] [height:210px]" /><div className="portrait-orbit orbit-two absolute [border:1px_solid_rgba(89,184,255,.22)] [border-radius:50%] [left:50%] [top:45%] [transform:translate(-50%,-50%)_rotate(-20deg)] [width:245px] [height:340px] [transform:translate(-50%,-50%)_rotate(34deg)]" />
              <div className="portrait-glow absolute [width:360px] [height:360px] [border-radius:50%] [top:8%] [left:12%] [background:radial-gradient(circle,_rgba(54,201,139,.2),_transparent_68%)]" />
              <div className="portrait-placeholder absolute [inset:0] [display:flex] [flex-direction:column] [justify-content:center] [align-items:center]">
                <div className="portrait-initials [font-size:185px] [font-weight:800] [letter-spacing:-.12em] [line-height:1] [color:rgba(222,240,211,.10)] [text-shadow:0_0_80px_rgba(89,184,255,.1)] max-[900px]:[font-size:150px] max-[680px]:[font-size:145px]">D<span className="[color:var(--acid)]">.</span></div>
                <div className="portrait-caption absolute [bottom:44px] [left:35px] [display:flex] [flex-direction:column] [font:10px_var(--mono)] [letter-spacing:.25em] [color:#8e9b86] [line-height:1.8] max-[680px]:[left:24px] max-[680px]:[bottom:30px]"><span>SOFTWARE</span><span>ENGINEER</span></div>
              </div>
              <div className="portrait-corner corner-tl absolute [width:20px] [height:20px] [border-color:var(--green)] [opacity:.9] [top:14px] [left:14px] [border-top:1px_solid] [border-left:1px_solid]" /><div className="portrait-corner corner-br absolute [width:20px] [height:20px] [border-color:var(--green)] [opacity:.9] [bottom:14px] [right:14px] [border-bottom:1px_solid] [border-right:1px_solid]" />
              <div className="floating-chip chip-code absolute [display:flex] [align-items:center] [gap:8px] [background:rgba(13,27,43,.94)] [border:1px_solid_rgba(89,184,255,.28)] [padding:11px_13px] [color:#dfe8d8] [font:10px_var(--mono)] [box-shadow:0_15px_45px_#0005] [animation:float_5s_ease-in-out_infinite] [top:24%] [left:-5px] max-[900px]:[left:-2px]"><Code2 size={15}/><span>Clean code</span></div>
              <div className="floating-chip chip-stack absolute [display:flex] [align-items:center] [gap:8px] [background:rgba(13,27,43,.94)] [border:1px_solid_rgba(89,184,255,.28)] [padding:11px_13px] [color:#dfe8d8] [font:10px_var(--mono)] [box-shadow:0_15px_45px_#0005] [animation:float_5s_ease-in-out_infinite] [bottom:20%] [right:-8px] [animation-delay:-2.5s] max-[900px]:[right:-3px]"><Layers3 size={15}/><span>Full stack</span></div>
            </div>
            <div className="visual-footer [margin-top:13px] [display:flex] [justify-content:space-between] [color:#737e6f] [font:9px_var(--mono)] [letter-spacing:.13em]"><span>BUILD WITH INTENTION</span><span>01 — 05</span></div>
          </Reveal>
          <a className="scroll-cue absolute [left:0] [bottom:27px] [display:flex] [align-items:center] [gap:12px] [font:9px_var(--mono)] [color:#8b9685] [letter-spacing:.12em] max-[680px]:[bottom:29px] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
          <div className="hero-coordinate absolute [right:0] [bottom:29px] [font:9px_var(--mono)] [color:#586154] [letter-spacing:.08em] max-[680px]:[bottom:30px] max-[680px]:[font-size:7px]">06°55' N&nbsp; 79°51' E</div>
        </section>

        <section className="about-section section-wrap section-space [border-top:1px_solid_var(--line)] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%] [padding-top:115px] [padding-bottom:115px] max-[680px]:[padding-top:82px] max-[680px]:[padding-bottom:82px]" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-layout [display:grid] [grid-template-columns:1fr_.83fr] [gap:10%] [padding-top:66px] max-[680px]:[padding-top:43px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px] max-[900px]:[gap:6%]">
            <Reveal className="about-heading [position:relative]">
              <h2 className="max-[680px]:[font-size:clamp(38px,_10vw,_54px)] [margin:0] [font-size:clamp(37px,_4.7vw,_62px)] [letter-spacing:-.07em] [line-height:1.1] [font-weight:650]" >Curious mind.<br/> <span>Practical builder.</span></h2>
              <div className="about-stamp [width:82px] [height:82px] [border:1px_solid_rgba(89,184,255,.45)] [border-radius:50%] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:5px] [color:var(--green)] [font:7px_var(--mono)] [line-height:1.5] [letter-spacing:.1em] [text-align:center] absolute [right:13%] [bottom:-32px] [transform:rotate(10deg)] max-[680px]:[width:68px] max-[680px]:[height:68px] max-[680px]:[right:0] max-[680px]:[bottom:-18px]"><Sparkles size={18}/><span>ALWAYS<br/>LEARNING</span></div>
            </Reveal>
            <Reveal className="about-copy [padding-top:2px]" delay={0.12}>
              {profile.about.map((paragraph, i) => <p key={i} className="[margin:0_0_19px] [color:#a0a89c] [font-size:12px] [line-height:2.05]">{paragraph}</p>)}
              <div className="about-facts [display:grid] [gap:14px] [margin:28px_0] [padding:21px_0] [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)]">
                <div className="[display:flex] [align-items:center] [gap:13px]"><span className="fact-icon [display:grid] [place-items:center] [width:37px] [height:37px] [border:1px_solid_var(--line)] [color:var(--acid)]"><Terminal size={17}/></span><span><b className="text-[11px] [font-weight:600] [margin-bottom:4px] [display:block]" >Engineering mindset</b><small className="[font-size:10px] [color:#828b7f] [display:block]" >Readable, maintainable solutions</small></span></div>
                <div className="[display:flex] [align-items:center] [gap:13px]"><span className="fact-icon [display:grid] [place-items:center] [width:37px] [height:37px] [border:1px_solid_var(--line)] [color:var(--acid)]"><Globe size={17}/></span><span><b className="text-[11px] [font-weight:600] [margin-bottom:4px] [display:block]" >End-to-end thinking</b><small className="[font-size:10px] [color:#828b7f] [display:block]" >From interface to infrastructure</small></span></div>
              </div>
              <a className="text-link [display:inline-flex] [align-items:center] [gap:10px] text-[11px] [color:var(--acid)] [border-bottom:1px_solid_rgba(89,184,255,.45)] [padding-bottom:7px] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]" href={profile.resume} target="_blank" rel="noreferrer">View my résumé <MoveUpRight size={15}/></a>
            </Reveal>
          </div>
        </section>

        <section className="skills-section section-wrap section-space [border-top:1px_solid_var(--line)] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%] [padding-top:115px] [padding-bottom:115px] max-[680px]:[padding-top:82px] max-[680px]:[padding-bottom:82px]" id="skills">
          <SectionLabel number="02">MY TOOLKIT</SectionLabel>
          <div className="section-heading-row [display:grid] [grid-template-columns:1fr_.6fr] [gap:10%] [align-items:end] [margin:55px_0_45px] max-[680px]:[margin:40px_0_31px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px]">
            <Reveal><h2 className="max-[680px]:[font-size:clamp(38px,_10vw,_54px)] [margin:0] [font-size:clamp(37px,_4.7vw,_62px)] [letter-spacing:-.07em] [line-height:1.1] [font-weight:650]" >Tools I use to<br/><span>make things work.</span></h2></Reveal>
            <Reveal delay={0.1}><p className="max-[680px]:text-[11px] [max-width:355px] [color:#959e91] [font-size:12px] [line-height:2] [margin:0_0_5px]" >A growing toolkit across languages, interfaces, backend systems, data, and deployment. The right tool depends on the problem.</p></Reveal>
          </div>
          <div className="skills-grid [display:grid] [grid-template-columns:repeat(3,_1fr)] [gap:12px] max-[680px]:[grid-template-columns:1fr_1fr] max-[680px]:[gap:9px] max-[390px]:[grid-template-columns:1fr]">
            {skillGroups.map((group, i) => (
              <Reveal className="skill-card [min-height:190px] [background:linear-gradient(135deg,_var(--panel-2),_var(--panel))] [border:1px_solid_var(--line)] [padding:23px] [transition:border-color_.25s,_transform_.25s,_background_.25s] max-[680px]:[min-height:180px] max-[680px]:[padding:17px] max-[390px]:[min-height:150px]" key={group.title} delay={i * 0.05}>
                <div className="skill-card-head [display:flex] [justify-content:space-between] [align-items:center] [margin-bottom:25px]"><span className="skill-index [font:9px_var(--mono)] [color:#66705f]">0{i + 1}</span><span className="skill-symbol [color:var(--acid)]">{[<Code2/>, <Layers3/>, <Braces/>, <Cpu/>, <Terminal/>, <Globe/>][i]}</span></div>
                <h3 className="max-[680px]:[font-size:12px] [font-size:14px] [margin:0_0_17px] [font-weight:600]" >{group.title}</h3>
                <div className="skill-tags max-[680px]:[gap:5px] [display:flex] [flex-wrap:wrap] [gap:7px]">{group.items.map(item => <span key={item} className="max-[680px]:[font-size:8px] max-[680px]:[padding:6px] [border:1px_solid_rgba(221,235,219,.1)] [color:#a8b1a2] [padding:6px_8px] [font:9px_var(--mono)]" >{item}</span>)}</div>
              </Reveal>
            ))}
          </div>
          <div className="skills-footnote [display:flex] [align-items:center] [gap:11px] [margin-top:24px] [color:#788272] [font:8px_var(--mono)] [letter-spacing:.12em]"><span className="pulse-dot [display:inline-block] [width:6px] [height:6px] [border-radius:50%] [background:var(--green)] [box-shadow:0_0_0_4px_rgba(88,221,165,.12)] [animation:pulse_2s_infinite] [width:5px] [height:5px]" /> CURRENTLY LEARNING, ALWAYS IMPROVING <span className="footnote-line [height:1px] [flex:1] [background:var(--line)]"/></div>
        </section>

        <section className="projects-section section-wrap section-space [border-top:1px_solid_var(--line)] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%] [padding-top:115px] [padding-bottom:115px] max-[680px]:[padding-top:82px] max-[680px]:[padding-bottom:82px]" id="projects">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading-row projects-heading [display:grid] [grid-template-columns:1fr_.6fr] [gap:10%] [align-items:end] [margin:55px_0_45px] max-[680px]:[margin:40px_0_31px] [margin-bottom:47px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px]">
            <Reveal><h2 className="max-[680px]:[font-size:clamp(38px,_10vw,_54px)] [margin:0] [font-size:clamp(37px,_4.7vw,_62px)] [letter-spacing:-.07em] [line-height:1.1] [font-weight:650]" >Less talk.<br/><span>More building.</span></h2></Reveal>
            <Reveal delay={0.1}><p className="max-[680px]:text-[11px] [max-width:355px] [color:#959e91] [font-size:12px] [line-height:2] [margin:0_0_5px]" >A selection of engineering work and explorations. Each project is an opportunity to learn, solve a real problem, and improve the craft.</p></Reveal>
          </div>
          <div className="projects-grid [display:grid] [grid-template-columns:1fr_1fr] [gap:17px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:13px]">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.number}/>)}</div>
          <div className="all-projects [display:flex] [justify-content:space-between] [align-items:center] [margin-top:24px] [padding-top:18px] [border-top:1px_solid_var(--line)] [font:8px_var(--mono)] [letter-spacing:.1em] [color:#788272] max-[680px]:[align-items:flex-start] max-[680px]:[gap:15px] max-[680px]:[flex-direction:column]"><span>MORE WORK IS ON THE WAY</span><a href={profile.github} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:8px] [font:10px_'Manrope',_sans-serif] [color:var(--acid)] [letter-spacing:0] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  >Explore GitHub <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="journey-section section-wrap section-space [border-top:1px_solid_var(--line)] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%] [padding-top:115px] [padding-bottom:115px] max-[680px]:[padding-top:82px] max-[680px]:[padding-bottom:82px]" id="journey">
          <SectionLabel number="04">THE JOURNEY</SectionLabel>
          <div className="section-heading-row [display:grid] [grid-template-columns:1fr_.6fr] [gap:10%] [align-items:end] [margin:55px_0_45px] max-[680px]:[margin:40px_0_31px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px]">
            <Reveal><h2 className="max-[680px]:[font-size:clamp(38px,_10vw,_54px)] [margin:0] [font-size:clamp(37px,_4.7vw,_62px)] [letter-spacing:-.07em] [line-height:1.1] [font-weight:650]" >Learning by<br/><span>doing.</span></h2></Reveal>
            <Reveal delay={0.1}><p className="max-[680px]:text-[11px] [max-width:355px] [color:#959e91] [font-size:12px] [line-height:2] [margin:0_0_5px]" >Good engineering comes from curiosity, practice, collaboration, and the willingness to keep getting better.</p></Reveal>
          </div>
          <div className="journey-content [display:grid] [grid-template-columns:1fr_1fr] [gap:15px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px]">
            <Reveal className="journey-card max-[680px]:[padding:22px] [border:1px_solid_var(--line)] [background:var(--panel)] [padding:28px] [position:relative] [overflow:hidden]">
              <div className="journey-card-top [display:flex] [align-items:center] [gap:10px]"><span className="timeline-dot [width:7px] [height:7px] [background:var(--green)] [border-radius:50%] [box-shadow:0_0_0_5px_#58dda51a]"/><span className="mono [font:9px_var(--mono)] [color:#a3ae9b] [letter-spacing:.12em]">EDUCATION / 01</span><span className="journey-rule [height:1px] [flex:1] [background:var(--line)]"/></div>
              {education.map((item, i) => (
                <div className="education-entry [margin:40px_0_0_17px] [padding-left:22px] [border-left:1px_solid_rgba(88,221,165,.35)]" key={i}>
                  <p className="eyebrow [font-size:8px] [color:#94a58a] [font:10px_var(--mono)] [color:var(--acid)] [letter-spacing:.14em] [margin:0_0_15px]">{item.period}</p>
                  <h3 className="[margin:0_0_7px] [font-size:18px] [letter-spacing:-.04em]">{item.qualification}</h3>
                  <p className="education-institution [color:var(--acid)] text-[11px] [margin:0_0_14px]">{item.institution}</p>
                  <p className="education-detail [color:#929c8d] [font-size:10px] [line-height:1.8] [margin:0]">{item.detail}</p>
                </div>
              ))}
              <div className="certifications-block [margin:34px_0_0_17px] [padding-left:22px] [border-left:1px_solid_rgba(88,221,165,.3)]">
                <div className="certifications-heading [display:flex] [align-items:center] [gap:10px] [margin-bottom:25px]"><span className="timeline-dot [width:7px] [height:7px] [background:var(--green)] [border-radius:50%] [box-shadow:0_0_0_5px_#58dda51a] [width:6px] [height:6px]"/><span className="mono [font:9px_var(--mono)] [color:#a3ae9b] [letter-spacing:.12em]">CERTIFICATIONS / 02</span></div>
                {certifications.map((item, i) => (
                  <div className="certification-entry [padding:0_0_22px]" key={item.id}>
                    <p className="eyebrow [font-size:8px] [color:#94a58a] [margin-bottom:8px] [font:10px_var(--mono)] [color:var(--acid)] [letter-spacing:.14em] [margin:0_0_15px]">{item.issued}</p>
                    <h3 className="[margin:0_0_7px] [font-size:14px] [line-height:1.55] [letter-spacing:-.025em]">{item.credential}</h3>
                    <p className="education-institution [color:var(--acid)] text-[11px] [margin:0_0_14px]">{item.issuer}</p>
                    <p className="credential-id [margin:0] [color:#737e6d] [font:8px_var(--mono)] [overflow-wrap:anywhere]">Credential ID: <code className="[color:#a5b39a]">{item.id}</code></p>
                  </div>
                ))}
              </div>
              <p className="edit-note [color:#596454] [font:8px_var(--mono)] [margin:27px_0_0]">Education and certification details are stored in <code className="[color:#87947e]">src/data.js</code>.</p>
            </Reveal>
            <Reveal className="journey-note [min-height:310px] [display:flex] [flex-direction:column] [justify-content:center] [background:radial-gradient(ellipse_at_80%_90%,_#123747,_var(--panel)_60%)] max-[680px]:[min-height:270px] max-[680px]:[padding:22px] [border:1px_solid_var(--line)] [background:var(--panel)] [padding:28px] [position:relative] [overflow:hidden]" delay={0.1}>
              <div className="note-mark [font-family:Georgia,_serif] [color:var(--acid)] [font-size:68px] [line-height:.8]">“</div>
              <blockquote className="[position:relative] [z-index:1] [margin:18px_0_30px] [max-width:360px] [font-size:clamp(20px,_2.2vw,_27px)] [font-weight:500] [line-height:1.5] [letter-spacing:-.045em]">Build things that are useful. Make them understandable. Keep learning how to make them better.</blockquote>
              <div className="note-signature [display:flex] [align-items:center] [gap:10px] [color:#8d9984] [font:8px_var(--mono)] [letter-spacing:.1em]"><span className="signature-line [height:1px] [width:27px] [background:var(--acid)]"/> MY ENGINEERING PRINCIPLE</div>
              <div className="note-decoration absolute [right:-4px] [bottom:-14px] [color:#58dda512] [transform:rotate(-12deg)]"><Braces size={76} strokeWidth={0.7}/></div>
            </Reveal>
          </div>
        </section>

        <section className="contact-section section-wrap section-space [border-top:1px_solid_var(--line)] [padding-bottom:125px] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%] [padding-top:115px] [padding-bottom:115px] max-[680px]:[padding-top:82px] max-[680px]:[padding-bottom:82px]" id="contact">
          <SectionLabel number="05">LET'S CONNECT</SectionLabel>
          <div className="contact-layout [display:grid] [grid-template-columns:1fr_.8fr] [gap:12%] [padding-top:60px] max-[680px]:[padding-top:42px] max-[680px]:[gap:36px] max-[680px]:[grid-template-columns:1fr] max-[680px]:[gap:28px] max-[900px]:[gap:6%]">
            <Reveal className="contact-intro">
              <p className="eyebrow [font-size:9px] [margin-bottom:20px] [font:10px_var(--mono)] [color:var(--acid)] [letter-spacing:.14em] [margin:0_0_15px]">HAVE A PROJECT IN MIND?</p>
              <h2 className="max-[680px]:[font-size:clamp(45px,_11vw,_62px)] max-[680px]:[font-size:clamp(38px,_10vw,_54px)] [font-size:clamp(43px,_5.3vw,_69px)] [margin:0] [font-size:clamp(37px,_4.7vw,_62px)] [letter-spacing:-.07em] [line-height:1.1] [font-weight:650]"   >Let's build<br/><span>something good.</span></h2>
              <p className="contact-description [max-width:390px] [color:#9aa496] [font-size:12px] [line-height:2] [margin:25px_0]">Open to interesting projects, collaborations, and opportunities to grow as an engineer. If you have an idea or just want to say hello, my inbox is open.</p>
              <button className="email-copy [display:inline-flex] [align-items:center] [gap:12px] [background:transparent] [color:#d9e2d3] [border:1px_solid_var(--line)] [padding:13px_15px] text-[11px] [cursor:pointer] [transition:border-color_.2s] [max-width:100%] [-webkit-tap-highlight-color:transparent] [font:inherit]" onClick={copyEmail}><Mail size={17}/><span className="[overflow-wrap:anywhere]">{profile.email}</span>{copied ? <Check size={16}/> : <ArrowUpRight size={16}/>}</button>
              <div className="contact-socials [display:flex] [gap:20px] [margin-top:24px]">
                <a href={profile.github} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:7px] [font-size:10px] [color:#a8b0a5] [transition:color_.2s] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  ><Github size={16}/> GitHub <ArrowUpRight size={13}/></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="[display:inline-flex] [align-items:center] [gap:7px] [font-size:10px] [color:#a8b0a5] [transition:color_.2s] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"  ><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a>
              </div>
            </Reveal>
            <Reveal className="contact-form-wrap [min-width:0]" delay={0.12}>
              <form className="contact-form [background:var(--panel)] [border:1px_solid_var(--line)] [padding:26px] max-[680px]:[padding:20px]" onSubmit={submitContact}>
                <div className="form-heading [display:flex] [justify-content:space-between] [align-items:center] [padding-bottom:20px] [margin-bottom:20px] [border-bottom:1px_solid_var(--line)] [color:#9da995] [font:9px_var(--mono)] [letter-spacing:.12em]"><span>01 / SEND A MESSAGE</span><Send size={17}/></div>
                <label className="[display:block] [color:#aeb8a7] [font-size:10px] [margin-bottom:17px]">Your name<input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="What should I call you?"  className="[display:block] [width:100%] [margin-top:9px] [border:1px_solid_var(--line)] [background:var(--bg)] [color:var(--text)] [padding:12px] text-[11px] [resize:vertical] [transition:border-color_.2s] [border-radius:0] [font:inherit]" /></label>
                <label className="[display:block] [color:#aeb8a7] [font-size:10px] [margin-bottom:17px]">Your email<input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com"  className="[display:block] [width:100%] [margin-top:9px] [border:1px_solid_var(--line)] [background:var(--bg)] [color:var(--text)] [padding:12px] text-[11px] [resize:vertical] [transition:border-color_.2s] [border-radius:0] [font:inherit]" /></label>
                <label className="[display:block] [color:#aeb8a7] [font-size:10px] [margin-bottom:17px]">What's on your mind?<textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about it..." rows="4" className="[display:block] [width:100%] [margin-top:9px] [border:1px_solid_var(--line)] [background:var(--bg)] [color:var(--text)] [padding:12px] text-[11px] [resize:vertical] [transition:border-color_.2s] [border-radius:0] [font:inherit]" /></label>
                {formError && <p className="form-feedback [font-size:10px] [color:var(--acid)] [line-height:1.6]" role="status">{formError}</p>}
                <button className="button button-primary form-submit [display:inline-flex] [justify-content:center] [align-items:center] [gap:20px] [padding:14px_17px] text-[11px] [font-weight:700] [border:1px_solid_transparent] [transition:transform_.2s,_background_.2s,_border-color_.2s] [cursor:pointer] max-[390px]:[justify-content:space-between] [background:var(--acid)] [color:var(--on-accent)] [width:100%] [justify-content:space-between] [margin-top:3px] [-webkit-tap-highlight-color:transparent] [font:inherit]" type="submit">Prepare email <ArrowUpRight size={16}/></button>
                <p className="form-note [color:#687363] [font-size:9px] [line-height:1.6] [margin:14px_0_0]">This opens your email app—no messages are stored on this website.</p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap [display:flex] [align-items:center] [justify-content:space-between] [gap:18px] [padding-top:22px] [padding-bottom:25px] [border-top:1px_solid_var(--line)] max-[680px]:[flex-wrap:wrap] [width:min(1120px,_88%)] [margin-inline:auto] max-[900px]:[width:88%] max-[680px]:[width:88%]">
        <a href="#home" className="footer-brand [display:flex] [align-items:center] [gap:11px] [color:#9da795] [font:8px_var(--mono)] [letter-spacing:.08em] max-[390px]:[font-size:7px] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]"><span className="brand-mark [display:grid] [place-items:center] [width:34px] [height:34px] [border:1px_solid_rgba(89,184,255,.6)] [color:var(--acid)] [font-size:20px] [font-weight:800] [letter-spacing:-2px] [width:28px] [height:28px] [font-size:16px]">D<span className="[color:var(--text)]">.</span></span><span>DESIGNED & BUILT BY DINUKA</span></a>
        <span className="footer-middle max-[680px]:[order:3] max-[680px]:[width:100%] [color:#687363] [font:8px_var(--mono)] [letter-spacing:.08em]">© {new Date().getFullYear()} / MADE WITH CURIOSITY</span>
        <a href="#home" className="back-top [display:flex] [align-items:center] [gap:7px] [color:#a9b49f] [color:#687363] [font:8px_var(--mono)] [letter-spacing:.08em] [-webkit-tap-highlight-color:transparent] [color:inherit] [text-decoration:none]">BACK TO TOP <ArrowUpRight size={14}/></a>
      </footer>
    </>
  )
}

export default App
