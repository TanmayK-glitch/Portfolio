import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeIn = (element, delay = 0) => {
  if (!element) return

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const staggerFade = (elements, delay = 0) => {
  if (!elements || elements.length === 0) return

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0]?.parentElement || elements[0],
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const slideInFromBottom = (element, delay = 0) => {
  if (!element) return

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}
