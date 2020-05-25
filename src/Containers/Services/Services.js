import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import Sidebar from '../../Components/Services/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import AllServices from '../../Components/Services/AllServices/AllServices'
import AlWelding from '../../Components/Services/IndividualServices/AlWelding'
import Fabrication from '../../Components/Services/IndividualServices/Fabrication'
import ExoticWelding from '../../Components/Services/IndividualServices/ExoticWelding'
import Machining from '../../Components/Services/IndividualServices/Machining'
import WaterJet from '../../Components/Services/IndividualServices/WaterJet'


export class Services extends Component {
    
    state = {
        activepage : "allservices"
    }

    pageSelector = (page) => {
        this.setState({activepage: page},
            () => {
                console.log(this.state.activepage)
        })
        
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    
    render() {
        let currentPage = ""

        if(this.state.activepage === "allservices"){
            currentPage = <AllServices currentpage={(page) => this.pageSelector(page)} />
        }
        
        if(this.state.activepage === "designAndEngineering"){
            currentPage = <h3>Design & Engineering</h3>
        }

        if(this.state.activepage === "fabrication"){
            currentPage = <Fabrication />
        }

        if(this.state.activepage === "aluminumWelding"){
            currentPage = <AlWelding />
        }

        if(this.state.activepage === "stainlessWelding"){
            currentPage = <ExoticWelding />
        }

        if(this.state.activepage === "machining"){
            currentPage = <Machining />
        }

        if(this.state.activepage === "waterjetCuttingAndProfiling"){
            currentPage = <WaterJet />
        }

        if(this.state.activepage === "hydraulicsAndPiping"){
            currentPage = <h3>Hydraulics & Piping</h3>
        }

        if(this.state.activepage === "rental"){
            currentPage = <h3>Rental Services</h3>
        }

        if(this.state.activepage === "assemblyAndTesting"){
            currentPage = <h3>Assembly & Testing</h3>
        }
        



        return (
            <React.Fragment>
            <Header 
            headerTitle="Our Services" />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <Col md="3">
                            <Sidebar activePage={this.state.activepage} currentpage={(page) => this.pageSelector(page)}/>
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

export default Services
