import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import ProjectContainer from '../../Components/Projects/ProjectContainer/ProjectContainer'

export class Projects extends Component {
    state = {
        

    }

    
    render() {

        return (
            <div>
                <Header 
                headerTitle="Our Projects"
                />

                <ProjectContainer/>

            </div>
        )
    }
}

export default Projects
