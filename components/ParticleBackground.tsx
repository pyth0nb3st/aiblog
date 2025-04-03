'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from 'next-themes'

const ParticleBackground = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: isDark ? '#4f46e5' : '#6366f1',
          },
          links: {
            color: isDark ? '#4f46e5' : '#6366f1',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  )
}

export default ParticleBackground
