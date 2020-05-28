import React, { Component } from 'react'
import {Col, Row} from "react-bootstrap";
import "./careerSingle.css"
export class CareerSingle extends Component {
    render() {
        return (
            <div className="careerItem">
                <Row>
                    <Col sm="12" md="12" lg="4">
                        <div className="careerMeta">
                            <span className="careerType">Full Time</span>
                            <span className="career__location">{this.props.jobType}</span>
                        </div>
                     <h4 className="career__title">{this.props.title}</h4>
               
                    </Col>
                    <Col sm="12" md="12" lg="5">
                    <p class="career__desc">
                        {this.props.jobDesc}</p> 
                    </Col>
                    <Col sm="12" md="12" lg="3">
                        <a href="#" class="btn btn__primary btn__bordered">More Info</a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CareerSingle
