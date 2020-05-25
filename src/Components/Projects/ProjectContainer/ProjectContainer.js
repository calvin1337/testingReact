import React, { Component } from 'react'
import {Row, Container} from "react-bootstrap"
import SingleProject from './SingleProject'
import Selector from '../Selector/Selector'
import { withRouter } from 'react-router'


import cablecutter from "../../../images/ProjectImages/cablecutter.jpg";
import debricap from "../../../images/ProjectImages/debricap.jpg"
import diverskid from "../../../images/ProjectImages/diverskid.jpg"
import hpuskid from "../../../images/ProjectImages/hpuskid.jpg"
import rovskid from "../../../images/ProjectImages/rovskid.jpg"
import spacerframe from "../../../images/ProjectImages/spacerframe.jpg"
import tduframe from "../../../images/ProjectImages/TDUFrame.jpg"
import toolingbasket from "../../../images/ProjectImages/toolingbasket.jpg"




export class ProjectContainer extends Component {

    state = {
        Selected : "all"
    }

    AddClass = (element, name) => {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
            }
      }
      
      RemoveClass = (element, name) => {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
            element.className = arr1.join(" ");
      }

      filterSelection = (c) => {
        this.setState({Selected: c},
            () => {
                this.filterSort(c)
        })

     }

     filterSort = (c) => {
        var x, i;
        x = document.getElementsByClassName("filter");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          this.RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) this.AddClass(x[i], "show");
        }
     }
      
     componentDidMount(){
         this.filterSelection("all")
     }

     postSelectedHandler = (id) => {
        //  this.setState({selectedPostId: id});
    
        this.props.history.push("/projects/" + id);
      }
      
    render() {
        return (
            <div>

            
            <Selector selected={this.state.Selected} filterSelector={(c) => this.filterSelection(c)} />

            <Container style={{marginTop:"50px", marginBottom:"50px"}}>
                <Row style={{margin: "auto"}}>

                    {/*Row 1*/}
                    <div className="filter welding">
                    <SingleProject 
                    projectImage={tduframe}
                    projectName="TDU Frame"
                    id="1"
                    postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    
                    

                    </div>

                    <div className="filter engineering">
                    <SingleProject
                     projectImage={debricap}
                     projectName="Debri Cap"
                     id="2"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                     />
                    </div>

                    <div className="filter machining">
                    <SingleProject 
                     projectImage={toolingbasket}
                     projectName="Tooling Basket"
                     id="3"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>

                    <div className="filter welding">
                    <SingleProject 
                     projectImage={hpuskid}
                     projectName="HPU Skid"
                     id="4"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>
                   {/*Row 2*/}
                   <div className="filter welding">
                    <SingleProject 
                     projectImage={spacerframe}
                     projectName="Spacer Frame"
                     id="5"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>

                    <div className="filter engineering">
                    <SingleProject 
                     projectImage={diverskid}
                     projectName="Divers Skid"
                     id="6"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>

                    <div className="filter machining">
                    <SingleProject 
                     projectImage={rovskid}
                     projectName="ROV Skid"
                     id="7"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>

                    <div className="filter welding">
                    <SingleProject 
                     projectImage={cablecutter}
                     projectName="Cable Cutter Stand"
                     id="8"
                     postSelectedHandler={(id) => this.postSelectedHandler(id)}
                    />
                    </div>

                    
                   
                </Row>
            </Container>
          
           
            </div>
        )
    }
}

export default withRouter(ProjectContainer);
