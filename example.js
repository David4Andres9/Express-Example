const http= require('http')
const fs= require('fs')  //modulo file sistem 
const server = http.createServer((req,res)=>{
    const read= fs.createReadStream("./static/index.html")
    read.pipe(res)
})
server.listen(8080)
console.log(`Server on port ${8080}`)
