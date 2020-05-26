import React, { Component } from 'react'
import {Col, Row } from "react-bootstrap"
import "./contactForm.css"

export class ContactForm extends Component {
    render() {
        return (
            <Row>
                <Col lg="5">
                    <div className="contactInfo">
                        <div className="contactTitleContainer">
                            <h3 className="contactTitle">
                            Call Now Or 
                            <br/>
                             Write A Message
                            </h3>
                        </div>
                        <p>If you have any question or inquires don't hesitate to contact us we are incredibly responsive to your requests and value your questions and we'll get back to you right away.</p>
                        <div className="contactImgContainer">
                        <img src="https://calvin1337.github.io/clockwise/images/logo2.png" alt="clockwise logo" />
                        </div>
                    </div>
                </Col>
                <Col lg="7">
                    <div className="contactFormContainer">
                        <form action="#" className="contactForm">
                            <Row>
                                <Col lg="6">
                                    <div style={{marginTop:"0px"}} className="inputBox">
                                    <input type="text" placeholder="Your name" />
                                    </div>
                                </Col>
                                <Col lg="6"> 
                                    <div style={{marginTop:"0px"}} className="inputBox">
                                    <input type="email" placeholder="Email Address" />
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="inputBox">
                                    <input type="text" placeholder="Phone Number" />
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="inputBox">
                                    <input type="text" placeholder="Subject" />
                                    </div>
                                </Col>
                                <Col lg="12">
                                    <div class="inputBox">
                                    <textarea placeholder="Write Message"></textarea>
                                    </div>
                                </Col>
                                <Col className="text-right">
                                    <div class="inputBox">
                                    <button class="SubmitBtn" type="submit">Submit</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div> 
                </Col>
            </Row>
        )
    }
}

export default ContactForm
