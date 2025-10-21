import React, { useEffect } from 'react'
import htt from '../../img/htt.png'
import cs from '../../img/cs.png'
import jsLogo from '../../img/js.png'
import bootstrapImg from '../../img/boostrap.jfif'
import gitt from '../../img/gitt.png'
import py from '../../img/py.png'
import reactLogo from '../../img/react.png'
import dbLogo from '../../img/db.png'
import goLogo from '../../img/go.jpg'
import nodeLogo from '../../img/node.png'
import vsLogo from '../../img/vsualC.png'
import githubLogo from '../../img/github.png'

export default function FloatingLogos(){
  useEffect(() => {
    const container = document.createElement('div')
    container.id = 'logos-fondo-global-container-react'
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
      htt, cs, jsLogo, bootstrapImg,
  gitt, py, reactLogo, dbLogo,
  goLogo, nodeLogo, vsLogo, githubLogo
    ]

    const logosToInject = [].concat(...Array.from({ length: 6 }, () => logoSources))
    const created = []

    logosToInject.forEach((src, index) => {
      const logo = document.createElement('img')
      logo.src = src
      logo.alt = `Logo de tecnología ${index}`
      logo.className = 'logo-fondo-global'

      const initialX = Math.random() * 100
      const initialY = Math.random() * 100
      logo.style.position = 'absolute'
      logo.style.left = `${initialX}vw`
      logo.style.top = `${initialY}vh`

  // tamaño inicial eliminado aquí; definiremos tamaño más abajo para evitar redeclaración

  const moveAnimations = ['diagonal-float', 'horizontal-float', 'vertical-float', 'orbit-float', 'zigzag-float', 'spiral-float']
      const chosenMove = moveAnimations[Math.floor(Math.random() * moveAnimations.length)]

      const moveDuration = 8 + Math.random() * 22
      const moveDirection = (Math.random() < 0.5) ? 'normal' : 'alternate'
      const moveDelay = Math.random() * 12

      const pulseDuration = 2 + Math.random() * 4
      const pulseDelay = Math.random() * 6

      // asignar color/efecto fuerte: hue-rotate y drop-shadow aleatorio
      const hue = Math.floor(Math.random() * 360)
      const sat = 110 + Math.floor(Math.random() * 60) // saturación aumentada
      const blur = 6 + Math.random() * 8
      const dsColor = `hsl(${hue} 90% 60%)`
      logo.style.filter = `hue-rotate(${hue}deg) saturate(${sat}%) drop-shadow(0 4px ${blur}px ${dsColor})`

      // variar tamaño y opacidad
      const size = 28 + Math.random() * 64
      logo.style.width = `${size}px`
      logo.style.height = `${size}px`
      logo.style.opacity = `${0.55 + Math.random() * 0.5}`

      // animaciones compuestas: movimiento principal + glow/pulse
      logo.style.animation = `${chosenMove} ${moveDuration}s linear infinite ${moveDirection}, logo-glow-pulse ${pulseDuration}s ease-in-out infinite alternate`
      logo.style.animationDelay = `-${moveDelay}s, -${pulseDelay}s`

      container.appendChild(logo)
      created.push(logo)
    })

    return () => {
      created.forEach(l => l.remove())
      container.remove()
    }
  }, [])

  return null
}
