import React, { Component } from 'react'
import "./selector.css"

export class Selector extends Component {
    
    render() {
        
        let aboutBtn = ""
        let facilitiesBtn = ""
        if(this.props.activepage === "about"){
            aboutBtn = {
                color: "#fff" ,
                background: "#686A6E"
            }
            facilitiesBtn = {
                color: "#fff",
                background: "#212529"
            }
        } else {
            aboutBtn = {
                color: "#fff",
                background: "#212529"
            }
             facilitiesBtn = {
                color: "#fff",
                background: "#686A6E"
            }
    
        }
        
       

        

        return (
            
            <div className="linkContainer">
            <div className="testing">
                <ul>
                    <li class="pageItem">
                      <button style={aboutBtn} onClick={() => this.props.currentpage("about")} href="/">About us</button>
                    </li>
                    

                 <li class="pageItem">
                <button style={facilitiesBtn} onClick={() => this.props.currentpage("facilities")} href="/">Facilites</button>
                </li>
                </ul>
  </div>
</div>
        )
    }
}

export default Selector
