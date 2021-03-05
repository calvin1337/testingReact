import React, { Component } from 'react';
import "./AboutUs.css";

export class YearsOfExp extends Component {
    render() {
        return (
            <div className="servicesContent">
            <div className="singleServiceImage">
              <img 
              src="http://www.themechampion.com/demo/industriallive/wp-content/uploads/2017/02/Oil_01.jpg" alt=""
              height="315" 
              width="800" />
            </div>
            <div class="servicesTitle">
            <h2 class="serviceHeader">Who Are We?</h2>
            </div>
            <p>
            Clockwise Technologies has grown to become a reliable ally in delivering critical, 
            engineering projects to its valuable list of customers. With the ability to provide “all engineering” services in-house our company has the ability and track record of making the impossible possible and sometimes on unbelievably short timescales.
            </p>
            <p>
            Privately owned and crewed with people of exceptional talent, the company has taken a pragmatic and steady approach to developing services and the operating systems that take care of our customers, with an ongoing effort to develop our people, premises, equipment.
            </p>
            <p>
            We pride ourselves on our can-do attitude to any request and the relationships that we maintain with our customers above all!
            </p>
        </div>
        )
    }
}


export default YearsOfExp