import { useState } from 'react'
import type { Profile } from '../types'
import { ArrowUpRight, DocumentIcon, GitHubIcon, LinkedInIcon, PinIcon } from '../components/Icons'

interface HomeProps {
  profile: Profile
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

function Portrait({ profile }: HomeProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
      {/* offset frame */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-coral/60" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-card shadow-[0_30px_60px_-30px_rgba(28,36,48,0.35)]">
        {failed ? (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-sage-soft via-card to-coral-soft">
            <span className="font-display text-7xl font-semibold tracking-tight text-ink/80">
              {initials(profile.name)}
            </span>
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}

export default function Home({ profile }: HomeProps) {
  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1 font-mono text-xs text-muted">
            <PinIcon className="h-3.5 w-3.5 text-coral" />
            {profile.location} · {profile.title}
          </p>

          <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Hi, I'm {first}
            <span className="text-coral">.</span>
            <span className="mt-3 block text-2xl font-normal text-muted sm:text-3xl">{rest.join(' ')}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-coral"
            >
              <DocumentIcon />
              View Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-card hover:text-ink"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-card hover:text-ink"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {profile.highlights.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink">{h.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <Portrait profile={profile} />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase md:flex"
      >
        Scroll
        <span className="h-10 w-px bg-linear-to-b from-muted to-transparent" />
      </a>
    </section>
  )
}
