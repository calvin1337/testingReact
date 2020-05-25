import React, { Component } from 'react'
import data from "../../projects.json";
import {Container, Row, Col} from "react-bootstrap";
import Header from '../../../Header/Header';
import "./projectDetails.css"

export class ProjectDetails extends Component {

    state = {
        testing:"",
        id: ""
    }

    componentDidMount() {
        const postId = this.props.match.params.id
        this.setState({id: postId, testing: data.projects[postId]})
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
                        <img src="https://i.picsum.photos/id/66/200/300.jpg" alt="" />
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
            </React.Fragment>
        )
    }
}

export default ProjectDetails
