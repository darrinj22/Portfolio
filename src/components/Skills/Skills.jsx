import React from 'react';
import './Skills.scss';
import Progress from './Progress';
import ExperienceData from './ExperienceData';
import { useState, useEffect } from 'react'; 
import { VerticalTimeline } from 'react-vertical-timeline-component/dist-modules';
import VerticalTimelineTest from './verticalTimeline';

export default function Skills() {

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
                        <Progress width="800" percent=".9"/>
                        </div>
                
                        <span>Lifeline</span>     
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".8"/>
                        </div>

                        <span>Wraith</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".7"/>
                        </div>    
            
                        <span>Gibraltar</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".6"/>
                        </div>              
            
                        <span>Bloodhound</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".5"/>
                        </div>  
               
                        <span>Seer</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".4"/>
                        </div>                
                     
                        <span>Rampart</span>
                        <div class="progress skill-bar">
                        <Progress width="800" percent=".3"/>
                        </div>                  
                    </div>
                </div>  
            </div>    
        </div>
      </div>
    </div>
  )
}
