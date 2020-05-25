import React, { Component } from 'react'
import {Container, Col, Row} from "react-bootstrap"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

export class ClockwiseMap extends Component {
    render() {
        return (
            <Container style={{height:"300px", paddingRight:"30px"}}>
                <Row>
                    <Col md="12">
                    <Map initialCenter={{
                    lat: 57.228157,
                    lng: -2.100414
                    }}
                    zoom={15}
                    style={style} 
                    google={this.props.google}
                    >
                        <Marker title={"CLOCKWISE TECHNOLOGIES LIMITED"}
                        name={"CLOCKWISE TECHNOLOGIES LIMITED"}/>
                    </Map>
                    
                    </Col>
                </Row>
                
                    
                 
            
            </Container>
        )
    }
}
const style = {
    width: "100%",
    height: "300px"
    }

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA0hXwwcN6GasUom_UzQ8qgJB3M7ZFiyog")
   })(ClockwiseMap);

