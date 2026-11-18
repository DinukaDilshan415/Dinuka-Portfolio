import type { Profile } from '../types'
import SectionHeading from '../components/SectionHeading'

interface AboutProps {
  profile: Profile
}

const values = [
  { title: 'Clean architecture', text: 'Readable, well-structured code that is easy to grow.' },
  { title: 'Accessible interfaces', text: 'Experiences that work for everyone, on every device.' },
  { title: 'Real problems', text: 'Software measured by how useful it is to people.' }
]

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="A little about me" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="font-display text-xl text-ink">
              Based in {profile.location}. {profile.availability}.
            </p>
          </div>

          <ul className="reveal space-y-4">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="flex gap-4 rounded-2xl border border-line bg-card/70 p-5 transition-colors hover:border-coral/50"
              >
                <span className="font-mono text-xs text-coral">0{i + 1}</span>
                <div>
                  <h3 className="font-display font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
