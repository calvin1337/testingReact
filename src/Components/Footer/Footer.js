import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import {Link } from "react-router-dom"
import Logo from "../../images/logowhite.png"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-middle">
            <Container>
              <Row>
                <Col md="3" sm="12">
                    <div className="footer-pad">
                        <h4 className="footertitle">CLOCKWISE</h4>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/privacy">Privacy</Link></li>
                            <li><Link to="/contact">Get in touch</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col md="3" sm="12">
                    <div className="footer-pad">
                      <h4 className="footertitle">SERVICES</h4>
                        <ul className="list-unstyled">
                          <li><Link to="/services/designAndEngineering" >Design & Engineering</Link></li>
                          <li><Link to="/services/fabrication" >Fabrication</Link></li>
                          <li><Link to="/services/aluminumWelding">Aluminium Welding</Link></li>
                          <li><Link to="/services/stainlessWelding" >Stainless Steels & Exotic Material Welding</Link></li>
                          <li><Link to="/services/machining" >Machining</Link></li>
                          <li><Link to="/services/waterjetCuttingAndProfiling" >Water-jet Cutting & Profiling</Link></li>
                          <li><Link to="/services/hydraulicsAndPiping">Hydraulics & Piping</Link></li>
                          <li><Link to="/services/rental" >Rental Services</Link></li>
                         <li><Link to="/services/assemblyAndTesting" >Assembly & Testing</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col md="3" sm="12">
                    <div className="footer-pad">
                        <h4 className="footertitle">NEWS</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">New Service- Offshore</a></li>
                                <li><a href="#">News Article One</a></li>
                                <li><a href="#">News Article Two</a></li>
                                <li><a href="#">News Article Three</a></li>
                            </ul>
                    </div>
                </Col>
                <Col md="3" sm="12" >
                    <h4 className="footertitle">Contact</h4>
                      <ul className="address">
                         <li>Unit 1A, Gourdieburn</li>
                         <li>Potterton, AB23 8UY</li>
                         <li>01234 567890</li>
                         <li>info@clockwise-tech.com</li>
                    </ul>
                            <div className="companyLogo">
                            <img alt="company logo" src={Logo}></img>

                            </div>

                </Col>
              </Row>
              <Row>
                <Col md="12">
                    <div class="copy">
                    <p class="text-center">&copy; Clockwise Technologies 2020. All rights reserved. SC520113</p>
                    </div>
                 </Col>
              </Row>
            </Container>
            </div>
        </footer>
    )
}




export default Footer
