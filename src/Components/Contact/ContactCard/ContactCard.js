import React, { Component } from 'react'
import {Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPhone, faMailBulk, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import "./contactCard.css"

export class ContactCard extends Component {
    render() {
        return (
            <Row style={{marginTop:"50px"}}>
                <Col lg="12" xl="12">
                    <div className="ContactCardContainer">
                        <Row>
                            <Col xl="4" lg="4" md="6">
                                <div className="SingleContactCard">
                                    <div className="partIcon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="partText">
                                         <span class="title">Call Us Now:</span>
                                         <span class="info">01234 567890</span>
                                    </div>                             
                                </div>
                            </Col>
                            <Col xl="4" lg="4" md="6">
                                <div className="SingleContactCard">
                                    <div className="partIcon">
                                        <FontAwesomeIcon icon={faMailBulk} />
                                    </div>
                                    <div className="partText">
                                         <span class="title">Message Us Now:</span>
                                         <span class="info">info@clockwise-tech.com</span>
                                    </div>                             
                                </div>
                            </Col>
                            <Col xl="4" lg="4" md="6">
                                <div className="SingleContactCard">
                                    <div className="partIcon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div className="partText">
                                         <span class="title">Address:</span>
                                         <span class="info">Unit 1A, Gourdieburn, Potterton, AB23 8UY</span>
                                    </div>                             
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ContactCard
