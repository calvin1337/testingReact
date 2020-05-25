import React, { Component } from 'react'
import "./services.css"
export class Fabrication extends Component {
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
                    <h2 className="serviceHeader">Fabrication</h2>
                </div>
                    <p>For carbon steel applications we offer multi coded welding facilities with all procedures approved by DNV. Items manufactured in TIG / MIG / MMA, and sub arc services too</p>
                    <p>By having the ability to fabricate in carbon, stainless and aluminum, each one deserves their own introduction and at Clockwise we treat each on as a specialty service as each one requires different approaches and competencies. Far from being a “catch all” fabricator, Clockwise quality in all of these materials are at an exceptional level. With almost two hundreds of years of combined experience in welding, our operators and supervisors are at the pinnacle of their profession.</p>
                    <p>We fabricate in carbon spools and crossovers, tanks and skids, davits and diving equipment and practicalkly everything in-between. From the smallest bracket to goliath lifeboat transport cages, each fabrication follows exactly the same process, job pack preparation and attention. If you require an environmental enclosure or a complete enclosure for your environment, we are happy to discuss any project no matter how small or large.</p>
                <div class="servicesSubTitle">
                    <h3>Carbon Fabrication</h3>
                </div>
                    <p>Our carbon fabrication workshop spans nearly 12,000 square feet and fully equipped with all the usual press brakes, guillotine, rolling, plasma and gas cutting where our shop can accommodate frames as large as 7meters x 9meters x 5 meters units through our large capacity roller doors.</p>
                <ul class="list-style-one">
                    <li>
                        Welding Procedures to ASME IX/AWS D1.1
                    </li>
                    <li>
                        Fully Equipped Workshop with Sheet Metal Capability
                        </li>
                    <li>
                        Forming Using Press Brake & Rolling
                        </li>
                    <li>
                        Competent and coded welders for both on and offshore
                        </li>
                </ul>     
            </div>
        )
    }
}

export default Fabrication
