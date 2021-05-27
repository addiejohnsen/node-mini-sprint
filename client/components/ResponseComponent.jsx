// import statements
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


// React component
const Response = function (props) {
  return (
    <p id="response">{props.response ? "Thank you for submitting your quote!" : ""}</p>
  )
}


// export statement
export default Response;