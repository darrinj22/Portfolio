import React from 'react';
import './Progress.scss'; 
import { useState, useEffect } from 'react';

export default function Progress({percent}) {

    let progress = percent; 
    const [value, setValue] = useState(false);

    useEffect( () => {
        setValue(progress);
    })

  return (
    <div className="progress-div" >
        <div style={{width: `${value}%`}} className="progress-bg" />
    </div>
  )
}


