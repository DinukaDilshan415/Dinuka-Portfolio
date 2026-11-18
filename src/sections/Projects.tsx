import type { Project, ProjectVisual } from '../types'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight, GitHubIcon } from '../components/Icons'

interface ProjectsProps {
  items: Project[]
  previewLimit?: number
  viewAllTo?: string
}

/** Simple illustrated mock-ups, so each project has a visual without needing screenshots. */
function ProjectArt({ visual }: { visual: ProjectVisual }) {
  if (visual === 'shop') {
    return (
      <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
        <rect x="20" y="20" width="280" height="180" rx="14" fill="var(--color-card)" stroke="var(--color-line)" />
        <circle cx="38" cy="36" r="4" fill="var(--color-coral)" />
        <circle cx="52" cy="36" r="4" fill="var(--color-line)" />
        <circle cx="66" cy="36" r="4" fill="var(--color-line)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${40 + i * 86} 62)`}>
            <rect width="70" height="70" rx="10" fill={i === 1 ? 'var(--color-coral-soft)' : 'var(--color-sage-soft)'} />
            <rect y="80" width="50" height="6" rx="3" fill="var(--color-ink)" opacity="0.7" />
            <rect y="92" width="32" height="6" rx="3" fill="var(--color-coral)" />
          </g>
        ))}
        <g transform="translate(252 150)">
          <circle r="18" fill="var(--color-ink)" />
          <path d="M-8 -4h16l-2 10h-12z" fill="none" stroke="var(--color-paper)" strokeWidth="2" strokeLinejoin="round" />
        </g>
      </svg>
    )
  }
  if (visual === 'mobile') {
    return (
      <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
        <rect x="115" y="15" width="90" height="190" rx="18" fill="var(--color-card)" stroke="var(--color-line)" />
        <rect x="130" y="40" width="60" height="40" rx="8" fill="var(--color-sage-soft)" />
        <rect x="130" y="92" width="60" height="8" rx="4" fill="var(--color-ink)" opacity="0.7" />
        <rect x="130" y="108" width="40" height="8" rx="4" fill="var(--color-coral)" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden="true">
      <rect x="30" y="40" width="260" height="140" rx="14" fill="var(--terminal-bg)" />
      <text x="50" y="80" fill="var(--color-coral)" fontFamily="monospace" fontSize="14">GET /api/v1</text>
      <text x="50" y="110" fill="var(--terminal-text)" fontFamily="monospace" fontSize="14">200 OK</text>
    </svg>
  )
}

export default function Projects({ items, previewLimit, viewAllTo }: ProjectsProps) {
  const displayedItems = previewLimit === undefined ? items : items.slice(0, previewLimit)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading
            index="05"
            eyebrow="Projects"
            title="Selected work"
            description="Things I've designed and built end to end."
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

        <div className="space-y-10">
          {displayedItems.map((project, i) => (
            <article
              key={project.name}
              className="reveal group grid overflow-hidden rounded-3xl border border-line bg-card/80 lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[16/11] bg-gradient-to-br from-sage-soft/70 to-coral-soft/60 p-6 ${
                  i % 2 ? 'lg:order-2' : ''
                }`}
              >
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                  <ProjectArt visual={project.visual} />
                </div>
              </div>

              <div className="flex flex-col p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-semibold text-line">{project.number}</span>
                  <span className="rounded-full bg-coral-soft px-3 py-1 text-[11px] font-medium text-coral">
                    {project.status}
                  </span>
                </div>
                <p className="mt-6 font-mono text-xs tracking-wider text-muted uppercase">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{project.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-ink">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
                  >
                    <GitHubIcon /> Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-coral"
                    >
                      Live demo <ArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
