import React from 'react';
import PropTypes from 'prop-types';

const style = {
  width: "200px",
  height: "130px"
};

const Contact = (props) => {

  
  
  return (

   
    <div>

      <h1>{props.name}</h1>
      <img style={style} src={props.img} alt="person" />
      <p>{props.email}</p>

    </div>

    
  )


}

Contact.defaultProps = {
  name : "Marc"
}

Contact.propTypes = {

  name: PropTypes.array.isRequired
}
export default Contact;