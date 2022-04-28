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
        "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      date: "January 2022 - present",
      icon: "work",
    },
    {
      id: 2,
      title: "Systems Engineer Co-Op",
      location: "Holly Springs, NC",
      description:
        "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
      buttonText: "View Backend Projects",
      date: "May 2021 - August 2021",
      icon: "work",
    },
    {
      id: 3,
      title: "Fake Job Title",
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
        "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
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
