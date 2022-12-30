import React, {useState} from 'react'
import Carrousel from './Carrousel'
const Main = () => {
  
  return (
    <main id="main">
          {/* <!-- Slideshow container --> */}
          <Carrousel></Carrousel>
          {/* <!-- The dots/circles -->
          <div style={{textAlign:"center"}}>
            <span className="dot" onClick="currentSlide(1)"></span>
            <span className="dot" onClick="currentSlide(2)"></span>
            <span className="dot" onClick="currentSlide(3)"></span>
          </div>  */}
      
    </main>
  )
}

export default Main