import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import Header from '../../Components/Header/Header'
import AboutSidebar from '../../Components/newAbout/AboutSideBar/AboutSideBar'
import AboutUs from "../../Components/newAbout/AboutUs"
// import { withRouter } from 'react-router'

export class AboutNew extends Component {
    render() {
        return (
            <React.Fragment>
            <Header 
            headerTitle="About Us" />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <Col md="3">
                            <AboutSidebar />
                        </Col>
                        <Col md="9">
                            <AboutUs />                            
                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default AboutNew
