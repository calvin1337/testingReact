import React, { Component } from 'react'
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import "./landing.css"

export class LandingImage extends Component {
    render() {
        return (
            <section id="hero"> 
                <div class="hero-container">
                    <h1 >Welcome To Clockwise</h1>
                    <h3 style={{color:"white"}}>We make the impossible possible </h3>
                     <ul>
                        <AnimatedArrow text="Our Services"/>
                        <AnimatedArrow text="View Our Projects"/>
                        <AnimatedArrow text="Get In Touch"/>
                     </ul>
                 </div>
            </section>
        )
    }
}

export default LandingImage
