import React, { Component } from 'react'
import "./services.css"

export class Machining extends Component {
    render() {
        return (
            <div className="servicesContent">
            <div className="singleServiceImage">
              <img 
              src="http://www.themechampion.com/demo/industriallive/wp-content/uploads/2017/02/Oil_01.jpg" alt=""
              height="315" 
              width="800" />
            </div>
            <div className="servicesTitle">
                <h2 className="serviceHeader">Machining</h2>
            </div>
            <p class="pBold">Machining needs pride, patience and top performance.
            </p>
            <p>At Clockwise we are constantly looking to implement best practices in all aspects of machining. Distribution of designs, drawings and approved manufacturing decisions are continuously monitored for efficiency and value. With trained CNC operators and the ability to write programs at the machines with the ability to introduce editing and fine tuning as required tolerances and finishes can be guaranteed at Clockwise.</p>
                    <div class="servicesSubTitle">
                    <h3>Milling</h3>
            </div>
            <p>Clockwise operate both CNC and manual milling machines to allow versatility and flexibility. With tooling as small as 1mm OD, even the most intricate component can be made, from single units to multiple copies, valve blocks, spools, subsea components and downhole tools can be on your shopping list. From the softest Aluminum to tricky Titanium, we maintain a complete suite of tooling for practically any part.</p>
            <div class="servicesSubTitle">
                    <h3>Lathe Work</h3>
            </div>
            <p>By maintaining CNC lathes, from bar fed micro machines to large diameter DSG manual lathes, Clockwise’s turning range is quite exceptional. Using 4” bore lathes with beds 3 meters long beds, to the smallest of pins, there is a machine for all tasks.</p>
            <div class="servicesSubTitle">
                    <h3>Large Diameter Turning and Boring</h3>
            </div>
            <p>If it’s a large diameter flange or a deep pocketed boring job, Clockwise’s Union horizontal borer is up for the task. With a 4 ft square table and 1500mm height adjustment, this mammoth machine can tackle it.</p>
         
        </div>
        )
    }
}

export default Machining
