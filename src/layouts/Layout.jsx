import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"
function Layout(props) {
  
  return (
    <div>
      <Navbar></Navbar>
      <div>{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout