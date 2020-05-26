import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import ContactCard from '../../Components/Contact/ContactCard/ContactCard';
import ContactForm from '../../Components/Contact/ContactForm/ContactForm';

export class Contact extends Component {
    render() {
        return (
            <div style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <Container style={{paddingTop: "50px"}}>
                    <ContactCard />
                    <ContactForm />
                </Container>
            </div>
        )
    }
}

export default Contact
