import React from 'react'
import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Projects.scss';
// import { featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
//   extraPortfolio,
//   bonusPortfolio
// } from '../../data';

//import { projectsList } from '../../data';
import pirates from '../../assets/pirates.jpg';
import redsox from '../../assets/redsox.png';
import panthers from '../../assets/panthers.jpg';
import hurricanes from '../../assets/hurricanes.jpg';
import ncsu from '../../assets/ncsu.jpg';
import orioles from '../../assets/orioles.png';

export default function Projects() {
  const [selected,setSelected] = useState("ftr"); 
  const [data, setData] = useState([]);
  const projectsList = [
    {
      id: 1,
      title: "Electronic Shopping Label",
      img: `${redsox}`,
      description: "C, C++, ESP32, MySQL, PHP, PCB Design"
    },
    {
      id: 2,
      title: "LCD Profiler Optimization",
      img: `${panthers}`,
      description: "Embedded C, ARM Assembly, Ghidra, Logic Analyzer"
    },
    {
      id: 3,
      title: "MSP430 Microcontroller Car",
      img: `${hurricanes}`,
      description: "C, MSP430,IOT, UART/SPI"
    },
    {
      id: 4,
      title: "React Web Application",
      img: `${ncsu}`,
      description: "Javascript, React, Visual Studio, HTML, SCSS "
    },
    {
      id: 5,
      title: "Verilog Convolutional Neural Network",
      img: `${orioles}`,
      description: "Verilog, ModelSim, Hardware Verification "
    },
    {
      id: 6,
      title: "Data Structures",
      img: `${pirates}`,
      description: "C++, Python, Visual Studio, OOP "
    },
  
  ];
  
  const list = [
    {
      id:"ftr",
      title: "Featured",
    },
    {
      id:"esl",
      title: "Electronic Shopping Label",
    },
    {
      id:"lcd",
      title: "LCD Profiler Optimization",
    },
    {
      id:"msp" ,
      title: "MSP430 Microcontroller Car",
    },
    {
      id:"cra",
      title: "React Web Application",
    },
    {
      id:"cnn",
      title: "Verilog Convolutional Neural Network",
    },
    {
      id:"dsa",
      title: "Data Structures",
    },
  ]

  useEffect(()=>{
    setData(projectsList);
    // switch(selected){
    //   case "ftr":
    //     setData(featuredPortfolio);
    //     break; 
    //   case "esl":
    //     setData(webPortfolio);
    //     break;
    //   case "lcd":
    //     setData(mobilePortfolio);
    //     break;
    //   case "msp":
    //     setData(designPortfolio);
    //     break; 
    //   case "cra":
    //     setData(contentPortfolio);
    //     break;
    //   case "cnn":
    //     setData(extraPortfolio);
    //     break;
    //   case "dsa":
    //     setData(bonusPortfolio);
    //     break;
    //   default:
    //     setData(featuredPortfolio);
    //     break;
    }
  ,[selected])
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul> */}
      <div className="projectslistcontainer">
        {projectsList.map( (d) => (
          <div className="item" style={{backgroundImage: `url(${d.img})`}} >
            {/* <img src={d.img} alt="" /> */}
            <h3>{d.title}</h3>
          </div> 
        ))}  
      </div>
      <div className="description-container">
        {projectsList.map( (t) => (
          <div className="item">
            <p>{t.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}
