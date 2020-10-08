import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css";
import profilePic from "../../images/profilepic.jpg"

function Bio () {
  return (
    <main>
      <br/>
      <h2>About Me</h2>
    
      <img id = "about-image"
        src = {profilePic}
        alt = "My Profile"
        width = "230px" height = "300px" 
        />
      <p>
          Hello there! My name is Andrew Yen. I'm a Full Stack web developer educated at UC Riverside Extension where I earned 
          a Certificate in Full-Stack Web Development and developed skills in the Front and Backend.
          <br/><br/>
          My huge passion for a variety of video games (platformers, fighters, action and tactical RPGs) has given me some 
          knowledge on UIs and an enjoyable experience.  
          <br/><br/>
          As a video game enthusiast who has seen all sorts of UIs (the good and the bad), I aim to create clean projects that 
          deliver a fulfilling, positive experience to the user.
          <br/><br/>
          I'm excited to work with others to create great projects and learn new skills. 
          <br></br>
          Feel free to send me a message
          to chat about possible future projects <Link to="/contact">here</Link>!
          <br/><br/>
          Link to my resume:
          <a href="https://docs.google.com/document/d/e/2PACX-1vSty7EOEJ1yaO4bQOlkTizTDC_tLJlu25hKSr87LQ_3e5iB4OyRJgCTuvwnX9mVoOz_H6mfzkqb1CEq/pub" 
          target="_blank" rel="noopener noreferrer" >
          Yen_Andrew_2020
          </a>

      </p>

      <div className= "space"></div>

    </main>
  );
  
}

export default Bio;
