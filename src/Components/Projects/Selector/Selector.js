import React, { Component } from 'react'
import "./selector.css"
export class Selector extends Component {
    
   

    render() {
        return (
                <div className="ProjectsList">
                    <ul className="list">
                        <li className={this.props.selected === "all" ? "active" : null} onClick={() => this.props.filterSelector("all")}> All </li>
                        <li className={this.props.selected === "welding" ? "active" : null} onClick={() => this.props.filterSelector("welding")}>Welding</li>
                        <li className={this.props.selected === "machining" ? "active" : null} onClick={() => this.props.filterSelector("machining")}>Machining</li>
                        <li className={this.props.selected === "engineering" ? "active" : null} onClick={() => this.props.filterSelector("engineering")}>Enginering</li>
                     </ul>
                </div>
        )
    }
}

export default Selector
