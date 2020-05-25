import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import SingleService from './SingleService/SingleService';

import Welding from "../../../images/ServicesImages/exoticwelding.jpg";
import aluminumwelding from "../../../images/ServicesImages/aluminumwelding.jpg";
import assembly from "../../../images/ServicesImages/assembly.jpg";
import fabrication from "../../../images/ServicesImages/fabrication.jpeg";
import design from "../../../images/ServicesImages/designandenginering.jpg";
import hydrolicpress from "../../../images/ServicesImages/hydrolicpress.jpg";
import waterjet from "../../../images/ServicesImages/waterjetcutting.jpeg";
import machining from "../../../images/ServicesImages/machining.jpg";
import rental from "../../../images/ServicesImages/designandenginering1.jpg"

export class AllServices extends Component {

    render() {

        return (
            <Row className="allservices">
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={design} 
                    title="Design & Engineering"
                    page="designAndEngineering"
                    currentpage={this.props.currentpage}
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={fabrication} 
                    title="Fabrication"
                    page="fabrication"
                    currentpage={this.props.currentpage}
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={aluminumwelding}
                    title="Aluminum Welding"
                    page="aluminumWelding"
                    currentpage={this.props.currentpage}
                    />
                </Col>
                <div className="clearfix" style={spacer50}></div>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={Welding}  
                    title="Stainless Steels & Exotic Material Welding"
                    page="stainlessWelding"
                    currentpage={this.props.currentpage}
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={machining}
                    title="Machining" 
                    page="machining"
                    currentpage={this.props.currentpage}
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={waterjet} 
                    title="Water-jet Cutting & Profiling"
                    currentpage={this.props.currentpage}
                    page="waterjetCuttingAndProfiling"
                    />
                </Col>
                <div className="clearfix" style={spacer50}></div>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={hydrolicpress}
                    title="Hydraulics & Piping"
                    currentpage={this.props.currentpage}
                    page="hydraulicsAndPiping"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={rental} 
                    title="Rental Services"
                    currentpage={this.props.currentpage}
                    page="rental"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage={assembly}
                    title="Assembly & Testing"
                    currentpage={this.props.currentpage}
                    page="assemblyAndTesting"
                    />
                </Col>
            </Row>
        )
    }
}

const spacer50 = {
    height: "50px",
    width:"100%"
}

export default AllServices
