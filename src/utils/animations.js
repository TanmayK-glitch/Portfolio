import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Minimal premium fade-in with subtle scale
export const fadeIn = (element) => {
  if (!element) return
  
  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.98,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

// Minimal stagger animation for cards/items
export const staggerFade = (elements) => {
  if (!elements || elements.length === 0) return
  
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: elements[0]?.parentElement || elements[0],
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}
