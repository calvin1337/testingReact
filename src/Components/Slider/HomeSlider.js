import React, { Component } from 'react'
import firstimage from "../../images/HomepageLanding/weldinghp2.jpeg";
import secondimage from "../../images/HomepageLanding/weldinghp.jpg";
import thirdimage from "../../images/HomepageLanding/exoticwelding.jpg";
import AnimatedArrow from "../Homepage/AnimatedArrow/AnimatedArrow";
import Slider from "react-slick";
import "./slider.css";



export class HomeSlider extends Component {
  constructor(props) {
    super(props);
    
    this.changeHandler = this.changeHandler.bind(this)
  }
  
  


  changeHandler(e) {
    this.slider.slickGoTo(e)
    }
    render() {

        var settings = {
            useCSS: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return (
          <div className="darkOverlay">
            
            <Slider className="sliderContainer" ref={c => (this.slider = c)} {...settings}>
            
        <div>
           <div key={0} className="overlay" >
          <img className="one" src={firstimage}  />
          </div>    
        </div>
        <div>
        <div key={1} className="overlay">
          <img  className="one" src={secondimage}  />
          </div>
        </div>
        <div>
        <div key={2} className="overlay">
          <img className="one" src={thirdimage}  />
          </div>
        </div>
      </Slider>
      
      <div className="titleContainer">
      <h1 className="welcomeText">Welcome To Clockwise
      
      </h1>
      <h3 style={{color:"white"}}>We make the impossible possible </h3>
      
      <ul>
      <AnimatedArrow text="Our Services"/>
      <AnimatedArrow text="View Our Projects"/>
      <AnimatedArrow text="Get In Touch"/>
      </ul>

      
      
      
      </div>
      
      <div  className="controlsContainer">
      <div  onClick={() => this.changeHandler(0)} className="control"></div>
      <div  onClick={() => this.changeHandler(1)} className="control"></div>
      <div  onClick={() => this.changeHandler(2)} className="control"></div>
    </div>
    
    </div>

    
        )
    }
}



export default HomeSlider
