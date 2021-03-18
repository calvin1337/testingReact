import React, { Component } from 'react'
import "./selector.css"

export class Selector extends Component {
    
    render() {
        
        
        
       

        

        return (
            
            <div className="linkContainer">
            <div className="testing">
                <ul>
                    <li className={this.props.activepage === "about" ? "active" : null} onClick={() => this.props.currentpage("about")} >
                      About us
                    </li>
                    

                 <li className={this.props.activepage === "facilities" ? "active" : null} onClick={() => this.props.currentpage("facilities")}>
                      Facilites
                </li>
                </ul>
  </div>
</div>
        )
    }
}

export default Selector
