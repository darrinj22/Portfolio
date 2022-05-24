// import React from 'react';
// import './ExperienceData.scss'; 
// import { useState, useEffect } from 'react';

// const ExperienceDataItem = (props) => {
//     return(
//         <li>
//         <div className="card-container exp-item">
//             <p>
//                 <strong>{props.experience.title}</strong>
//             </p>
//             <p>{props.experience.time}</p>
//             <p>{props.experience.description}</p>
//         </div>
//     </li>
//     )
// }

// export default function ExperienceData() {
//     const experiences = [
//         {
//             id: 1,
//             title: "King's Canyon",
//             time: "Season 0 - Present",
//             description: "first apex legends map"
//         } ,
//         {
//             id: 1,
//             title: "World's Edge",
//             time: "Season 3 - Season 12",
//             description: "second apex legends map"
//         },
//         {
//             id: 1,
//             title: "Olympus",
//             time: "Season 7 - Present",
//             description: "third apex legends map"
//         },
//         {
//             id: 1,
//             title: "Storm Point",
//             time: "Season 11 - Season 13",
//             description: "fourth apex legends map"
//         }
//     ];

//   return (
//     <ul className="exp-list">
//         {experiences.map(experience => {
//             return <ExperienceDataItem experience={experience} key={experience.id} />
//         })}
//     </ul>
//   )
// }

let timelineElements = [
    {
      id: 1,
      title: "Systems Engineer I",
      location: "Holly Springs, NC",
      description:
        "Developed verification documentation according to cGMP standards for design and installation of Clean Utilities system for large pharmaceutical plant.",
      buttonText: "View Frontend Projects",
      date: "January 2022 - present",
      icon: "work",
    },
    {
      id: 2,
      title: "Systems Engineer Co-Op",
      location: "Holly Springs, NC",
      description:
        "Analyzed PLC ladder logic programs to link data tag addresses to appropriate HMI applications for migration of client system to updated control software. Verified function of Human Machine Iterface (HMI) applications by utilizing SQL databases to manage tag data and Visual Basic to program functionality. Automated tag data processes using Python.",
      buttonText: "View Backend Projects",
      date: "May 2021 - August 2021",
      icon: "work",
    },
    {
      id: 3,
      title: "Document Specialist",
      location: "Raleigh, NC",
      description:
        "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
      buttonText: "Company Website",
      date: "September 2011 - June 2013",
      icon: "work",
    },
    {
      id: 4,
      title: "North Carolina State University",
      location: "Raleigh, NC",
      description:
        "Bachelor of Science degree in Computer Engineering from North Carolina State University. Graduated with a 3.76 GPA.",
      buttonText: "Course Certificate",
      date: "Graduation: December 2021",
      icon: "school",
    },
    {
      id: 5,
      title: "Full Time Volunteer Representative",
      location: "Bakersfield, California",
      description:
        "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      buttonText: "College Projects",
      date: "June 2016 - June 2018",
      icon: "school",
    },
  ];
  
  export default timelineElements;
