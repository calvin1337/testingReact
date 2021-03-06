import React from 'react';
import "./services.css";
import Carousel from "../Services/ServicesCarousel/carousel";
import {Col, Row, Container} from "react-bootstrap";

function services() {
    return (
        <div className="services" >
            <Container>
                <Row>
                    <Col md="12">
                    <div class="sectionTitle">
                     <span>Services</span>
                    <h2> Our Services</h2>
                    </div>
                    </Col>
                </Row>
                <Carousel />
            </Container>
        </div>
    )
}

export default services
