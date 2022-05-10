import React from 'react';
import './Skills.scss';
import Progress from './Progress';
import ExperienceData from './ExperienceData';
import { useState, useEffect, useRef } from 'react'; 
import useOnScreen from '../../hooks/useOnScreen';
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import VerticalTimelineTest from './verticalTimeline';
import arrow from '../../assets/arrow.png';
import c from "../../assets/c.png";
import cplusplus from "../../assets/c++.png";
import py from "../../assets/python.png";
import reactimg from "../../assets/react.png";
import sql from "../../assets/sql.png";
import timelineElements from './ExperienceData';

export default function Skills() {
    const targetRef = useRef(null);
    const isVisible = useOnScreen({
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }, targetRef)

  return (
    <div className="skills" id="skills" >
        <div className='left'>
        <div className="wrapper" >
            <VerticalTimelineTest key={timelineElements.id}/>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
            <div className="container mb-5 dissapear">
                <div className="row d-flex justify-content-center align-middle">
                    <div className="col-md-8">
                        {/* <h4 className="text-center">My Skills</h4> */}
                        <br />
                        
                        <span>{!isVisible ? 'not in view' : 'in view'}</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="90"/>
                        </div>
                
                        <span>C++</span>     
                        <div className="progress skill-bar">
                        <Progress width="800" percent="80"/>
                        </div>

                        <span>Python</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="70"/>
                        </div>    
            
                        <span>React</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="60"/>
                        </div>              
            
                        <span>SQL</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="80"/>
                        </div>  
               
                        <span>Seer</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="40"/>
                        </div>                
                     
                        <span>Rampart</span>
                        <div className="progress skill-bar">
                        <Progress width="800" percent="30"/>
                        </div>                  
                    </div>
                </div>  
            </div>
                <div className="skills-icons" ref={targetRef}>
                    <ul>
                        <li><img src={c} alt="" /></li>
                        <li><img src={cplusplus} alt="" /></li>
                        <li><img src={py} alt="" /></li>
                        <li><img src={reactimg} alt="" /></li>
                        <li><img src={sql} alt="" /></li>
                    </ul>
                </div>
        </div>
      </div>
    </div>
  )
}
