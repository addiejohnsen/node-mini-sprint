// import statements
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// components
const Quote = function(props) {


  // return
  return (
    <h2 id="quote"> {props.quote}</h2>
  );
};



// export statements
export default Quote;
