import React, {Component} from 'react';
import './App.css';
import Homepage from "./Containers/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router , Route} from 'react-router-dom'


import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import ServicesContainer from "./Containers/Services/Services";
import About from './Containers/About/About';
import ScrollToTop from './Components/ScrollTop';
import Projects from './Containers/Projects/Projects';
import ProjectDetails from './Components/Projects/ProjectContainer/ProjectDetails/ProjectDetails';



export class App extends Component {
  
  

  render() {
    return (
      <div className="App">
      <Router >
        <ScrollToTop />
      <Nav />
      <Route Route path="/" exact render={props => (
        
          <Homepage />
          
        
      )} />

      <Route path="/about" render={props => (
        
        <About />
        
      
    )} />
      <Route path="/services" render={props => (
        <div>
          <ServicesContainer />
          
        </div>
        
      )} />
      <Route path="/projects" exact render={props => (
        <div>
          <Projects />
          
        </div>
        
      )} />
      <Route path="/projects/:id" component={ProjectDetails} />
      
      </Router>
      <Footer />
    </div>
    )
  }
}

export default App

