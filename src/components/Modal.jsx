import React, { useState } from 'react'

export default function Modal(){
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState('')

  // Exponer funciones simple en window para compatibilidad con los atributos data-* existentes
  // Esto es temporal: idealmente refactorizar para no depender de window.
  window.__openProjectModal = (imgSrc) => {
    setSrc(imgSrc)
    setOpen(true)
  }

  if(!open) return null

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)} style={{position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1050}}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()} style={{background:'transparent', border:'none'}}>
        <button onClick={() => setOpen(false)} style={{position:'absolute', top:-20, right:0, color:'white', fontSize: '2rem', zIndex:1051}}>×</button>
        <img src={src} alt="Captura de Proyecto en Zoom" style={{maxHeight: '90vh', width: 'auto', display: 'block', margin: '0 auto'}} />
      </div>
    </div>
  )
}
