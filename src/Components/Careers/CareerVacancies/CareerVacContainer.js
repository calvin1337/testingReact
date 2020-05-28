import React, { Component } from 'react'
import "./careerVac.css"
import { withRouter } from 'react-router'

import CareerSingle from './CareerSingle/CareerSingle'

export class CareerVacContainer extends Component {

    postSelectedHandler = (id) => {
        //  this.setState({selectedPostId: id});
    
        this.props.history.push("/careers/" + id);
      }

    render() {
        return (
            <div className="careersContainer">
                <CareerSingle 
                jobDesc="We will grow substantially this year. In order to support this growth, we require a works manager.
                         We are just looking for the right person, with the right drive, determination and cultural fit for a privately owned small business"
                title="Engineering Works Manager" 
                id="engineeringManager"  
                postSelectedHandler={(id) => this.postSelectedHandler(id)}
                        />
                <CareerSingle
                title="Hydraulic Technician"
                id="hydraulicTechnicaian"
                jobDesc="We have immediate positions for hydraulic technician. We have an exciting opportunity to join our company, with great chances of career progression for the right candidates. We offer an excellent salary with many benefits."
                postSelectedHandler={(id) => this.postSelectedHandler(id)}
                />
                <CareerSingle 
                title="Coded Welder"
                id="codedWelder"
                postSelectedHandler={(id) => this.postSelectedHandler(id)}
                jobType="Immediate Start"
                jobDesc="Due to current workload we require immediate start CODED welders We offer an excellent salary with many benefits. The standard hours are 8 – 4.30 Monday to Friday with overtime available"
                />
            </div>
        )
    }
}

export default withRouter(CareerVacContainer);
