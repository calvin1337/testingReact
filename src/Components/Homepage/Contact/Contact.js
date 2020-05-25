import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMap, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export class Contact extends Component {
    render() {
        return (
        <div className="parallax">
            <div className="section-headline-white">
            <h2>Contact us</h2>
            </div>
        <Container>
            <Row>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faMap}
                    color="#fff"
                    size="2x"
                    />
                    <h3>Address</h3>
                    <p>Unit 1A, Gourdieburn, Potterton, AB23 8UY</p>
                    </div>        
                </Col>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faPhone}
                    color="#fff"
                    size="2x"
                     />
                    <h3>Phone Number</h3>
                    <p>01234 567890</p>
                    </div>
               
                </Col>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#fff"
                    size="2x"
                    />
                    <h3>Email</h3>
                    <p>info@clockwise-tech.com</p>
                    </div>
                
                </Col>
            </Row>
        </Container>
        </div>
        )
    }
}

export default Contact
