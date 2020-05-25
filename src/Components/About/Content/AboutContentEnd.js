import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";

export class AboutContentEnd extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="6">
                        <div class="sectionTitle">
                        <span>About us</span>
                        <h2>Who are we</h2>
                         </div>
                        </Col>
                        <Col md="6"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutContentEnd
