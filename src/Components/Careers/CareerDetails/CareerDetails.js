import React, { Component } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Header from "../../../Components/Header/Header"
import Jobs from "../../../VacanciesData/Vacancies"
import "./careerDetails.css"

export class CareerDetails extends Component {

    state = {
        currentJob:"",
        id: ""
    }

    componentDidMount() {
        const postId = this.props.match.params.id
        console.log(postId)
        console.log(Jobs)

        for(let i = 0; i < Jobs.length; i++){
            if(postId === Jobs[i].id){
                this.setState({currentJob: Jobs[i]})
            } 
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header 
            headerTitle={this.state.currentJob.title}
            />
            <div className="single-jobs-post" style={{paddingTop: "50px", paddingBottom:"50px"}}>
              <Container style={{paddingTop: "50px"}}>
                <section className="careerBar">
                    <Row className="career-single-info">
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Department</h4>
                                    <p>Engineering</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Department</h4>
                                    <p>Engineering</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Department</h4>
                                    <p>Engineering</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Department</h4>
                                    <p>Engineering</p>
                            </div>
                        </Col>
                    </Row>
                </section>
              </Container>
              </div>
              </React.Fragment>
        )
    }
}

export default CareerDetails
