const express= require('express')
const app =   express()
app.get('/',(req, res)=>{
    res.sendfile("./static/index.html",{
        root:__dirname
    })
})
