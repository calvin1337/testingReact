import React, { Component } from 'react';
import {Container, Accordion, Card} from "react-bootstrap";
import "./accordion.css";

export class ProjectAccordion extends Component {

    render() {
       
        

        return (
            <Container>
                <div className="challange-solution-section">
                <Accordion className="panel-group" defaultActiveKey="0">
                        <div className="panel"> 
                        <Accordion.Toggle className="panel-heading" as={Card.Header} eventKey="0">
                        <a >The Challange Was</a>
                        </Accordion.Toggle>
                        <Accordion.Collapse id="toggleOne" eventKey="0">
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate autem qui praesentium corporis doloremque eveniet illum quibusdam error, odit minus similique, repellendus laboriosam veritatis. Sapiente, quod eius, dignissimos quibusdam possimus dolore exercitationem facere nam, adipisci ipsum voluptatum error at.</p>
                        </div>
                        </Accordion.Collapse>
                        </div>
                        <div className="challange-solution-section">  
                        <div className="panel">
                                               
                        <Accordion.Toggle className="panel-heading" as={Card.Header} eventKey="1">
                        <a >Our Solutions Was</a>
                        </Accordion.Toggle>
                        <Accordion.Collapse id="toggleTwo"  eventKey="1">
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate autem qui praesentium corporis doloremque eveniet illum quibusdam error, odit minus similique, repellendus laboriosam veritatis. Sapiente, quod eius, dignissimos quibusdam possimus dolore exercitationem facere nam, adipisci ipsum voluptatum error at.</p>
                        </div>
                        </Accordion.Collapse>
                        </div>   
                        </div>
                    </Accordion>
                </div>
            </Container>
        )
    }
}

export default ProjectAccordion
