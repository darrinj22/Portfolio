import React from 'react';
import './Skills.scss';
import Progress from './Progress';
import ExperienceData from './ExperienceData';
import { useState, useEffect } from 'react'; 
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import VerticalTimelineTest from './verticalTimeline';
import arrow from '../../assets/arrow.png';
import c from "../../assets/c.png";
import cplusplus from "../../assets/c++.png";
import py from "../../assets/python.png";
import reactimg from "../../assets/react.png";
import sql from "../../assets/sql.png";

export default function Skills() {
    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
    ];
  return (
    <div className="skills" id="skills">
        <div className='left'>
        <div className="wrapper">
            <VerticalTimelineTest />
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
            <div class="container mb-5 dissapear">
                <div class="row d-flex justify-content-center align-middle">
                    <div class="col-md-8">
                        {/* <h4 class="text-center">My Skills</h4> */}
                        <br />
                        
                        <span>C</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="90"/>
                        </div>
                
                        <span>C++</span>     
                        <div class="progress skill-bar">
                        <Progress width="800" percent="80"/>
                        </div>

                        <span>Python</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="70"/>
                        </div>    
            
                        <span>React</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="60"/>
                        </div>              
            
                        <span>SQL</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="80"/>
                        </div>  
               
                        <span>Seer</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="40"/>
                        </div>                
                     
                        <span>Rampart</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="30"/>
                        </div>                  
                    </div>
                </div>  
            </div>
                <div class="skills-icons">
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
