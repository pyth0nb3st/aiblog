// components/MouseEffect.tsx
'use client'

import { useEffect, useState } from 'react'

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setHidden(false)
    }

    const mouseLeaveHandler = () => {
      setHidden(true)
    }

    window.addEventListener('mousemove', mouseMoveHandler)
    document.body.addEventListener('mouseleave', mouseLeaveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
      document.body.removeEventListener('mouseleave', mouseLeaveHandler)
    }
  }, [])

  return (
    <>
      <div
        className={`bg-primary-500/20 pointer-events-none fixed z-50 -mt-3 -ml-3 h-6 w-6 rounded-full backdrop-blur-sm transition-transform duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'scale(1.2)',
        }}
      />
      <div
        className={`bg-primary-500/50 pointer-events-none fixed z-50 -mt-1.5 -ml-1.5 h-3 w-3 rounded-full transition-opacity duration-200 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default MouseEffect
