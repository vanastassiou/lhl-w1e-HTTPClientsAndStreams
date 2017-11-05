var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var responseHandler = function(response) {
  console.log('In response handler callback!');
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, responseHandler).end();
/* Cannot actually figure out how the parameter in
the anonymous function actually handles the incoming data.
The node.js https.request documentation doesn't explain it.
*/

console.log("I've made the request!");
