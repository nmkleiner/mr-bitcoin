import React from 'react';
import { Link } from "react-router-dom";

const ContactList = ({contacts}) => (    
    <div className="contact-list flex-column p-10">
    {
        contacts.map(contact =>
            <Link to={`/contact/${contact._id}`} key={contact._id}>
                <div className="contact" >
                    <img className="circle user-icon mr-10" src={contact.pic} alt={contact.name}></img>
                    <h3>
                        {contact.name}
                    </h3>
                </div>
            </Link>
            )
    }
    </div>
)
            
        
        


export default ContactList;