import React, { Component } from 'react'
import {Container } from "react-bootstrap"
import Header from "../../Components/Header/Header"

export class News extends Component {
    render() {
        return (
            <React.Fragment>
            <Header 
            headerTitle="Our Services" />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default News
