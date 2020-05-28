import React, { Component } from 'react'

export class CareersBtn extends Component {
    render() {
        return (
            
        <a  class="btn btn-link collapsed">{this.props.children} </a>
       
        )
    }
}

export default CareersBtn
