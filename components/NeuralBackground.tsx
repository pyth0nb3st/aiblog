'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import { useTheme } from 'next-themes'

const NeuralBackground = () => {
  const { resolvedTheme } = useTheme()

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <Particles
      id="neural-particles"
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
            value: isDark ? '#4338ca' : '#818cf8',
          },
          links: {
            color: isDark ? '#4338ca' : '#818cf8',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
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
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}

export default NeuralBackground
