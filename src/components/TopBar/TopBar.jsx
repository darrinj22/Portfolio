import React from 'react'
import './TopBar.scss'
import { Person, Mail } from "@material-ui/icons"

export default function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#resume" className="logo">DJ Hansen</a>
          
          
        </div>
      <div className="center">
          <div className="itemContainer">
            {/* <person classname="icon"/> */}
            <span>HOME</span>
          </div>
          <div className="itemContainer">
            {/* <person classname="icon"/> */}
            <span>ABOUT </span>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <span>RESUME</span>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <span>PROJECTS</span>
          </div>
          <div className="itemContainer">
            {/* <mail classname="icon"/> */}
            <span>CONTACT</span>
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
