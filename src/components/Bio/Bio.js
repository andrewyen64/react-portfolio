import React from "react";
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
        width = "300px" height = "390px" 
        />
      <p>
          Hello there! My name is Andrew Yen. I'm a Full Stack web developer educated at UC Riverside Extension where I earned 
          a Certificate in Full-Stack Web Development.
          <br/><br/>
          My huge passion for a variety of video games (platformers, fighters, action and tactical RPGs) has given me some 
          knowledge on UIs and an enjoyable user experience. It's also what motivated me to start leaning how to code so that I may also  
          contribute to the gaming/tech industry that's brought me so much joy and memories.
          <br/><br/>
          As a video game enthusiast who has utilized all sorts of UIs (the good and the bad), I aim to create clean projects that 
          deliver a fulfilling, positive experience to the user.
          <br/><br/>
          My current tech skills include:
          <ul>
            <li>Front-end: HTML, CSS, JS, jQuery, Bootstrap, Materialize CSS, REST APIs, Server-side APIs, AJAX, PWAs, React.js </li>
            <li>Back-end: Node.js, Express, Axios, MySQL, Sequelize, MongoDB, Mongoose </li>
          </ul>
          I'm excited to work with others to create great projects and learn new skills. 
          <br></br>
          <br></br>
          Feel free to send me a message via my contact page info!
          <br/><br/>

      </p>

      <div className= "space"></div>

    </main>
  );
  
}

export default Bio;
