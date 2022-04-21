import React from 'react'
import './Intro.scss'
import { init } from 'ityped'; 
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 60,
      typeSpeed: 75,
      strings: ["Computer","Systems","Software"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
      {/* <div classname='left'>
        <div classname="imgcontainer">
          <img src="assets/profile_pic.jpg" alt="profile pic" />
        </div>
      </div> */}
      <div className='titleContainer'>
        <div className="wrapper">
          <h1>Darrin Hansen</h1>
          <h3><span ref={textRef}></span> Engineer</h3>
        </div>
        <a href="#resume">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  )
}