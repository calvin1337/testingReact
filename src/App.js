import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import { Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Testing</h1>
     <Router>
       <nav style={{display:"flex"}}>
         <div style={{margin:"auto"}}>
           <Link to="/home">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
         </div>
         

       </nav>
     <Route Route path="/home" exact render={props => (
        
        <h1>Home</h1>
        
      
    )} />

    <Route Route path="/about" exact render={props => (
        
        <h1>About</h1>
        
      
    )} />

    <Route Route path="/contact" exact render={props => (
        
        <h1>Contact</h1>
        
      
    )} />
     </Router>
    </div>
  );
}

export default App;
