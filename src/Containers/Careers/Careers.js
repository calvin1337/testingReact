import React, { Component } from 'react'
import {Col, Row, Container } from "react-bootstrap";
import Header from "../../Components/Header/Header"
import CareersAccordion from '../../Components/Careers/CareersAccodion/CareersAccordion';
export class Careers extends Component {
    render() {
        return (
           <div>
            <Header 
            headerTitle="Careers At Clockwise" />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <Container style={{paddingTop: "50px"}}>
                    <h2>Careers at clockwise</h2>
                    <Row style={{paddingTop:"20px"}}>
                        <Col md="3">
                            <p>Lorem ipsum dolor sit, aet consectetur adipisicing elit. Dolor tenetur quas deleniti minus! Aut asperiores aspernatur consequatur, voluptate molestias in natus possimus veritatis nostrum perspiciatis, sit, inventore quod ipsum maiores.</p>
                        </Col>
                        <Col md="3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor tenetur quas deleniti minus! Aut asperiores aspernatur consequatur, voluptate molestias in natus possimus veritatis nostrum perspiciatis, sit, inventore quod ipsum maiores.</p>
                        </Col>
                        <Col md="6" sm="12">
                            <CareersAccordion />
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default Careers
