import React, { Component } from 'react'
import "./careerVac.css"
import CareerSingle from './CareerSingle/CareerSingle'

export class CareerVacContainer extends Component {
    render() {
        return (
            <div className="careersContainer">
                <CareerSingle 
                jobDesc="We will grow substantially this year. In order to support this growth, we require a works manager.
                         We are just looking for the right person, with the right drive, determination and cultural fit for a privately owned small business"
                title="Engineering Works Manager"   
                        />
                <CareerSingle
                title="Hydraulic Technician"
                jobDesc="We have immediate positions for hydraulic technician. We have an exciting opportunity to join our company, with great chances of career progression for the right candidates. We offer an excellent salary with many benefits."
                />
                <CareerSingle 
                title="Coded Welder"
                jobType="Immediate Start"
                jobDesc="Due to current workload we require immediate start CODED welders We offer an excellent salary with many benefits. The standard hours are 8 – 4.30 Monday to Friday with overtime available"
                />
            </div>
        )
    }
}

export default CareerVacContainer
