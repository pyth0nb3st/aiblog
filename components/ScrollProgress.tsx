// components/ScrollProgress.tsx
'use client'

import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight > 0) {
        const progress = Number((currentScrollPos / scrollHeight).toFixed(2)) * 100
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-300 dark:bg-gray-800">
      <div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
