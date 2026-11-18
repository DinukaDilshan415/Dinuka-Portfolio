import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { NavItem, SectionId } from '../types'

interface NavbarProps {
  items: NavItem[]
  active: SectionId
  brand: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ items, active, brand, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line/80 bg-paper/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm text-paper transition-colors group-hover:bg-coral">
            {brand.charAt(0)}
          </span>
          <span>
            {brand}
            <span className="text-coral">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                aria-current={active === item.id ? 'page' : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-coral transition-opacity ${
                    active === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-card"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4 sm:px-8">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === item.id ? 'bg-card text-ink' : 'text-muted'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
