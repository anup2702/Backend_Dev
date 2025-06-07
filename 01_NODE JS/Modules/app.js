const http = require('http')
http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write("Welcome")
    res.end()

    // res.end("Welcome")
}).listen(8080)