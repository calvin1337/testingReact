import React, { Component } from 'react'
import "./services.css"

export class AlWelding extends Component {
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
                <h2 class="serviceHeader">Aluminum Welding</h2>
                </div>
                <p>
                  Aluminium welding is without doubt a speciality service. 
                  There are undoubtably fabricators who can weld Aluminium, when required, however at Clockwise we have an entire operation devoted to it.
                </p>
                <p>
                  With multiple full-time welders, these operators never disappoint and have an ability to produce some remarkable products. 
                  With the correct plant and equipment at hand as well as huge stock of aluminium sheet from 1.5mm to 40mm and a full range of extruded materials are their disposal,
                  we can oftentimes be fabricating a customers order within an hour of receiving a purchase order.
                </p>
                <p>
                  With fully approved welding procedures and an unmatched experienced group of operators there are very little in the way of oil related products that have not passed through their hands.
                </p>
                <p>
                  From the simplest bracket to fully loaded ROV skids our workshops have the ability and capability to provide you with everything you need. 
                  So, if you need that instant component manufactured and tested in hours and not days or weeks, 
                  then Clockwise is the place for your next project.
                </p>
            </div>
        )
    }
}

export default AlWelding
