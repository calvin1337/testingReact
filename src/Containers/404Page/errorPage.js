import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {Link } from "react-router-dom";
import "./errorPage.css";

export class errorPage extends Component {
    render() {
        return (
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <Container style={{paddingTop:"50px",}}  >
                    <Row style={{marginTop:"100px"}}>
                        <Col lg="6">
                            <div class="page-error-404">
                            404
                            </div>
                        </Col>
                        <Col lg="6">
                            <div class="text-left errorPage">
                             <h3>Oops, This Page Could Not Be Found!</h3>
                             <p class="lead">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                            </p>
                            </div>
                        </Col>
                        <Col className="text-center mt-5" md="12" >
                            <Link className="itemBtn" to="/">Back To Home</Link>
                        </Col>
                    </Row>
                </Container>

                
            </div>
        )
    }
}

export default errorPage
