import React from "react";
import "./ContactInfo.css";

function Contact() {
  return (
    <main>
      <br></br>
      <h2>Contact Info</h2>
      <p className="contactP">
        <span className="contactOption">Github profile:</span> 
        <a href="https://github.com/andrewyen64" 
          rel="noopener noreferrer" target="_blank"> github.com/andrewyen64
        </a>
        <br></br>

        <span className="contactOption">LinkedIn:</span> 
        <a href="https://www.linkedin.com/in/andrewyen64/" 
          rel="noopener noreferrer" target="_blank "> linkedin.com/in/andrewyen64
        </a>
        <br></br>

        <span className="contactOption">Email address:</span> andrewyen64@gmail.com 
        <br></br>

        <span className="contactOption">Phone Number:</span> (626) 203-9755 
        <br></br>

        <span className="contactOption">Link to my resume:</span>
          <a href="https://docs.google.com/document/d/e/2PACX-1vSty7EOEJ1yaO4bQOlkTizTDC_tLJlu25hKSr87LQ_3e5iB4OyRJgCTuvwnX9mVoOz_H6mfzkqb1CEq/pub" 
          rel="noopener noreferrer" target="_blank"> Yen_Andrew_2020
          </a>
        <br></br>
      </p>

      <div className= "space"></div>
    
    </main>
  );
}

export default Contact