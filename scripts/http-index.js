const http = require('http');
const fs = require('fs');

const port = 8080;
const hostname = '192.168.3.44';

var index;
fs.readFile('./home.html', 'utf8', function (error, html) {
    console.log('reading ./home.html');
    if (error) {
        console.log('Whoops! File not found!');
        console.log('404 error');
    } else {
        index = html;
        console.log(html);
    }
});

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(index);
    response.end();
};

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`Running web server at http://${hostname}:${port}`);
});