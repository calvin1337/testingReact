import React, { Component } from 'react';
import "./header.css";

export class Header extends Component {

   
    render() {

        let headerImage = {}
        if(this.props.headerTitle === "About Us"){
            headerImage = {
                backgroundImage: `url("https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80")`
            }
        }

        if(this.props.headerTitle === "Our Services" || this.props.careers){
            headerImage = {
                backgroundImage: `url("https://ide-nc.com/static/images/meds/meds_2.jpg")`
            }
        }

        if(this.props.headerTitle === "Our Projects" ){
            headerImage = {
                backgroundImage: `url("https://ide-nc.com/static/images/meds/meds_2.jpg")`
            }
        }
        

        return (
            <div style={headerImage} className="Landing">
            <div className="Landing-overlay">
             <h1>{this.props.headerTitle}</h1>
             </div>
            </div>
        )
    }
}



export default Header
