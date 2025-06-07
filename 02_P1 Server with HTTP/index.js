
const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    // console.log(req) 
    // console.log(req.headers)
    const log = `${Date.now()}: ${req.url} New Request received\n` 
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("Home")
            case '/about':
                res.end("About")
            default:
                res.end("404: Not Found")
        }
    })
    // console.log("Request received")
});



myServer.listen(3000, () => {
    console.log("Server started")
})