import React, { Component } from 'react';
import contactService from '../services/contactService'
import TransferFund from '../cmps/TransferFund'
import { Link } from "react-router-dom";

class ContactDetails extends Component {

    state = {
        contact: {},
        amount: 0,
        movesList: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = await contactService.getContactById(id)
        this.setState({ contact })
    }

    handleSubmit(ev) {
        ev.preventDefault();
        // console.log('submicht',this.state.amount)
        const { contact, amount } = this.state
        const move = {
            name: contact.name,
            amount
        }
        const movesList = this.state.movesList
        movesList.push(move)
        this.setState({ movesList })
        console.log(movesList)
    }

    handleChange(ev) {
        this.setState({ amount: ev.target.value })
    }

    render() {
        const { contact, amount, movesList } = this.state

        return (
            <div className="contact-details p-10">
                <Link to="/contacts">
                    <button type="button">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </Link>
                <img className="circle user-icon mr-10" src={contact.pic} alt={contact.name}></img>
                <h3>
                    {contact.name}
                </h3>
                <h3>
                    tel: {contact.phone}
                </h3>
                <h3>
                    email: {contact.email}
                </h3>
                <TransferFund
                    amount={amount} contact={contact.name}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)}
                />
                <Link to={`/contact/edit/${contact._id}`}>
                    Edit contact
                </Link>
                Your moves:
                {movesList.map(move => <li key={move.amount * Math.random()}>
                    Transferred {move.amount} to {move.name}
                </li>)}
            </div>
        )
    }

}

export default ContactDetails;
