import React from 'react';
import './Skills.scss';
import Progress from './Progress';
import { useState, useEffect } from 'react'; 

export default function Skills() {

  return (
    <div className="skills" id="skills">
        <div className='left'>
        <div className="imgContainer">
          <img src="assets/profile_pic.jpg" alt="profile pic" />
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
        <a href="#resume">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  )
}
