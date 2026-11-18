import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import { SiFacebook, SiInstagram, SiWhatsapp, SiX, SiYoutube } from 'react-icons/si'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import { CertificateIcon } from './components/Icons'
import Navbar from './components/Navbar'
import About from './sections/About'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { certifications, education, experience, navItems, profile, projects, skillGroups } from './data'
import { useActiveSection, useReveal } from './hooks'
import type { FooterSocialPlatform, SectionId } from './types'

const sectionIds: SectionId[] = navItems.map((item) => item.id)
const socialIcons: Record<FooterSocialPlatform, IconType> = {
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  WhatsApp: SiWhatsapp,
  YouTube: SiYoutube,
  X: SiX
}

function HomePage() {
  return (
    <>
      <Home profile={profile} />
      <About profile={profile} />
      <Education items={education} />
      <Certifications items={certifications} previewLimit={2} viewAllTo="/certifications" />
      <Experience items={experience} previewLimit={2} viewAllTo="/experience" />
      <Projects items={projects} previewLimit={2} viewAllTo="/projects" />
      <Skills groups={skillGroups} />
      <Contact profile={profile} />
    </>
  )
}

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 text-center sm:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink">Page not found</h1>
      <Link to="/" className="mt-5 inline-flex text-coral hover:underline">
        Return home
      </Link>
    </section>
  )
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  })
  const location = useLocation()

  useReveal(location.pathname)
  const activeSection = useActiveSection(sectionIds, location.pathname)
  const active =
    location.pathname === '/'
      ? activeSection
      : navItems.find((item) => item.to === location.pathname)?.id ?? activeSection

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)

    const timeout = window.setTimeout(() => root.classList.remove('theme-transition'), 350)
    return () => window.clearTimeout(timeout)
  }, [theme])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition')
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Background />
      <CustomCursor />
      <Navbar items={navItems} active={active} brand={profile.shortName} theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative z-[1]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<Certifications items={certifications} />} />
          <Route path="/experience" element={<Experience items={experience} />} />
          <Route path="/projects" element={<Projects items={projects} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="relative z-[1] border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/certifications"
              className="inline-flex items-center gap-2 transition-colors hover:text-coral"
            >
              <CertificateIcon className="h-4 w-4" />
              Certifications
            </Link>
            <nav aria-label="Social media">
              <ul className="flex items-center gap-2">
                {profile.socialLinks.map((social) => {
                  const Icon = socialIcons[social.label]

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-card hover:text-coral"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}
