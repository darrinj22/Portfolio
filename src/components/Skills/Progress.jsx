import React from 'react';
import './Progress.scss'; 
import { useState, useEffect } from 'react';

export default function Progress({width,percent}) {

    const skillsList = [
        {
            id: 1,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        } ,
        {
            id: 2,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        },
        {
            id: 3,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        },
        {
            id: 4,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        },
        {
            id: 5,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        } ,
        {
            id: 6,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        },
        {
            id: 7,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        },
        {
            id: 8,
            title: "King's Canyon",
            percent: "Season 0 - Present"
        }
    ];


    let progress = percent * width; 
    const [value, setValue] = useState(false);

    useEffect( () => {
        setValue(progress);
    })

  return (
    <div className="progress-div" style={{width: width}}>
        <div style={{width: `${value}px`}} className="progress-bg" />
    </div>
  )
}

