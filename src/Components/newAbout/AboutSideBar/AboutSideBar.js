import React, { Component } from 'react'
import "../../Services/Sidebar/sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom"

export class AboutSidebar extends Component {
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
                        <li className="current">
                            <button>Who are we?</button>
                        </li>
                        <li>
                            <button>Unbeaten service</button>
                        </li>
                        <li>
                            <button>Years of experience</button>
                        </li>
                        <li>
                            <button>Our facilities</button>
                        </li>
                    </ul>
                </div>
                <div className="ServiceLinks">
                    <ul>
                        <li><Link to="/careers">Current Vacancies</Link></li>
                        <li><button>QSHE</button></li>
                    </ul>
                </div>
                    <div className="contactLink">
                    <h3>Contact us for help?</h3>
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

export default AboutSidebar