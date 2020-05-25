import React, { Component } from 'react'
import "./services.css"

export class WaterJet extends Component {
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
                <h2 className="serviceHeader">Water-Jet Cutting And Profiling</h2>
            </div>
            <p>Clockwise Technologies investment in high pressure precision waterjet machines 
               by industry leading Bystronic, the rolls Royce of water jet machines. 
               Our very large water-jetter can handle full 4 meter x 2 meter sheet, and allow us to produce high quality items with minimal wastage.
            </p>
            <div className="servicesSubTitle">
                <h3>
                Materials and Precision Cuts
                </h3>
            </div>
                <p>The range of materials that can be water-jet cut is astounding and sometimes it appears that there are no limits to what these machines are capable of. As well as catering for all of Clockwise’s customer’s needs, we also spend many hours testing new materials and pushing the boundaries of these fantastic machines.
                </p>
                <p>
                Precision is everything and with fine tuned CNC programming even the smallest of adjustments can be made to provide a finished cut edge for most applications. The ability to process the very large sheets can greatly reduce the cost of individual components.
                </p>
            <div className="servicesSubTitle">
            <h3>The Technology</h3>
            </div>
                <p>With pressures up to 60,000 psi through a diamond orifice and alignment tube measuring 0.8 of a mm these units propel miniscule particles of garnet at incredible speeds. Speeds that can cut through 100mm of steel like butter. These machined compress ordinary tap water using hydraulics and turn it into an unmatched device for cutting practically anything. This, coupled to autonomous CNC controls, guides this cutting head with incredible precision to manufacture intricate shapes and geometric shapes of every combination.</p>
            <div className="servicesSubTitle">
            <h3>Controls and Capabilities</h3>
            </div>
                <p>Each CNC program is unique and at Clockwise we draw every component in Autocad and then convert, and nest the drawings to make the most economical fit possible on the material sheet. With software that intelligently “knows” the complex shape of the remaining complex material left, it can then form memory create a “best fit” for the next job and squeeze another part out of the “waste” sheet. It will never forget and it can nest any shape faster and more efficiently than any human operator.</p>
                <p>Although Clockwise can draft any component or drawing the advantages of this technology is that we can electronically accept any customer drawing format and send this directly to the machine for manufacture. From an email to begin cutting in minutes if needed. No questions, no delay and no errors.</p>
            <div className="servicesSubTitle">
            <h3>Huge Variety Of Materials</h3>
            </div>
                <p>At Clockwise we are used to processing a huge variety of materials, with no heat affected zones, no scorch marks, no sharp edges and no drama. So, any customer who needs complex shapes to be produced from metals or Polycarbonates & plastics to Glass and Granites, in small or large section, these machines and their experienced operators can handle it all.</p>
            <div className="WaterJetList">
                <div class="row">
                    <div class="col-md-6">
                        <ul class="list-style-one">
                            <li>Mild steels in all grades</li>
                            <li>Stainless and duplexes</li>
                            <li>Aluminium alloys</li>
                            <li>Wood</li>
                            <li>Plastics</li>
                            <li>Perspex</li>
                            <li>Brass</li>
                            <li>Copper</li>
                        </ul>
                    </div>
                 <div class="col-md-6">
                        <ul class="list-style-one">
                            <li>Titanium</li>
                            <li>Rubber</li>
                            <li>Foam</li>
                            <li>Glass</li>
                            <li>Ceramics</li>
                            <li>Gasket materials</li>
                            <li>Granite</li>
                            <li>Composites</li>
                        </ul>
                  </div>
                </div>
            </div>
        </div>
        )
    }
}

export default WaterJet
