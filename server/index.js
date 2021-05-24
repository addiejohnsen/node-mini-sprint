const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 1
};

const port = 3000;

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

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") { // get a quote
    //YOUR CODE HERE
    // GOAL: SEND BACK A quote
    // get a randomIndex
    var randomIndex = getRandomInt(0, quotes.length);
    // generate random quote
    var randomQuote = quote[randomIndex];
    // write headers
    res.writeHead(200, {...headers, "Content-Type": 'application/json'});
    // end response & send back quote
    res.end(JSON.stringify(randomQuote));

  }
  // TODO: POST/CREATE  // add a quote
  else if ((req.url == '/quote/' || req.url == '/quote/') && req.method == "POST") {
    //COLLECT THE DATA AND STORE THE QUOTE
    // Deal with the Request
    // create a variable to hold the data
    let bodyData = '';
    // listen for an on data event
    // receive data in chunks (response comes as a readable stream) // chunk is typ Buffer
    req.on('data', (chunk) => {
      bodyData += chunk.toString()
    });
    req.on('end', () => {
      // parse data
      const quote = JSON.parse(bodyData);
      quote.objectId = quotes.length;
      // save quote to quotes array
      quotes.push(quote);
    })

    // deal with the Response
    res.writeHead(201, {...headers, "Content-Type": 'application/json'});
    // end response
    res.end(JSON.stringify(bodyData));
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404, headers);
    res.end('Page not found');
  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
