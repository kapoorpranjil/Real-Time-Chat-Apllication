const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

io.on("connection",(socket)=>{
    console.log("Client Connected",socket.id)
    socket.on("disconnect",()=>{
        console.log("Client Disconnected",socket.id)
    })
    socket.on("clientevent",(payload)=>{
        console.log("cLIENT PAyloaD",payload)


    io.emit("serverevent",payload)

    })
})





app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})




let port = 7000

server.listen(port,()=>{
    console.log("server",port)
})