import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={About} /> */}
          <Route exact path="/react-portfolio" component={About} />
          <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
