import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import FullContent from "../NewsPostFull/NewsFullContent/FullContent"
import Header from '../../Header/Header';


export class NewsPostFull extends Component {
    render() {
        return (
            <React.Fragment>
            <Header 
            headerTitle="News Post"
            careers="true"
            />
            <div className="single-jobs-post" style={{paddingTop: "100px", paddingBottom:"100px"}}>
            <Container>
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12">
                        <FullContent />
                    </Col>
                </Row>
            </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default NewsPostFull
