// const http = require('http');
// require express
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.text());  // we need a string since incoming text is a string
//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "Access-Control-Allow-Credentials": true,
  "access-control-max-age": 1,
  "Content-Type": 'application/json'
};

// TODO: Fill with strings of your favorite quotes :) [x] done
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
// how to handle multiple endpoints?
app.get('/quote', function (req, res) {

  // handle request
  // get a random index
  var randomIndex = getRandomInt(0, quotes.length);
  //generate a random quote
  var randomQuote = quotes[randomIndex];
  //handle response
  // send random quote back to client in response.
  res.status(200).send(JSON.stringify(randomQuote));
});

app.post('/quote', function (req, res) {
  // handle request
  //  console.log(req.body); // this is the body of the request it is default an empty
  quotes.push(req.body);
  console.log(quotes);
  //hand responses
  res.status(201).send('Quote submitted');

});

// catch any error

// const handleRequest = function(req, res) {
//   console.log(`Endpoint: ${req.url} Method: ${req.method}`);


//   // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
//   if (req.url == '/') {
//     console.log('redirecting');
//     res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
//     res.end();
//   }

// TODO: GET ONE
// if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") { // get a quote
//   //YOUR CODE HERE
//   // GOAL: SEND BACK A quote
//   // get a randomIndex
//   var randomIndex = getRandomInt(0, quotes.length);
//   // generate random quote
//   var randomQuote = quotes[randomIndex];
//   // write headers
//   res.writeHead(200, {...headers, "Content-Type": 'application/json'});
//   // end response & send back quote
//   res.end(JSON.stringify(randomQuote));
//   console.log('success')
// }
// TODO: POST/CREATE  // add a quote
// else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
//   //COLLECT THE DATA AND STORE THE QUOTE
//   // Deal with the Request
//   // create a variable to hold the data
//   let bodyData = "";
//   var quote;
//   console.log('We got a post');
//   // listen for an on data event
//   // receive data in chunks (response comes as a readable stream) // chunk is typ Buffer

//   /// not getting into this block
//   req.on('data', (chunk) => {
//     console.log('chunk', chunk);
//     bodyData += chunk.toString();
//   })
//   .on('end', () => {
//     // parse data
//     quote = Buffer.from(bodyData).toString();
//     // console.log('quote', quote);
//     quotes.push(quote);
//   })

//   // deal with the Response
//   res.writeHead(201, headers);
//   // end response
//   console.log(quote);
//   res.end(quote);
// }

// //CATCH ALL ROUTE
//   else {
//     console.log('error block');
//     res.writeHead(404, headers);
//     res.end('Page not found');
//   }
// }

// const server = http.createServer(handleRequest);
// server.listen(port);

// refactor server listening
app.listen(port, () => {
  console.log('Express server is running')
});

// console.log('Server is running in the terminal!');
// console.log(`Listening on http://localhost:${port}`);

module.exports = app;
