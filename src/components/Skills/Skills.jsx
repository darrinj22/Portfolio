import React from 'react';
import './Skills.scss';
import Progress from './Progress';
import ExperienceData from './ExperienceData';
import { useState, useEffect } from 'react'; 
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import VerticalTimelineTest from './verticalTimeline';

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
            <div class="container">
                <div class="row d-flex justify-content-center align-middle">
                    <div class="col-md-8">
                        <h3 class="text-center">My Skills</h3>
                        <br />
                        
                        <span>Caustic</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="90"/>
                        </div>
                
                        <span>Lifeline</span>     
                        <div class="progress skill-bar">
                        <Progress width="800" percent="80"/>
                        </div>

                        <span>Wraith</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="70"/>
                        </div>    
            
                        <span>Gibraltar</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="60"/>
                        </div>              
            
                        <span>Bloodhound</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent="50"/>
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
        </div>
      </div>
    </div>
  )
}
