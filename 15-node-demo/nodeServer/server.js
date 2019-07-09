var http = require('http');

var server = http.createServer(function(req,res) {
    console.log('request received')
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Coding</title>
            </head>
            <body>
               <h1> Hello </h1>
               <img src='coding.png'></img>
            </body>
        </html>
    `)
})

server.listen(3000);
console.log('Server running on port 3000')