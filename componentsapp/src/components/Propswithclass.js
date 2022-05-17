import React, { Component} from 'react';

class Propswithclass extends Component {

    render() {

        const {name, email, phone} = this.props;
        return(
            
            <div>
                <ul>
                    <li>
                        {name}
                    </li>
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

export default Propswithclass;