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
          <p>Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs, the Frontier’s leading manufacturer of pesticide gases.
             Nox worked day and night developing new formulas 
            for the glut of pesticides needed to protect the crops that sustained the Outlands. 
            But he soon realized that progress was being hampered by his testing methods. </p><p>He needed to test on more than just inert tissue: 
            he needed living subjects.As he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. 
            But the head of Humbert Labs soon discovered his gruesome experiments, and their confrontation ended with the lab in flames. Now, competing under
             the name Caustic, he puts his gaseous creations to work in the Apex Games and observes their effects with great interest.
          </p>
        </div>
        <a href="#resume">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  )
}