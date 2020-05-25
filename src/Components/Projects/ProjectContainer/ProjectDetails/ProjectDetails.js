import React, { Component } from 'react'
import projectData from "../../ProjectData";
import {Container, Row, Col} from "react-bootstrap";
import Header from '../../../Header/Header';
import "./projectDetails.css"
import Accordion from '../../ProjectAccordion/Accordion';

import image from "../../../../images/ProjectImages/cablecutter.jpg"

export class ProjectDetails extends Component {

    state = {
        testing:"",
        id: ""
    }

    componentDidMount() {
        console.log(projectData)
        const length = projectData.length - 1
        const postId = this.props.match.params.id
        if(postId > length){
            this.props.history.push("/projects");
        } else
        this.setState({id: postId, testing: projectData[postId]})
      }

    render() {

        return (
            <React.Fragment>
            <Header 
            headerTitle={this.state.testing.name}
            />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
              <Container style={{paddingTop: "50px"}}>
                <Row>
                    <Col md="8">
                        <div className="projectImageContainer">
                        <img src={this.state.testing.image} alt="" />
                        </div>
                    </Col>
                    <Col md="4">
                    <div className="project-info">
                        <h2>Details:</h2>
                        <ul>
                        <li><span>Project Name:</span> Example 1</li>
                        <li><span>Client:</span>John Doe</li>
                        <li><span>Data:</span>23/05/2020</li>
                        <li><span>Category:</span>Welding</li>
                        <li><span>Time:</span>2 Month</li>            
                        </ul>
                        <div className="ClientLink">
                            <a href="/">Visit Website</a>
                        </div>
                     </div>
                    </Col>
                </Row>
              </Container>
                
            </div>
            <Accordion />
            </React.Fragment>
        )
    }
}

export default ProjectDetails
