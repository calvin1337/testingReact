import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./counter.css"
import {faBriefcase, faSmile, faUser} from "@fortawesome/free-solid-svg-icons";
import VisibilitySensor from 'react-visibility-sensor';

export class CounterContainer extends Component {

   
    onVisibilityChange = isVisible => {
        if (isVisible) {
          this.counter()
        }
      }
    
        
      counter = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 40000; 
		
		counters.forEach(counter => {
  
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
        
                
                const inc = target / speed;
        
              
                if (count < target) {
                   
                    counter.innerText = Math.ceil(count + inc);
                    
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
        
            updateCount();
        });

		
    }

   
    
     
      
      
    
      
      
    render() {

       


        return (
            <VisibilitySensor onChange={this.onVisibilityChange} offset={{
                top:
                  10
              }} delayedCall>
            <div className="parallax" >
                
                <Container style={{paddingTop:"80px"}} >
                <div className="section-headline-white" >
                 <h2>Counter</h2>
                </div>
                <Row>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0 counter" data-target="42">0</h4>
                            </div>
                            <div className="col-6">
                            <p className="text-uppercase font-weight-normal mb-1">Projects</p>
                            <FontAwesomeIcon size="2x" icon={faBriefcase}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0 counter" data-target="200">0</h4>
                            </div>
                            <div className="col-6">
                            <p class="text-uppercase font-weight-normal mb-1">Customers</p>
                            <FontAwesomeIcon size="2x" icon={faUser}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0pm "> 
                            <span className="d-flex justify-content-end">
                                <span class="counter" data-target="100">0</span> %</span></h4>
                            </div>
                            <div className="col-6">
                            <p className="text-uppercase font-weight-normal mb-1">Satisfaction</p>
                            <FontAwesomeIcon size="2x" icon={faSmile}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </div>
            </VisibilitySensor>
        )
    }
}

export default CounterContainer
