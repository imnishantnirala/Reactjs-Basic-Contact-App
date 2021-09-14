import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
         props.getContactId(id);
    }
    const contacts = [
        {
            id:"1",
            name:"Nishant",
            email:"nirala123@gmail.com",
        },
    ]
    const renderContactList = contacts.map((contact)=>{
        return(
            <ContactCard 
                contact={contact} 
                clickHander={deleteContactHandler} 
                key={contact.id}
            />
        );
    });
    return(
        <div className="ui celled list" style={{marginTop:"70px"}}>
            <h2> 
                Contact List 
                <Link to="/add">  
                    <button className="ui primary button right floated left aligned" > 
                        <i className="plus square alternate outline icon"></i> 
                        Add Contact
                    </button>
                </Link>
                
            </h2>
            {renderContactList}
        </div>
    );
}

export default ContactList;