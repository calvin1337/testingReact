import React, { Component } from 'react';
import { Accordion ,  Card} from "react-bootstrap";
import "./careersAccordion.css";
import CareersBtn from './CareersButton/CareersBtn';


export class CareersAccordion extends Component {

   

    render() {


       

        return (
       <div>
           <Accordion>

           <div class="list-group-item">
      <Accordion.Toggle  as={Card.Header} eventKey="0">
      <a  onClick={this.testFunc} class="btn btn-link collapsed">WHAT IS THE WORKING HOURS </a>

      </Accordion.Toggle>
      </div>
    <Accordion.Collapse  eventKey="0">
      <Card.Body id="toggleOne">The standard hours and 8 – 4.30 Monday to Friday</Card.Body>
    </Accordion.Collapse>
 
  
</Accordion>
<Accordion>

           <div class="list-group-item">
      <Accordion.Toggle  as={Card.Header} eventKey="0">
      <a  onClick={this.testFunc} class="btn btn-link collapsed">WHAT ARE THE GROWING OPPORTUNITIES </a>

      </Accordion.Toggle>
      </div>
    <Accordion.Collapse  eventKey="0">
      <Card.Body id="toggleOne">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum accusamus quibusdam magnam aperiam tempora. Vero necessitatibus et alias laboriosam temporibus?</Card.Body>
    </Accordion.Collapse>
 
  
</Accordion>
<Accordion>

           <div class="list-group-item">
      <Accordion.Toggle  as={Card.Header} eventKey="0">
      <a  onClick={this.testFunc} class="btn btn-link collapsed">Candidates must have</a>

      </Accordion.Toggle>
      </div>
    <Accordion.Collapse  eventKey="0">
      <Card.Body id="toggleOne"> 
      <div class="panel-one">
        <p>Candidates must have qualifications and experience relevant to the job applying for. We also expect all Candidates to have</p>
        <ul>
          <li>Ability to understand and follow instruction</li>
          <li>Good communication skills</li>
          <li>Ability to work to time schedules</li>
          <li>Good attitude to work</li>
        </ul>
      </div></Card.Body>
    </Accordion.Collapse>
 
  
</Accordion>
<Accordion>

           <div class="list-group-item">
      <Accordion.Toggle  as={Card.Header} eventKey="0">
      <a  onClick={this.testFunc} class="btn btn-link collapsed">Our Location</a>

      </Accordion.Toggle>
      </div>
    <Accordion.Collapse  eventKey="0">
      <Card.Body id="toggleOne"> 
      <div class="panel-one">
        <p>We are located in Potterton, 5 minutes from Bridge of Don. There is easy access to the bypass (2 mins) and no rush hour traffic issues.</p>
        
        <p>More Information on our facilities can be found here</p>
      </div>
      </Card.Body>
    </Accordion.Collapse>
 
  
</Accordion>
        </div>
        )
    }
}

export default CareersAccordion
