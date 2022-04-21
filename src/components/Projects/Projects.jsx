import React from 'react'
import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Projects.scss';
import { featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
  extraPortfolio,
  bonusPortfolio
} from '../../data';

export default function Projects() {
  const [selected,setSelected] = useState("ftr"); 
  const [data, setData] = useState([]);
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
    switch(selected){
      case "ftr":
        setData(featuredPortfolio);
        break; 
      case "esl":
        setData(webPortfolio);
        break;
      case "lcd":
        setData(mobilePortfolio);
        break;
      case "msp":
        setData(designPortfolio);
        break; 
      case "cra":
        setData(contentPortfolio);
        break;
      case "cnn":
        setData(extraPortfolio);
        break;
      case "dsa":
        setData(bonusPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  },[selected])
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
            <img 
              src={d.img} 
              alt="" />
            <h3>{d.title}</h3>
          </div>      
        ))}  
      </div>
    </div>
  )
}
