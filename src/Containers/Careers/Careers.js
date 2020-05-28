import React, { Component } from 'react'
import {Col, Row, Container } from "react-bootstrap";
import Header from "../../Components/Header/Header"
import CareersAccordion from '../../Components/Careers/CareersAccodion/CareersAccordion';
import CareerVacContainer from '../../Components/Careers/CareerVacancies/CareerVacContainer';
export class Careers extends Component {
    render() {
        return (
           <div style={{background:"#F6F6F6"}}>
            <Header 
            headerTitle="Careers At Clockwise" careers="true"/>
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <Container >
                <div className="sectionTitle">
                    <span>Careers</span>
                    <h2>Careers At Clockwise</h2>
                    </div>
                    <Row style={{paddingTop:"20px"}}>
                        <Col md="7">
                            <p style={pStyle}>Clockwise is an established and growing precision engineering company based in Potterton. We have a number blue chip companies who have come to rely on us over the years to deal with their precision engineering requirements.</p>
                            <p style={pStyle}>We work predominantly in the Oil and Gas sector. Our equipment includes CNC Lathes, CNC Mills, Manual Lathes and Mills, Fabrication in Aluminium/ Stainless / Carbon and we have fully equipped inspection and testing facilities.</p>
                        </Col>
                        <Col md="5" sm="12">
                            <CareersAccordion />
                        </Col>
                    </Row>
                        <div className="sectionTitle">
                        <span>Vacancies</span>
                         <h2>Vacancies At Clockwise</h2>
                        </div>
                    <Row style={{paddingTop:"50px", paddingBottom:"50px"}}>

                        <Col md="12" lg="12" sm="12">
                            <CareerVacContainer />
                        </Col>

                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

const pStyle = {
    
        color: "#687187",
        lineHeight: "1.7em",
        fontSize:"16pt"
    
} 

export default Careers
