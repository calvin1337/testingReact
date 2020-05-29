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
        
        for(let i = 0; i < Jobs.length; i++){
            if(postId === Jobs[i].id){
                this.setState({currentJob: Jobs[i]})
            } 
        }
    }
    render() {
        let essentialExp = ""
        let essentialDisplay = {
            display:"block"
        }
        let essentialSkill = ""
        let ideallyDisplay = {
            display:"block"
        }

        if(this.state.currentJob.essentialExperience !== undefined){
            essentialExp = this.state.currentJob.essentialExperience.map(skill => {
               return  <li>{skill}</li>
            }
            
                )
        } 

        if(this.state.currentJob.essentialSkills !== undefined){
            essentialSkill = this.state.currentJob.essentialSkills.map(skill => {
               return  <li>{skill}</li>
            }
            
                )
        } 

        if(essentialSkill.length === 0){
            ideallyDisplay = {
                display:"none"
            }
        } 

        if(essentialExp.length === 0){
            essentialDisplay = {
                display:"none"
            }
        }

       

        
        return (
            <React.Fragment>
                <Header 
            headerTitle={this.state.currentJob.title}
            careers="true"
            />
            <div className="single-jobs-post" style={{paddingTop: "50px", paddingBottom:"50px"}}>
              <Container>
                <section className="careerBar">
                    <Row className="career-single-info">
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-cogs"></i>
                                    <h4>Department</h4>
                                    <p>{this.state.currentJob.department}</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                    <i class="fas fa-book"></i>
                                    <h4>Qualifications</h4>
                                    <p>See job description</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                   <i class="fas fa-clock"></i>
                                   <h4>Experience</h4>
                                   <p>{this.state.currentJob.experience}</p>
                            </div>
                        </Col>
                        <Col md="3" sm="6">
                        <div class="careerBox">
                                  <i class="fas fa-calendar-times"></i>
                                  <h4>Close Date</h4>
                                  <p>{this.state.currentJob.closedate}</p>
                            </div>
                        </Col>
                    </Row>
                </section>
              <Row>
                  <Col className="jobInfo" md="9">
                  <section class="singleJobDesc">
        
                     <h2 class="job-title"> JOB DESCRIPTION</h2>
  
                     <p>{this.state.currentJob.jobDesc}</p>
                  </section>
                  <section style={essentialDisplay} >
                    <div className="JobEssential">
                        <h2 className="job-title">Essential Experience</h2>
                            <ul class="list-style-two">
                                {essentialExp}
                            </ul>
                    </div>
                </section>
                <section style={ideallyDisplay}>
                    <div class="JobIdle">
                    <h2 class="job-title"> Essential Skills</h2>
                        <ul class="list-style-two">
                            {essentialSkill}
                        </ul>
                    </div>
                </section>
    
                  </Col>
                  <Col></Col>
              </Row>
              </Container>
              </div>
              </React.Fragment>
        )
    }
}

export default CareerDetails
