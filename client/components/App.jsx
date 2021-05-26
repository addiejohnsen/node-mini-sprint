// Import statements
import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './FormComponent.jsx';
import QuoteComponent from './QuoteComponent.jsx';
import ResponseComponent from './ResponseComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state goes within the constructor
    this.state = {

    };
  }
  // life cycle methods
  // componentDidMount() {

  // }

  // Add our click handler here ?

  // render
  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <div id="quoteDiv">
          <QuoteComponent />
        </div>
        FORM COMPONENT
        <FormComponent />
        <div id="responseDiv">
          <ResponseComponent />
        </div>
      </div>
    );
  };
}

export default App;