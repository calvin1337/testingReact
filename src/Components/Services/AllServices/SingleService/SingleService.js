import React, { Component } from 'react';
import "./singleService.css";

export class SingleService extends Component {
    render() {
        return (
            <div className="singleService">
                <img src={this.props.serviceImage} alt="service image"/>
                <h4 className="ServiceTitleOne">{this.props.title}</h4>
                <p>{this.props.info}</p>
                <button type="button" onClick={() => this.props.currentpage(this.props.page)} className="btn btn-outline-secondary">Read more</button>
            </div>
        )
    }
}

export default SingleService
