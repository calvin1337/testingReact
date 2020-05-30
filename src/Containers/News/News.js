import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import Header from "../../Components/Header/Header"
import { withRouter } from 'react-router'

import NewsPost from '../../Components/News/SingleNewsPost/NewsPost'

export class News extends Component {
    postSelectedHandler = (id) => {
        
        this.props.history.push("/news/" + id);
      }

    render() {

       
          
        return (
            <React.Fragment>
            <Header 
            headerTitle="Latest News At Clockwise" 
            careers="true"
            />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <NewsPost id="postone" postSelectedHandler={(id) => this.postSelectedHandler(id)}/>
                        <NewsPost id="posttwo" postSelectedHandler={(id) => this.postSelectedHandler(id)}/>
                        <NewsPost id="postthree" postSelectedHandler={(id) => this.postSelectedHandler(id)}/>

                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(News);
