import React, {Component} from 'react';
import './App.css';
import Homepage from "./Containers/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'


import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import ServicesContainer from "./Containers/Services/Services";
import ScrollToTop from './Components/ScrollTop';
import Projects from './Containers/Projects/Projects';
import ProjectDetails from './Components/Projects/ProjectContainer/ProjectDetails/ProjectDetails';
import Contact from './Containers/Contact/Contact';
import errorPage from './Containers/404Page/errorPage';
import Careers from './Containers/Careers/Careers';
import CareerDetails from './Components/Careers/CareerDetails/CareerDetails';
import News from './Containers/News/News';
import NewsPostFull from './Components/News/NewsPostFull/NewsPostFull';
import Privacy from './Containers/Privacy/Privacy';
import AboutNew from './updatedPages/About/AboutNew';


export class App extends Component {
  
  

  render() {
    return (
      <div className="App">
      <Router >
       
        <ScrollToTop />
      <Nav />
      <Switch>
      <Route path="/" exact render={props => (
        
          <Homepage />
          
        
      )} />

      

      <Route path="/about" exact render={props => (
        
        <AboutNew />
        
      
    )} />
      <Route path="/services" exact render={props => (
        <div>
          <ServicesContainer />
          
        </div>
        
      )} />

      <Route path="/services/:id" exact component={ServicesContainer} />

      <Route path="/projects" exact render={props => (
        <div>
          <Projects />
          
        </div>
        
      )} />
      <Route path="/projects/:id" exact component={ProjectDetails} />

      <Route path="/contact" exact render={props => (
        
          <Contact />
          
       
        
      )} />

      <Route path="/careers" exact render={props => (
        
        <Careers />
        
      
    )} />


      <Route path="/careers/:id" exact component={CareerDetails} />

      <Route path="/news" exact render={props => (
        
        <News />
        
      
    )} />

    <Route path="/news/:id" exact component={NewsPostFull} />

          <Route path="/privacy" exact component={Privacy} />

            <Route component={errorPage} />
            </Switch>
      

      <Footer />
      </Router>
    </div>
    )
  }
}

export default App

