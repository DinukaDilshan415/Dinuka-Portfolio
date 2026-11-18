import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Certification } from '../types'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight, CertificateIcon, CopyIcon, DocumentIcon } from '../components/Icons'

interface CertificationsProps {
  items: Certification[]
  previewLimit?: number
  viewAllTo?: string
}

function CertificationCard({ cert }: { cert: Certification }) {
  const [copied, setCopied] = useState(false)

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(cert.id)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <article className="reveal group relative overflow-hidden rounded-3xl border border-line bg-card/80 p-7 transition-all hover:-translate-y-1 hover:border-coral/50">
      <div className="mb-5 flex h-32 items-center justify-center">
        {cert.imageUrl ? (
          <img
            src={cert.imageUrl}
            alt={`${cert.credential} badge`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="grid h-20 w-20 place-items-center rounded-full border border-coral/25 bg-coral/10 text-coral">
            <CertificateIcon className="h-10 w-10" />
          </span>
        )}
      </div>
      <p className="text-center font-mono text-xs tracking-wider text-muted uppercase">Issued {cert.issued}</p>
      <h3 className="mt-4 font-display text-center text-xl leading-snug font-semibold text-ink">{cert.credential}</h3>
      <p className="mt-2 text-center text-sm text-coral">{cert.issuer}</p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-line pt-5">
        <div>
          <p className="text-[11px] tracking-wider text-muted uppercase">Credential ID</p>
          <p className="font-mono text-sm text-ink">{cert.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyId}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <CopyIcon className="h-3.5 w-3.5" />
            {copied ? 'Copied' : 'Copy ID'}
          </button>
          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs text-paper hover:bg-coral"
            >
              <DocumentIcon className="h-3.5 w-3.5" />
              View
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {!cert.url && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <DocumentIcon className="h-3.5 w-3.5" />
              Digital copy link not provided
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Certifications({ items, previewLimit, viewAllTo }: CertificationsProps) {
  const displayedItems = previewLimit === undefined ? items : items.slice(0, previewLimit)

  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading
            index="03"
            eyebrow="Certifications"
            title="Credentials earned"
            description="Professional qualifications with verifiable credential IDs."
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
        <div className="grid gap-6 md:grid-cols-2">
          {displayedItems.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
