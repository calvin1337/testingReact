import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import "./facilites.css"
import ClockwiseMap from '../../Components/Facilites/ClockwiseMap';

export class Facilites extends Component {
    render() {
        return (
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <Container style={{paddingTop: "50px"}}>
                <div className="sectionTitle">
                             <span>About us</span>
                            <h2>Our Facilities</h2>
                            </div>
                    <Row>
                   
                        <Col md="12">       
                            <div className="aboutInfo facilities">
                                <p>Based just outside of Bridge of Don, at Potterton, is the base for all of Clockwise Technologies operations.</p>
                                <p>Clockwise Technologies has a large workshop of 30,000 ft of floorspace and a large yard totaling 23,000ft used for assembly of large project and the storage/handling of raw materials</p>
                                <p>
                                The workshop is divided into five main areas comprising of inspection and quality control/goods in&out, water-jetting, carbon fabrication, clean workshop housing the machining, Aluminum and stainless fabrication and a section for assembly/testing as well as hydraulics.</p>
                                <p>
                                This self-contained workshop is all under one roof and provides and open and accessible site close to the nearest business centres of Dyce and Bridge of Don as well as adjacent to the Balmedie access to Altens and the south of Aberdeen.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col md="6" style={{paddingRight:"0"}}>
                            <div className="FacilitesImg">
                                <img src="https://media.istockphoto.com/photos/new-warehouse-building-picture-id685841598?k=6&m=685841598&s=612x612&w=0&h=51ZxejTizSIBwLB1w4eWVnmbJHKrUjyJUt1HtDmhQEU=" alt="outside warehouse"/>
                            </div>
                        </Col>
                        <Col md="6" style={{paddingRight:"0"}}>
                            <div className="FacilitesImg">
                                <img src="https://cdn.thefabricator.com/a/the-secret-to-success-in-metal-fabrication-keep-it-simple-1493320400.jpg" alt="inside warehouse"/>
                            </div>
                        </Col>  
                    </Row>
                    <Row>
                        <Col style={{paddingTop: "50px"}} md="12">
                        <div className="aboutInfo facilities">
                            <p>With a prominent roadside position 2 miles north of Bridge of Don in Aberdeen, and on the edge of the village of Potterton, our facilities are in easy reach of any customer regardless of their location.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ClockwiseMap />
            </div>
        )
    }
}

export default Facilites
