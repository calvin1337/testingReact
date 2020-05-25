import React from 'react'
import HomeSlider from "../../Components/Slider/HomeSlider";
import AboutIntro from '../../Components/Homepage/AboutIntro';
import Services from "../../Components/Services/services";
import Contact from "../../Components/Homepage/Contact/Contact"
import Clients from '../../Components/Clients/Clients';
import LandingImage from '../../Components/Homepage/LandingImage/LandingImage';

function Homepage() {
    return (
            <div>
           
            <LandingImage />
            <AboutIntro />
            <Services />
            <Contact />
            <Clients/>
        </div>
    )
}

export default Homepage
