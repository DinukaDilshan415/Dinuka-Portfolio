import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = { x: 0, y: 0, active: false }
    let points: Point[] = []
    let width = 0
    let height = 0
    let frame = 0
    let muted = ''
    let coral = ''

    const updateColors = () => {
      const styles = getComputedStyle(document.documentElement)
      muted = styles.getPropertyValue('--muted').trim()
      coral = styles.getPropertyValue('--coral').trim()
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.min(96, Math.max(34, Math.round((width * height) / 14500)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24
      }))
      render()
    }

    const render = () => {
      context.clearRect(0, 0, width, height)

      if (!motionQuery.matches) {
        const radius = 145
        for (const point of points) {
          point.x += point.vx
          point.y += point.vy

          if (pointer.active) {
            const dx = point.x - pointer.x
            const dy = point.y - pointer.y
            const distance = Math.hypot(dx, dy)
            if (distance > 0 && distance < radius) {
              const strength = (1 - distance / radius) * 0.45
              point.x += (dx / distance) * strength
              point.y += (dy / distance) * strength
            }
          }

          if (point.x < 0 || point.x > width) point.vx *= -1
          if (point.y < 0 || point.y > height) point.vy *= -1
          point.x = Math.max(0, Math.min(width, point.x))
          point.y = Math.max(0, Math.min(height, point.y))
        }
      }

      const connectionDistance = 150
      for (let i = 0; i < points.length; i += 1) {
        const point = points[i]
        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j]
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < connectionDistance) {
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(other.x, other.y)
            context.strokeStyle = muted
            context.globalAlpha = (1 - distance / connectionDistance) * 0.14
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }

      for (const point of points) {
        const distance = pointer.active ? Math.hypot(point.x - pointer.x, point.y - pointer.y) : Infinity
        context.beginPath()
        context.arc(point.x, point.y, distance < 145 ? 1.8 : 1.3, 0, Math.PI * 2)
        context.fillStyle = distance < 145 ? coral : muted
        context.globalAlpha = distance < 145 ? 0.68 : 0.35
        context.fill()
      }
      context.globalAlpha = 1

      if (!motionQuery.matches && !document.hidden) {
        frame = window.requestAnimationFrame(render)
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
    }
    const onPointerLeave = () => {
      pointer.active = false
    }
    const onMotionChange = () => {
      window.cancelAnimationFrame(frame)
      render()
    }
    const onVisibilityChange = () => {
      window.cancelAnimationFrame(frame)
      if (!document.hidden) render()
    }

    updateColors()
    const themeObserver = new MutationObserver(updateColors)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibilityChange)
    motionQuery.addEventListener('change', onMotionChange)
    resize()

    return () => {
      window.cancelAnimationFrame(frame)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
