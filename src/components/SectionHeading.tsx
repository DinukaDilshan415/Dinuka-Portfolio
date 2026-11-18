interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-coral uppercase">
        <span className="text-muted">{index}</span>
        <span className="h-px w-8 bg-coral" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  )
}
