import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="section-footer">
        <img className="logo"src="./images/logo.png" alt="logo" />
        <p>Comics</p>
      </div>
      <p>©2022 Comic App.</p>
      <div className="pages">
        <h3>Pages</h3>
        <a href="./nada">Comics</a>
      </div>
    </footer>
  )
}

export default Footer