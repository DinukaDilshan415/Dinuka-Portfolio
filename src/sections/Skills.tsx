import type { IconType } from 'react-icons'
import { FaCode, FaJava, FaServer } from 'react-icons/fa6'
import {
  SiAndroid,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import type { SkillGroup } from '../types'
import SectionHeading from '../components/SectionHeading'

interface SkillsProps {
  groups: SkillGroup[]
}

const technologyIcons: Record<string, { icon: IconType; color: string }> = {
  Java: { icon: FaJava, color: '#f89820' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  TypeScript: { icon: SiTypescript, color: '#3178c6' },
  Python: { icon: SiPython, color: '#3776ab' },
  'C++': { icon: SiCplusplus, color: '#00599c' },
  React: { icon: SiReact, color: '#61dafb' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  HTML5: { icon: SiHtml5, color: '#e34f26' },
  CSS3: { icon: SiCss, color: '#1572b6' },
  'Jakarta EE': { icon: FaCode, color: '#f89820' },
  'Spring Boot': { icon: SiSpring, color: '#6db33f' },
  'Node.js': { icon: SiNodedotjs, color: '#5fa04e' },
  'REST APIs': { icon: FaServer, color: '#38bdf8' },
  MySQL: { icon: SiMysql, color: '#4479a1' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169e1' },
  SQLite: { icon: SiSqlite, color: '#003b57' },
  Firebase: { icon: SiFirebase, color: '#dd2c00' },
  'Google Cloud Platform': { icon: SiGooglecloud, color: '#4285f4' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  Kubernetes: { icon: SiKubernetes, color: '#326ce5' },
  Git: { icon: SiGit, color: '#f05032' },
  GitHub: { icon: SiGithub, color: '#a1aab6' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  Android: { icon: SiAndroid, color: '#3ddc84' },
  'React Native': { icon: SiReact, color: '#61dafb' }
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Skills"
          title="Technologies"
          description="IT systems, development languages, frameworks, and tools I use."
        />
        <div aria-hidden="true" className="skills-marquee space-y-8">
          {groups.map((group, rowIndex) => (
            <div key={group.title}>
              <h2 className="mb-3 font-mono text-xs font-semibold tracking-[0.3em] text-coral uppercase">
                <span className="mr-3">//</span>
                {group.title}
              </h2>
              <div className="skills-marquee__viewport">
                <div
                  className={`skills-marquee__track ${rowIndex % 2 === 1 ? 'skills-marquee__track--reverse' : ''
                    }`}
                >
                  {[0, 1].map((copy) => (
                    <div key={copy} className="skills-marquee__group">
                      {group.items.map((item, itemIndex) => {
                        const { icon: Icon, color } = technologyIcons[item] ?? {
                          icon: FaCode,
                          color: '#a1aab6'
                        }

                        return (
                          <span
                            key={item}
                            className="flex h-28 w-40 shrink-0 flex-col justify-between rounded-xl border border-line bg-card/30 p-4 transition-colors hover:border-coral/60"
                          >
                            <span className="flex items-start justify-between">
                              <Icon className="h-7 w-7 shrink-0" style={{ color }} aria-hidden="true" />
                              <span className="font-mono text-[10px] text-muted">
                                {String(itemIndex + 1).padStart(2, '0')}
                              </span>
                            </span>
                            <span className="text-sm font-semibold text-ink">{item}</span>
                            <span className="h-px w-full" style={{ backgroundColor: color, opacity: 0.55 }} />
                          </span>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul className="sr-only" aria-label="Technologies and tools">
          {groups.flatMap((group) => group.items).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
