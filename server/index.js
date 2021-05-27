// const http = require('http');
// require express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../database/models.js')
const mysql = require('mysql');
const port = 3000;


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());  // we need a string since incoming text is a string
// get static files - does this do anything actually?????
app.use(express.static('client'));

const quotes = [
  '"All happy families are alike; each unhappy family is unhappy in its own way." - Tolstoy',
  '"Words without experience are meaningless." - Nabokov',
  '"Dogs are clever fellows; they know all about politics [...]" - Gogol',
  '"Love, friendship and respect do not unite people as much as a common hatred for something." - Chekhov',
  '"Love, like fire, goes out without fuel." - Lermontov'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// refactor routes using express

app.get('/', function (req, res) {
  res.redirect(301, '/quote');
})
// how to handle multiple endpoints?
app.get('/quote', function (req, res) {
  var data = req.body;
  models.getQuoteFromDb((err, result) => {
  if (err) {
    res.status(400).send('ERROR');
  } else {
    var randomQuote = result[0].quote;
    res.status(200).send(randomQuote);
  }
  });
  // handle request
  // get a random index
  // var randomIndex = getRandomInt(0, quotes.length);
  // //generate a random quote
  // var randomQuote = quotes[randomIndex];
  // // console.log('randomQuote', randomQuote);
  // //handle response
  // send random quote back to client in response.
  // res.status(200).send(randomQuote);  // don't need to stringify here
});

app.post('/quote', function (req, res) {
  // handle request
  //  console.log(req.body); // this is the body of the request it is default an empty
  console.log('data should be here', req.body.quote);
  quotes.push(req.body.quote);
  console.log('quotes array', quotes);

  //hand responses
  res.status(201).send('Quote submitted');
});

// catch any error - reading says that express has built end error handling
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'failure',
    message: 'ERRRRRRRRRRROR'
  });
});

app.listen(port, () => {
  console.log('Express server is running')
});
module.exports = app;



