import React from 'react';
import './Contact.scss';
import { useState, useEffect } from 'react';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Contact() {
  const [message, setMessage] = useState(false); 
  const [sentMessage, setMessageSent ] = useState("Send");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true); 
  }

  useEffect( () => {
    switch(message){
      case false:
        setMessageSent("Send Message");
      break; 
      case true:
        setMessageSent("Message Sent!");
        break;
      default:
        setMessageSent("Send Message");
        break;
    }
  })

  return (
    <div className="contact" id="contact">
      <div className="title">
      <h2>Contact.</h2>
      </div>

      <div className="right">
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type="submit" className={'send ' + (message && "active")}>
            {sentMessage}
          </button>
          {/* {message && <span>Thanks, I will reply ASAP</span>} */}
        </form>
        <div class="skills-icons">
        <ul>
            <li><img src={github} alt="" /></li>
            <li><img src={linkedin} alt="" /></li>

        </ul>
        </div>
      </div>
    </div>
  )
}
