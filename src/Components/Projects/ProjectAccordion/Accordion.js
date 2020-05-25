import React, { Component } from 'react';
import {Container, Accordion, Card} from "react-bootstrap";
import "./accordion.css";

export class ProjectAccordion extends Component {

    toggleOne = () => {
        let btn = document.getElementById("toggleBtnOne")
        let toggle = document.getElementById("toggleOne")
        
        if(toggle.classList.contains("show")){
            btn.classList.add("collapsed")
            
        }
        else if(!toggle.classList.contains("show")) {
            
            btn.classList.remove("collapsed")
            
        }
    }
    
    toggleTwo = () => {
        let btn = document.getElementById("toggleBtnTwo")
        let toggle = document.getElementById("toggleTwo")
        
        if(toggle.classList.contains("show")){
            btn.classList.add("collapsed")
            
        }
        else if(!toggle.classList.contains("show")) {
            
            btn.classList.remove("collapsed")
            
        }
    }

    componentDidMount() {
        
    }
    render() {
       
        

        return (
            <Container>
                <div className="challange-solution-section">
                <Accordion className="panel-group" defaultActiveKey="0">
                        <div className="panel"> 
                        <Accordion.Toggle className="panel-heading" as={Card.Header} eventKey="0">
                        <a onClick={this.toggleOne} id="toggleBtnOne">The Challange Was</a>
                        </Accordion.Toggle>
                        <Accordion.Collapse id="toggleOne" eventKey="0">
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate autem qui praesentium corporis doloremque eveniet illum quibusdam error, odit minus similique, repellendus laboriosam veritatis. Sapiente, quod eius, dignissimos quibusdam possimus dolore exercitationem facere nam, adipisci ipsum voluptatum error at.</p>
                        </div>
                        </Accordion.Collapse>
                        </div>
                        </Accordion>  
                        </div>
                        <div className="challange-solution-section">  
                        <Accordion className="panel-group" >  
                        <div className="panel">
                                         
                        <Accordion.Toggle className="panel-heading" as={Card.Header} eventKey="1">
                        <a onClick={this.toggleTwo} class="collapsed" id="toggleBtnTwo" >Our Solutions Was</a>
                        </Accordion.Toggle>
                        <Accordion.Collapse id="toggleTwo"  eventKey="1">
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate autem qui praesentium corporis doloremque eveniet illum quibusdam error, odit minus similique, repellendus laboriosam veritatis. Sapiente, quod eius, dignissimos quibusdam possimus dolore exercitationem facere nam, adipisci ipsum voluptatum error at.</p>
                        </div>
                        </Accordion.Collapse>
                        </div>   
                    </Accordion>
                </div>
            </Container>
        )
    }
}

export default ProjectAccordion
