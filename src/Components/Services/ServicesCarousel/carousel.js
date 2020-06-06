import React, { Component } from 'react'
import Slider from "react-slick";
import "./carousel.css";
import Card from "../ServicesCard/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Welding from "../../../images/ServicesImages/exoticwelding.jpg";
import aluminumwelding from "../../../images/ServicesImages/aluminumwelding.jpg";
import assembly from "../../../images/ServicesImages/assembly.jpg";
import fabrication from "../../../images/ServicesImages/fabrication.jpeg";
import design from "../../../images/ServicesImages/designandenginering.jpg";
import hydrolicpress from "../../../images/ServicesImages/hydrolicpress.jpg";
import waterjet from "../../../images/ServicesImages/waterjetcutting.jpeg";
import machining from "../../../images/ServicesImages/machining.jpg";
import rental from "../../../images/ServicesImages/designandenginering1.jpg"

import {faAngleDoubleRight, faAngleDoubleLeft} from "@fortawesome/free-solid-svg-icons";



function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div 
      className={className}
      onClick={onClick}
  >
      <FontAwesomeIcon
          icon={faAngleDoubleRight}
          color="#cacfd2"
          size="2x"
      />
  </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return (
      <div 
      className={className}
      onClick={onClick}
  >
      <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          color="#cacfd2"
          size="2x"
      />
  </div>
    );
  }


export class carousel extends Component {
    


    render() {
        const settings =  {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
        }
        ]
    }
        return (
           <div>
        
        <Slider {...settings}>
          <div>
            <Card linkTo="/services/designAndEngineering" image={design} serviceTitle="Design & Engineering" />
          </div>
          <div>
            <Card linkTo="/services/fabrication" image={fabrication} serviceTitle="Fabrication"/>
          </div>
          <div>
            <Card linkTo="/services/aluminumWelding" image={aluminumwelding} serviceTitle="Aluminum Welding" />
          </div>
          <div>
          <Card linkTo="/services/stainlessWelding" image={Welding} serviceTitle="Stainless Steels & Exotic Material "/>
          </div>
          <div>
          <Card linkTo="/services/machining" image={machining} serviceTitle="Machining"/>
          </div>
          <div>
          <Card linkTo="/services/waterjetCuttingAndProfiling" image={waterjet} serviceTitle="Water-jet cutting & profiling" />
          </div>
          <div>
          <Card linkTo="" image={hydrolicpress} serviceTitle="Hydraulics & Piping" />
          </div>
          <div>
          <Card linkTo="/services/hydraulicsAndPiping" image={rental} serviceTitle="Rental Services" />
          </div>
          <div>
          <Card linkTo="/services/assemblyAndTesting" image={assembly} serviceTitle="Assembly & Testing" />
          </div>
        </Slider>
      </div>
    );
        
    }
}

export default carousel
