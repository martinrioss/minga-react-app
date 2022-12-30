import React from 'react'

export default function Slide({foto,nombre}) {
  return (
    <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={foto} alt='img' style={{width:"100%"}} />
        <div className="text">{nombre}</div>
    </div>
  )
}
