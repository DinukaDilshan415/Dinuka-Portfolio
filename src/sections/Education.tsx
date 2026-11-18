import type { EducationItem, EducationKind } from '../types'
import SectionHeading from '../components/SectionHeading'

interface EducationProps {
  items: EducationItem[]
}

const kindStyle: Record<EducationKind, { label: string; className: string }> = {
  degree: { label: 'Degree', className: 'bg-ink text-paper' },
  diploma: { label: 'Diploma', className: 'bg-coral-soft text-coral' },
  school: { label: 'School', className: 'bg-sage-soft text-sage' }
}

export default function Education({ items }: EducationProps) {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Education"
          title="Where I've learned"
          description="My degree, professional diplomas, and the school that shaped my foundations."
        />

        <ol className="relative ml-2 border-l border-line">
          {items.map((item) => {
            const kind = kindStyle[item.kind]
            return (
              <li key={item.qualification} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-12">
                <span className="absolute top-1.5 -left-1.75 h-3.5 w-3.5 rounded-full border-2 border-paper bg-coral ring-1 ring-coral/40" />
                <div className="grid gap-3 sm:grid-cols-[12rem_1fr] sm:gap-8">
                  <p className="font-mono text-xs leading-6 text-muted">{item.period}</p>
                  <div className="rounded-2xl border border-line bg-card/70 p-6 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(28,36,48,0.4)]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${kind.className}`}>
                        {kind.label}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.qualification}</h3>
                    <p className="mt-1 text-sm font-medium text-coral">{item.institution}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                    {item.credentialId && (
                      <p className="mt-4 inline-block rounded-md bg-paper px-2.5 py-1 font-mono text-xs text-muted">
                        Credential ID: <span className="text-ink">{item.credentialId}</span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
