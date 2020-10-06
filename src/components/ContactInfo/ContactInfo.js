import React from "react";
import "./ContactInfo.css";

function Contact() {
  return (
    <main>
      <br></br>
      <h2>Contact Info</h2>
      <p className="contactP">
        <span className="contactOption">Github profile:</span> <a href="https://github.com/andrewyen64" 
                          rel="noopener noreferrer" 
                          target="_blank" >github.com/andrewyen64
                        </a>
        <br></br>
        <span className="contactOption">LinkedIn:</span> <a href="https://www.linkedin.com/in/andrewyen64/" 
                    rel="noopener noreferrer" 
                    target="_blank ">linkedin.com/in/andrewyen64
                  </a>
        <br></br>
        <span className="contactOption">Email address:</span> andrewyen64@gmail.com 
        <br></br>
        <span className="contactOption">Phone Number:</span> (626) 203-9755 
        <br></br>
      </p>
    
    </main>
  );
}

export default Contact