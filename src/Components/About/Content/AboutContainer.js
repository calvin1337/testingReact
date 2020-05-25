import React, { Component } from 'react';
import {Col, Row, Container} from "react-bootstrap"
import "./aboutContent.css"
import AboutText from '../AboutText';
import Counter from '../Counter/Counter';
import AboutContentEnd from './AboutContentEnd';

export default class AboutContainer extends Component {
    render() {
        return (
            <section style={{paddingTop: "50px"}}>
                <Container style={{paddingTop: "50px", paddingBottom:"50px"}}>
                    <Row>
                      <Col md="6">
                      <div className="sectionTitle">
                        <span>About us</span>
                        <h2>Who are we</h2>
                    </div>
                    <div className="aboutInfo">
                        <p>
                        Clockwise Technologies has grown to become a reliable ally in delivering critical, engineering projects to its valuable list of customers. With the ability to provide “all engineering” services in-house our company has the ability and track record of making the impossible possible and sometimes on unbelievably short timescales. 
                        </p>
                        <p>
                        Privately owned and crewed with people of exceptional talent, the company has taken a pragmatic and steady approach to developing services and the operating systems that take care of our customers, with an ongoing effort to develop our people, premises, equipment. 
                        </p>
                        <p>
                             We pride ourselves on our can-do attitude to any request and the relationships that we maintain with our customers above all
                        </p>
                    </div>
                      </Col>
                      <Col md="6">
                           <div className="img-container">
                     <img src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" alt="" className="img img-responsive" />
                     <img src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" className="img img-responsive" />
                      <img src="http://themexriver.com/mega-industry/mega-industry/images/about-us/img-3.jpg" alt="" className="img img-responsive" />
                    </div>
                      </Col>
                    </Row>
                </Container>
                <AboutText  />
                <Counter />
            </section>
        )
    }
}
