import React from 'react';
import './Progress.scss'; 
import { useState, useEffect } from 'react';

export default function Progress({width,percent}) {

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

