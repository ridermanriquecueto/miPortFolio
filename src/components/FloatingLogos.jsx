import React, { useEffect } from 'react'

export default function FloatingLogos(){
  useEffect(() => {
    const container = document.createElement('div')
    container.id = 'logos-fondo-global-container-react'
    // mirror styles used previously: fixed full-screen, pointer-events none, behind content
    Object.assign(container.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '-1',
      pointerEvents: 'none',
    })

    document.body.appendChild(container)

    const logoSources = [
      '/img/htt.png', '/img/cs.png', '/img/js.png', '/img/boostrap.jfif',
      '/img/gitt.png', '/img/py.png', '/img/react.png', '/img/java.png',
      '/img/go.jpg', '/img/node.png', '/img/vsualC.png', '/img/docker.png'
    ]

    // replicate to have enough logos across viewport
    const logosToInject = [].concat(...Array.from({ length: 6 }, () => logoSources))

    const created = []

    logosToInject.forEach((src, index) => {
      const logo = document.createElement('img')
      logo.src = src
      logo.alt = `Logo de tecnología ${index}`
      logo.className = 'logo-fondo-global'

      // initial random position in viewport
      const initialX = Math.random() * 100
      const initialY = Math.random() * 100
      logo.style.position = 'absolute'
      logo.style.left = `${initialX}vw`
      logo.style.top = `${initialY}vh`

      const size = 36 + Math.random() * 44
      logo.style.width = `${size}px`
      logo.style.height = `${size}px`

      const moveAnimations = ['diagonal-float', 'horizontal-float', 'vertical-float', 'orbit-float']
      const chosenMove = moveAnimations[Math.floor(Math.random() * moveAnimations.length)]

      const moveDuration = 8 + Math.random() * 20
      const moveDirection = (Math.random() < 0.5) ? 'normal' : 'alternate'
      const moveDelay = Math.random() * 10

      const pulseDuration = 3 + Math.random() * 5
      const pulseDelay = Math.random() * 5

      logo.style.animation = `${chosenMove} ${moveDuration}s linear infinite ${moveDirection}, logo-glow-pulse ${pulseDuration}s ease-in-out infinite alternate`
      logo.style.animationDelay = `-${moveDelay}s, -${pulseDelay}s`
      logo.style.opacity = `${0.7 + Math.random() * 0.35}`

      container.appendChild(logo)
      created.push(logo)
    })

    // cleanup
    return () => {
      created.forEach(l => l.remove())
      container.remove()
    }
  }, [])

  return null
}
