import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    

    render(){

        const {name,email,phone} = this.props; 

        return( 
            <div className="contactContainer">
                <h4>{name}</h4>
                <ul className="listContainer">
             
                  
                    <li>
                        {email}
                    </li>
                    <li>
                        {phone}
                    </li>

                </ul>
          </div>

        )


    }
}

export default Contact;
