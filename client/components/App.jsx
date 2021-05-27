// Import statements
import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './FormComponent.jsx';
import QuoteComponent from './QuoteComponent.jsx';
import ResponseComponent from './ResponseComponent';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      response: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // runs after the component has been rendered to DOM
    const { quote } = this.state;
    console.log(this.state);
    this.getQuote();
  };


  // CONTROLLERS HERE
  getQuote(callback) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/quote',
      contentType: 'applcation/json',
      data: {},
      success: (data) => {
        console.log('ajax worked');
        console.log(data);
        // setState
        this.setState({
          quote: data,
        })
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  };


  addQuote(quote) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/quote',
      data: { quote: quote },
      success: (result) => {
        console.log('successfully posted');
        var testing = true;
        this.setState({
          response: testing,
        })
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  };

  // Add our click handler
  handleSubmit(e) {
    e.preventDefault();
    let quote = $('input').val();
    this.addQuote(quote);
    $("input:text").val("");
  };


  // render
  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <div id="quoteDiv">
          <QuoteComponent quote={this.state.quote} />
        </div>
        <FormComponent quote={this.state.quote} onSubmit={this.handleSubmit} />
        <div id="responseDiv">
          <ResponseComponent response={this.state.response} />
        </div>
      </div>
    );
  };
};

export default App;