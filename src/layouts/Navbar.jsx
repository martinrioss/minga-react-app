import React, {useState} from 'react'
import { BsListUl } from "react-icons/bs";
 
export default function Navbar() {
  const [boolean,setBoolean]=useState(false)
  function handleMenu(){
    setBoolean(!boolean)
    console.log(boolean)
  }
  return (
    <nav>
      <p onClick={handleMenu}><BsListUl size={45}></BsListUl></p>
      {
        boolean ? (
          <div>
            <a href="./" >Comic Logo</a>
            <a href="./">Comics</a>
            <a className="login-button" href="./">Iniciar Sesión</a>
          </div>
        ): null
      }
    </nav>
  )
}
