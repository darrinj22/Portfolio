import React from 'react'
import './TopBar.scss'
import { Person, Mail } from "@material-ui/icons"

export default function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">DJ Hansen</a>
          
          
        </div>
      <div className="center">
          <div className="itemContainer">
            {/* <person classname="icon"/> */}
            <a href="#intro"> HOME</a>
            
          </div>
          <div className="itemContainer">
            {/* <person classname="icon"/> */}
            <a href="#about"> ABOUT</a>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <a href="#skills"> RESUME</a>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <a href="#projects"> PROJECTS</a>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <a href="#contact"> CONTACT</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
