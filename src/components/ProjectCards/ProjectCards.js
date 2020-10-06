import React from "react";
import "./ProjectCards.css";
import passwordGen from "../../images/passwordGen.png";
import scheduler from "../../images/scheduler.png";
import note from "../../images/NT.png";
import burger from "../../images/burger.png";
import sas1 from "../../images/sas1.png";
import sas2 from "../../images/sas2.png";

function Projects() {
  return (
    <main>
        {/* <!-- 1st Row of Projects --> */}
        <div class="card-deck">             
          <br></br>

          <div class="card bg-light border-secondary">
            <img src = {sas1} 
                  class = "card-img-top projects" 
                  alt = "Spot-a-Show"/>
            <div class="card-body">
              <h5 class="card-title">Spot-A-Show v1.0</h5>
              <p class="card-text">
                An application where a user can search their favorite artist to find their genre, top songs, and upcoming music events. 
                This allows the user to view all that information on a single page for quicker music browsing.
                <hr></hr>
                <a href = "https://rahme.github.io/Spot-A-Show/" 
                rel="noopener noreferrer"
                target="_blank">Application Link
                </a>
                <br></br>
                <a href = "https://github.com/rahme/Spot-A-Show" 
                rel="noopener noreferrer"
                target="_blank">Github Repository 
                </a>
              </p>
            </div>
          </div>            
          <br></br>

          <div class="card bg-light border-secondary">
            <img src = {scheduler} 
                  class = "projects" 
                  alt = "Work Day Scheduler"/>
            <div class="card-body">
              <h5 class="card-title">Work Day Scheduler</h5>
              <p class="card-text">
                A daily scheduler for work that helps organize your daily tasks. The task blocks change color by the hour for clear indication of past, present and future tasks.
                <hr></hr>
                <a href = "https://andrewyen64.github.io/work-day-scheduler/" 
                rel="noopener noreferrer"
                target="_blank">Application Link
                </a> 
                <br></br>
                <a href = "https://github.com/andrewyen64/work-day-scheduler" 
                rel="noopener noreferrer"
                target="_blank">Github Repository
                </a>
              </p>
            </div>
          </div>
        </div>

        <br></br>

      {/* <!-- 2nd Row of Projects --> */}
        <div class="card-deck">
          <div class="card bg-light border-secondary" >
          <img src = {sas2} 
                class = "projects" 
                alt = "Spot-A-Show 2.0"/>
            <div class="card-body">
              <h5 class="card-title">Spot-A-Show v2.0</h5>
              <p class="card-text">
                With a visual overhaul from v1.0, Spot-A-Show 2.0 lets you search up an artist's general info and upcoming events and now you can 
                save these events through a backend server database to view them later in the events page.
                <hr></hr>
                <a href = "https://damp-eyrie-26652.herokuapp.com/" 
                rel="noopener noreferrer"
                target="_blank">Deployed Heroku Link
                </a> 
                <br></br>
                <a href = "https://github.com/monicarangel95/Project-2" 
                rel="noopener noreferrer"
                target="_blank">Github Repository
                </a>
              </p>
            </div>
          </div>
          <br></br>

          <div class="card bg-light border-secondary" >
            <img src = {note} 
                class = "projects" 
                alt = "Note Taker"/>
            <div class="card-body">
              <h5 class="card-title">Note Taker</h5>
              <p class="card-text">
                An application that let users write, save and delete notes. This is helpful for people who have a lot of information to organize and keep track of.
                <hr></hr>
                <a href = "https://damp-bastion-74766.herokuapp.com/" 
                rel="noopener noreferrer"
                target="_blank">Deployed Heroku Link
                </a> 
                <br></br>
                <a href = "https://github.com/andrewyen64/Note-Taker" 
                rel="noopener noreferrer"
                target="_blank">Github Repository 
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <br></br>

      {/* <!-- 3rd Row of Projects --> */}
        <div class="card-deck">
          <div class="card bg-light border-secondary">
            <img src = {passwordGen}
                class = "projects"
                alt = "Password Generator"/>
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">
                A random password generator that prompts the user options to choose the length and include specific characters.
                <hr></hr>
                <a href = "https://andrewyen64.github.io/passwordGenerator/"
                  rel="noopener noreferrer"
                  target="_blank">Application Link
                  </a> 
                <br></br>
                <a href = "https://github.com/andrewyen64/passwordGenerator" 
                rel="noopener noreferrer"
                target="_blank">Github Repository
                </a>
              </p>
            </div>
          </div>
          <br></br>

          <div class="card bg-light border-secondary">
            <img src = {burger} 
                class = "projects" 
                alt = "Eat The Burger"/>
            <div class="card-body">
              <h5 class="card-title">Eat-Da-Burger!</h5>
              <p class="card-text">
                A restaurant application that logs burgers and allows the user to keep track of which burgers they have already eaten and add new burgers as well.
                <hr></hr>
                <a href = "https://safe-dusk-87669.herokuapp.com/" 
                rel="noopener noreferrer"
                target="_blank">Deployed Heroku Link
                </a> 
                <br></br>
                <a href = "https://github.com/andrewyen64/burger" 
                rel="noopener noreferrer"
                target="_blank">Github Repository
                </a>
              </p>
            </div>
          </div>

        </div>

          <div className= "space"></div>
          
      </main>  
  );
}

export default Projects;
