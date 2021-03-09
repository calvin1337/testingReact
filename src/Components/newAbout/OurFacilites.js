import React, { Component } from 'react';
import "./AboutUs.css";

export class OurFacilities extends Component {
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
            <h2 class="serviceHeader">Our Facilities</h2>
            </div>
            <p>
            Based just outside of Bridge of Don, at Potterton, is the base for all of Clockwise Technologies operations.
            Clockwise Technologies has a large workshop of 30,000 ft of floorspace and a large yard totaling 23,000ft used for assembly of large project and the storage/handling of raw materials
            </p>
            <p>
            The workshop is divided into five main areas comprising of inspection and quality control/goods in&out, water-jetting, carbon fabrication, clean workshop housing the machining, Aluminum and stainless fabrication and a section for assembly/testing as well as hydraulics.
            </p>
            <p>
            This self-contained workshop is all under one roof and provides and open and accessible site close to the nearest business centres of Dyce and Bridge of Don as well as adjacent to the Balmedie access to Altens and the south of Aberdeen.
            </p>
            <p>
            With a prominent roadside position 2 miles north of Bridge of Don in Aberdeen, and on the edge of the village of Potterton, our facilities are in easy reach of any customer regardless of their location.
            
            </p>
        </div>
        )
    }
}


export default OurFacilities