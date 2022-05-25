import React from 'react';
import './Contact.scss';
import { useState, useEffect } from 'react';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { SocialIcon } from 'react-social-icons';

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
      <h1>Contact.</h1>
      <p>Leave me a message below or feel free to email me at <span>darrinjhansen@gmail.com</span><br />Or find me on my LinkedIn and Github below!</p>
      </div>

      <div className="right">
        
        <form onSubmit={handleSubmit}>
          <h2>Email</h2>
          <input type="text" />
          <h2>Message</h2>
          <textarea></textarea>
          <button type="submit" className={'send ' + (message && "active")}>
            {sentMessage}
          </button>
          <div className="skills-icons">
        <SocialIcon url="https://linkedin.com" className="icon" bgColor="#ffffffff" style={{ height: 75, width: 75 }}/>
        <SocialIcon url="https://github.com" className="icon" bgColor="#ffffff" style={{ height: 75, width: 75 }}/>
        </div>
          {/* {message && <span>Thanks, I will reply ASAP</span>} */}
        </form>

        

      </div>
    </div>
  )
}
