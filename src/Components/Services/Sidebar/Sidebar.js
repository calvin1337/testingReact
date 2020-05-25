import React, { Component } from 'react'
import "./sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

export class Sidebar extends Component {
    render() {

       let currentBtn = {
            color:"#222",
            background:"#f8f8f8"
        }

        if(this.props.activePage === currentBtn){

        }

        return (
            <div className="serviceSideBar">
                 <div  className="serviceList">
                    <ul>
                        <li className={this.props.activePage === "allservices" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("allservices")}>All Services</button>
                        </li>
                        <li className={this.props.activePage === "designAndEngineering" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("designAndEngineering")}>Design & Engineering</button>
                        </li>
                        <li className={this.props.activePage === "fabrication" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("fabrication")}>Fabrication</button>
                        </li>
                        <li className={this.props.activePage === "aluminumWelding" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("aluminumWelding")}>Aluminium Welding</button>
                        </li>
                        <li className={this.props.activePage === "stainlessWelding" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("stainlessWelding")}>Stainless Steels & Exotic Material Welding</button>
                        </li>
                        <li className={this.props.activePage === "machining" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("machining")}>Machining</button>
                        </li>
                        <li className={this.props.activePage === "waterjetCuttingAndProfiling" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("waterjetCuttingAndProfiling")}>Water-jet Cutting & Profiling</button>
                        </li>
                        <li className={this.props.activePage === "hydraulicsAndPiping" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("hydraulicsAndPiping")}>Hydraulics & Piping</button>
                        </li>
                        <li className={this.props.activePage === "rental" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("rental")}>Rental Services</button>
                        </li>
                        <li className={this.props.activePage === "assemblyAndTesting" ? "current" : null}>
                            <button onClick={() => this.props.currentpage("assemblyAndTesting")}>Assembly & Testing</button>
                        </li>
                    </ul>
                </div>
                <div className="ServiceLinks">
                    <ul>
                        <li><a href="/">Current Vacancies</a></li>
                        <li><a href="/">QSHE</a></li>
                    </ul>
                </div>
                    <div className="contactLink">
                    <   h3>Contact us for help?</h3>
                        <p>Have a question or a query get in touch!</p>
                            <p>
                                <a href="/">
                                Contact us
                                <FontAwesomeIcon
                                 icon={faAngleDoubleRight}  
                                 style={iconMargin}
                                />
                                </a>
                            </p>
                    </div>
             </div>
        )
    } 
}

const iconMargin = {
    margin: "0 0 0 10px"
}

export default Sidebar
