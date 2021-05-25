$(document).ready(function () {

  // get a quote from the server when the page loads and add it to the dom
  getQuote();

  // when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
    // $('input').val("");
    // $('#response').text('Thank you for submitting your quote');

  });





  function getQuote() {

    //YOUR CODE HERE, Add a GET request
    // URL, sucess callback function
    $.get('http://localhost:3000/quote', function (data) {
      // declare selector for jquery
      console.log(data);
      // quote gets added to #quote element value
      $('#quote').text(data);
    })
  }

  function addQuote(quote) {
    // AJAX post request
    //YOUR CODE HERE, Add a POST request

    //(url, [data], callback)
    $.post('http://localhost:3000/quote', quote, function (data) {
      // add to response paragraph
      // CALLBACK ISN'T FIRING OFF
    });
    $('#response').text('Thank you for submitting your quote!');
    $("input:text").val("");
  };
});


    // })


    // original ajaxx\
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://127.0.0.1:3000/quote',
    //   crossDomain: true,
    //   data: JSON.stringify(quote),
    //   contentType: 'application/json',
    //   success: (result) => console.log(success),
    //   error: (error) => console.log(error),
    // })



    /// FROM HELPDESK
  //   async function postData(url = '', data = {}) {
  //     // Default options are marked with *
  //     const response = await fetch(url, {
  //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //       mode: 'no-cors', // no-cors, *cors, same-origin
  //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: 'omit', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json'
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       redirect: 'follow', // manual, *follow, error
  //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //       body: JSON.stringify(data) // body data type must match "Content-Type" header
  //     });

  //     return response; // parses JSON response into native JavaScript objects
  //   }

  //   postData('http://127.0.0.1:3000/quote', quote)
  //     .then(data => {
  //       console.log(data); // JSON data parsed by `

  //   // $("#quote").text(data);
  // })