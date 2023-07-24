import React from "react";
import "./App.css";
import Animate from "./components/animate/Animates";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Animate />
            <Navbar />
            <About />
            <Projects />
            {/* <Blog /> */}
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
