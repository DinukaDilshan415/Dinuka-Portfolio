import type { Profile } from '../types'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'

interface AboutProps {
  profile: Profile
}

const values = [
  {
    code: 'HW',
    title: 'Hardware support',
    short: 'Build, upgrade and diagnose',
    text: 'PC and laptop assembly, component upgrades, preventive maintenance, driver checks, performance diagnosis, and hardware fault resolution.'
  },
  {
    code: 'SYS',
    title: 'Systems & networking',
    short: 'Configure and connect',
    text: 'Windows installation and configuration, Microsoft Office, updates and user settings, LAN and Wi-Fi setup, router configuration, and IP and connectivity troubleshooting.'
  },
  {
    code: 'SE',
    title: 'Software engineering',
    short: 'From interface to database',
    text: 'React, Java, JavaScript and TypeScript development with Spring Boot, REST APIs, relational databases, Git, Docker, cloud services, and structured application architecture.'
  },
  {
    code: 'UX',
    title: 'Clear communication',
    short: 'Explain and support',
    text: 'Patient, practical support for non-technical users, with clear explanations of technical issues, next steps, and solutions that are easy to understand and apply.'
  }
]

export default function About({ profile }: AboutProps) {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="A little about me" />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="font-display text-xl text-ink">
              Based in {profile.location}. {profile.availability}.
            </p>
          </div>

          <div className="reveal grid min-h-97.5 grid-cols-[150px_1fr] items-center gap-3 sm:grid-cols-[210px_1fr] sm:gap-6">
            <div className="relative mx-auto h-37.5 w-37.5 shrink-0 sm:h-52.5 sm:w-52.5" aria-label="Skill categories">
              <div className="absolute inset-[26%] z-10 grid place-items-center rounded-full border border-coral/40 bg-ink shadow-[0_12px_40px_-18px_rgba(236,104,82,0.8)]">
                <div className="text-center">
                  <span className="block font-mono text-[9px] tracking-[0.2em] text-coral uppercase">Core</span>
                  <span className="font-display text-lg font-semibold text-paper sm:text-2xl">SE</span>
                </div>
              </div>

              {values.map((value, i) => {
                const positions = [
                  'left-1/2 top-0 -translate-x-1/2',
                  'right-0 top-1/2 -translate-y-1/2',
                  'bottom-0 left-1/2 -translate-x-1/2',
                  'left-0 top-1/2 -translate-y-1/2'
                ]
                const activeStyles = i === activeValue
                  ? 'scale-110 border-coral bg-coral text-paper shadow-[0_10px_28px_-12px_rgba(236,104,82,0.9)]'
                  : 'border-line bg-card/95 text-ink hover:border-coral/60'

                return (
                  <button
                    key={value.code}
                    type="button"
                    onMouseEnter={() => setActiveValue(i)}
                    onFocus={() => setActiveValue(i)}
                    onClick={() => setActiveValue(i)}
                    className={`absolute z-20 grid h-12 w-12 place-items-center rounded-[42%_58%_48%_52%] border font-mono text-[10px] font-semibold transition-all duration-300 sm:h-14 sm:w-14 sm:text-xs ${positions[i]} ${activeStyles}`}
                    aria-label={`Show details for ${value.title}`}
                    aria-pressed={i === activeValue}
                  >
                    {value.code}
                  </button>
                )
              })}

              <div className="absolute inset-[18%] rotate-45 rounded-[38%] border border-dashed border-coral/25" />
              <div className="absolute inset-[8%] rounded-full border border-line/70" />
            </div>

            <div className="relative h-80 overflow-hidden" aria-live="polite">
              {values.map((value, i) => (
                <article
                  key={value.code}
                  className={`absolute inset-x-0 border-l border-coral/30 pl-4 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] sm:pl-6 ${
                    i === activeValue
                      ? 'top-0 h-55 translate-x-0 opacity-100'
                      : i < activeValue
                        ? 'top-[calc(220px+var(--closed-index)*52px)] h-10 translate-x-3 opacity-0'
                        : 'h-10 translate-x-0 opacity-55'
                  }`}
                  style={{
                    top: i === activeValue ? '0px' : `${220 + i * 24}px`
                  }}
                >
                  {i === activeValue ? (
                    <div className="h-full">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-coral uppercase">0{i + 1} / 0{values.length}</p>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">{value.title}</h3>
                      <p className="mt-2 font-mono text-xs text-coral">{value.short}</p>
                      <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">{value.text}</p>
                      <div className="mt-6 h-px w-full origin-left scale-x-100 bg-linear-to-r from-coral to-transparent" />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onMouseEnter={() => setActiveValue(i)}
                      onFocus={() => setActiveValue(i)}
                      onClick={() => setActiveValue(i)}
                      className="flex w-full items-center justify-between py-2 text-left"
                      aria-label={`Expand ${value.title}`}
                    >
                      <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
                      <span className="text-xs font-medium text-ink">{value.title}</span>
                      <span className="h-px w-8 bg-line" />
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
