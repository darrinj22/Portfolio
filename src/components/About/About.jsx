import React from 'react'
import './About.scss'
import { init } from 'ityped'; 
import { useEffect, useRef } from 'react';

export default function About() {

  // const textRef = useRef();

  // useEffect(()=>{
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1000,
  //     backSpeed: 60,
  //     typeSpeed: 75,
  //     strings: ["Computer","Systems","Software"]
  //   });
  // }, []);

  return (
    <div className="about" id="about">
      <div className='left'>
        <div className="imgContainer">
          <img src="assets/profile_pic.jpg" alt="profile pic" />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h1>About Me.</h1>
          <p>data to be displayed to the screen. I'm not really sure why I can't seem to figure out why these 
            test cases look so wierd to me.
          </p>
        </div>
        <a href="#resume">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  )
}