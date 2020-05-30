import React, { Component } from 'react'
import {Row, Col} from "react-bootstrap";

export class NewsPost extends Component {

    

    render() {
        return (
            <section className="dark-gray-text newsItem"> 
                <Row className="align-items-center">
                    <Col lg="5" xl="4">
                    <div class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                        <img  src="https://picsum.photos/200/300" height="240px" width="360px" alt="Sample image" />
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                    </div>
                    </Col>
                    <Col lg="7" xl="8">
                    <h4 class="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
                    <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                       quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus
                         et aut officiis cum soluta nobis est eligendi placeat facere aut rerum.</p>
                     <p>by <a class="font-weight-bold">Calvin Donaldson</a>, 28/05/2020</p>
                    <button 
                    onClick={() => this.props.postSelectedHandler(this.props.id)} 
                    class="btn btn-outline-secondary btn-md mx-0 btn-rounded">Read more</button>
                    </Col>
                </Row>
                <hr class="my-5"></hr>
            </section>
        )
    }
}

export default NewsPost
