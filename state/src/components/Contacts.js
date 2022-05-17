import React, {Component} from 'react'
import Contact from './Contact.js';
import './Contact.css';

class Contacts extends Component {
   

     state = {
            contacts: [
                {   id: '1',
                    name: 'Reda Hammada',
                    email:'reda@mail.com',
                    phone: '555-555-5555'  
                },

                {   id: '2',
                    name: 'Nadir Inab',
                    email: 'nadir@mail.com',
                    phone: '555-555-5555'
                }
            ]

        }


    
         onShow = () => {
            console.log("hello world");
        }

    render(){


        const{contacts} = this.state;
        
        return(

                



            <div >
                

                <div> {contacts.map(contact=>
               ((<Contact name= {contact.name}
                            email = {contact.email}
                            phone = {contact.phone}
                           

                      
                />)))}
                </div>  
            </div>

        )
    }
}   

export default Contacts;