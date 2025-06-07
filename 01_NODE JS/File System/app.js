
const fs = require('fs')

fs.readFile('calc.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err)
        return
    }
    
    console.log('File content:', data)
})


fs.writeFile('output.txt', 'console.log("Hello World!")', function(err){
    if (err) {
        console.error('Error writing file:', err)
        return
    }
    console.log('File written successfully')
})

fs.appendFile('output.txt', 'console.log("Okhy")', function(err){
    console.log('File written successfully')
})

fs.unlink('output.txt', function(err){
    console.log('File delete successfully')
})