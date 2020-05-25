import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import styles from "./abouttext.module.css";

export class AboutText extends Component {
    render() {
        return (
            <React.Fragment>
            <Container style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <div className={styles.titleContainerAbout}>
                    <span>Who Care!</span>
                    <h2>Unbeaten Service</h2>
                    </div>
                <Row>
                
                    <Col md="6">
                    <div className={styles.imgHolder}>
                        <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="welder" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div className={styles.textHolder}>
                     <div className={styles.aboutInfo}>
                            <p>We completely conscious of the need to adjust or services as our customer’s needs change too and our customers success if pivotal on our own.</p>
                            <p>Providing a huge emphasis on relationships, Clockwise will always be there to assist, support and supply our customer’s whenever they ask. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quam repellat optio hic a provident saepe, perferendis excepturi corrupti vero neque quae laudantium rerum illo dicta minima explicabo nobis?</p>
                            </div>
                    </div>
                    </Col>            
                </Row>
            </Container>
            <Container style={{ paddingBottom:"50px"}}>
                <Row>
                    <Col md="6">
                    <div className="sectionTitle">
                    <span>Infrastructure</span>
                    <h2>Years of experience</h2>
                     </div>
                     <div className="aboutInfo">
                            <p>
                            By investing in the company infrastructure and building on the many years of experience of the employees and management, Clockwise has a very much a can do attitude to any enquiry and problem solving task. 
                            </p>
                            <p>With 21 full time staff capable of producing a vast array of quality products, the company style fits very well into the needs to large and small corporate customers. 
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, delectus molestiae atque architecto ad explicabo quasi est! Eligendi numquam repellat error? Repellat ullam, nesciunt porro at sunt ut eius quod.</p>
                        </div>
      
                    </Col>
                    <Col md="6">
                    <div className={styles.ImgContainer}>
                            <div className={styles.imgItem}>
                            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                            </div>
                            <div className={styles.imgItem1}>
                            <img src="https://images.unsplash.com/photo-1514472796143-14ece5ab7d94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        )
    }
}

export default AboutText
