// import statements
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// react component

const Form  = function (props) {
  // return statement
  return (
       <form>
          <input type="text" id="text-b" />
            <button onClick={props.onSubmit}id="submit">Submit</button>
            <p id="response"></p>
        </form>
  );
};


// export statements
export default Form;