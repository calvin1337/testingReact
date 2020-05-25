import React, { Component } from 'react';
import "./services.css"


export class ExoticWelding extends Component {
    render() {
        return (
            <div className="servicesContent">
            <div className="singleServiceImage">
              <img src="http://www.themechampion.com/demo/industriallive/wp-content/uploads/2017/02/Oil_01.jpg" alt=""
                   height="315" width="800" />
            </div>
            <div className="servicesTitle">
              <h2 className="serviceHeader">Stainless Steel And Exotic Welding</h2>
            </div>
             <p className="pBold">
     Everybody likes shiny things and there is nothing more alluring that a newly fabricated and welded stainless product, correct?
            </p>
            <p>Stainless and exotic welding is truly an art form. The aesthetics of a properly manufactured tank or spool in a stainless material exudes quality. At Clockwise we get it. We understand that the product you have is undoubtably your biggest advertisement, so we make incredible efforts to manufacture all stainless products to a standard that make people stop and look at.</p>
            <p>
              Welding stainless is not a noisy affair, it is a gentle application of materials, so the welding teds to look smooth and perfectly formed and those who appreciate this know quality welding when they see it.
            </p>
            <div className="servicesSubTitle">
              <h3>
                Craftsmanship At Its Finest
              </h3>
              </div>
              <p>
                With a full suite of sheet materials in stock from 1mm to 20mm ready to be waterjet to the most complex of shapes, our stainless welders are always ready for the next project. A stainless tank fabrication or hydraulic reservoir can be manufactured in as little as a few days, so forget all the long lead times in history and come and see where we turn raw stock into completed product in an incredible short space of time.
              </p>
              <p>
                With full approved DNV procedures in stainless, duplex and super duplex, we can supply you with that single spool to a fully functioning high capacity system in many materials.
                Housed with our aluminium in a dedicated clean workshop of 9000 square ft, we have the capacity and work areas for multiple projects at once.
              </p>
              <div className="ServicesLinkTo">
                 <div className="servicesSubTitle">
                   <h3>Setting Standards</h3>
                </div>
                <p>
                  Have a look at some of our standard items and how stainless welding should look like.
                </p>
            
                 <div className="subServicesImage">
                   <img src="https://i.pinimg.com/originals/0a/96/d0/0a96d00e1c0af876e41b88ebfd6d50db.jpg" alt="" />
                   <img src="https://i.pinimg.com/originals/44/8e/39/448e391f912e16aafc78a67ec53dddf2.jpg" alt="" />
                </div>
                 <div className="servicesBtn">
                   <button className="btn btn-outline-secondary">
                 See More
                </button>
                </div>
                
              </div>
            </div>
              
        )
    }
}

export default ExoticWelding
