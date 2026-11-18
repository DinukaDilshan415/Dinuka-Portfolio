import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, input, textarea, select, label, [data-cursor="hover"]'

/**
 * Two-part cursor: a precise dot that follows the pointer instantly and a ring
 * that trails behind with easing. The ring grows over links and buttons and
 * shrinks on click. Disabled on touch devices and when reduced motion is set.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const query = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    )
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { ...mouse }
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      }
      const target = e.target as Element | null
      setHovering(Boolean(target?.closest(INTERACTIVE)))
    }

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16
      ring.y += (mouse.y - ring.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      frame = requestAnimationFrame(loop)
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  const ringSize = hovering ? 56 : 34
  const scale = pressed ? 0.8 : 1

  return (
    <div aria-hidden="true" className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div ref={ringRef} className="pointer-events-none fixed top-0 left-0 z-100">
        <div
          className={`rounded-full border transition-[width,height,background-color,border-color,transform] duration-300 ease-out ${
            hovering ? 'border-coral bg-coral/10' : 'border-ink/40'
          }`}
          style={{
            width: ringSize,
            height: ringSize,
            transform: `translate(-50%, -50%) scale(${scale})`
          }}
        />
      </div>
      <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-101">
        <div
          className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${
            hovering ? 'bg-coral' : 'bg-ink'
          }`}
        />
      </div>
    </div>
  )
}
