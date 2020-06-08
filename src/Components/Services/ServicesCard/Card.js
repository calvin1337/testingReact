import React, { Component } from 'react'
import styles from "./carousel.module.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ServicesCard extends Component {
   

    render() {
        return (
            <Card
      bg="dark"
      key="idx"
      text="black"
     
      style={{ width: '18rem', margin: "10px"}}
    >
      <Card.Img alt={`Image of ${this.props.serviceTitle} Service`} height="190px" width="285px" variant="top" src={this.props.image} />
      <Card.Body >
        <Card.Title style={{fontSize: "1rem"}}>{this.props.serviceTitle}</Card.Title>
        <Card.Text className="text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae error suscipit soluta explicabo autem libero.
        </Card.Text>
          <Link arie-label={`Link to ${this.props.serviceTitle} Service`} to={this.props.linkTo} className="btn btn-secondary" style={{color:"white"}}>Learn More</Link>
      </Card.Body>
    </Card>
        )
    }
}



export default ServicesCard
