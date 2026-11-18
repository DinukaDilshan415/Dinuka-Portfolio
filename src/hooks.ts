import { useEffect, useState } from 'react'
import type { SectionId } from './types'

/** Adds `is-visible` to every `.reveal` element when it scrolls into view. */
export function useReveal(pageKey: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pageKey])
}

/** Tracks which section is currently in the middle of the viewport. */
export function useActiveSection(ids: SectionId[], pageKey: string) {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, pageKey])

  return active
}
