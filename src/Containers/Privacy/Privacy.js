import React, { Component } from 'react'
import {Row, Container, Col} from "react-bootstrap"

export class Privacy extends Component {
    render() {
        return (
            <div style={{paddingTop:"100px"}}>
                <Container style={{paddingTop:"100px"}}>
                    <Row>
                        <Col md="12">
                            <p>This privacy policy is for the website www.clockwise-tech.com and served by AB Engineering (Laurencekirk) Ltd and governs the privacy of those who choose to use the site. This policy sets out the different areas where user privacy is concerned and outlines the obligations and requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy. </p>
                        </Col>
                        <Col md="12">
                        <div class="sectionTitle">
                        <h2>The Website</h2>
                         </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Privacy
