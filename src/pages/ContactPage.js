import React, { Component } from 'react';
import contactService from '../services/contactService.js'
import ContactList from '../cmps/ContactList.js'
import ContactFilter from '../cmps/ContactFilter'
// import ContactDetails from '../cmps/ContactDetails.js'
import { Link } from "react-router-dom";
import { observer, observable } from 'mobx-react';



@observer
class HomePage extends Component {
      
    @observable
    contacts = []


    async componentDidMount() {
      var contacts = await contactService.getContacts()
      this.setState({contacts})
    }
    handleNameChange = async e => {
        // this.setState({ nameFilter: e.target.value });
        const {
          target: { value }
        } = e;
        let contacts = await contactService.getContacts();
        contacts = contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({ contacts, nameFilter: value });
     };
    
    render() {
        var {contacts} = this.state
        return (
              <React.Fragment>
                <ContactFilter
                  value={this.state.nameFilter}
                  onFilterNameChange={this.handleNameChange.bind(this)}
                  // onFilterActiveChange={this.handleActiveChange}
                />
                <Link to="/contact/edit/new">
                  <button>
                    <i className="fas fa-plus"></i>
                  </button>
                </Link>
                <ContactList contacts={contacts}/>
              </React.Fragment>
        )
    }
}


export default HomePage;