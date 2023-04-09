var http = require('http');
http.createServer(function (req, res) {
    const Http = new XMLHttpRequest();
    const url='https://jsonplaceholder.typicode.com/posts';
    Http.open("GET", url);
    Http.send();
    
    console.log(`Just got a request at ${req.url}!`)
    res.write(req.url);
    res.end();
}).listen(process.env.PORT || 3000);
