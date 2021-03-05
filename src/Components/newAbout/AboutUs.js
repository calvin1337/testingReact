import React, { Component } from 'react';
import "./AboutUs.css";

export class AboutUs extends Component {
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
            <h2 class="serviceHeader">Unbeaten Service!</h2>
            </div>
            <p>
            We completely conscious of the need to adjust or services as our customer’s needs change too and our customers success if pivotal on our own.
            </p>
            <p>
            Providing a huge emphasis on relationships, Clockwise will always be there to assist, support and supply our customer’s whenever they ask.        
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quam repellat optio hic a provident saepe, perferendis excepturi corrupti vero neque quae laudantium rerum illo dicta minima explicabo nobis?
            </p>
        </div>
        )
    }
}


export default AboutUs