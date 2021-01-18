import React from "react";
import "./ProjectCards.css";
// import passwordGen from "../../images/passwordGen.png";
import budget from "../../images/budget-tracker.png"
import scheduler from "../../images/scheduler.png";
import note from "../../images/NT.png";
import burger from "../../images/burger.png";
// import sas1 from "../../images/sas1.png";
import sas2 from "../../images/sas2.png";
import searchPage from "../../images/search.png";

function Projects() {
  return (
    <main>
        {/* <!-- 1st Row of Projects --> */}
        <div className="card-deck">             
          <br></br>
          <div className="card bg-light border-secondary">
            <img src = {sas2} 
                className = "projects" 
                alt = "Spot-A-Show 3.0"/>
            <div className="card-body">
              <h4 className="card-title">Spot-A-Show 3.0</h4>
              <p className="card-text">
                Spot-A-Show 3.0 lets you search up an artist's general info and upcoming events. You can also
                save searched events to view them later in the events page. We've added a shop button that directs 
                the user to a page with options to purchase tickets.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> React.js, MaterializeCSS, APIs/AJAX, Node, Express, MongoDB/Mongoose
                <hr></hr>
                <a href = "https://spotashow.herokuapp.com/" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Heroku Link
                </a> 
                
                <a href = "https://github.com/monicarangel95/Project-2" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github
                </a>
              </p>
            </div>
          </div>            
          <br></br>

          <div className="card bg-light border-secondary">
            <img src = {searchPage}
                className = "projects"
                alt = "Google Books Search"/>
            <div className="card-body">
              <h4 className="card-title">Google Books Search (React)</h4>
              <p className="card-text">
                A Google Books Search app utilizing React that lets you search, view, and save books you may want to view later. 
                You can delete/unsave books in the saved page or within the main search page if it's still there.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> HTML/CSS/JS, React, APIs/Axios, MongoDB/Mongoose, 
                <hr></hr>
                <a href = "https://polar-savannah-18798.herokuapp.com/"
                  className="btn btn-primary"
                  rel="noopener noreferrer"
                  target="_blank">Heroku Link
                  </a> 
                
                <a href = "https://github.com/andrewyen64/google-book-search-react" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github
                </a>
              </p>
            </div>
          </div>
        </div>

        <br></br>

      {/* <!-- 2nd Row of Projects --> */}
        <div className="card-deck">
          <div className="card bg-light border-secondary" >
            <img src = {budget} 
                  className = "projects" 
                  alt = "Budget Tracker"/>
            <div className="card-body">
              <h4 className="card-title">Budget Tracker</h4>
              <p className="card-text">
                Manage and view your budget both online and offline by logging your expenses and deposits to this application.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> HTML/CSS/JS, jQuery, Node, Express, Mongo/Mongoose, IndexedDB, Service Worker
                <hr></hr>
                <a href = "https://shielded-fortress-42520.herokuapp.com/" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Application Link
                </a> 
                
                <a href = "https://github.com/andrewyen64/budget-tracker-iDBPWA" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github
                </a>
              </p>
            </div>
          </div>
          <br></br>

          <div className="card bg-light border-secondary" >
            <img src = {note} 
                className = "projects" 
                alt = "Note Taker"/>
            <div className="card-body">
              <h4 className="card-title">Note Taker</h4>
              <p className="card-text">
                An application that let users write, save and delete notes. This is helpful for people who have a lot of information to organize and keep track of.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> HTML/CSS/JS, jQuery, APIs/AJAX, Node, Express
                <hr></hr>
                <a href = "https://damp-bastion-74766.herokuapp.com/" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Heroku Link
                </a> 
                
                <a href = "https://github.com/andrewyen64/Note-Taker" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github 
                </a>
              </p>
            </div>
    
          </div>
        </div>
        
        <br></br>

      {/* <!-- 3rd Row of Projects --> */}
        <div className="card-deck">
          <div className="card bg-light border-secondary">
            <img src = {scheduler} 
                  className = "projects" 
                  alt = "Work Day Scheduler"/>
            <div className="card-body">
              <h4 className="card-title">Work Day Scheduler</h4>
              <p className="card-text">
                A daily scheduler for work that helps organize your daily tasks. The task blocks change color by the hour for clear indication of past, present and future tasks.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> HTML/CSS/JS, jQuery, Moment.js
                <hr></hr>
                <a href = "https://andrewyen64.github.io/work-day-scheduler/" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Application Link
                </a> 
                
                <a href = "https://github.com/andrewyen64/work-day-scheduler" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github
                </a>
              </p>
            </div>
          </div>
          <br></br>

          <div className="card bg-light border-secondary">
            <img src = {burger} 
                className = "projects" 
                alt = "Eat The Burger"/>
            <div className="card-body">
              <h4 className="card-title">Eat-Da-Burger!</h4>
              <p className="card-text">
                A restaurant application that logs burgers and allows the user to keep track of which burgers they have already eaten and add new burgers as well.
                <hr></hr>
                <span className="techTitle">Technologies Used:</span> HTML/CSS/JS, jQuery, APIs/AJAX, Node, Express, MySQL, Handlebars
                <hr></hr>
                <a href = "https://safe-dusk-87669.herokuapp.com/" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Heroku Link
                </a> 
                
                <a href = "https://github.com/andrewyen64/burger" 
                className="btn btn-primary"
                rel="noopener noreferrer"
                target="_blank">Github
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
