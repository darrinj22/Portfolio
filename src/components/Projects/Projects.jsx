import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import About from '../About/About';
import PortfolioList from '../portfolioList/PortfolioList';
import './Projects.scss';
//import pirates from '../../assets/pirates.jpg';
import ds from '../../assets/ds.png';
//import redsox from '../../assets/redsox.png';
import esl from '../../assets/esl.jpg';
//import panthers from '../../assets/panthers.jpg';
import lcd from '../../assets/lcd.png';
//import hurricanes from '../../assets/hurricanes.jpg';
import msp from '../../assets/msp.jpg';
//import ncsu from '../../assets/ncsu.jpg';
import reactImg from '../../assets/reactImg.png';
//import orioles from '../../assets/orioles.png';
import cnn from '../../assets/cnn.png';


export default function Projects() {
  const [selected,setSelected] = useState("ftr"); 
  const [data, setData] = useState([]);
  const projectsList = [
    {
      id: 1,
      title: "Electronic Shopping Label",
      img: `${esl}`,
      description: "C, C++, ESP32, MySQL, PHP, PCB Design"
    },
    {
      id: 2,
      title: "LCD Profiler Optimization",
      img: `${lcd}`,
      description: "Embedded C, ARM Assembly, Ghidra, Logic Analyzer"
    },
    {
      id: 3,
      title: "MSP430 Microcontroller Car",
      img: `${msp}`,
      description: "C, MSP430,IOT, UART/SPI"
    },

  
  ];

  const projectsList2 = [
    {
      id: 4,
      title: "React Web Application",
      img: `${reactImg}`,
      description: "Javascript, React, Visual Studio, HTML, SCSS "
    },
    {
      id: 5,
      title: "Verilog Convolutional Neural Network",
      img: `${cnn}`,
      description: "Verilog, ModelSim, Hardware Verification "
    },
    {
      id: 6,
      title: "Data Structures",
      img: `${ds}`,
      description: "C++, Python, Visual Studio, OOP "
    },
    

  
  ];


  useEffect(()=>{
    setData(projectsList);
    }
  ,[selected])
  return (
    <div className="projects" id="projects">
      <h1>Projects.</h1>

      <div className="projectslistcontainer">
        {projectsList.map( (d) => (
          <div className="item" style={{backgroundImage: `url(${d.img})`}} key={d.id}>
            {/* <img src={d.img} alt="" /> */}
            
          </div> 
        ))}  
        
      </div>
      <div className="description-container">
        {projectsList.map( (t) => (
          <div className="item" key={t.id}>
            <h3>{t.title}</h3>
          </div>
        ))}
      </div>
      <div className="description-container">
        {projectsList.map( (t) => (
          <div className="item" key={t.id}>
            <p>{t.description}</p>
          </div>
        ))}
      </div>

     
      <div className="projectslistcontainer">
        {projectsList2.map( (d) => (
          <div className="item" style={{backgroundImage: `url(${d.img})`}} key={d.id}>
            {/* <img src={d.img} alt="" /> */}
          </div> 
        ))}  
        
      </div>
      <div className="description-container">
        {projectsList2.map( (t) => (
          <div className="item" key={t.id}>
            <h3>{t.title}</h3>
            
          </div>
        ))}
      </div>
      <div className="description-container">
        {projectsList2.map( (t) => (
          <div className="item" key={t.id}>
            <p>{t.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
