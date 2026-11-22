import type { ExperienceItem } from '../types'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight } from '../components/Icons'

interface ExperienceProps {
  items: ExperienceItem[]
  previewLimit?: number
  viewAllTo?: string
}

export default function Experience({ items, previewLimit, viewAllTo }: ExperienceProps) {
  const displayedItems = previewLimit === undefined ? items : items.slice(0, previewLimit)

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title="What I've been working on"
            description="Hands-on IT support, systems troubleshooting, and software development."
          />
          {viewAllTo && (
            <Link
              to={viewAllTo}
              className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-coral"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="space-y-6">
          {displayedItems.map((item) => (
            <article
              key={item.role + item.organisation}
              className="reveal grid gap-6 rounded-3xl border border-line bg-card/70 p-7 transition-colors hover:border-sage/60 md:grid-cols-[14rem_1fr] md:p-9"
            >
              <div>
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <span className="mt-3 inline-block rounded-full bg-sage-soft px-2.5 py-0.5 text-[11px] font-medium text-sage">
                  {item.type}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-coral">{item.organisation}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-coral/70" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <li key={tool} className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-muted">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
