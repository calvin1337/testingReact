import React, { Component } from 'react'
import {Col, Row } from "react-bootstrap"

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet illo corrupti sint explicabo error impedit dolorem dolore architecto temporibus sunt fuga nam alias obcaecati, maiores quos unde? Sit, ex!</p>
                        <div className="contactImgContainer">
                        <img src="https://calvin1337.github.io/clockwise/images/logo2.png" alt="clockwise logo" />
                        </div>
                    </div>
                </Col>
                <Col lg="7">
                
                </Col>
            </Row>
        )
    }
}

export default ContactForm
