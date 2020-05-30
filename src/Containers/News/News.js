import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import Header from "../../Components/Header/Header"
import NewsPost from '../../Components/News/SingleNewsPost/NewsPost'

export class News extends Component {
    render() {
        return (
            <React.Fragment>
            <Header 
            headerTitle="Latest News At Clockwise" 
            careers="true"
            />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <NewsPost />
                        <NewsPost />
                        <NewsPost />

                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default News
