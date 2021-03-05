import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import Header from '../../Components/Header/Header'
import AboutSidebar from '../../Components/newAbout/AboutSideBar/AboutSideBar'
import AboutUs from "../../Components/newAbout/AboutUs"
import OurFacilities from "../../Components/newAbout/OurFacilites"
import WhoAreWe from "../../Components/newAbout/WhoAreWe"
import YearsExp from "../../Components/newAbout/YearsOfExp"
// import { withRouter } from 'react-router'

export class AboutNew extends Component {

    state = {
        activepage : "whoAreWe"
    }

    pageSelector = (page) => {
        this.setState({activepage: page},
            () => {
                console.log(this.state.activepage)
        })
        
    }

    render() {

        let currentPage = ""

        
        if(this.state.activepage === "whoAreWe" ){
            currentPage = <WhoAreWe /> 
        }

        if(this.state.activepage === "service" ){
            currentPage = <AboutUs/>  
        }

        if(this.state.activepage === "ourFacilities" ){
            currentPage = <OurFacilities />
        }

        if(this.state.activepage === "yearsExp" ){
            currentPage = <YearsExp />
        }

        return (
            <React.Fragment>
            <Header 
            headerTitle="About Us" />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <Col md="3">

                            <AboutSidebar
                            activePage={this.state.activepage} 
                            currentpage={(page) => this.pageSelector(page)}
                            
                            />
                        </Col>
                        <Col md="9">

                             {currentPage}
                                
                        </Col>
                    
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default AboutNew
