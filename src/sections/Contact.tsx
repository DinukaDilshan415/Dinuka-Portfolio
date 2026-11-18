import { useState, type FormEvent, type ReactNode } from 'react'
import type { Profile, SocialLink } from '../types'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons'

interface ContactProps {
  profile: Profile
}

export default function Contact({ profile }: ContactProps) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const links: (SocialLink & { icon: ReactNode })[] = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: <MailIcon className="h-5 w-5" /> },
    { label: 'GitHub', href: profile.github, icon: <GitHubIcon className="h-5 w-5" /> },
    { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedInIcon className="h-5 w-5" /> }
  ]

  // No backend needed: opens the visitor's email app with the message pre-filled.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${name || 'your website'}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-coral focus:outline-none'

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="07" eyebrow="Contact" title="Let's work together." />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Have a role, a project, or just want to say hello? My inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-display text-xl font-semibold break-all text-ink underline decoration-coral decoration-2 underline-offset-8 transition-colors hover:text-coral sm:text-2xl"
            >
              {profile.email}
            </a>

            <ul className="mt-10 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-line bg-card/70 px-5 py-4 transition-colors hover:border-ink"
                  >
                    <span className="flex items-center gap-3 text-ink">
                      {link.icon}
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-coral" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="reveal space-y-4 rounded-3xl border border-line bg-card/80 p-7 sm:p-9">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                className={field}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a little about your idea…"
                className={`${field} resize-none`}
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-coral"
            >
              Send message <ArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
