// Make a server using node

// Require http (native to node)
var http = require('http');

// Port number can be anything
var PORT = 7000;
var PORT2 = 7500;

var complimentArray = ['You\'re great', 'You look great', 'You smell great', 'You\'re overall pretty great'];
var insultArray = ['You suck', 'You\'re Ugly', 'Failure', 'Die a slow death'];

// Handle the request with request and response arguments
function handleRequest(request, response) {
    response.end(complimentArray[Math.floor(Math.random() * 4)]);
};

function handleRequest2(request, response) {
    response.end(insultArray[Math.floor(Math.random() * 4)]);
};

// Create the server
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Confirm that the server is listening in the console
server.listen(PORT, function() {
    console.log('You look great today');
});

server2.listen(PORT2, function() {
    console.log('You\'re ugly af');
});
