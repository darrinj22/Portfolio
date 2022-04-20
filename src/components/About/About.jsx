import React from 'react'
import './About.scss'
import { init } from 'ityped'; 
import { useEffect, useRef } from 'react';

export default function About() {

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
    <div className="about" id="about">
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/profile_pic.jpg" alt="profile pic" />
        </div>
      </div>
      <div className='right'>
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