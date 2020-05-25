import React, { Component } from 'react';
import "./projects.css"

export class SingleProject extends Component {
    

    

    render() {
        return (
            <React.Fragment>
            <div className="filter-item" >
                <div className="single-project-item">
                    <div className="img-holder">
                    <img src={this.props.projectImage} alt="Project Image" />
                    <div className="overlay-style-one">
                        <div className="box">
                        <div className="content">
                            <button onClick={() => this.props.postSelectedHandler(this.props.id)} >View Project</button>
                            <div className="text-holder">
                            <h4>{this.props.projectName}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
            </React.Fragment>
        )
    }
}

export default SingleProject
