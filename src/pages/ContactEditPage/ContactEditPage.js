
import React, { Component } from 'react'
import contactService from '../../services/contactService'
import { Link } from "react-router-dom";
import './ContactEditPage.scss'

class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: '',
            _id: ''
        }
    }
    async componentDidMount() {
        const {id} = this.props.match.params;
        if (id !== 'new') {
            const contact = await contactService.getContactById(id)
            this.setState({contact})
        }
    }
    handleSubmit= ev => {
        ev.preventDefault();
        contactService.saveContact(this.state.contact)
    }
    handleNameChange= ev => {
        this.setState({ contact: {...this.state.contact, name: ev.target.value} });
    }
    handleEmailChange= ev => {
        this.setState({ contact: {...this.state.contact, email: ev.target.value} });
    }
    handlePhoneChange= ev => {
        this.setState({ contact: {...this.state.contact, phone: ev.target.value} });
    }
    render() {

        return (
            <form className="contactEditPage flex-column" onSubmit={this.handleSubmit}>
                <Link to="/contacts">
                    <button type="button">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </Link>
                <input 
                onChange={this.handleNameChange}
                value={this.state.contact.name}
                type="text" placeholder="name"/>
                <input
                onChange={this.handleEmailChange}
                value={this.state.contact.email}
                type="email" placeholder="email"/>
                <input
                onChange={this.handlePhoneChange}
                value={this.state.contact.phone}
                type="text" placeholder="phone"/>
                <button className="capitalize align-self-center">create</button>
            </form>
        )
    }
}

export default ContactEditPage
