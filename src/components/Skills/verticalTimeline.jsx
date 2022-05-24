import React from 'react';
import { ReactComponent as WorkIcon } from '../../assets/work.svg';
import { ReactComponent as SchoolIcon } from '../../assets/school.svg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './verticalTimeline.scss';
import timelineElements from './ExperienceData';

export default function VerticalTimelineTest() {
    let workIconStyles = { background: "#2a9d8f", margin: "15px 0px 0px -30px"};
    let schoolIconStyles = { background: "#e9c46a", margin: "15px 0px 0px -30px"};
  return (
    <div className="vte" >
    <VerticalTimeline className={"vert-response"}>
      
      {timelineElements.map((element) => {
        let isWorkIcon = element.icon === "work";
        // let showButton =
        //   element.buttonText !== undefined &&
        //   element.buttonText !== null &&
        //   element.buttonText !== "";

        return (
          
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          > 
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location} | {element.date}
            </h5>
            <p id="description">{element.description}</p>
            {/* {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href="/"
              >
                {element.buttonText}
              </a>
            )} */}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  </div>
  )
}
