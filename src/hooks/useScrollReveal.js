import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all current fade-in elements
    const observe = () => {
      const elements = document.querySelectorAll('.fade-in:not(.visible)')
      elements.forEach((el) => observer.observe(el))
    }

    // Initial observation after a small delay to ensure DOM is ready
    const timeout = setTimeout(observe, 100)

    // Also observe on any DOM mutations (for dynamic content)
    const mutationObserver = new MutationObserver(observe)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
